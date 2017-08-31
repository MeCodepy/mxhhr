package com.lutao.common.sms;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.URI;
import org.apache.commons.httpclient.URIException;
import org.apache.commons.httpclient.methods.GetMethod;

import com.lutao.common.utils.ComProp;


/**
 * 创蓝短信接口
 */
public class ChuanglanSmsUtil {
	@SuppressWarnings("serial")
	public static final Map<String, String> STATUS_MAP = new HashMap<String, String>() {{
		put("0", "提交成功");
		put("101", "无此用户");
		put("102", "密码错");
		put("103", "提交过快（提交速度超过流速限制）");
		put("104", "系统忙（因平台侧原因，暂时无法处理提交的短信）");
		put("105", "敏感短信（短信内容包含敏感词）");
		put("106", "消息长度错（>536或<=0）");
		put("107", "包含错误的手机号码");
		put("108", "手机号码个数错（群发>50000或<=0;单发>200或<=0）");
		put("109", "无发送额度（该用户可用短信数已使用完）");
		put("110", "不在发送时间内");
		put("111", "超出该账户当月发送额度限制");
		put("112", "无此产品，用户没有订购该产品");
		put("113", "extno格式错（非数字或者长度不对）");
		put("115", "自动审核驳回");
		put("116", "签名不合法，未带签名（用户必须带签名的前提下）");
		put("117", "IP地址认证错,请求调用的IP地址不是系统登记的IP地址");
		put("118", "用户没有相应的发送权限");
		put("119", "用户已过期");
		put("120", "短信内容不在白名单中");
	}};
	
	
	/**
	 * 创蓝接口发送短信
	 * @param mobile 手机号码，多个号码使用","分割
	 * @param msg 短信内容
	 * @param isMarket true:使用营销接口,发营销时短信前面请加上尊称,短信末尾程序会自动加上"[退订回复TD]"; false:使用行业接口. 
	 * @return
	 * @throws Exception
	 */
	public static String send(String mobile, String msg, Boolean isMarket){
		String res="";
		HttpClient client = new HttpClient();
		GetMethod method = new GetMethod();
		try {
			URI base = new URI(ComProp.SMS_253_URL, false);
			method.setURI(new URI(base, "HttpBatchSendSM", false)); //统一用HttpBatchSendSM方式发送, 不要用HttpSend
			method.setQueryString(new NameValuePair[] { 
					new NameValuePair("account", isMarket ? ComProp.SMS_253_MARKET_ACC : ComProp.SMS_253_ACC),
					new NameValuePair("pswd", isMarket ? ComProp.SMS_253_MARKEY_PWD : ComProp.SMS_253_PWD), 
					new NameValuePair("mobile", mobile),
					new NameValuePair("msg", isMarket ? msg + "[退订回复TD]" : msg),
					new NameValuePair("needstatus", "true"), //是否需要状态报告，需要true，不需要false
					new NameValuePair("product", null), 
					new NameValuePair("extno", null), 
				});
			int result = client.executeMethod(method);
			if (result == HttpStatus.SC_OK) {
				InputStream in = method.getResponseBodyAsStream();
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				byte[] buffer = new byte[1024];
				int len = 0;
				while ((len = in.read(buffer)) != -1) {
					baos.write(buffer, 0, len);
				}
				res = URLDecoder.decode(baos.toString(), "UTF-8");
			} else {
				System.out.println(String.format("Sms Send Error: %s:%s", method.getStatusCode(), method.getStatusText()));
			}
		}catch(URIException e){
			e.printStackTrace();
		}catch(HttpException e){
			e.printStackTrace();
		}catch(IOException e){
			e.printStackTrace();
		} finally {
			method.releaseConnection();
		}
		String code="";
		Pattern p = Pattern.compile(",(\\d+)");
		Matcher m = p.matcher(res);
		while(m.find()){
			code=m.group(1);
		}
		return code;
	}
}
