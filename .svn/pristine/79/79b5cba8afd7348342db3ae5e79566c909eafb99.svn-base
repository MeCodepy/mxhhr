package com.lutao.america.service;



import java.util.Map;

import com.lutao.america.model.Order;

public interface OrderService {
   public Order findById(Map<String,Object>queryParam);
   public String save(Order record) throws Exception;
   long getMaxOrderId();
   int insertSelective(Order record);
   int update(Order record);
   Order selectByPrimaryKey(Long orderId);
}
