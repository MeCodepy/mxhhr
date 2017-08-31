package com.lutao.common.payment.payeco.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyFactory;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.cert.Certificate;
import java.security.cert.CertificateFactory;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.X509EncodedKeySpec;
import java.util.Enumeration;

import javax.crypto.Cipher;





public class RSA {

    public static void main(String[] args) throws IOException {
    }

    public static RSAPublicKey getPublicKey(String keyPath) throws Exception {
        CertificateFactory cf = CertificateFactory.getInstance("X.509");
        FileInputStream in1 = new FileInputStream(keyPath);
        java.security.cert.Certificate cert = cf.generateCertificate(in1);
        in1.close();
        java.security.interfaces.RSAPublicKey pbk = (java.security.interfaces.RSAPublicKey) cert.getPublicKey();
        return pbk;
    }

    /**
     * 
     * @param pubKey base64 
     * @return
     * @throws Exception 
     */
   
    public static RSAPrivateKey getPrivateKey(String keyPath, String passwd) throws Exception {
        try {
            KeyStore ks = KeyStore.getInstance("PKCS12");
            FileInputStream fis = new FileInputStream(keyPath);
            char[] nPassword = null;
            if ((passwd == null) || passwd.trim().equals("")) {
                nPassword = null;
            } else {
                nPassword = passwd.toCharArray();
            }
            ks.load(fis, nPassword);
            fis.close();

            Enumeration enumq = ks.aliases();
            String keyAlias = null;
            if (enumq.hasMoreElements()) // we are readin just one certificate.           
            {
                keyAlias = (String) enumq.nextElement();
            }
 
            PrivateKey prikey = (PrivateKey) ks.getKey(keyAlias, nPassword);

            return (RSAPrivateKey) prikey;
        } catch (Exception e) {
        	e.printStackTrace();
            return null;
        }
    }

   
    /**
     *  ��ǩ��֤���ȡ��Կ��Ϣ
     * @param keyPath
     * @param passwd
     * @return
     * @throws Exception 
     */
    public static RSAPublicKey getPublicKey(String keyPath, String passwd) throws Exception {

        try {
            KeyStore ks = KeyStore.getInstance("PKCS12");
            FileInputStream fis = new FileInputStream(keyPath);
             
            char[] nPassword = null;
            if ((passwd == null) || passwd.trim().equals("")) {
                nPassword = null;
            } else {
                nPassword = passwd.toCharArray();
            }
            ks.load(fis, nPassword);
            fis.close();

                
            Enumeration enumq = ks.aliases();
            String keyAlias = null;
            if (enumq.hasMoreElements())   
            {
                keyAlias = (String) enumq.nextElement();
            }
 
            Certificate cert = ks.getCertificate(keyAlias);
            PublicKey pubkey = cert.getPublicKey();
            return (RSAPublicKey) pubkey;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    public static byte[] encrypt(byte[] data, String pubKey64) {

        try {
        	 byte[] key = Toolkit.base64Decode(pubKey64);
             KeyFactory rsaKeyFac = KeyFactory.getInstance("RSA");
             X509EncodedKeySpec keySpec = new X509EncodedKeySpec(key);
             RSAPublicKey pbk = (RSAPublicKey) rsaKeyFac.generatePublic(keySpec);
             
            Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1PADDING");
            cipher.init(Cipher.ENCRYPT_MODE, pbk);

            byte[] encDate = cipher.doFinal(data);
            return encDate;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

   
    public static byte[] sign(byte[] data, String keyPath, String keyPasswd) {
        try {
            RSAPrivateKey pbk = getPrivateKey(keyPath, keyPasswd);

            // ��˽Կ����Ϣ��������ǩ��
            java.security.Signature signet = java.security.Signature.getInstance("MD5withRSA");
            signet.initSign(pbk);
            signet.update(data);
            byte[] signed = signet.sign(); // ����Ϣ������ǩ��           
            return signed;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        
    }
 
    public static byte[] decrypt(byte[] data, String keyPath, String keyPasswd) {
        try {
            RSAPrivateKey pbk = getPrivateKey(keyPath, keyPasswd);

            Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1PADDING");
            cipher.init(Cipher.DECRYPT_MODE, pbk);

            byte[] btSrc = cipher.doFinal(data);
            return btSrc;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

  
  
    
  
}
