package com.lutao.america.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lutao.america.model.Contact;
import com.lutao.america.model.Order;
import com.lutao.america.model.PasgInfo;
import com.lutao.america.model.PayInfo;
import com.lutao.america.model.SmsLog;
import com.lutao.america.service.OrderService;
import com.lutao.america.service.PayInfoService;
import com.lutao.america.service.SmsService;

@Controller
@RequestMapping("/sms")
public class SmsSendController {
	private static final long serialVersionUID = 8534553554293682407L;
	private Log log = LogFactory.getLog(this.getClass().getName());
	@Resource
	private PayInfoService payInfoService;
	@Resource
	private OrderService orderService;
	@Autowired
	private SmsService smsService;
	@RequestMapping("/paySend")
	@ResponseBody
	public Map<String,String> paySend(HttpServletRequest req,String orderNo,String price){
		PayInfo payInfo=payInfoService.selectByOrderNo(orderNo);
		if(payInfo.getOrderId()!=null){
			Order order= orderService.selectByPrimaryKey(payInfo.getOrderId());
			Contact contact=order.getContact();
			SmsLog sms =new SmsLog();
			sms.setReceiverName(contact.getContName());
			sms.setReceiverCallNo(contact.getContMobile());
			Map<String,Object>map=new HashMap<String, Object>();
			map.put("orderno",order.getExorderId());
			Set<PasgInfo>pasgInfos=order.getOrderAttr().getPasgInfos();
			Integer tax=0;
			for(PasgInfo pasgInfo:pasgInfos){
				tax+=pasgInfo.getConstructionFee();
			}
			map.put("trip",tax);
			map.put("price",price);
			map.put("payno",orderNo);
			log.info("用户支付成功--发送短信");
			if(payInfo.getSendStatus()!=1){
				smsService.send("payed_america", sms, map);
				payInfo.setSendStatus(1);
				payInfoService.updateByPrimaryKey(payInfo);
			}
			
			
		}
		log.info("支付订单号:"+orderNo);
		Map <String,String> map=new HashMap<String,String>();
		map.put("status", "success");
		return map;
	}
}
