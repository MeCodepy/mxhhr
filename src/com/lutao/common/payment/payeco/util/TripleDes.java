package com.lutao.common.payment.payeco.util;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;


public class TripleDes {

    private static final String Algorithm = "DESede"; 
    public static byte[] encrypt(byte[] keybyte, byte[] src) {
        try {
            //������Կ
            SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);
            Cipher c1 = Cipher.getInstance("DESede/ECB/PKCS5Padding");
            c1.init(Cipher.ENCRYPT_MODE, deskey);
            byte[] bts = c1.doFinal(src);
            return bts;
        } catch (java.lang.Exception e3) {
        	e3.printStackTrace();
        }
        return null;
    }
    
    //keybyteΪ������Կ������Ϊ24�ֽ�
    //srcΪ���ܺ�Ļ�����
    public static byte[] decrypt(byte[] keybyte, byte[] src) {
        try {
            //������Կ
            SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);
            //����
            Cipher c1 = Cipher.getInstance("DESede/ECB/PKCS5Padding");
            c1.init(Cipher.DECRYPT_MODE, deskey);
            byte[] bts = c1.doFinal(src);
            return bts;
        } catch (java.lang.Exception e3) {
            e3.printStackTrace();
        }
        return null;
    }

   
}