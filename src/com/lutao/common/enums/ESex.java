package com.lutao.common.enums;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape=JsonFormat.Shape.OBJECT)
public enum ESex implements IEnum{
	male(1,"男"),femail(0,"女");
	
	private Object key;
	private Object value;
	
	private ESex(int key, String value){
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
		this.key= key;
	}

	@Override
	public Object getValue() {
		// TODO Auto-generated method stub
		return value;
	}

	@Override
	public void setValue(Object value) {
		// TODO Auto-generated method stub
		this.value = value;
	}
}
