package com.lutao.america.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.PayInfoMapper;
import com.lutao.america.model.PayInfo;
import com.lutao.america.service.PayInfoService;

@Service
@Transactional
public class PayInfoServiceImp implements PayInfoService{
	@Resource
	PayInfoMapper mapper;
	@Override
	public int updateByPrimaryKey(PayInfo record) {
		
	return mapper.updateByPrimaryKey(record);
	}
	@Override
	public PayInfo selectByOrderNo(String orderNo) {
		// TODO Auto-generated method stub
		return mapper.selectByOrderNo(orderNo);
	}

}
