package com.lutao.america.model;

import java.util.Date;

public class SmsLog {
	private Long id;
	//订单来源
	private String source="AMERICA";
	//预计发送时间
	private Date expectedSendTime;
	//发送时间
	private Date sendTime;
	//发送号码
	private String sendCallNo;
	//关联的订单ID
	private Long orderId;
	//接收者名称
	private String receiverName;
	//接收者号码
	private String receiverCallNo;
	//短信内容
	private String message;
	//发送情况说明
	private String sendRemark;
	/**
	 * 发送状态
	 * 0:末发送
	 * 1：已发送
	 * 2：发送失败
	 * 3：发送中
	 * 4：重发
	 * 5：已回复
	 * 6：暂停
	 * 7：已接收报告
	 */
	private int sendStatus;
	//创建人ID
	private Long creatorId;
	//创建时间
	private Date createTime;
	//修改人ID
	private Long modifyId;
	//修改时间
	private Date modifyTime;
	//短信模板
	private Long templet;
	/**
	 * 有效状态 
	 * 0:有效
	 * 1:无效
	 */
	private Integer status;
	//租户ID
	private Long tenId;
	//返回的消息ID
	private String msgId;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public Date getExpectedSendTime() {
		return expectedSendTime;
	}
	public void setExpectedSendTime(Date expectedSendTime) {
		this.expectedSendTime = expectedSendTime;
	}
	public Date getSendTime() {
		return sendTime;
	}
	public void setSendTime(Date sendTime) {
		this.sendTime = sendTime;
	}
	public String getSendCallNo() {
		return sendCallNo;
	}
	public void setSendCallNo(String sendCallNo) {
		this.sendCallNo = sendCallNo;
	}
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public String getReceiverName() {
		return receiverName;
	}
	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}
	public String getReceiverCallNo() {
		return receiverCallNo;
	}
	public void setReceiverCallNo(String receiverCallNo) {
		this.receiverCallNo = receiverCallNo;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getSendRemark() {
		return sendRemark;
	}
	public void setSendRemark(String sendRemark) {
		this.sendRemark = sendRemark;
	}
	public int getSendStatus() {
		return sendStatus;
	}
	public void setSendStatus(int sendStatus) {
		this.sendStatus = sendStatus;
	}
	public Long getCreatorId() {
		return creatorId;
	}
	public void setCreatorId(Long creatorId) {
		this.creatorId = creatorId;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public Long getModifyId() {
		return modifyId;
	}
	public void setModifyId(Long modifyId) {
		this.modifyId = modifyId;
	}
	public Date getModifyTime() {
		return modifyTime;
	}
	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}
	public Long getTemplet() {
		return templet;
	}
	public void setTemplet(Long templet) {
		this.templet = templet;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Long getTenId() {
		return tenId;
	}
	public void setTenId(Long tenId) {
		this.tenId = tenId;
	}
	public String getMsgId() {
		return msgId;
	}
	public void setMsgId(String msgId) {
		this.msgId = msgId;
	}
}