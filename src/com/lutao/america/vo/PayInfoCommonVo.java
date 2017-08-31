package com.lutao.america.vo;
/**
 * 支付信息通用类 需要什么自己加
 * @author 陈家亮
 *
 */
public class PayInfoCommonVo {
	// 支付方式
	private String payPattern;
	//订单号  一般都使用订单支付号
	private String payOrderNo;
	//价格
	private String payPrice;
	//产品名称
	private String payProductName;
	//客户名字
	private String contactName;
	public String getPayPattern() {
		return payPattern;
	}
	public void setPayPattern(String payPattern) {
		this.payPattern = payPattern;
	}
	public String getPayOrderNo() {
		return payOrderNo;
	}
	public void setPayOrderNo(String payOrderNo) {
		this.payOrderNo = payOrderNo;
	}
	public String getPayPrice() {
		return payPrice;
	}
	public void setPayPrice(String payPrice) {
		this.payPrice = payPrice;
	}
	public String getPayProductName() {
		return payProductName;
	}
	public void setPayProductName(String payProductName) {
		this.payProductName = payProductName;
	}
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String contactName) {
		this.contactName = contactName;
	}
	
}
