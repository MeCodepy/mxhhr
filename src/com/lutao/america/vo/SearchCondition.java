package com.lutao.america.vo;

public class SearchCondition {
	public String adtCount;
	public String channel;
	public String depCode;
	public String depDate;
	public String desCode;
	public String gdsSource;
	public String maxSolutions;
	public String sessionID;
	public String tripType;
	public String chdCount;
	public Integer infCount;
	public String gdsIpcc;
	public String gdsPwd;
	public String returnDate;
	
	
	
	
	
	public enum DataGdsSource {
		Sabre("1"), Amadeus("2"), Travelport("3");
		
		public String value;
		DataGdsSource(String value) {
			this.value = value;
		}
	}
	
	
	
	public String getAdtCount() {
		return adtCount;
	}
	public void setAdtCount(String adtCount) {
		this.adtCount = adtCount;
	}
	public String getChannel() {
		return channel;
	}
	public void setChannel(String channel) {
		this.channel = channel;
	}
	public String getDepCode() {
		return depCode;
	}
	public void setDepCode(String depCode) {
		this.depCode = depCode;
	}
	public String getDepDate() {
		return depDate;
	}
	public void setDepDate(String depDate) {
		this.depDate = depDate;
	}
	public String getDesCode() {
		return desCode;
	}
	public void setDesCode(String desCode) {
		this.desCode = desCode;
	}
	public String getGdsSource() {
		return gdsSource;
	}
	public void setGdsSource(String gdsSource) {
		this.gdsSource = gdsSource;
	}
	public String getMaxSolutions() {
		return maxSolutions;
	}
	public void setMaxSolutions(String maxSolutions) {
		this.maxSolutions = maxSolutions;
	}
	public String getSessionID() {
		return sessionID;
	}
	public void setSessionID(String sessionID) {
		this.sessionID = sessionID;
	}
	public String getTripType() {
		return tripType;
	}
	public void setTripType(String tripType) {
		this.tripType = tripType;
	}
	public String getChdCount() {
		return chdCount;
	}
	public void setChdCount(String chdCount) {
		this.chdCount = chdCount;
	}
	public Integer getInfCount() {
		return infCount;
	}
	public void setInfCount(Integer infCount) {
		this.infCount = infCount;
	}
	public String getGdsIpcc() {
		return gdsIpcc;
	}
	public void setGdsIpcc(String gdsIpcc) {
		this.gdsIpcc = gdsIpcc;
	}
	public String getGdsPwd() {
		return gdsPwd;
	}
	public void setGdsPwd(String gdsPwd) {
		this.gdsPwd = gdsPwd;
	}
	public String getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}
	
	
}
