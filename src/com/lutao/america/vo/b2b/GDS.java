package com.lutao.america.vo.b2b;

import java.util.Date;
import java.util.List;

public class GDS {
	private String FromCode;

	private String ToCode;

	private Date GoDate;

	private Date BackDate;

	private int Way;

	private int GDSSource;

	private List<FltWay> FltWays;

	private List<FareRule> Rules;

	private List<Bag> Bags;

	private List<Price> Prices;

	private Date CreationDate;

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
	public void setGoDate(Date GoDate){
	this.GoDate = GoDate;
	}
	public Date getGoDate(){
	return this.GoDate;
	}
	public void setBackDate(Date BackDate){
	this.BackDate = BackDate;
	}
	public Date getBackDate(){
	return this.BackDate;
	}
	public void setWay(int Way){
	this.Way = Way;
	}
	public int getWay(){
	return this.Way;
	}
	public void setGDSSource(int GDSSource){
	this.GDSSource = GDSSource;
	}
	public int getGDSSource(){
	return this.GDSSource;
	}
	public void setFltWays(List<FltWay> FltWays){
	this.FltWays = FltWays;
	}
	public List<FltWay> getFltWays(){
	return this.FltWays;
	}
	public void setRules(List<FareRule> Rules){
	this.Rules = Rules;
	}
	public List<FareRule> getRules(){
	return this.Rules;
	}
	public void setBags(List<Bag> Bags){
	this.Bags = Bags;
	}
	public List<Bag> getBags(){
	return this.Bags;
	}
	public void setPrices(List<Price> Prices){
	this.Prices = Prices;
	}
	public List<Price> getPrices(){
	return this.Prices;
	}
	public void setCreationDate(Date CreationDate){
	this.CreationDate = CreationDate;
	}
	public Date getCreationDate(){
	return this.CreationDate;
	}
}
