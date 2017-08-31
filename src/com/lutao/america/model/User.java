package com.lutao.america.model;

import java.util.Date;

import com.lutao.common.utils.Cryption;

/**
 * 用户
 * @author liang
 *
 */
public class User {

	private Long id;
	private String userName;
	private String userCode;
	private String userPwd;
	
	private Date visitTime;
	private String captcha;
	public User(){
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public User(Long id, String name, String code, String pwd) {
		super();
		this.id = id;
		this.userName = name;
		this.userCode = code;
		this.userPwd = pwd;
	}
	public String getUserCode() {
		return userCode;
	}
	public void setUserCode(String userCode) {
		this.userCode = userCode;
	}
	public String getUserPwd() {
		return userPwd;
	}
	public String getUserPwdMd5(){
		return Cryption.Md5(userPwd);
	}
	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}
	public Date getVisitTime() {
		return visitTime;
	}
	public void setVisitTime(Date visitTime) {
		this.visitTime = visitTime;
	}
	public String getCaptcha() {
		return captcha;
	}
	public void setCaptcha(String captcha) {
		this.captcha = captcha;
	}
}
