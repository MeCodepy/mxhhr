package com.lutao.common.payment.wx.util;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.core.MediaType;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicHeader;
import org.apache.http.params.CoreConnectionPNames;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;


public class WXClient {
	private static final Logger logger = Logger.getLogger(WXClient.class);
	
	
	
	public static String request(String req, String url) {
		ClientConfig cc = new DefaultClientConfig();
		cc.getProperties().put(ClientConfig.PROPERTY_CONNECT_TIMEOUT, 20 * 1000);
		Client client = Client.create(cc);
		WebResource resource = client.resource(url);
		logger.info("请求:" + req);
		long sTime = System.currentTimeMillis();
		ClientResponse response = resource.type(MediaType.TEXT_XML).accept(MediaType.TEXT_XML).post(ClientResponse.class, req);
	
		long eTime = System.currentTimeMillis();
		logger.info("结果时间:" + (eTime - sTime));
		String result = response.getEntity(String.class);
		logger.info("结果:" + result);
		return result;
	}
	
	public static String sendRequest(String xml,String url) {
        int timeout=5000;                                     //超时时间
        long responseLength = 0;                         //响应长度
        String responseContent = null;                 //响应内容
        String strResult = "";
        HttpClient httpClient = new DefaultHttpClient();
       // wrapClient(httpClient);
        try {
            HttpParams httpParams = httpClient.getParams();
            httpParams.setIntParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, timeout);
            httpParams.setIntParameter(CoreConnectionPNames.SO_TIMEOUT, timeout);
            HttpPost httpPost = new HttpPost(url);                        //创建HttpPost
            StringEntity se = new StringEntity(xml, "UTF-8");
            se.setContentType(new BasicHeader(HTTP.CONTENT_TYPE, "text/xml"));
            se.setContentEncoding("UTF-8");
            httpPost.setEntity(se);
            HttpResponse response = httpClient.execute(httpPost); //执行POST请求

            // 若状态码为200 ok
            if (response.getStatusLine().getStatusCode() == 200) {
                // 取出回应字串
                strResult = EntityUtils.toString(response.getEntity());
            }
            System.out.println("请求地址: " + httpPost.getURI());
            System.out.println("响应状态: " + response.getStatusLine());
            System.out.println("响应长度: " + responseLength);
            System.out.println("响应内容: " + responseContent);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (httpClient != null)
                httpClient.getConnectionManager().shutdown();//关闭连接,释放资源
        }
        return strResult;
    }
	
	public static Map<String, Object> objectToMap(Object obj) throws IntrospectionException, IllegalArgumentException, IllegalAccessException, InvocationTargetException {
		Map<String, Object> map = new HashMap<String, Object>();
		BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());
		PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
		for (PropertyDescriptor property : propertyDescriptors) {
			String key = property.getName();
			if (key.compareToIgnoreCase("class") == 0) {
				continue;
			}
			Method getter = property.getReadMethod();
			Object value = getter != null ? getter.invoke(obj) : null;
			if (null != value) {
				map.put(key, value.toString());
			}
		}

		return map;
	}
}
