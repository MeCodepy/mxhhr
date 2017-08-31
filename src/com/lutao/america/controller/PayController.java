package com.lutao.america.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.POST;

import org.apache.commons.collections.bag.SynchronizedSortedBag;
import org.apache.ibatis.annotations.Param;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.lutao.america.exception.CustomException;
import com.lutao.america.model.PayInfo;
import com.lutao.america.service.PayInfoService;
import com.lutao.america.vo.PayInfoCommonVo;
import com.lutao.common.payment.payeco.model.MerchantMessage;
import com.lutao.common.payment.payeco.util.Toolkit;
import com.lutao.common.payment.wx.pojo.ScanPayReqData;
import com.lutao.common.payment.wx.service.WeiXinService;
import com.lutao.common.payment.wx.vo.WxPayVo;
import com.lutao.common.utils.AmericaUtil;
import com.sun.org.apache.regexp.internal.recompile;
/**
 * @author 陈家亮
 *
 */
@Controller
@RequestMapping("/pay")
public class PayController {
   private static Logger log=Logger.getLogger(PayController.class);
   @Resource
   private WeiXinService weiXinService;
   
   /**
     * 支付接口转接 
	 * @param payPattern
	 * @param payOrderNo
	 * @param payPrice
	 * @param payProductName
	 * @param attr
	 * @return
	 * @throws CustomException
	 */
@RequestMapping("/toPay")
   public String toPay(PayInfoCommonVo vo,RedirectAttributes attr,HttpServletRequest request) throws CustomException{
	if(vo.getPayOrderNo()==null || vo.getPayOrderNo().equals("")){
		vo.setPayOrderNo(System.currentTimeMillis()+"");
	}
	   if(vo.getPayPattern().equals("payeco")){
		   attr.addAttribute("price", vo.getPayPrice());
		   attr.addAttribute("payNo",vo.getPayOrderNo());
		   attr.addAttribute("productName", vo.getPayProductName());
		   return "redirect:/pay/payeco";
	   }
	   if(vo.getPayPattern().equals("alipay")){
		   request.setAttribute("WIDseller_email", "canafangti@163.com");
		   request.setAttribute("WIDout_trade_no", "lt"+System.currentTimeMillis());
		   request.setAttribute("WIDsubject", vo.getPayProductName());
		   request.setAttribute("WIDtotal_fee", vo.getPayPrice());
		   request.setAttribute("WIDbody", vo.getPayProductName());
		   request.setAttribute("WIDshow_url","");
		   request.setAttribute("orderNO",vo.getPayOrderNo());
		 
		   return "/pay/alipayapi";
	   }
	   if(vo.getPayPattern().equals("weixin")){
		   attr.addAttribute("price", vo.getPayPrice());
		   attr.addAttribute("payNo",vo.getPayOrderNo());
		   attr.addAttribute("productName", vo.getPayProductName());
		   return "redirect:/pay/weixinPay";
	   }
	   throw new CustomException("支付出错!请联系客服");
   }
   
   /**
     * 微信支付 
	 * @param request
	 * @param price
	 * @param payNo
	 * @param productName
	 * @return
	 */
@RequestMapping("/weixinPay")
   @ResponseBody
   public ModelAndView getWxPay(HttpServletRequest request,BigDecimal price,String payNo,String productName){
		ModelAndView mv=new ModelAndView();
		WxPayVo vo= null;
		ScanPayReqData payReq=new ScanPayReqData();
		payReq.setTotal_fee(String.valueOf(price.multiply(new BigDecimal(100)).intValue()));
		payReq.setOut_trade_no(String.valueOf(payNo));
		payReq.setSpbill_create_ip("127.0.0.1");
		if(payNo==null || payNo.equals("")){
			payReq.setOut_trade_no(System.currentTimeMillis()+"");
		}
		payReq.setBody(productName);
		if(null != payReq){
			payReq.setNotify_url(AmericaUtil.app_callbackPath+"/payTool/getWeiXinCallbackPoint.action");
			vo = weiXinService.scanPayReq(payReq);
		}
		Object object=vo;
		mv.addObject("object", object);
		mv.setViewName("WeChatpay");
		
		return mv;
	}
	@RequestMapping("/payeco")
	@ResponseBody
	public ModelAndView Payeco(HttpServletRequest req,String price,String payNo,String productName) throws Exception{
		
		ModelAndView  mv=new ModelAndView();
		try{
		String synAddress =  AmericaUtil.app_callbackPath+"/payTool/getPayecoCallback.action";
		String asynAddress = AmericaUtil.app_callbackPath+"/payTool/getPayecoSycnCallback.action";
		String GDYILIAN_CERT_PUB_64="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJ1fKGMV/yOUnY1ysFCk0yPP4bfOolC/nTAyHmoser+1yzeLtyYsfitYonFIsXBKoAYwSAhNE+ZSdXZs4A5zt4EKoU+T3IoByCoKgvpCuOx8rgIAqC3O/95pGb9n6rKHR2sz5EPT0aBUUDAB2FJYjA9Sy+kURxa52EOtRKolSmEwIDAQAB";
		
		String request_text = "";
		String srcXml="";
		String amount = price;
		String curcode = Toolkit.getCurrency("01");
		String desc = productName;
		
		String merchantPwd = "3CC0819E160F4185";
		String acqSsn = new SimpleDateFormat("HHmmss").format(new Date());
		String orderNo= new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		String transDatetime = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		MerchantMessage msg = new MerchantMessage();
		msg.setVersion("2.1.0");
		msg.setProcCode("0200");
		msg.setProcessCode("190011");
		msg.setMerchantNo("502040000143");
		msg.setTerminalNo("02028828");
//		msg.setMerchantOrderNo((remit.getPayNO()!=null && !remit.getPayNO().equals(""))?remit.getPayNO():orderNo);
		msg.setMerchantOrderNo(payNo);
		msg.setAcqSsn(acqSsn);
		msg.setTransDatetime(transDatetime);
		msg.setAmount(amount);
		msg.setCurrency(curcode);
		msg.setDescription(desc);
		msg.setSynAddress(synAddress);
		msg.setAsynAddress(asynAddress);
		msg.setUiLanguage("zh-CN");
		String mac = msg.computeMac(merchantPwd);
		msg.setMac(mac);
	    srcXml = msg.toXml();
	    log.info("易联支付信息"+srcXml);
		String encryptKey = Toolkit.random(24);
		String pubKey =  GDYILIAN_CERT_PUB_64;
		String tmp = Toolkit.signWithMD5(encryptKey, srcXml, pubKey);
		request_text = Toolkit.bytePadLeft(tmp.length()+"", '0', 6) + tmp;
		mv.addObject("payPattern", "payeco");
		mv.addObject("textContent", request_text);
		mv.setViewName("payment");
		}catch(Exception e){
			e.printStackTrace();
			log.error("易联支付签名出错-----");
		}
		return mv;
	}
	
}
