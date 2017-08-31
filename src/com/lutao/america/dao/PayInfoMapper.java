package com.lutao.america.dao;

import com.lutao.america.model.PayInfo;

public interface PayInfoMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PayInfo record);

    int insertSelective(PayInfo record);

    PayInfo selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PayInfo record);

    int updateByPrimaryKey(PayInfo record);
    long getMaxId();
    PayInfo selectByOrderNo(String orderNo); 
}