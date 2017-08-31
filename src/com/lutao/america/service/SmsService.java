package com.lutao.america.service;

import java.util.Map;

import com.lutao.america.model.SmsLog;

public interface SmsService {
	int insert(SmsLog log);
	void send(String smsTemplate, SmsLog sms, Map<String,Object> params);
}