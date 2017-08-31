package com.lutao.america.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.lutao.common.enums.EPasinfo;



public class PasgInfo {
    private Long id;
    //
    private Long orderAttrId;
 // 外部乘客ID
    private Long pasgId;

    private String pid;
    /**
	 * 乘机人类型
	 * ODM_PETYPE	0	成人
	 * ODM_PETYPE	1	儿童
	 * ODM_PETYPE	2	婴儿
	 */	
    private Integer agetype;

    private String ticketnum;//机票号

    private String pnr;//Pnr信息

    private String extInfo;//扩展字段

    private Date createDate;//创建时间

    private BigDecimal ticketPrice;//票面价

    private BigDecimal price;//销售价

    private BigDecimal retmoney;//返钱

    private BigDecimal retpoiint;//返点

    private Integer constructionFee;//机场建设费

    private Integer fuleTax;//燃油附加费

    private Integer insurancePrice;//保险销售价

    private BigDecimal insuranceCost;//保险成本价

    private String insuranceCompany;//保险公司

    private String insuranceName;//保险名

    private String insurno;//保单号

    private Integer insuranceunitprice;//保险单价

    private Integer insuranceCount;//保险数量

    private String stat;//状态 0:正常 1:已退票

    private BigDecimal settlePrice; //票号结算价格 

    private BigDecimal changeFee;//改期费

    private Long reopenOrderId;//订单重开新建的订单id

    private Short retax;//重开的pasginfoId

    private Integer retaxprice;//退税费
    /**
	 * 重开订单类型(字典表中的ODM_BIZTYPE)
	 * OT001	业务订单
	 * OT002	退款订单
	 */
    private Long reopenOrderType;

    private Long droptankspasginfoid;//重开的pasginfoId

    private Date prepareRefundDate;//待退票操作时间

    private Long prepareRefundUserid;//待退票操作人
    private List<Pasgsect> pasgsects =new ArrayList<Pasgsect>();
    private PasInfo pasInfo=new PasInfo();
    private List<Insurance> insurance=new  ArrayList<Insurance>();
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderAttrId() {
        return orderAttrId;
    }

    public void setOrderAttrId(Long orderAttrId) {
        this.orderAttrId = orderAttrId;
    }

    public Long getPasgId() {
        return pasgId;
    }

    public void setPasgId(Long pasgId) {
        this.pasgId = pasgId;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public Integer getAgetype() {
        return agetype;
    }

    public void setAgetype(Integer agetype) {
        this.agetype = agetype;
    }

    public String getTicketnum() {
        return ticketnum;
    }

    public void setTicketnum(String ticketnum) {
        this.ticketnum = ticketnum;
    }

    public String getPnr() {
        return pnr;
    }

    public void setPnr(String pnr) {
        this.pnr = pnr;
    }

    public String getExtInfo() {
        return extInfo;
    }

    public void setExtInfo(String extInfo) {
        this.extInfo = extInfo;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public BigDecimal getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(BigDecimal ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getRetmoney() {
        return retmoney;
    }

    public void setRetmoney(BigDecimal retmoney) {
        this.retmoney = retmoney;
    }

    public BigDecimal getRetpoiint() {
        return retpoiint;
    }

    public void setRetpoiint(BigDecimal retpoiint) {
        this.retpoiint = retpoiint;
    }

    public Integer getConstructionFee() {
        return constructionFee;
    }

    public void setConstructionFee(Integer constructionFee) {
        this.constructionFee = constructionFee;
    }

    public Integer getFuleTax() {
        return fuleTax;
    }

    public void setFuleTax(Integer fuleTax) {
        this.fuleTax = fuleTax;
    }

    public Integer getInsurancePrice() {
        return insurancePrice;
    }

    public void setInsurancePrice(Integer insurancePrice) {
        this.insurancePrice = insurancePrice;
    }

    public BigDecimal getInsuranceCost() {
        return insuranceCost;
    }

    public void setInsuranceCost(BigDecimal insuranceCost) {
        this.insuranceCost = insuranceCost;
    }

    public String getInsuranceCompany() {
        return insuranceCompany;
    }

    public void setInsuranceCompany(String insuranceCompany) {
        this.insuranceCompany = insuranceCompany;
    }

    public String getInsuranceName() {
        return insuranceName;
    }

    public void setInsuranceName(String insuranceName) {
        this.insuranceName = insuranceName;
    }

    public String getInsurno() {
        return insurno;
    }

    public void setInsurno(String insurno) {
        this.insurno = insurno;
    }

    public Integer getInsuranceunitprice() {
        return insuranceunitprice;
    }

    public void setInsuranceunitprice(Integer insuranceunitprice) {
        this.insuranceunitprice = insuranceunitprice;
    }

    public Integer getInsuranceCount() {
        return insuranceCount;
    }

    public void setInsuranceCount(Integer insuranceCount) {
        this.insuranceCount = insuranceCount;
    }

    public String getStat() {
        return stat;
    }

    public void setStat(String stat) {
        this.stat = stat;
    }

    public BigDecimal getSettlePrice() {
        return settlePrice;
    }

    public void setSettlePrice(BigDecimal settlePrice) {
        this.settlePrice = settlePrice;
    }

    public BigDecimal getChangeFee() {
        return changeFee;
    }

    public void setChangeFee(BigDecimal changeFee) {
        this.changeFee = changeFee;
    }

    public Long getReopenOrderId() {
        return reopenOrderId;
    }

    public void setReopenOrderId(Long reopenOrderId) {
        this.reopenOrderId = reopenOrderId;
    }

    public Short getRetax() {
        return retax;
    }

    public void setRetax(Short retax) {
        this.retax = retax;
    }

    public Integer getRetaxprice() {
        return retaxprice;
    }

    public void setRetaxprice(Integer retaxprice) {
        this.retaxprice = retaxprice;
    }

    public Long getReopenOrderType() {
        return reopenOrderType;
    }

    public void setReopenOrderType(Long reopenOrderType) {
        this.reopenOrderType = reopenOrderType;
    }

    public Long getDroptankspasginfoid() {
        return droptankspasginfoid;
    }

    public void setDroptankspasginfoid(Long droptankspasginfoid) {
        this.droptankspasginfoid = droptankspasginfoid;
    }

    public Date getPrepareRefundDate() {
        return prepareRefundDate;
    }

    public void setPrepareRefundDate(Date prepareRefundDate) {
        this.prepareRefundDate = prepareRefundDate;
    }

    public Long getPrepareRefundUserid() {
        return prepareRefundUserid;
    }

    public void setPrepareRefundUserid(Long prepareRefundUserid) {
        this.prepareRefundUserid = prepareRefundUserid;
    }

	public List<Pasgsect> getPasgsects() {
		return pasgsects;
	}

	public void setPasgsects(List<Pasgsect> pasgsects) {
		this.pasgsects = pasgsects;
	}

	public PasInfo getPasInfo() {
		return pasInfo;
	}

	public void setPasInfo(PasInfo pasInfo) {
		this.pasInfo = pasInfo;
	}

	public List<Insurance> getInsurance() {
		return insurance;
	}

	public void setInsurance(List<Insurance> insurance) {
		this.insurance = insurance;
	}
	

}