package com.lutao.america.model;

import java.util.Date;

public class City {
	private Long id;
	//城市代码
    private String cnname;
  //城市英文名称
    private String enname;

    private String pinyin;

    private String icaocode;
    private String iatacode;
    private String countrycode;

    private Boolean hot;

    private Boolean status;

    private Date createtime;

    private Date updatetime;//

    private Integer bookingid;

    private String agodaname;

    private String introduction;

    public String getCnname() {
        return cnname;
    }

    public void setCnname(String cnname) {
        this.cnname = cnname;
    }

    public String getEnname() {
        return enname;
    }

    public void setEnname(String enname) {
        this.enname = enname;
    }

    public String getPinyin() {
        return pinyin;
    }

    public void setPinyin(String pinyin) {
        this.pinyin = pinyin;
    }

    public String getIcaocode() {
        return icaocode;
    }

    public void setIcaocode(String icaocode) {
        this.icaocode = icaocode;
    }

    public String getCountrycode() {
        return countrycode;
    }

    public void setCountrycode(String countrycode) {
        this.countrycode = countrycode;
    }

    public Boolean getHot() {
        return hot;
    }

    public void setHot(Boolean hot) {
        this.hot = hot;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    public Integer getBookingid() {
        return bookingid;
    }

    public void setBookingid(Integer bookingid) {
        this.bookingid = bookingid;
    }

    public String getAgodaname() {
        return agodaname;
    }

    public void setAgodaname(String agodaname) {
        this.agodaname = agodaname;
    }

    public String getIntroduction() {
        return introduction;
    }

	public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIatacode() {
		return iatacode;
	}

	public void setIatacode(String iatacode) {
		this.iatacode = iatacode;
	}
	
}