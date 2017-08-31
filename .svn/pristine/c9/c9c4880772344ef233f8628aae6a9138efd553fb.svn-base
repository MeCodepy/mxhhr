package com.lutao.gzip;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.HttpHeaders;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class GZIPFilter implements Filter {
	private Log log = LogFactory.getLog(this.getClass().getName());
	
	@Override
	public void init(FilterConfig filterConfig) {
		System.out.println("gzip filter inited!");
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		if (req instanceof HttpServletRequest) {
			HttpServletRequest request = (HttpServletRequest) req;

			HttpServletResponse response = (HttpServletResponse) res;
			String ae = request.getHeader(HttpHeaders.ACCEPT_ENCODING);
			if (ae != null && ae.indexOf("gzip") >= 0) {
				GZIPResponseWrapper wrappedResponse = new GZIPResponseWrapper(response);
				chain.doFilter(req, wrappedResponse);
				wrappedResponse.finishResponse();
				System.out.println("gzip doFilter");
				return;
			}
			chain.doFilter(req, res);
		}
	}

	@Override
	public void destroy() {
		System.out.println("gzip filter destroyed!");
	}
}