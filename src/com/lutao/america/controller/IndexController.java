package com.lutao.america.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.InvalidSessionException;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.SimplePrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ThreadContext;
import org.apache.shiro.web.subject.WebSubject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.lutao.america.dao.ContactMapper;
import com.lutao.america.dao.GeneratorMapper;
import com.lutao.america.model.Contact;
import com.lutao.america.model.Generator;
import com.lutao.america.model.Passenger;
import com.lutao.america.model.SmsLog;
import com.lutao.america.model.User;
import com.lutao.america.service.ContactService;
import com.lutao.america.service.CurrencyService;
import com.lutao.america.service.LtCityService;
import com.lutao.america.service.PassengerService;
import com.lutao.america.service.SmsService;
import com.lutao.america.service.UserService;
import com.lutao.america.vo.QueryParameter;
import com.lutao.america.vo.av.Av;
import com.lutao.common.utils.AmericaUtil;
import com.lutao.common.utils.CommonHttpClient;
import com.lutao.common.utils.Cryption;
import com.lutao.common.utils.StringUtil;
import com.lutao.common.utils.ToolUtil;

import nl.captcha.Captcha;
import nl.captcha.Captcha.Builder;
import nl.captcha.backgrounds.GradiatedBackgroundProducer;
import nl.captcha.gimpy.BlockGimpyRenderer;
import nl.captcha.gimpy.RippleGimpyRenderer;
import nl.captcha.servlet.CaptchaServletUtil;
import nl.captcha.text.producer.DefaultTextProducer;
import nl.captcha.text.renderer.ColoredEdgesWordRenderer;
import nl.captcha.text.renderer.WordRenderer;

import java.awt.Color;
import java.awt.Font;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/")
public class IndexController {
	private Log log = LogFactory.getLog(this.getClass().getName());
	
	@Autowired
	private UserService userService;

	
	@Autowired
	private LtCityService ltservice;
	
	@Autowired
	private CurrencyService coinService;
	@Autowired
	private SmsService smsService;
	@Autowired
	private  ContactService contactService;
	@Resource
    private GeneratorMapper gtMapper;
	@Resource
    private ContactMapper contactMapper;
	
	/**
	 * 首页
	 * @param req
	 * @return
	 */
	@RequestMapping("/index")
	public String Index(HttpServletRequest req){
		return "/index";
	}
	
	/**
	 * 登陆
	 * @param req
	 * @return
	 */
	@RequestMapping("/login")
	public String Login(HttpServletRequest req){
		return "/login";
	}
	
	@RequestMapping(value="/captcha")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	public void Captcha(HttpServletRequest req, HttpServletResponse resp){ 
	   SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	   Date d = new Date();
	   log.info("0" + format.format(d));
	   int _width = 150;
	   int _height = 48;
	    
	   Builder builder=new Captcha.Builder(_width, _height);
	   //增加边框
	   //builder.addBorder();
	   //干扰线
	   builder.addNoise();
	   //----------------自定义字体大小-----------
	   //自定义设置字体颜色和大小 最简单的效果 多种字体随机显示
	   List<Font> fontList = new ArrayList<Font>();
	   fontList.add(new Font("Arial", Font.ITALIC, 40));//可以设置斜体之类的
	   fontList.add(new Font("Courier", Font.BOLD, 40));
	   
	   //加入多种颜色后会随机显示 字体空心
	   List<Color> colorList=new ArrayList<Color>();
	   colorList.add(Color.black);
	   colorList.add(Color.red);
	   colorList.add(Color.blue);
	   ColoredEdgesWordRenderer cwr= new ColoredEdgesWordRenderer(colorList,fontList);
	   
	   WordRenderer wr=cwr;
	   //增加文本，默认为5个随机字符.
	   char[] numberChar = new char[] {'a','A', 'b', 'B','c','C', 'd','D',
		            'e','E', 'f', 'F','g','G', 'h','H', 'k','K', 'm','M', 'n','N', 'p','P', 'r','R', 'w','W', 'x','X', 'y','Y','2', '3', '4', '5', '6', '7', '8'};
	   builder.addText(new DefaultTextProducer(5,numberChar),wr);
	   
	   //--------------添加背景-------------
	   //设置背景渐进效果 以及颜色 form为开始颜色，to为结束颜色
	   GradiatedBackgroundProducer gbp=new GradiatedBackgroundProducer();
	   gbp.setFromColor(Color.gray);
	   gbp.setToColor(Color.white);
	   builder.addBackground(gbp);
	   //---------装饰字体---------------
	   // 字体边框齿轮效果 默认是3
	   builder.gimp(new BlockGimpyRenderer(1));
	   //波纹渲染 相当于加粗
	   builder.gimp(new RippleGimpyRenderer());
	   //加网--第一个参数是横线颜色，第二个参数是竖线颜色
	   //builder.gimp(new FishEyeGimpyRenderer(Color.red,Color.yellow));
	   //加入阴影效果 默认3，75 
	   //DropShadowGimpyRenderer shadow = new DropShadowGimpyRenderer(3, 50);
	   //builder.gimp( shadow);
       //创建对象
       Captcha captcha = builder.build();
       d = new Date();
	   log.info("1"+format.format(d));
       Subject sub = SecurityUtils.getSubject();
       sub.getSession().setAttribute(Captcha.NAME, Cryption.Md5(captcha.getAnswer().toLowerCase()));
       d = new Date();
	   log.info("2"+format.format(d));
       CaptchaServletUtil.writeImage(resp, captcha.getImage());
       d = new Date();
	   log.info("3"+format.format(d));
	}
	
	/**
	 * 执行登陆
	 * @param user
	 * @param req
	 * @return
	 */
	@RequestMapping(value="login/auth", method=RequestMethod.POST)
	public ModelAndView Login(User user, HttpServletRequest req){
		ModelAndView view = new ModelAndView();
		Subject sub = SecurityUtils.getSubject();
		//需要做验证码校验
		boolean checked = false;
		Object captcha = null;
		try{
		    captcha = sub.getSession().getAttribute(Captcha.NAME);
		}catch(InvalidSessionException e){
			e.printStackTrace();
			captcha = "";
		}
		if(StringUtil.IsNullOrEmptory(user.getCaptcha()) || StringUtil.IsNullOrEmptory(captcha) ){
			checked = false;
		}else{
			checked = Cryption.Md5(user.getCaptcha().toLowerCase()).equals(captcha);
		}
		if(!checked){
			view.getModel().put("error", true);
			view.getModel().put("msg", "验证码不正确");
			view.setViewName("/login");
			return view;
		}
		//shiro登陆
		UsernamePasswordToken token = new UsernamePasswordToken(user.getUserCode(), user.getUserPwd());
		try{
			sub.login(token);
			//登陆成功
			view.setViewName("redirect:/index");
		}catch(AuthenticationException e){
			e.printStackTrace();
			view.getModel().put("error", true);
			view.getModel().put("msg", "账号或者密码不正确");
			view.setViewName("/login");
		}
		return view;
	}
	
	/**
	 * 检查登陆状态
	 * @param req
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="login/check", method=RequestMethod.POST, produces="application/json")
	public Map<String,Object> CheckLogin(HttpServletRequest req){
		Map<String, Object> v = new HashMap<String,Object>();
		Subject sub = SecurityUtils.getSubject();
		v.put("succeed", sub.isAuthenticated());
		v.put("msg", "");
		v.put("data", "");
		return v;
	}
	
	/**
	 * 执行，返回json
	 * @param param
	 * @param req
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/authPopup", method=RequestMethod.POST, produces="application/json")
	public Map<String,Object> LoginPopup(User user, HttpServletRequest req){
		Map<String,Object> v = new HashMap<String,Object>();
		
		Subject sub = SecurityUtils.getSubject();
		//需要做验证码校验
		boolean checked = false;
		boolean authed = false;
		String msg="";
		Object captcha = null;
		try{
		    captcha = sub.getSession().getAttribute(Captcha.NAME);
		}catch(InvalidSessionException e){
			e.printStackTrace();
			captcha = "";
		}
		if(StringUtil.IsNullOrEmptory(user.getCaptcha()) || StringUtil.IsNullOrEmptory(captcha) ){
			checked = false;
		}else{
			checked = Cryption.Md5(user.getCaptcha().toLowerCase()).equals(captcha);
		}
		if(checked){
			//shiro登陆
			UsernamePasswordToken token = new UsernamePasswordToken(user.getUserCode(), user.getUserPwd());
			try{
				sub.login(token);
				//登陆成功
				authed = true;
				msg = "OK";
			}catch(AuthenticationException e){
				e.printStackTrace();
				authed = false;
				msg = "账号或者密码不正确";
			}
		}else{
			msg = "验证码不正确";
		}
		
		v.put("succeed", (checked && authed));
		v.put("msg", msg);
		v.put("data", null);
		return v;
	}
	
	@RequestMapping(value="/logout")
	public String Logout(HttpServletRequest req){
		Subject sub = SecurityUtils.getSubject();
		try {
			sub.logout();
		} catch (AuthenticationException e) {
			e.printStackTrace();
		}
		return "redirect:/login";
	}
	
	/**
	 * 注册
	 * @param req
	 * @return
	 */
	@RequestMapping("/reg")
	public String Register(HttpServletRequest req){
		return "/register";
	}
	
	
	
	
	/**
	 * 航班列表
	 * @param req
	 * @return
	 */
	@RequestMapping("/list")
	public ModelAndView List(HttpServletRequest req){
		ModelAndView view = new ModelAndView("/flightList");
		
		Subject sub = SecurityUtils.getSubject();
		if(sub.isAuthenticated()){
			view.getModel().put("login", "1");
		}else{
			view.getModel().put("login", "0");
		}
		
		return view;
	}
	/**
	 * 注册用户
	 * @param req
	 * @return
	 */
	@RequestMapping(value="/reg/member")
	@ResponseBody
	public Map<String,String> MemberRegister(String userCode,String password,String userName,String sex){
		Map<String,String> msgMap=new HashMap<String,String>();
		Generator gt=new Generator();
		try{
		if(contactService.findByUsername(userCode)){
		Contact contact=new Contact();
		Date now = new Date();
		contact.setCustId((int)gtMapper.getValueByName("CONTACT_PK"));
		contact.setUsername(userCode.trim());
		contact.setContMobile(userCode.trim());
		String tempsalt = ToolUtil.generalRandomString(32);
		contact.setSalt(tempsalt);
		contact.setContName(userName.trim());
		contact.setPassword(ToolUtil.doMd5(password.trim() + tempsalt));
		contact.setSex(Integer.parseInt(sex));
		contact.setLoginCount(1);
		contact.setOwnerCompany("1");
		contact.setSource("MZ013");
		contact.setLastLoginTime(now);
		contact.setCreatetime(now);
		contact.setUpdatetime(now);
		contactService.save(contact);
		gt.setGEN_NAME("CONTACT_PK");
        gt.setGEN_VALUE(contact.getCustId()+1);
        gtMapper.updateValueByName(gt);//更新Generator表值
		msgMap.put("msg","success");
		log.info("注册成功---发送短信");
		SmsLog sms =new SmsLog();
		sms.setReceiverName(userName);
		sms.setReceiverCallNo(userCode);
		Map<String,Object>map=new HashMap<String, Object>();
		map.put("acc",userName);
		UsernamePasswordToken token = new UsernamePasswordToken(contact.getUsername(), contact.getPassword());
		Subject sub=SecurityUtils.getSubject();
		try{
			sub.login(token);
			//登陆成功
		}catch(AuthenticationException e){
			e.printStackTrace();
		}
		smsService.send("reged_america", sms, map);
		}else{
				msgMap.put("msg","已有路淘旅行网账号，可以凭路淘旅行网账号登录");
		}
		}catch(Exception e){
			e.printStackTrace();
			log.error("注册用户异常");
		}
		return msgMap;
	}

	
	/**
	 * 查询航班，返回json
	 * @param param
	 * @param req
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/query", method=RequestMethod.POST, produces="application/json")
	public Map<String,Object> Query(QueryParameter param, HttpServletRequest req)throws Exception{
		Map<String,Object> v = new HashMap<String,Object>();
		List<Av> res = ltservice.query(param);
		v.put("succeed", (res.size()>0));
		v.put("msg", (res.size()==0)?"无航班":"");
		v.put("data", res);
		return v;
	}
	
	/**
	 * 头部页
	 * @param req
	 * @return
	 */
	@RequestMapping(value="/top")
	public ModelAndView Top(HttpServletRequest req){
		ModelAndView view = new ModelAndView("/top");
		Subject sub = SecurityUtils.getSubject();
		if(sub.isAuthenticated()){
			Object name = sub.getSession().getAttribute("name");
			Object pwd = sub.getSession().getAttribute("pwd");
			Object member = sub.getSession().getAttribute("member");
			view.getModel().put("name", name);
			view.getModel().put("pwd", pwd);
			view.getModel().put("member", member);
			view.getModel().put("login", true);
		}
		
		return view;
	}
	@RequestMapping("/about")
	public ModelAndView about(){
		ModelAndView mv=new ModelAndView("/about");
		return mv;
	}
	/**
	 * 异常页面
	 * @param req
	 * @return
	 */
	@RequestMapping(value="/error")
	public ModelAndView Error(boolean show, String msg, HttpServletRequest req){
		ModelAndView view = new ModelAndView("/error");
		view.getModel().put("show", show);
		view.getModel().put("msg", StringUtil.decodeBase64(msg, "UTF-8"));
		return view;
	}
	
	@ResponseBody
	@RequestMapping(value="/Login")
	public Map<String,Object> Login(){
		Map<String,Object> m = new HashMap<String,Object>();
		Subject sub = SecurityUtils.getSubject();
		if(sub.isAuthenticated()){
			m.put("Login", true);
		}else{
			m.put("Login", false);
		}
		return m;
	}
	/**
	 * 非会员发送验证码
	 * 此session设置了超时
	 * @param userCode 手机号
	 * @param userName 用户名
	 * @param req
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/Login/code")
	public Map<String,Object> code(String userCode,String userName,HttpServletRequest req){
		
		Map<String,Object> m = new HashMap<String,Object>();
		try {
			SmsLog sms =new SmsLog();
			sms.setReceiverName(userName);
			sms.setReceiverCallNo(userCode);
			    Map<String,Object>map=new HashMap<String, Object>();
			    //生成6位随机数
			    String code=StringUtil.createRandom(true, 6);
			    map.put("code",code);
			    smsService.send("code_america", sms, map);
			    
			    SecurityUtils.getSubject().getSession().setAttribute("code",ToolUtil.doMd5(code));
			    SecurityUtils.getSubject().getSession().setAttribute("mobile",userCode);
			    SecurityUtils.getSubject().getSession().setTimeout(30*60*1000);//30分钟超时
			m.put("msg", "恭喜，短信发送成功！");
		} catch (Exception e) {
			// TODO: handle exception
			log.error("发送短信失败：" + e);
			m.put("msg", "错误，短信发送失败！");
		}
		
		return m;
	}
	/**
	 * 验证 验证码  
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/Login/checkCode")
	public Map<String,Object> checkCode(String code,String userName){
		Map<String,Object> m= new HashMap<String,Object>();
		try{
			Subject sub = SecurityUtils.getSubject();
		    Object codeStr = sub.getSession().getAttribute("code");
		    String userCode = String.valueOf(sub.getSession().getAttribute("mobile"));
			if(String.valueOf(codeStr).equals(ToolUtil.doMd5(code))){
				Generator gt=new Generator();
				//不是会员   注册新用户
				if(contactService.findByUsername(userCode)){
					//生成用户随机密码   8位
				    String pwd=StringUtil.createRandom(false, 8);
					Contact contact=new Contact();
					Date now = new Date();
					contact.setCustId((int)gtMapper.getValueByName("CONTACT_PK"));
					contact.setUsername(userCode);
					contact.setContMobile(userCode);
					String tempsalt = ToolUtil.generalRandomString(32);
					contact.setSalt(tempsalt);
					contact.setContName(userName.trim());
					contact.setPassword(ToolUtil.doMd5(pwd + tempsalt));
					//contact.setSex(Integer.parseInt(sex));
					contact.setLoginCount(1);
					contact.setOwnerCompany("1");
					contact.setSource("MZ013");
					contact.setLastLoginTime(now);
					contact.setCreatetime(now);
					contact.setUpdatetime(now);
					contactService.save(contact);
					gt.setGEN_NAME("CONTACT_PK");
			        gt.setGEN_VALUE(contact.getCustId()+1);
			        gtMapper.updateValueByName(gt);//更新Generator表值
					log.info("注册成功---发送短信");
					SmsLog sms =new SmsLog();
					sms.setReceiverName(userName);
					sms.setReceiverCallNo(userCode);
					Map<String,Object>map=new HashMap<String, Object>();
					map.put("acc",userName);
					map.put("userCode", userCode);
					map.put("pwd", pwd);
					smsService.send("codeReged_america", sms, map);
					//执行登录
					//shiro登陆
					UsernamePasswordToken token = new UsernamePasswordToken(userCode, pwd);
					//登录成功
					sub.login(token);
					
				}else{
				//是会员，直接登录
				Contact	contact	= contactMapper.findByUsername(userCode);
				
				//shiro登陆
		        UsernamePasswordToken token = 
		        		new UsernamePasswordToken(userCode,contact.getPassword());//这里的密码是32位md5
		        
				//登录成功
				sub.login(token);
				}
				m.put("login", true);
				m.put("statu", true);
			}else{
				m.put("statu",false);
				m.put("Msg", "验证码不正确！");
			}
			
		}catch(Exception e){
			// TODO: handle exception
			log.error("验证错误：" + e);
			m.put("statu", false);
			m.put("Msg", "后台错误.请联系客服！");
		}
		return m;
	}
}