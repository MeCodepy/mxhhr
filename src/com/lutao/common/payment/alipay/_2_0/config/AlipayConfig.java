package com.lutao.common.payment.alipay._2_0.config;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Map;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;

import com.lutao.common.payment.alipay._2_0.sign.RSA;


/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *版本：3.3
 *日期：2012-08-10
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。

 *提示：如何获取安全校验码和合作身份者ID
 *1.用您的签约支付宝账号登录支付宝网站(www.alipay.com)
 *2.点击“商家服务”(https://b.alipay.com/order/myOrder.htm)
 *3.点击“查询合作者身份(PID)”、“查询安全校验码(Key)”

 *安全校验码查看时，输入支付密码后，页面呈灰色的现象，怎么办？
 *解决方法：
 *1、检查浏览器配置，不让浏览器做弹框屏蔽设置
 *2、更换浏览器或电脑，重新登录查询。
 */

public class AlipayConfig {

	// ↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	// 合作身份者ID，以2088开头由16位纯数字组成的字符串
	public final static String partner;
	// 商户的私钥
	public final static String private_key;

	// 支付宝的公钥，无需修改该值
	public final static String ali_public_key= "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnxj/9qwVfgoUh/y2W89L6BkRAFljhNhgPdyPuBV64bfQNN1PjbCzkIM6qRdKBoLPXmKKMiFYnkd6rAoprih3/PrQEB/VsW8OoM8fxn67UDYuyBTqA23MML9q1+ilIZwBC2AQ2UBVOrFXfFl75p6/B5KsiNG9zpgmLCUYuLkxpLQIDAQAB";

	// ↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	// 调试用，创建TXT日志文件夹路径
	public static String log_path = "D:\\";

	// 字符编码格式 目前支持 gbk 或 utf-8
	public static String input_charset = "utf-8";

	// 签名方式 不需修改
	public static String sign_type = "RSA";

	public final static String NOTILFY_URL;
	public final static String SERVICE;
	public final static String SELLER_ID;
	public final static String PAYMENT_TYPE = "1";
	public final static String SHOW_URL;
	public final static String IT_B_PAY;

	static {
		PropertiesConfiguration config = null;
		try {
			config = new PropertiesConfiguration("properties/alipay.properties");
		} catch (ConfigurationException e) {
			e.printStackTrace();
		}
		NOTILFY_URL = config.getString("notify_url", "/payTool/appAlipayCallbackPoint.action");
		partner = config.getString("partner", "2088901070108730");
		private_key = config.getString("private_key");
		//ali_public_key = config.getString("ali_public_key");
		SELLER_ID = config.getString("seller_id", "canafangti@163.com");
		SERVICE = config.getString("service", "mobile.securitypay.pay");

		SHOW_URL = config.getString("show_url", "m.alipay.com");
		IT_B_PAY = config.getString("it_b_pay", "30m");
	}

	public static String createLinkString(Map<String, String> params) {
		StringBuilder orderInfo = new StringBuilder();
		// 签约合作者身份ID
		orderInfo.append("partner=" + "\"" + params.get("partner") + "\"");

		// 签约卖家支付宝账号
		orderInfo.append("&seller_id=" + "\"" + params.get("seller_id") + "\"");

		// 商户网站唯一订单号
		orderInfo.append("&out_trade_no=" + "\"" + params.get("out_trade_no") + "\"");

		// 商品名称
		orderInfo.append("&subject=" + "\"" + params.get("subject") + "\"");

		// 商品详情
		orderInfo.append("&body=" + "\"" + params.get("body") + "\"");

		// 商品金额
		orderInfo.append("&total_fee=" + "\"" + params.get("total_fee") + "\"");

		// 服务器异步通知页面路径
		orderInfo.append("&notify_url=" + "\"" + params.get("notify_url") + "\"");

		// 服务接口名称， 固定值
		orderInfo.append("&service=\"" + params.get("service") + "\"");

		// 支付类型， 固定值
		orderInfo.append("&payment_type=\"" + params.get("payment_type") + "\"");

		// 参数编码， 固定值
		orderInfo.append("&_input_charset=\"" + params.get("_input_charset") + "\"");

		// 设置未付款交易的超时时间
		// 默认30分钟，一旦超时，该笔交易就会自动被关闭。
		// 取值范围：1m～15d。
		// m-分钟，h-小时，d-天，1c-当天（无论交易何时创建，都在0点关闭）。
		// 该参数数值不接受小数点，如1.5h，可转换为90m。
		orderInfo.append("&it_b_pay=\"" + params.get("it_b_pay") + "\"");
		orderInfo.append("&show_url=\"" + params.get("show_url") + "\"");

		String mysign = RSA.sign(orderInfo.toString(), AlipayConfig.private_key, AlipayConfig.input_charset);
		try {
			mysign =URLEncoder.encode(mysign, AlipayConfig.input_charset); //ios APP需要手工转码成url编码
			//System.out.println(mysign);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//System.out.println(orderInfo.toString());
		StringBuffer payInfo = new StringBuffer();
		 payInfo.append( orderInfo + "&sign=\"" + mysign + "\"&" + "sign_type=\"" + sign_type + "\"");
		// System.out.println(mysign);
		return payInfo.toString();
	}

}
