package com.lutao.america.vo.av;

import java.io.Serializable;
import java.util.List;

public class Segment implements Serializable
{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String airDate = "";
	private String airline ="";
    private String airlineName ="";
    private String airNo ="";
    private String airModel ="";
    private String airShare ="";

    private String airFromTime ="";
    private String airToTime ="";

    private String airFromAirport ="";
    private String airToAirport ="";

    private boolean airIsStop = false;
    private String airStop = "";

    private double airDiff = 0;
    private double acrossDays = 0;

    private double airMinPrice = 0;
    private double airFee = 0;

    private List<Flight> airLegs;
    private List<Seat> airSeats;

    //航段
    private int seg = 0;

	public String getAirline() {
		return airline;
	}

	public void setAirline(String airline) {
		this.airline = airline;
	}

	public String getAirlineName() {
		return airlineName;
	}

	public void setAirlineName(String airlineName) {
		this.airlineName = airlineName;
	}

	public String getAirNo() {
		return airNo;
	}

	public void setAirNo(String airNo) {
		this.airNo = airNo;
	}

	public String getAirModel() {
		return airModel;
	}

	public void setAirModel(String airModel) {
		this.airModel = airModel;
	}

	public String getAirShare() {
		return airShare;
	}

	public void setAirShare(String airShare) {
		this.airShare = airShare;
	}

	public String getAirFromTime() {
		return airFromTime;
	}

	public void setAirFromTime(String airFromTime) {
		this.airFromTime = airFromTime;
	}

	public String getAirToTime() {
		return airToTime;
	}

	public void setAirToTime(String airToTime) {
		this.airToTime = airToTime;
	}

	public String getAirFromAirport() {
		return airFromAirport;
	}

	public void setAirFromAirport(String airFromAirport) {
		this.airFromAirport = airFromAirport;
	}

	public String getAirToAirport() {
		return airToAirport;
	}

	public void setAirToAirport(String airToAirport) {
		this.airToAirport = airToAirport;
	}

	public boolean isAirIsStop() {
		return airIsStop;
	}

	public void setAirIsStop(boolean airIsStop) {
		this.airIsStop = airIsStop;
	}

	public String getAirStop() {
		return airStop;
	}

	public void setAirStop(String airStop) {
		this.airStop = airStop;
	}

	public double getAirDiff() {
		return airDiff;
	}

	public void setAirDiff(double airDiff) {
		this.airDiff = airDiff;
	}

	public double getAcrossDays() {
		return acrossDays;
	}

	public void setAcrossDays(double acrossDays) {
		this.acrossDays = acrossDays;
	}

	public double getAirMinPrice() {
		return airMinPrice;
	}

	public void setAirMinPrice(double airMinPrice) {
		this.airMinPrice = airMinPrice;
	}

	public double getAirFee() {
		return airFee;
	}

	public void setAirFee(double airFee) {
		this.airFee = airFee;
	}

	public List<Flight> getAirLegs() {
		return airLegs;
	}

	public void setAirLegs(List<Flight> airLegs) {
		this.airLegs = airLegs;
	}

	public List<Seat> getAirSeats() {
		return airSeats;
	}

	public void setAirSeats(List<Seat> airSeats) {
		this.airSeats = airSeats;
	}

	public int getSeg() {
		return seg;
	}

	public void setSeg(int seg) {
		this.seg = seg;
	}

	public String getAirDate() {
		return airDate;
	}

	public void setAirDate(String airDate) {
		this.airDate = airDate;
	}
	
}