package com.lutao.america.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.lutao.america.model.OrderList;
import com.lutao.america.model.OrderListFlt;
@Service("OrderListService")
public interface OrderListService {
	List<OrderList> queryPaging(Map<String,Object>map);
	 List<OrderList> findBymember(String member);
	List<OrderListFlt> searchSegmentById(long id);
	long countByMember(Map<String,Object>map);
}
