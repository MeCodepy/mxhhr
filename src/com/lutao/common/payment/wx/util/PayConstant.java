package com.lutao.common.payment.wx.util;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

/***
 * 内部约定支付的常量
 * @author Administrator
 *
 */
public class PayConstant {
	/****内部约定 支付成功****/
	public final static String PAY_SUCCESS="001";
	/****内部约定 支付失败****/
	public final static String PAY_FAILURE="002";
	/****内部约定 待支付****/
	public final static String PAY_NOT="000";
	
	public final static String PAY_POINT ="point";
	public final static String PAY_REDIRECTION="success";
	/*******支付平台类型常量*************/
	/**易宝**/
	public final static String PAY_PLATFORM_YEEPAY ="yeepay";
	/**支付宝**/
	public final static String PAY_PLATFORM_ALIPAY ="alipay";
	/**快钱**/
	public final static String PAY_PLATFORM_KUAIQIAN ="kuaiqian";
	/**网银**/
	public final static String PAY_PLATFORM_CHINABANK ="chinabank";
	/**网银无卡**/
	public final static String PAY_PLATFORM_WEPAYPC ="wepaypc";
	/**财付通**/
	public final static String PAY_PLATFORM_TENPAY ="tenpay";
	/**ICPay**/
	public final static String PAY_PLATFORM_ICPAY ="ICPay";
	/**易联支付**/
	public final static String PAY_PLATFORM_PAYECO ="payeco";
	
	
	/*****对应的业务单类型*******/
	public final static String PAY_BUSINESS_PAYINTENTION ="PAY_INTENTION";
	
	
	/**********易宝查询返回的支付订单的状态**************/
	public  static  Map<String, String> yeePayStatus;
	/**********网银+查询返回的支付订单的状态**************/
	public  static  Map<String, String> wePayPCStatus;
	/**********易联返回的支付订单的状态**************/
	public  static  Map<String, String> payecoStatusMap;
	/*******支付状态***/
	public  static  Map<String, String> payStatusMap;
	/*************支付平台map***********************/
	public  static  Map<String, String> payPlatformMap;
	public  static  Map<String, String> payPlatformMap_CN;
	
	static{
		getYeePayStatus();
		getPayPlatformMap();
		getPayPlatformMap_CN();
		getPayStatusMap();
		getWePayPCStatus();
	}
	private static void getYeePayStatus(){
		yeePayStatus =new HashMap<String, String>();
		yeePayStatus.put("INIT", "000");//未支付
		yeePayStatus.put("CANCELDE", "003");//已取消
		yeePayStatus.put("SUCCESS", "001");//已支付
		
	}
	
	/**交易状态：成功：0 
	 * 退款：3 
	 * 部分退款：4
	 *  处理中：6 
	 *  失败：7
	 */
	private static void  getWePayPCStatus(){
		wePayPCStatus =new HashMap<String, String>();
		wePayPCStatus.put("6", "006");//处理中
		wePayPCStatus.put("7", "002");//失败
		wePayPCStatus.put("0", "001");//已支付
			
		
	}
	private static void getPayPlatformMap(){
		payPlatformMap =new HashMap<String, String>();
		payPlatformMap.put("yeepay", "易宝");
		payPlatformMap.put("alipay", "支付宝");
		payPlatformMap.put("kuaiqian", "快钱");
		payPlatformMap.put("chinabank", "网银在线");
		payPlatformMap.put("tenpay", "财付通");
		payPlatformMap.put("wepaypc", "网银+");
		payPlatformMap.put("ICPay", "ICPay");
		payPlatformMap.put("weixin", "微信");
		payPlatformMap.put("易宝", "yeepay");
		payPlatformMap.put("支付宝", "alipay");
		payPlatformMap.put("快钱", "kuaiqian");
		payPlatformMap.put("网银在线", "chinabank");
		payPlatformMap.put("财付通", "tenpay");
		payPlatformMap.put("网银+", "wepaypc");
		payPlatformMap.put("ICPay", "ICPay");
		payPlatformMap.put("微信", "weixin");
		payPlatformMap.put("易联", "payeco");
		
	}
	private static void getPayPlatformMap_CN(){
		payPlatformMap_CN =new HashMap<String, String>();
		payPlatformMap_CN.put("易宝", "yeepay");
		payPlatformMap_CN.put("支付宝", "alipay");
		payPlatformMap_CN.put("快钱", "kuaiqian");
		payPlatformMap_CN.put("网银在线", "chinabank");
		payPlatformMap_CN.put("财付通", "tenpay");
		payPlatformMap_CN.put("网银+", "wepaypc");
		payPlatformMap_CN.put("ICPay", "ICPay");
		payPlatformMap_CN.put("微信", "weixin");
		payPlatformMap_CN.put("易联", "payeco");
	}
	private static void getPayStatusMap(){
		payStatusMap =new HashMap<String, String>();
		payStatusMap.put("000", "未支付");
		payStatusMap.put("001", "已支付");
		payStatusMap.put("002", "支付失败");
		payStatusMap.put("003", "已退款");
		payStatusMap.put("004", "客服确认");
		
		
	}
	public static void getPayecoStatusMap() {
		 payecoStatusMap.put("01", "未支付");
		 payecoStatusMap.put("02", "已支付");
		 payecoStatusMap.put("03", "已退款");
		 payecoStatusMap.put("04", "已过期");
		 payecoStatusMap.put("05", "已作废");
		 payecoStatusMap.put("06", "支付中");
		 payecoStatusMap.put("07", "退款中");
		 payecoStatusMap.put("08", "已被商户撤销");
		 payecoStatusMap.put("09", "已被持卡人撤销");
		 payecoStatusMap.put("10", "调账-支付成功");
		 payecoStatusMap.put("11", "调账-退款成功");
		 payecoStatusMap.put("12", "已退货");
		 
	}

	/****
	 * 分单位的换成元单位的
	 * @param orderAmount
	 * @return
	 */
	public static String getOrderAmount(String orderAmount){
		String str =null;
		try {
			if(null!=orderAmount&& (!"".equals(orderAmount))){
				BigDecimal bt = new BigDecimal("100");
		        BigDecimal  bo = new BigDecimal(orderAmount);
		        BigDecimal bs = bo.divide(bt,2,BigDecimal.ROUND_HALF_EVEN);
				//BigDecimal big = new BigDecimal(orderAmount)/100;
		        str =bs.toString();
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return str;
	}
}
