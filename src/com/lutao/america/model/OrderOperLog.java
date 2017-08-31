package com.lutao.america.model;

import java.util.Date;

public class OrderOperLog {
    private Integer logId;

    private Long orderId;

    private String operType;

    private String operInfo;

    private String operSrc;

    private Long operStaff;

    private Date recordDate;

    private String resultCode;

    private String resultInfo;

    private String memo;

    public Integer getLogId() {
        return logId;
    }

    public void setLogId(Integer logId) {
        this.logId = logId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOperType() {
        return operType;
    }

    public void setOperType(String operType) {
        this.operType = operType;
    }

    public String getOperInfo() {
        return operInfo;
    }

    public void setOperInfo(String operInfo) {
        this.operInfo = operInfo;
    }

    public String getOperSrc() {
        return operSrc;
    }

    public void setOperSrc(String operSrc) {
        this.operSrc = operSrc;
    }

    public Long getOperStaff() {
        return operStaff;
    }

    public void setOperStaff(Long operStaff) {
        this.operStaff = operStaff;
    }

    public Date getRecordDate() {
        return recordDate;
    }

    public void setRecordDate(Date recordDate) {
        this.recordDate = recordDate;
    }

    public String getResultCode() {
        return resultCode;
    }

    public void setResultCode(String resultCode) {
        this.resultCode = resultCode;
    }

    public String getResultInfo() {
        return resultInfo;
    }

    public void setResultInfo(String resultInfo) {
        this.resultInfo = resultInfo;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }
}