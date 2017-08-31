package com.lutao.america.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.OrderAttrMapper;
import com.lutao.america.model.OrderAttr;
import com.lutao.america.service.OrderAttrService;
@Service
@Transactional
public class OrderAttrServiceImpl implements OrderAttrService {
	@Resource
    private OrderAttrMapper orderAttrMapper;
	@Override
	public int insert(OrderAttr record) {
		// TODO Auto-generated method stub
		return orderAttrMapper.insert(record);
	}

}
