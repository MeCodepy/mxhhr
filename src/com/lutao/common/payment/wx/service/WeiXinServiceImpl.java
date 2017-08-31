package com.lutao.common.payment.wx.service;

import java.net.URLEncoder;
import java.util.Date;

import org.apache.commons.lang.time.FastDateFormat;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.lutao.common.payment.wx.pojo.ScanPayReqData;
import com.lutao.common.payment.wx.pojo.ScanPayResData;
import com.lutao.common.payment.wx.util.Configure;
import com.lutao.common.payment.wx.util.PayConstant;
import com.lutao.common.payment.wx.util.RandomStringGenerator;
import com.lutao.common.payment.wx.util.Signature;
import com.lutao.common.payment.wx.util.Util;
import com.lutao.common.payment.wx.util.WXClient;
import com.lutao.common.payment.wx.vo.WxPayVo;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;
import com.thoughtworks.xstream.io.xml.XmlFriendlyNameCoder;
@Service("weiXinService")
public class WeiXinServiceImpl implements WeiXinService {
	private static final Logger logger = Logger.getLogger(WeiXinServiceImpl.class);

	@Override
	public WxPayVo scanPayReq(ScanPayReqData payReq) {
		WxPayVo vo = new WxPayVo();
		try {
		vo.setTotal_fee(PayConstant.getOrderAmount(payReq.getTotal_fee()));;
		vo.setOut_trade_no(payReq.getOut_trade_no());	
			
		FastDateFormat sdf = FastDateFormat.getInstance("yyyyMMddHHmmss");
		// 微信分配的公众号ID（开通公众号之后可以获取到）
		payReq.setAppid(Configure.APP_ID);// 必填

		// 微信支付分配的商户号ID（开通公众号的微信支付功能之后可以获取到）
		payReq.setMch_id(Configure.MCH_ID);// 必填

		payReq.setDevice_info("WEB");// 终端设备号(门店号或收银设备ID)，注意：PC网页或公众号内支付请传"WEB"

		// 随机字符串，不长于32 位----必填
		payReq.setNonce_str(RandomStringGenerator.getRandomStringByLength(32));

		// 要支付的商品的描述信息，用户会在支付成功页面里看到这个信息----必填
		payReq.setBody("路淘网-微信支付");//
		
		// 支付订单里面可以填的附加数据，API会将提交的这个附加数据原样返回，有助于商户自己可以注明该笔消费的具体内容，方便后续的运营和记录
		payReq.setAttach("");//测试

		// 商户系统内部的订单号,32个字符内可包含字母, 确保在商户系统唯一
		//payReq.setOut_trade_no("201608181503083636");

		// 订单总金额，单位为“分”，只能整数
		//payReq.setTotal_fee(1);

		// 订单生成的机器IP
		//payReq.setSpbill_create_ip("");

		// 订单生成时间， 格式为yyyyMMddHHmmss，如2009年12 月25 日9 点10 分10
		// 秒表示为20091225091010。时区为GMT+8 beijing。该时间取自商户服务器
		payReq.setTime_start(sdf.format(new Date()));

		// 订单失效时间，格式同上
		payReq.setTime_expire("");

		// 商品标记，微信平台配置的商品标记，用于优惠券或者满减使用
		payReq.setGoods_tag("");

		//payReq.setNotify_url("http:lutao.com");// 必填

		payReq.setTrade_type("NATIVE");// 必填
		payReq.setProduct_id("VX"+System.currentTimeMillis());// 必填

		// 根据API给的签名规则进行签名
		String sign = Signature.getSign(WXClient.objectToMap(payReq));
		payReq.setSign(sign);// 把签名数据设置到Sign这个属性中
		XStream xStreamForRequestPostData = new XStream(new DomDriver("UTF-8", new XmlFriendlyNameCoder("-_", "_")));
		xStreamForRequestPostData.processAnnotations(ScanPayReqData.class);
		// 将要提交给API的数据对象转换成XML格式数据Post给API
		String postDataXML = xStreamForRequestPostData.toXML(payReq);
		logger.info(Configure.encodingType(postDataXML));
		String payServiceResponseString = WXClient.request(postDataXML, Configure.PAY_API);
		logger.info(Configure.encodingType(payServiceResponseString));
		logger.info("请求返回结果"+payServiceResponseString);
		ScanPayResData scanPayResData = (ScanPayResData) Util.getObjectFromXML(payServiceResponseString, ScanPayResData.class);
		if (scanPayResData.getReturn_code().equals("FAIL")) {
			vo.setResult_code(scanPayResData.getReturn_code());
			// 注意：一般这里返回FAIL是出现系统级参数错误，请检测Post给API的数据是否规范合法
			logger.info("【下单失败】下单API系统返回失败，请检测Post给API的数据是否规范合法");
		} else {
			logger.info("支付API系统成功返回数据");
			
			vo.setErr_code_des(scanPayResData.getErr_code_des());
			vo.setErr_code(scanPayResData.getErr_code());
			if (!Signature.checkIsSignValidFromResponseString(payServiceResponseString)) {
				logger.info("【下单失败】下单请求API返回的数据签名验证失败，有可能数据被篡改了");
				vo.setResult_code("FAIL");
				vo.setErr_code_des("签名不通过");
			} else if (scanPayResData.getResult_code().equals("SUCCESS")) {
				vo.setResult_code(scanPayResData.getResult_code());
				vo.setCode_url(scanPayResData.getCode_url());
				logger.info("【下单成功】");
			} else {
				vo.setResult_code("FAIL");
				vo.setErr_code_des("下单失败");
				logger.info("【业务失败】");
			}
		}
		} catch (Exception e) {
			vo.setResult_code("FAIL");
			vo.setErr_code_des("下单异常");
			logger.error("【下单异常】",e);
		}
		return vo;
	}

}
