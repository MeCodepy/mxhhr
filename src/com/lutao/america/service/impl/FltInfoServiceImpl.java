package com.lutao.america.service.impl;

import javax.annotation.Resource;

import com.lutao.america.dao.FltInfoMapper;
import com.lutao.america.model.FltInfo;
import com.lutao.america.service.FltInfoService;

public class FltInfoServiceImpl implements  FltInfoService {
	@Resource
	public FltInfoMapper mapper;
	
	public int save(FltInfo record) {
		return mapper.insert(record);
	}
	
}
