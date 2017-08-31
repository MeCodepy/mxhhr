package com.lutao.common.utils;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;

public class ComProp {
	public static final String B2B_INTER_SEARCH_URL;
	public static final String B2B_INTER_ORDER_URL;
	
	/** 创蓝短信配置  **/
	public static final String SMS_253_URL;
	public static final String SMS_253_ACC;
	public static final String SMS_253_PWD;
	public static final String SMS_253_MARKET_ACC;
	public static final String SMS_253_MARKEY_PWD;
	
	static {
		PropertiesConfiguration config = null;
			try {
				config = new PropertiesConfiguration("config/commom.properties");
			} catch (ConfigurationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			B2B_INTER_SEARCH_URL=config.getString("b2b_inter_search_url");
			B2B_INTER_ORDER_URL=config.getString("b2b_inter_order_url");
			
			SMS_253_URL = config.getString("sms_253_url");
			SMS_253_ACC = config.getString("sms_253_acc");
			SMS_253_PWD = config.getString("sms_253_pwd");
			SMS_253_MARKET_ACC = config.getString("sms_253_market_acc");
			SMS_253_MARKEY_PWD = config.getString("sms_253_market_pwd");
	}
}