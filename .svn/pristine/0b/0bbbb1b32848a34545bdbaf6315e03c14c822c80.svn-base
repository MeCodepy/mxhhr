package com.lutao.america.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.RemitMapper;
import com.lutao.america.model.Remit;
import com.lutao.america.service.RemitService;
@Service
@Transactional
public class RemitServiceImp implements RemitService{
	
	@Resource
	private RemitMapper remitMapper;
	@Override
	public int insert(Remit record) {
		
		int i=remitMapper.insert(record);
		return i;
	}

}
