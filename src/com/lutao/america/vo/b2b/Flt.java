package com.lutao.america.vo.b2b;

import java.util.Date;

public class Flt {
	private String FromCode;

	private String ToCode;

	private Date FltTime;

	private Date ArrTime;

	private String FltNo;

	private String MainNo;

	private String Seat;

	private int Qty;

	private int Seq;

	private String SeatType;

	private String Plane;

	private String FromHall;

	private String ToHall;

	private String Seller;

	private int LastMin;

	private boolean IsMainLeg;

	private String FareType;

	private String SeatStatus;

	private String StopCity;

	private int StopQty;

	public void setFromCode(String FromCode){
	this.FromCode = FromCode;
	}
	public String getFromCode(){
	return this.FromCode;
	}
	public void setToCode(String ToCode){
	this.ToCode = ToCode;
	}
	public String getToCode(){
	return this.ToCode;
	}
	public void setFltTime(Date FltTime){
	this.FltTime = FltTime;
	}
	public Date getFltTime(){
	return this.FltTime;
	}
	public void setArrTime(Date ArrTime){
	this.ArrTime = ArrTime;
	}
	public Date getArrTime(){
	return this.ArrTime;
	}
	public void setFltNo(String FltNo){
	this.FltNo = FltNo;
	}
	public String getFltNo(){
	return this.FltNo;
	}
	public void setMainNo(String MainNo){
	this.MainNo = MainNo;
	}
	public String getMainNo(){
	return this.MainNo;
	}
	public void setSeat(String Seat){
	this.Seat = Seat;
	}
	public String getSeat(){
	return this.Seat;
	}
	public void setQty(int Qty){
	this.Qty = Qty;
	}
	public int getQty(){
	return this.Qty;
	}
	public void setSeq(int Seq){
	this.Seq = Seq;
	}
	public int getSeq(){
	return this.Seq;
	}
	public void setSeatType(String SeatType){
	this.SeatType = SeatType;
	}
	public String getSeatType(){
	return this.SeatType;
	}
	public void setPlane(String Plane){
	this.Plane = Plane;
	}
	public String getPlane(){
	return this.Plane;
	}
	public void setFromHall(String FromHall){
	this.FromHall = FromHall;
	}
	public String getFromHall(){
	return this.FromHall;
	}
	public void setToHall(String ToHall){
	this.ToHall = ToHall;
	}
	public String getToHall(){
	return this.ToHall;
	}
	public void setSeller(String Seller){
	this.Seller = Seller;
	}
	public String getSeller(){
	return this.Seller;
	}
	public void setLastMin(int LastMin){
	this.LastMin = LastMin;
	}
	public int getLastMin(){
	return this.LastMin;
	}
	public void setIsMainLeg(boolean IsMainLeg){
	this.IsMainLeg = IsMainLeg;
	}
	public boolean getIsMainLeg(){
	return this.IsMainLeg;
	}
	public void setFareType(String FareType){
	this.FareType = FareType;
	}
	public String getFareType(){
	return this.FareType;
	}
	public void setSeatStatus(String SeatStatus){
	this.SeatStatus = SeatStatus;
	}
	public String getSeatStatus(){
	return this.SeatStatus;
	}
	public void setStopCity(String StopCity){
	this.StopCity = StopCity;
	}
	public String getStopCity(){
	return this.StopCity;
	}
	public void setStopQty(int StopQty){
	this.StopQty = StopQty;
	}
	public int getStopQty(){
	return this.StopQty;
	}
}
