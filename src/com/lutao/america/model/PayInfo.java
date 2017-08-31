package com.lutao.america.model;

import java.math.BigDecimal;
import java.util.Date;

public class PayInfo {
    private Long id;

    private Long orderId;

    private Long paytypeId;

    private String payAccount;

    private BigDecimal payPrice;

    private Short payState;

    private Date payDatetime;

    private String traneNo;

    private String orderno;
    /**
	 * 发送状态
	 * 0:末发送
	 * 1：已发送
	 */
    private int sendStatus; //判断该支付短信是否已发送

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getPaytypeId() {
        return paytypeId;
    }

    public void setPaytypeId(Long paytypeId) {
        this.paytypeId = paytypeId;
    }

    public String getPayAccount() {
        return payAccount;
    }

    public void setPayAccount(String payAccount) {
        this.payAccount = payAccount;
    }

    public BigDecimal getPayPrice() {
        return payPrice;
    }

    public void setPayPrice(BigDecimal payPrice) {
        this.payPrice = payPrice;
    }

    public Short getPayState() {
        return payState;
    }

    public void setPayState(Short payState) {
        this.payState = payState;
    }

    public Date getPayDatetime() {
        return payDatetime;
    }

    public void setPayDatetime(Date payDatetime) {
        this.payDatetime = payDatetime;
    }

    public String getTraneNo() {
        return traneNo;
    }

    public void setTraneNo(String traneNo) {
        this.traneNo = traneNo;
    }

    public String getOrderno() {
        return orderno;
    }

    public void setOrderno(String orderno) {
        this.orderno = orderno;
    }

	public int getSendStatus() {
		return sendStatus;
	}

	public void setSendStatus(int sendStatus) {
		this.sendStatus = sendStatus;
	}
    
}