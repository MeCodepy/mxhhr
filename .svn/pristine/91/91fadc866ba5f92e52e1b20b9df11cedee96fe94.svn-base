package com.lutao.america.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.ContactMapper;
import com.lutao.america.model.Contact;
import com.lutao.america.service.ContactService;
@Service
@Transactional
public class ContactServiceImpl implements ContactService {
	@Resource
	public ContactMapper mapper;
	@Override
	public int save(Contact record) {
		return mapper.insertSelective(record);
	}
	@Override
	public boolean findByUsername(String username) {
		// TODO Auto-generated method stub
		return mapper.findByUsername(username)==null?true:false;
	}
	@Override
	public int update(Contact record) {
		// TODO Auto-generated method stub
		return mapper.updateByPrimaryKeySelective(record);
	}

}
