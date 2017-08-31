package com.lutao.america.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lutao.america.dao.SmsLogMapper;
import com.lutao.america.dao.SmsTemplateMapper;
import com.lutao.america.model.SmsLog;
import com.lutao.america.model.SmsTemplate;
import com.lutao.america.service.SmsService;
import com.lutao.common.sms.ChuanglanSmsUtil;
import com.lutao.common.utils.StringUtil;

@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class SmsServiceImpl implements SmsService{
	private Log log = LogFactory.getLog(this.getClass().getName());
	
	@Resource
	private SmsLogMapper smsMapper;
	
	@Resource
	private SmsTemplateMapper stMapper;

	@Override
	public int insert(SmsLog log) {
		// TODO Auto-generated method stub
		int len = smsMapper.insert(log);
		System.out.println( String.format("保存短信记录返回:%s, 自增主键:%s", len, log.getId()));
		return len;
	}

	@Override
	public void send(String smsTemplate, SmsLog sms, Map<String, Object> params) {
		System.out.println("启动发送短信任务...");
		new Thread(new Runnable() {
			@Override
			public void run() {
				try{
					SmsTemplate template = stMapper.get( smsTemplate);
					if(null == template){
						return;
					}
					String temp = template.getTemplate();
					if(StringUtil.IsNullOrEmptory( temp)){
						return;
					}
					for(Map.Entry<String, Object> entry : params.entrySet()){
						temp = temp.replaceAll(String.format("\\{%s\\}", entry.getKey()), entry.getValue().toString());
					}
					sms.setMessage( temp);
					String code = ChuanglanSmsUtil.send(sms.getReceiverCallNo(), sms.getMessage(), false);
					String status = ChuanglanSmsUtil.STATUS_MAP.get( code);
					log.info(String.format("短信发送返回:[%s,%s]", code, status));
					if("0".equals(code)){//提交成功
						sms.setSendStatus( 1);
					}else{//未发送
						sms.setSendStatus( 0);
					}
					sms.setStatus( 0);
					sms.setSendRemark( status);
					int len = insert( sms);
					log.info(String.format("写入短信日志返回:%s", len));	
				}catch(Exception e){
					e.printStackTrace();
				}
			}
		}).start();
		System.out.println("发送短信任务执行完毕...");
	}
}
