package com.lutao.common.request;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class requestUrl {
	static{
		Map<String, String> config_map = new HashMap<String, String>();
		InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("config/commom.properties");
		Properties p = new Properties();
		try {
			p.load(is);
			for (Map.Entry e : p.entrySet()) {
				config_map.put((String)e.getKey(), (String)e.getValue());
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		app_requestPath = config_map.get("app_requestPath");
	}
		//提交路径
		public static String app_requestPath;
}
