package com.lutao.america.service;

import com.lutao.america.model.PayInfo;

public interface PayInfoService {
	int updateByPrimaryKey(PayInfo record);
	PayInfo selectByOrderNo(String orderNo); 
}
