package com.lutao.america.exception;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import com.lutao.common.utils.StringUtil;

public class CustomExceptionResolver implements HandlerExceptionResolver{

	@Override
	public ModelAndView resolveException(HttpServletRequest req, HttpServletResponse resp, Object handler, Exception ex) {
		// TODO Auto-generated method stub
		ex.printStackTrace();
		CustomException cusEx = null;
		if(ex instanceof CustomException){
			cusEx = (CustomException) ex;
		}else{
			cusEx = new CustomException("系统未知错误！");
		}
		ModelAndView view = new ModelAndView();
		view.getModel().put("show", true);
		//view.getModel().put("msg", StringUtil.toBase64(cusEx.getMessage(), "UTF-8"));
		view.getModel().put("msg", cusEx.getMessage());
		view.setViewName("/error");
		return view;
	}
}