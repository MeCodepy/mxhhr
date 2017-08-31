package com.lutao.common.payment.wx.util;

import java.io.UnsupportedEncodingException;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;

/**
 * User: rizenguo Date: 2014/10/29 Time: 14:40 这里放置各种配置数据
 */
public class Configure {
	// 这个就是自己要保管好的私有Key了（切记只能放在自己的后台代码里，不能放在任何可能被看到源代码的客户端程序中）
	// 每次自己Post数据给API的时候都要用这个key来对所有字段进行签名，生成的签名会放在Sign这个字段，API收到Post数据的时候也会用同样的签名算法对Post过来的数据进行签名和验证
	// 收到API的返回的时候也要用这个key来对返回的数据算下签名，跟API的Sign数据进行比较，如果值不一致，有可能数据被第三方给篡改

	public final static String KEY;

	// 微信分配的公众号ID（开通公众号之后可以获取到）
	public final static String APP_ID;

	// 微信支付分配的商户号ID（开通公众号的微信支付功能之后可以获取到）
	public final static String MCH_ID;

	// 受理模式下给子商户分配的子商户号
	public final static String SUB_MCH_ID;

	// HTTPS证书的本地路径
	public final static String certLocalPath;

	// HTTPS证书密码，默认密码等于商户号MCHID
	public final static String CERT_PASSWORD;

	// 是否使用异步线程的方式来上报API测速，默认为异步模式
	public final static boolean useThreadToDoReport = true;

	// 机器IP
	public final static String ip = "";

	// 以下是几个API的路径：
	// 1）被扫支付API
	public final static String PAY_API ;
	// 2）被扫支付查询API
	public final static String PAY_QUERY_API;

	static {
		PropertiesConfiguration config = null;
		try {
			config = new PropertiesConfiguration("config/properties/pay.properties");
		} catch (ConfigurationException e) {
			e.printStackTrace();
		}
		certLocalPath = "";
		KEY = config.getString("key");
		APP_ID = config.getString("app_id");
		MCH_ID = config.getString("mch_id");
		SUB_MCH_ID = config.getString("subMchID");
		CERT_PASSWORD = config.getString("certPassword");
		PAY_API = config.getString("pay_url","https://api.mch.weixin.qq.com/pay/unifiedorder");
		PAY_QUERY_API = config.getString("pay_query_url","https://api.mch.weixin.qq.com/pay/orderquery");
	}

	public static String encodingType(String value) {
		String encod = "";
		try {
			if (value.equals(new String(value.getBytes("ISO-8859-1"), "ISO-8859-1"))) {
				encod = "ISO-8859-1";
			} else if (value.equals(new String(value.getBytes("UTF-8"), "UTF-8"))) {
				encod = "UTF-8";
			} else if (value.equals(new String(value.getBytes("GBK"), "GBK"))) {
				encod = "GBK";
			} else if (value.equals(new String(value.getBytes("GB2312"), "GB2312"))) {
				encod = "GB2312";
			} 
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return encod;
	}

}
