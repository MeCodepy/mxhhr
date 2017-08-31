package com.lutao.common.enums;

public enum EPasinfo {
	ADT("0","成人"),
	CHD("1","儿童"),
	INF("2","婴儿");
	private String key;
	private Object value;
	private EPasinfo(String key,String value){
		this.key=key;
		this.value=value;
	}
	
	public String toString(){
		return String.valueOf(this.key);
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
