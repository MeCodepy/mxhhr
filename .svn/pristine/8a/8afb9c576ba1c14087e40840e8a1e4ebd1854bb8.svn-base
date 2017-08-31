package com.lutao.common.utils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import net.iharder.Base64;

public class StringUtil {
	public static String toBase64(String str, String charset) {
		if(IsNullOrEmptory(str)){
			return "";
		}
		try {
			byte[] temp = str.getBytes(charset);
			return Base64.encodeBytes(temp);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

	public static String decodeBase64(String str, String charset) {
		if(IsNullOrEmptory(str)){
			return "";
		}
		byte[] temp;
		try {
			temp = Base64.decode(str);
			return new String(temp, charset);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		return "";
	}
	
	/**
	 * 删除回车换行符
	 * @param str
	 * @return
	 */
	public static String deleteEntersAndNewLines(String str) {
		String dest = "";
		if(null != str) {
			Pattern p = Pattern.compile("\r|\n");
			Matcher m = p.matcher(str);
			dest = m.replaceAll("");
		}
		
		return dest;
	}
	
	/**
	 * 格式化日期(yyyy-MM-dd)
	 * @param date
	 * @return
	 */
	public static String formatDate(Date date) {
		
		String todayStr = "";
		SimpleDateFormat sfd = new SimpleDateFormat("yyyy-MM-dd");
		
		if(null == date) {
			todayStr = sfd.format(new Date());
		} else {
			todayStr = sfd.format(date);
		}
		
		return todayStr;
	}
	/**
	 * 格式化日期(yyyy-MM-dd)
	 * @param date
	 * @return
	 */
	public static Date formatDate(String date) {
		
		Date d = null;
		SimpleDateFormat sfd = new SimpleDateFormat("yyyy-MM-dd");
		try {
			if(null == date) {
				d = new Date();
			} else {
				d = sfd.parse(date);
			}
		} catch (Exception e) {
			d = new Date();
		}
		return d;
	}
	
	/**
	 * 保留两位小数
	 * @return
	 */
	public static float formatFloat(float number) {
	
		BigDecimal bd = new BigDecimal((double)number);
		
		int scale = 2; //设置两位小数
		
		int roundingMode = 4; //表示四舍五入，可以选择其他方式，例如去尾，等等
		
		bd.setScale(scale, roundingMode);
		
		return bd.floatValue();
	}

	/**
	 * 去掉前后空格
	 * @param param
	 * @return
	 */
	public static String trim(String param){
		
		  param=param.replaceAll("(^\\s{1,})|(\\s{1,}$)", "");
		  return param;
    }
	/**
	 * get方式提交的中文转编码
	 * @param value
	 * @return
	 */
	public static String paramCharset(String value){
		try {
			value =  new String(value.getBytes("iso8859-1"),"utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return value;
	}
	/**
	 * 是否为空
	 * @param src
	 * @return
	 */
	public static boolean IsNullOrEmptory(Object src){
		if(null==src || "".equals(src)){return true;}
		String temp = src.toString().replaceAll(" ", "");
		if("".equals(temp)){return true;}
		return false;
	}

	/**
	 * 创建指定数量的随机字符串
	 * 
	 * @param numberFlag
	 *            是否是数字
	 * @param length
	 * @return
	 */

	public static String createRandom(boolean numberFlag, int length) {
		String retStr = "";
		String strTable = numberFlag ? "1234567890" : "1234567890abcdefghijklmnopqrstuvwxyz";
		int len = strTable.length();
		boolean bDone = true;
		do {
			retStr = "";
			int count = 0;
			for (int i = 0; i < length; i++) {
				double dblR = Math.random() * len;
				int intR = (int) Math.floor(dblR);
				char c = strTable.charAt(intR);
				if (('0' <= c) && (c <= '9')) {
					count++;
				}
				retStr += strTable.charAt(intR);
			}
			if (count >= 2) {
				bDone = false;
			}
		} while (bDone);

		return retStr;
	}
	/**
	 * 只能英文数字混合的正则
	 * @return
	 */
	public static boolean numEnBlend(String str){
        final String english="^[a-z;]+$";
        final String num="^[0-9;]+$";
        final String other="^[a-z0-9;]+$";
        Matcher m=Pattern.compile(english, Pattern.CASE_INSENSITIVE).matcher(str);
        if(m.find()){
            return false;
        }else{
            m=Pattern.compile(num, Pattern.CASE_INSENSITIVE).matcher(str);
            if(m.find()){
            	return false;
            }else{
                m=Pattern.compile(other, Pattern.CASE_INSENSITIVE).matcher(str);
                if(m.find()){
                	return true;
                }else{
                	return false;
                }
            }
        }
	}

}
