package com.lutao.common.payment.wx.pojo;

import com.thoughtworks.xstream.annotations.XStreamAlias;


/**
 * User: rizenguo
 * Date: 2014/10/25
 * Time: 13:54
 */
@XStreamAlias("xml")
public class ScanPayQueryReqData {


    //每个字段具体的意思请查看API文档
    private String appid;//公众账号ID
    private String mch_id;//商户号
    private String device_info;//设备号
    
    private String transaction_id;
    private String out_trade_no;
    private String nonce_str;
    private String sign;
    
    private String out_refund_no;//商户退款单号;
    private String refund_id;//微信退款单号
    


    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getMch_id() {
        return mch_id;
    }

    public void setMch_id(String mch_id) {
        this.mch_id = mch_id;
    }

    public String getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(String transaction_id) {
        this.transaction_id = transaction_id;
    }

    public String getOut_trade_no() {
        return out_trade_no;
    }

    public void setOut_trade_no(String out_trade_no) {
        this.out_trade_no = out_trade_no;
    }

    public String getNonce_str() {
        return nonce_str;
    }

    public void setNonce_str(String nonce_str) {
        this.nonce_str = nonce_str;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

	public String getDevice_info() {
		return device_info;
	}

	public void setDevice_info(String device_info) {
		this.device_info = device_info;
	}

	public String getOut_refund_no() {
		return out_refund_no;
	}

	public void setOut_refund_no(String out_refund_no) {
		this.out_refund_no = out_refund_no;
	}

	public String getRefund_id() {
		return refund_id;
	}

	public void setRefund_id(String refund_id) {
		this.refund_id = refund_id;
	}
    
}
