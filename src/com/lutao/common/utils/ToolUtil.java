package com.lutao.common.utils;

import java.util.Random;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.codec.digest.DigestUtils;

public class ToolUtil {
	public static String generalRandomString(int len){
		StringBuilder sb=new StringBuilder();
		Random random = new Random();
		int x;
		char y;
		for (int i = 0; i < len; i++) {
			x=random.nextInt(122-96);
			y=(char) (x+96);
			sb.append(y);
		}
		return sb.toString();
	}
	public static String doMd5(String content){
		return DigestUtils.md5Hex(content);
	}

	public static String getIpAddr(HttpServletRequest request) { 
	      String ip = request.getHeader("x-forwarded-for");    
	      if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {    
	          ip = request.getHeader("Proxy-Client-IP");             
	       }       
	      if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {       
	          ip = request.getHeader("WL-Proxy-Client-IP");          
	      }           
	      if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {     
	         ip = request.getRemoteAddr();             
	       }         
	    return ip;        
	 }
}
