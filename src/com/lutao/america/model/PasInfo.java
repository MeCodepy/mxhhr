package com.lutao.america.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;



public class PasInfo {
    private Long pasgId;

    private Integer custId;

    private String pasgName;

    private String pasgType;

    private Short sex;

    private String countryName;

    private String certType;

    private String certNo;

    private Date certValid;

    private String tripCardno;

    private String birthday;

    private String idissuecountry;

    private String idissuecountrycode;

    private String idexpirationdate;

    private String nationality;

    private String nationalitycode;

    private Date createDate;
    private Set<PasgInfo> pasginfos = new HashSet<PasgInfo>(0);
    public Long getPasgId() {
        return pasgId;
    }

    public void setPasgId(Long pasgId) {
        this.pasgId = pasgId;
    }

    public Integer getCustId() {
        return custId;
    }

    public void setCustId(Integer custId) {
        this.custId = custId;
    }

    public String getPasgName() {
        return pasgName;
    }

    public void setPasgName(String pasgName) {
        this.pasgName = pasgName;
    }

    public String getPasgType() {
        return pasgType;
    }

    public void setPasgType(String pasgType) {
        this.pasgType = pasgType;
    }

    public Short getSex() {
        return sex;
    }

    public void setSex(Short sex) {
        this.sex = sex;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getCertType() {
        return certType;
    }

    public void setCertType(String certType) {
        this.certType = certType;
    }

    public String getCertNo() {
        return certNo;
    }

    public void setCertNo(String certNo) {
        this.certNo = certNo;
    }

    public Date getCertValid() {
        return certValid;
    }

    public void setCertValid(Date certValid) {
        this.certValid = certValid;
    }

    public String getTripCardno() {
        return tripCardno;
    }

    public void setTripCardno(String tripCardno) {
        this.tripCardno = tripCardno;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getIdissuecountry() {
        return idissuecountry;
    }

    public void setIdissuecountry(String idissuecountry) {
        this.idissuecountry = idissuecountry;
    }

    public String getIdissuecountrycode() {
        return idissuecountrycode;
    }

    public void setIdissuecountrycode(String idissuecountrycode) {
        this.idissuecountrycode = idissuecountrycode;
    }

    public String getIdexpirationdate() {
        return idexpirationdate;
    }

    public void setIdexpirationdate(String idexpirationdate) {
        this.idexpirationdate = idexpirationdate;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getNationalitycode() {
        return nationalitycode;
    }

    public void setNationalitycode(String nationalitycode) {
        this.nationalitycode = nationalitycode;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

	public Set<PasgInfo> getPasginfos() {
		return pasginfos;
	}

	public void setPasginfos(Set<PasgInfo> pasginfos) {
		this.pasginfos = pasginfos;
	}
    
}