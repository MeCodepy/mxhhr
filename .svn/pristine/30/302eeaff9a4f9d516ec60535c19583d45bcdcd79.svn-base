package com.lutao.america.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.CityMapper;
import com.lutao.america.model.City;
import com.lutao.america.service.CityService;

@Service("cityService")
@Transactional()
public class CityServiceImp implements CityService{
	@Resource
	private CityMapper cityMapper;
	
	@Override
	public String findByIataCode(String iataCode) {
		System.out.println(iataCode);
		City city=cityMapper.findByIataCode(iataCode);
		return city.getCnname();
	}

}
