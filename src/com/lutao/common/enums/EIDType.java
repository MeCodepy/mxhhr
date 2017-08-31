package com.lutao.common.enums;

public enum EIDType implements IEnum {
	NI("NI","身份证"),
	PP("PP","护照"),
	OT("OT","其他");

	private Object key;
	private Object value;
	private EIDType(String key, String value){
		this.key=key;
		this.value=value;
	}
	
	@Override
	public String toString(){
		return this.key.toString();
	}
	
	@Override
	public Object getKey() {
		// TODO Auto-generated method stub
		return key;
	}

	@Override
	public void setKey(Object key) {
		// TODO Auto-generated method stub
		this.key=key;
	}

	@Override
	public Object getValue() {
		// TODO Auto-generated method stub
		return value;
	}

	@Override
	public void setValue(Object value) {
		// TODO Auto-generated method stub
		this.value=value;
	}

}