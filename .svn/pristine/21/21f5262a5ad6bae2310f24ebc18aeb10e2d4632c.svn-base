package com.lutao.america.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.CurrencyMapper;
import com.lutao.america.service.CurrencyService;

@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class CurrencyServiceImpl implements CurrencyService{

	@Resource
	private CurrencyMapper currency;
	
	@Override
	public double query(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return currency.query(map);
	}
}