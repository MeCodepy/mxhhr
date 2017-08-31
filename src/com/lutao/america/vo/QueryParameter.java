package com.lutao.america.vo;

public class QueryParameter {
	public String trip_type;//单程往返
	public String org_city;//出发成市
	public String dst_city;//到达成市
	public String org_date;//出发日期
	public String dst_date;//到达日期
	public String inf;//儿童数
	public String seat;//舱位
	public boolean zhifei;//直飞
	public boolean zhongzhuan;//中转
	public String getTrip_type() {
		return trip_type;
	}
	public void setTrip_type(String trip_type) {
		this.trip_type = trip_type;
	}
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
	public String getOrg_date() {
		return org_date;
	}
	public void setOrg_date(String org_date) {
		this.org_date = org_date;
	}
	public String getDst_date() {
		return dst_date;
	}
	public void setDst_date(String dst_date) {
		this.dst_date = dst_date;
	}
	public String getInf() {
		return inf;
	}
	public void setInf(String inf) {
		this.inf = inf;
	}
	public String getSeat() {
		return seat;
	}
	public void setSeat(String seat) {
		this.seat = seat;
	}
	public boolean isZhifei() {
		return zhifei;
	}
	public void setZhifei(boolean zhifei) {
		this.zhifei = zhifei;
	}
	public boolean isZhongzhuan() {
		return zhongzhuan;
	}
	public void setZhongzhuan(boolean zhongzhuan) {
		this.zhongzhuan = zhongzhuan;
	}
	
	
	
	
}
