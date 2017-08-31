package com.lutao.america.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.PassengerMapper;
import com.lutao.america.model.Passenger;
import com.lutao.america.service.PassengerService;


@Service
@Transactional
public class PassengerServiceImpl implements PassengerService{
	
	@Resource
	private PassengerMapper mapper;

	@Override
	public List<Passenger> historys(int memberid) {
		// TODO Auto-generated method stub
		return mapper.historys(memberid);
	}

}
