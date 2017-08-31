package com.lutao.common.utils;

import org.apache.commons.configuration.PropertiesConfiguration;
import org.apache.commons.configuration.ConfigurationException;

public class AmericaUtil {
	public  static final String INTER_SEARCH_URL;
	public static String app_requestPath;//调用接口地址
	public static String app_callbackPath;//回调地址
	static {
		PropertiesConfiguration config = null;
			try {
				config = new PropertiesConfiguration("config/commom.properties");
			} catch (ConfigurationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			INTER_SEARCH_URL=config.getString("inter_search_url");
			app_requestPath = config.getString("app_requestPath");
			app_callbackPath=config.getString("app_callbackPath");
	}
}