package com.lutao.america.vo.av;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Av implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String token = "";
	private double price = 0;
	private double fee = 0;
	private String currency="";
	private String seat = "";
	private int seatQty = 0;
	//航程
	private List<Segment> segs;
	//time
	private long time = 0;
	private String sign="";
	public List<Segment> getSegs() {
		return segs;
	}
	public void setSegs(List<Segment> segs) {
		this.segs = segs;
	}
	public void addSegs(Segment seg) {
		if(null == segs) {
			segs = new ArrayList<Segment>();
		}
		segs.add(seg);
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getFee() {
		return fee;
	}
	public void setFee(double fee) {
		this.fee = fee;
	}
	public String getSeat() {
		return seat;
	}
	public void setSeat(String seat) {
		this.seat = seat;
	}
	public int getSeatQty() {
		return seatQty;
	}
	public void setSeatQty(int seatQty) {
		this.seatQty = seatQty;
	}
	public long getTime() {
		return time;
	}
	public void setTime(long time) {
		this.time = time;
	}
	public String getSign() {
		return sign;
	}
	public void setSign(String sign) {
		this.sign = sign;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
}