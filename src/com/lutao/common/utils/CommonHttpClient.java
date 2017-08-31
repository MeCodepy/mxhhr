package com.lutao.common.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;


import org.apache.commons.httpclient.DefaultHttpMethodRetryHandler;
import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.apache.commons.io.FileUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;



/**
 * 接口调用公共类(去哪儿，酷讯)
 * @author fanky
 * 
 */
@Component
@Scope("prototype")
public class CommonHttpClient implements ICommonHttpClient {
	
	
	public static final String CLIENT_TYPE_KUXUN = "kuxun";
	public static final String CLIENT_TYPE_QUNAR = "qunar";

	Log log = LogFactory.getLog(this.getClass().getName());
	
	

	public String doGet(String url, List<NameValuePair> params)
			throws HttpException, IOException {
		String result = "";
		HttpClient httpClient = new HttpClient();
		GetMethod getMethod = new GetMethod(url);
		getMethod.getParams().setParameter(HttpMethodParams.RETRY_HANDLER,
				new DefaultHttpMethodRetryHandler());

		getMethod.getParams().setParameter(HttpMethodParams.HTTP_CONTENT_CHARSET,"UTF-8");  
		getMethod.addRequestHeader("Content-type" , "text/html; charset=UTF-8"); 
		try {
			int statusCode = httpClient.executeMethod(getMethod);
			if (statusCode != HttpStatus.SC_OK) {
				System.err.println("Method failed: "
						+ getMethod.getStatusLine());
			}
//			result=new String(getMethod.getResponseBodyAsString().getBytes("gb2312"));
			result = getMethod.getResponseBodyAsString();
		} catch (HttpException e) {
			System.out.println("Please check your provided http address!");
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			getMethod.releaseConnection();
			getMethod = null;
		}
		return result;
	}
	
	


	public String doPost(String url,List<NameValuePair> params,String clientType,String source)
			throws HttpException, IOException {
		

		String response = "";

		// （1）构造HttpClient的实例
		HttpClient httpClient = new HttpClient();
//		httpClient.getHttpConnectionManager().getParams().setConnectionTimeout(30000);

//		if(clientType.equals(CommonHttpClient.CLIENT_TYPE_QUNAR)){
			// 设置代理服务器
			// 用户名：afttest密码：afttest 代理IP：210.51.13.210　端口：808
//			ParamQunar paramQunar = constant.getQunarMap().get(source);
//			
//			httpClient.getHostConfiguration().setProxy(paramQunar.proxy_qunar_url, paramQunar.proxy_qunar_port);  
//			httpClient.getParams().setAuthenticationPreemptive(true);  
//			//如果代理需要密码验证，这里设置用户名密码  
//			httpClient.getState().setProxyCredentials(AuthScope.ANY, new UsernamePasswordCredentials(paramQunar.proxy_qunar_user,paramQunar.proxy_qunar_password));  
//		}else if(clientType.equals(CommonHttpClient.CLIENT_TYPE_KUXUN)){
//			ParamKuxun paramKuxun = constant.getKuxunMap().get(source);
//			log.info(paramKuxun);
//			log.info(paramKuxun.proxy_kuxun_url+","+ paramKuxun.proxy_kuxun_port);
//			//酷讯代理
//			httpClient.getHostConfiguration().setProxy(paramKuxun.proxy_kuxun_url, paramKuxun.proxy_kuxun_port);
//		}
		
		
		log.info("url="+url);
		// （2）创建POST方法的实例
		PostMethod postMethod = new PostMethod(url);
		HttpConnectionManagerParams httpParams = new HttpConnectionManagerParams();
		httpParams.setConnectionTimeout(1000*60);
		httpParams.setSoTimeout(1000*60);
		httpClient.getHttpConnectionManager().setParams(httpParams);
		// （3）设置http request头
		List<Header> headers = new ArrayList<Header>();
		// headers.add(new Header("tianjun_key", "tianjun_value"));
//		httpClient.getHostConfiguration().getParams()
//				.setParameter("http.default-headers", headers);

		// 使用系统提供的默认的恢复策略		
		postMethod.getParams().setParameter(HttpMethodParams.RETRY_HANDLER,
				 new DefaultHttpMethodRetryHandler(0, false));
		// 字符集
		postMethod.getParams().setParameter(
				HttpMethodParams.HTTP_CONTENT_CHARSET, "utf-8");

		postMethod.setRequestHeader("Connection", "close"); // or "Keep-Alive"

		NameValuePair[] arr = params.toArray(new NameValuePair[params.size()]);

		for (NameValuePair nvp : arr) {
			log.info(nvp);
		}

		postMethod.setRequestBody(arr);

		try {
			// （4）执行postMethod
			int statusCode = httpClient.executeMethod(postMethod);
			log.info("executeMethod httpClient.getState()="
					+ httpClient.getState());
			if (statusCode != HttpStatus.SC_OK) {
				throw new HttpException(String.valueOf(statusCode));
			}

			// （5）读取response头信息
			// Header headerResponse = postMethod
			// .getResponseHeader("");
			// String headerStr = headerResponse.getValue();
			// （6）读取内容
			InputStream is = postMethod.getResponseBodyAsStream();
			InputStreamReader inReader = new InputStreamReader(is, "UTF-8");
			BufferedReader bufReader = new BufferedReader(inReader);

			String temp = "";
			while ((temp = bufReader.readLine()) != null) {
				response = response + temp;
			}

			// response = postMethod.getResponseBodyAsStream();
			// （7） 处理内容
			// System.out.println(headerStr);
			// System.out.println(new String(responseBody));
		} catch (HttpException e) {
			// 发生致命的异常，可能是协议不对或者返回的内容有问题
			System.out.println("Please check your provided http address!");
			e.printStackTrace();
			throw new IOException("连接错误:" + e.getStackTrace());
		} catch (IOException e) {
			throw new IOException("连接错误:" + e.getStackTrace());
		} catch (Exception e) {
			e.printStackTrace();
			throw new IOException("连接错误:" + e.getStackTrace());
		} finally {
			// 释放连接
			postMethod.releaseConnection();
			httpClient.getHttpConnectionManager().closeIdleConnections(0);
			log.info("after close httpClient.getState()="
					+ httpClient.getState());
		}
		log.info("http client do post response="+response);
		return response;
	}

	public String doPost(String url,NameValuePair[] params)
			throws HttpException, IOException {
		return this.doPost(url, params, 120000);
	}
	
	public String doPost(String url,NameValuePair[] params, int timeout)
			throws HttpException, IOException {
		
		
		String response = "";
		
		// （1）构造HttpClient的实例
		HttpClient httpClient = new HttpClient();		
		httpClient.getHttpConnectionManager().getParams().setConnectionTimeout(timeout);
		
		httpClient.getHttpConnectionManager().getParams().setSoTimeout(timeout);
		
		log.info("url="+url);
		// （2）创建POST方法的实例
		PostMethod postMethod = new PostMethod(url);
		
		// （3）设置http request头
		List<Header> headers = new ArrayList<Header>();
		// headers.add(new Header("tianjun_key", "tianjun_value"));
//		httpClient.getHostConfiguration().getParams()
//				.setParameter("http.default-headers", headers);
		
		// 使用系统提供的默认的恢复策略
		postMethod.getParams().setParameter(HttpMethodParams.RETRY_HANDLER,
				new DefaultHttpMethodRetryHandler(0,false));
		// 字符集
		postMethod.getParams().setParameter(
				HttpMethodParams.HTTP_CONTENT_CHARSET, "utf-8");
		
		postMethod.setRequestHeader("Connection", "close"); // or "Keep-Alive"
		
		
		
		for (NameValuePair nvp : params) {
			log.info(nvp);
		}
		
		postMethod.setRequestBody(params);
		
		try {
			// （4）执行postMethod
			int statusCode = httpClient.executeMethod(postMethod);
			log.info("executeMethod httpClient.getState()="
					+ httpClient.getState());
			if (statusCode != HttpStatus.SC_OK) {
				throw new HttpException(String.valueOf(statusCode));
			}
			
			// （5）读取response头信息
			// Header headerResponse = postMethod
			// .getResponseHeader("");
			// String headerStr = headerResponse.getValue();
			// （6）读取内容
			InputStream is = postMethod.getResponseBodyAsStream();
			InputStreamReader inReader = new InputStreamReader(is, "UTF-8");
			BufferedReader bufReader = new BufferedReader(inReader);
			
			String temp = "";
			while ((temp = bufReader.readLine()) != null) {
				response = response + temp;
			}
			
			// response = postMethod.getResponseBodyAsStream();
			// （7） 处理内容
			// System.out.println(headerStr);
			// System.out.println(new String(responseBody));
		} catch (HttpException e) {
			// 发生致命的异常，可能是协议不对或者返回的内容有问题
			System.out.println("Please check your provided http address!");
			e.printStackTrace();
			throw new IOException("连接错误:" + e.getStackTrace());
		} catch (IOException e) {
			throw new IOException("连接错误:" + e.getStackTrace());
		} catch (Exception e) {
			e.printStackTrace();
			throw new IOException("连接错误:" + e.getStackTrace());
		} finally {
			// 释放连接
			postMethod.releaseConnection();
			httpClient.getHttpConnectionManager().closeIdleConnections(0);
			log.info("after close httpClient.getState()="
					+ httpClient.getState());
		}
		
		return response;
	}
	
	
	public String doPost(String url,String data, int timeout)
			throws HttpException, IOException {
		
		
		String response = "";
		
		HttpConnectionManagerParams params = new HttpConnectionManagerParams();
		params.setConnectionTimeout(timeout);
		params.setSoTimeout(timeout);
		
		// （1）构造HttpClient的实例
		HttpClient httpClient = new HttpClient();	
		
		httpClient.getHttpConnectionManager().setParams(params);
	
		
//		httpClient.getHttpConnectionManager().getParams().setConnectionTimeout(timeout);
		log.info("url="+url);
		// （2）创建POST方法的实例
		PostMethod postMethod = new PostMethod(url);
		
		// （3）设置http request头
		List<Header> headers = new ArrayList<Header>();
		// headers.add(new Header("tianjun_key", "tianjun_value"));
//		httpClient.getHostConfiguration().getParams()
//				.setParameter("http.default-headers", headers);
		
		// 使用系统提供的默认的恢复策略
		postMethod.getParams().setParameter(HttpMethodParams.RETRY_HANDLER,
				new DefaultHttpMethodRetryHandler(0,false));
		// 字符集
		postMethod.getParams().setParameter(
				HttpMethodParams.HTTP_CONTENT_CHARSET, "utf-8");
		
		postMethod.setRequestHeader("Connection", "close"); // or "Keep-Alive"
		
		
		
		
		postMethod.setRequestBody(data);
		
		try {
			// （4）执行postMethod
			int statusCode = httpClient.executeMethod(postMethod);
			log.info("executeMethod httpClient.getState()="
					+ httpClient.getState());
			if (statusCode != HttpStatus.SC_OK) {
				throw new HttpException(String.valueOf(statusCode));
			}
			
			// （5）读取response头信息
			// Header headerResponse = postMethod
			// .getResponseHeader("");
			// String headerStr = headerResponse.getValue();
			// （6）读取内容
			InputStream is = postMethod.getResponseBodyAsStream();
			InputStreamReader inReader = new InputStreamReader(is, "UTF-8");
			BufferedReader bufReader = new BufferedReader(inReader);
			
			String temp = "";
			while ((temp = bufReader.readLine()) != null) {
				response = response + temp;
			}
			
			// response = postMethod.getResponseBodyAsStream();
			// （7） 处理内容
			// System.out.println(headerStr);
			// System.out.println(new String(responseBody));
		} catch (HttpException e) {
			// 发生致命的异常，可能是协议不对或者返回的内容有问题
			System.out.println("Please check your provided http address!");
			e.printStackTrace();
			throw new IOException("连接错误:" + e.getStackTrace());
		} catch (IOException e) {
			throw new IOException("连接错误:" + e.getStackTrace());
		} catch (Exception e) {
			e.printStackTrace();
			throw new IOException("连接错误:" + e.getStackTrace());
		} finally {
			// 释放连接
			postMethod.releaseConnection();
			httpClient.getHttpConnectionManager().closeIdleConnections(0);
			log.info("after close httpClient.getState()="
					+ httpClient.getState());
		}
		
		return response;
	}

}
