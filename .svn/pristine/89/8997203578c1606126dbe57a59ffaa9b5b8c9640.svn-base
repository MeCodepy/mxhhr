package com.lutao.america.dao;

import java.util.List;
import java.util.Map;

import com.lutao.america.model.Order;

public interface OrderMapper {
    int deleteByPrimaryKey(Long orderId);

	int insert(Order record);

	int insertSelective(Order record);

	Order selectByPrimaryKey(Long orderId);

	int updateByPrimaryKeySelective(Order record);

	int updateByPrimaryKeyWithBLOBs(Order record);

	int updateByPrimaryKey(Order record);

    Order findOrderAllDetail(Map<String,Object>queryParam);

	long getMaxOrderId();
}