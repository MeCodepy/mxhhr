package com.lutao.common.utils;

import java.io.IOException;
import java.util.List;

import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.NameValuePair;

public interface ICommonHttpClient {
	/**
	 *  路淘国内航班查询接口
	 * @param url
	 * @param params
	 * @return
	 * @throws HttpException
	 * @throws IOException
	 */
	public String doGet(String url, List<NameValuePair> params) throws HttpException, IOException;
	
	/**
	 *  去哪儿酷讯接口通讯类
	 * @param url 请求地址
	 * @param params 参数
	 * @param clientType 客户端类型(CLIENT_TYPE_KUXUN,CLIENT_TYPE_QUNAR)
	 * @param source 同步源 
	 * OS001	去哪儿网（阿凡提）
	 * OS002	去哪儿网（比比看）
	 * OS003	酷讯
	 * @return
	 * @throws HttpException
	 * @throws IOException
	 */
	public String doPost(String url,List<NameValuePair> params,String clientType,String source) throws HttpException, IOException;
	
	/**
	 *  普通http请求
	 * @param url 请求地址
	 * @param params 参数
	 * @return
	 * @throws HttpException
	 * @throws IOException
	 */
	public String doPost(String url,NameValuePair[] params) throws HttpException, IOException;
	
	/**
	 *  普通http请求
	 * @param url 请求地址
	 * @param params 参数
	 * @param timeout 超时
	 * @return
	 * @throws HttpException
	 * @throws IOException
	 */
	public String doPost(String url,NameValuePair[] params, int timeout) throws HttpException, IOException;
	
	/**
	 * 增加不带参数直接post的方式
	 * @param url
	 * @param data
	 * @param timeout
	 * @return
	 * @throws HttpException
	 * @throws IOException
	 */
	public String doPost(String url,String data, int timeout) throws HttpException, IOException;
}
