package com.lutao.america.dao;

import com.lutao.america.model.OrderOperLog;

public interface OrderOperLogMapper {
    int deleteByPrimaryKey(Integer logId);

    int insert(OrderOperLog record);

    int insertSelective(OrderOperLog record);

    OrderOperLog selectByPrimaryKey(Integer logId);

    int updateByPrimaryKeySelective(OrderOperLog record);

    int updateByPrimaryKey(OrderOperLog record);
}