package com.lutao.america.model;

import java.util.Date;

public class FlightQueryRequest {
	public String getOrg_city() {
		return org_city;
	}
	public void setOrg_city(String org_city) {
		this.org_city = org_city;
	}
	public String getDst_city() {
		return dst_city;
	}
	public void setDst_city(String dst_city) {
		this.dst_city = dst_city;
	}
	public String getTrip_type() {
		return trip_type;
	}
	public void setTrip_type(String trip_type) {
		this.trip_type = trip_type;
	}
	public Date getOrg_date() {
		return org_date;
	}
	public void setOrg_date(Date org_date) {
		this.org_date = org_date;
	}
	public Date getDst_date() {
		return dst_date;
	}
	public void setDst_date(Date dst_date) {
		this.dst_date = dst_date;
	}
	public String getSeat() {
		return seat;
	}
	public void setSeat(String seat) {
		this.seat = seat;
	}
	public int getAdt() {
		return adt;
	}
	public void setAdt(int adt) {
		this.adt = adt;
	}
	public int getChd() {
		return chd;
	}
	public void setChd(int chd) {
		this.chd = chd;
	}
	public int getInf() {
		return inf;
	}
	public void setInf(int inf) {
		this.inf = inf;
	}
	private String org_city="";
	private String dst_city="";
	private String trip_type="S";
	private Date org_date;
	private Date dst_date;
	private String seat;
	private int adt=0;
	private int chd=0;
	private int inf=0;
}
