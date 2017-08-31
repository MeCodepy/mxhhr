package com.lutao.america.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.lutao.common.enums.EIDType;
import com.lutao.common.enums.EPassengerType;
import com.lutao.common.enums.ESex;

public class Passenger {
	private int id=0;
	private EPassengerType ptype = EPassengerType.ADT;
	private String firstname="";
	private String lastname="";
	private EIDType idtype = EIDType.PP;
	private String idno="";
	
	@JsonFormat(pattern="yyyy-MM-dd",timezone="GMT+8")
	private Date idvalid;
	private String idnation="CN";
	
	@JsonFormat(pattern="yyyy-MM-dd",timezone="GMT+8")
	private Date birth;
	private String nation="";
	private ESex sex = ESex.femail;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public EPassengerType getPtype() {
		return ptype;
	}
	public void setPtype(EPassengerType ptype) {
		this.ptype = ptype;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public EIDType getIdtype() {
		return idtype;
	}
	public void setIdtype(EIDType idtype) {
		this.idtype = idtype;
	}
	public String getIdno() {
		return idno;
	}
	public void setIdno(String idno) {
		this.idno = idno;
	}
	public Date getIdvalid() {
		return idvalid;
	}
	public void setIdvalid(Date idvalid) {
		this.idvalid = idvalid;
	}
	public String getIdnation() {
		return idnation;
	}
	public void setIdnation(String idnation) {
		this.idnation = idnation;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getNation() {
		return nation;
	}
	public void setNation(String nation) {
		this.nation = nation;
	}
	public ESex getSex() {
		return sex;
	}
	public void setSex(ESex sex) {
		this.sex = sex;
	}
	
}