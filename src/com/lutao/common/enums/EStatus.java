package com.lutao.common.enums;

public enum EStatus{
	PENDING("011","待确认"),PAYMENT("012","待支付");
	private String key;
	private Object value;

	private EStatus(String key, String value){
		this.key=key;
		this.value=value;
	}
	

	public String toString(){
		return this.key.toString();
	}

	public String getKey() {
		// TODO Auto-generated method stub
		return key;
	}


	public void setKey(String key) {
		// TODO Auto-generated method stub
		this.key= key;
	}


	public Object getValue() {
		// TODO Auto-generated method stub
		return value;
	}

	
	public void setValue(Object value) {
		// TODO Auto-generated method stub
		this.value = value;
	}

}
