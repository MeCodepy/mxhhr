package com.lutao.america.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import com.lutao.america.model.SmsLog;
import com.lutao.common.utils.Cryption;
import com.lutao.common.utils.StringUtil;

public class UserRealm extends AuthorizingRealm {
	private Log log = LogFactory.getLog(this.getClass().getName());
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private SmsService smsService;
	
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public static final String SESSION_USER_KEY="lutao_user_session";

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection arg0) {
		// TODO Auto-generated method stub
		//User user =(User)SecurityUtils.getSubject().getSession().getAttribute(SESSION_USER_KEY);
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		//info.addRole( );
		return info;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
		// TODO Auto-generated method stub
		UsernamePasswordToken tk = (UsernamePasswordToken)authcToken;
		boolean succeed = false;
		//账号密码校验
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ucode", tk.getUsername());//
		map.put("pwd", String.valueOf(tk.getPassword()));//
		/**
		 * 这是通过手机验证码登录的
		 * 密码是通过数据库获取回来的  32位md5
		 * 直接用md5密码登录
		 */
		if(String.valueOf(tk.getPassword()).length()==32&&StringUtil.numEnBlend(String.valueOf(tk.getPassword()))){
			userService.admin_login(map);
		}else{//明文密码登录
			userService.login(map);
		}
		Object id = map.get("id");
		Pattern pat = Pattern.compile("(\\d+)");
		Matcher mch = pat.matcher(id.toString());
		if(mch.matches()){
			Long idx = Long.valueOf(id.toString());
			if(idx > 0){
				succeed = true;
			}
		}
		if(succeed){
			SmsLog sl = new SmsLog();
			sl.setReceiverName( map.get("name").toString());
			sl.setReceiverCallNo( map.get("ucode").toString());
			
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Map<String,Object> param = new HashMap<String,Object>();
			param.put("name", sl.getReceiverName());
			param.put("acc", sl.getReceiverCallNo());
			param.put("time", format.format(new Date()));
			
			smsService.send("login_america", sl, param);
			
			
			log.info(String.format("用户[%s %s]登陆成功!", map.get("id"), map.get("name")));
			AuthenticationInfo info = new SimpleAuthenticationInfo(map.get("ucode"), Cryption.Md5( map.get("pwd").toString()), map.get("name").toString());
			//assertCredentialsMatch(authcToken, info);
			SecurityUtils.getSubject().getSession().setAttribute("name", map.get("name"));
			SecurityUtils.getSubject().getSession().setAttribute("member", map.get("id"));
			return info;
		}else{
			throw new AuthenticationException(String.format("用户[%s]登陆失败！", tk.getUsername()));
		}
	}
}