package com.lutao.xss;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * XSS跨站脚本过滤器
 */
public class XssFilter implements Filter {
	
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("Xss filter inited!");
    }
 
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        //XssSqlWrapper sqlRequest = new XssSqlWrapper((HttpServletRequest) request);
        //chain.doFilter(sqlRequest, response);
        //System.out.println("Xss Sql doFilter");
    	if (request instanceof HttpServletRequest) {
    		chain.doFilter(request, response);
    	}
    }
 
    @Override
    public void destroy() {
        System.out.println("Xss filter destroyed!");
    }
}