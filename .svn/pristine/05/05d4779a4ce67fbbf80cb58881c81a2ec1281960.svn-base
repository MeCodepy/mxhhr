package com.lutao.common.utils;

import org.apache.shiro.crypto.hash.Md5Hash;

public class Cryption {
	public static final String Md5(String source) {
		if (source == null) {
			source = "";
		}
		Md5Hash md5 = new Md5Hash(source);
		return md5.toString();
	}
}