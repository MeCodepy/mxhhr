package com.lutao.america.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.SmsTemplateMapper;
import com.lutao.america.model.SmsTemplate;
import com.lutao.america.service.SmsTemplateService;

@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class SmsTemplateServiceImpl implements SmsTemplateService{
	
	@Resource
	private SmsTemplateMapper stMapper;

	@Override
	public SmsTemplate get(String key) {
		// TODO Auto-generated method stub
		return stMapper.get(key);
	}
}