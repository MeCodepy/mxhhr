package com.lutao.america.model;

import java.math.BigDecimal;
import java.util.List;

public class OrderList {
	public Long orderId;
	//订单号
	public String exorderId;	
	//订单来源（OS012路淘国内，OS013路淘国际）
	public String orderSrc;
	//订单金额
	public BigDecimal totalPrice;
	/**
	 * 1:配送
	 * 2：不配送
	 */
	public String isdelivery;
	public String page;//页数
	//创建时间
	public String createDate;
	/**
	 * 已支付待出票	000
	 * 出票中		001
	 * 出票完成	002
	 * 收款已结算	003
	 * 付款已结算	004
	 * 待处理		005
	 * 客户已退款	006
	 * 代理商已退款	007
	 * 退票结算完成	008
	 * 订单取消	009
	 * 待座位确认	010
	 * 待价格确认	011
	 * 待支付确认	012
	 * 订单待支付	013
	 * 意向单跟踪	014
	 */
	public String stat;
	//航段信息
	public List<OrderListFlt>orderListFlt;
	
	public String statCode;
	/** 起飞时间，格式：YYYY-MM-DD */
	public String depDate = "";
	/** 出发城市 */
	public String depCityName = "";
	/** 到达日期时间，格式：YYYY-MM-DD */
	public String arrDate = "";
	/** 到达城市 */
	public String arrCityName = "";

	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public String getExorderId() {
		return exorderId;
	}
	public void setExorderId(String exorderId) {
		this.exorderId = exorderId;
	}
	public String getOrderSrc() {
		return orderSrc;
	}
	public void setOrderSrc(String orderSrc) {
		this.orderSrc = orderSrc;
	}
	public BigDecimal getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}
	public String getIsdelivery() {
		return isdelivery;
	}
	public void setIsdelivery(String isdelivery) {
		this.isdelivery = isdelivery;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getStat() {
		return stat;
	}
	public void setStat(String stat) {
		this.stat = stat;
	}
	public String getStatCode() {
		return statCode;
	}
	public void setStatCode(String statCode) {
		this.statCode = statCode;
	}
	public String getDepDate() {
		return depDate;
	}
	public void setDepDate(String depDate) {
		this.depDate = depDate;
	}
	public String getDepCityName() {
		return depCityName;
	}
	public void setDepCityName(String depCityName) {
		this.depCityName = depCityName;
	}
	public String getArrDate() {
		return arrDate;
	}
	public void setArrDate(String arrDate) {
		this.arrDate = arrDate;
	}
	public String getArrCityName() {
		return arrCityName;
	}
	public void setArrCityName(String arrCityName) {
		this.arrCityName = arrCityName;
	}
	public List<OrderListFlt> getOrderListFlt() {
		return orderListFlt;
	}
	public void setOrderListFlt(List<OrderListFlt> orderListFlt) {
		this.orderListFlt = orderListFlt;
	}
	public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	
	

}
