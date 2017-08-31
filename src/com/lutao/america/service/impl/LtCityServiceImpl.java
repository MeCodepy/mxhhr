package com.lutao.america.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.ws.rs.core.MediaType;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lutao.america.vo.av.Segment;
import com.lutao.america.vo.av.Av;
import com.lutao.america.vo.av.Flight;
import com.lutao.america.vo.av.Iata;
import com.lutao.america.vo.b2b.Flt;
import com.lutao.america.vo.b2b.FltWay;
import com.lutao.america.vo.b2b.GDS;
import com.lutao.america.vo.b2b.GDSAPIRes;
import com.lutao.america.vo.b2b.PassengerItem;
import com.lutao.america.vo.b2b.Price;
import com.lutao.america.dao.CurrencyMapper;
import com.lutao.america.service.LtCityService;
import com.lutao.america.vo.QueryParameter;
import com.lutao.america.vo.SearchCondition;
import com.lutao.common.utils.AmericaUtil;
import com.lutao.common.utils.ComProp;
import com.lutao.common.utils.Cryption;
import com.lutao.common.utils.IataUtil;
import com.lutao.common.utils.StringUtil;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;


import net.sf.json.JSONObject;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class LtCityServiceImpl implements LtCityService{
	private Log log = LogFactory.getLog(this.getClass().getName());
	
	
	@Resource
	private CurrencyMapper coinMapper;
	
	
	@Override
	public Object search(QueryParameter query) {
		SearchCondition searchCondition=new SearchCondition();
		searchCondition.setChannel("online");
		searchCondition.setDepCode(query.getOrg_city());
		searchCondition.setDesCode(query.getDst_city());
		searchCondition.setChdCount(query.getInf());
		searchCondition.setDepDate(query.getOrg_date());
		searchCondition.setReturnDate(query.getDst_date());
		searchCondition.setGdsSource(SearchCondition.DataGdsSource.Amadeus.value);
		searchCondition.setTripType(query.getTrip_type());
		JSONObject json = JSONObject.fromObject(searchCondition);
		try {
			String searchStr="";
			Client client = new Client();
			WebResource resource = client.resource(AmericaUtil.INTER_SEARCH_URL);
			searchStr="searchCondition=" + json.toString() ;
			log.info("国际航班请求参数:" + searchStr);
			ClientResponse response = resource.type(MediaType.APPLICATION_FORM_URLENCODED).accept(MediaType.APPLICATION_JSON).post(ClientResponse.class, searchStr);
			String result = response.getEntity(String.class);
			log.info("国际航班查询结果:" + result);
			return JSONObject.fromObject(result).get("searchRsVO");
		} catch (Exception e) {
			log.error("国际航班查询失败 :" + e);
		}
		return null;
	}


	@Override
	public List<Av> query(QueryParameter req) {
		// TODO Auto-generated method stub
		List<Av> reList = new ArrayList<Av>();
		try {
			String dstdate = "0001-01-01";
			if(!StringUtil.IsNullOrEmptory(req.getDst_date())){
				dstdate = req.getDst_date();
			}
			String searchStr = String.format("From=%s&To=%s&GoDate=%s&BackDate=%s&UnitID=1&Cid=Lutaowang&GDS=%s", 
					req.getOrg_city(),
					req.getDst_city(),
					req.getOrg_date(),
					dstdate,
					SearchCondition.DataGdsSource.Travelport.value
					);
			Client client = new Client();
			WebResource resource = client.resource(ComProp.B2B_INTER_SEARCH_URL);
			log.info("国际航班请求参数:" + searchStr);
			ClientResponse response = resource.type(MediaType.APPLICATION_FORM_URLENCODED).accept(MediaType.APPLICATION_JSON).post(ClientResponse.class, searchStr);
			String result = response.getEntity(String.class);
			
			//log.info("国际航班查询结果:" + result);
			
			//
			
			ObjectMapper mapper = new ObjectMapper();
			SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
			mapper.setDateFormat(format);
			mapper.setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			List<GDSAPIRes> gdss = mapper.readValue(result, mapper.getTypeFactory().constructParametricType(List.class, GDSAPIRes.class));
			Long time = System.currentTimeMillis();
			for(GDSAPIRes gi : gdss){
				GDS g = gi.getGDSInfo().getGDSInfo();
				Av av = new Av();
				av.setTime(time);
				av.setToken( gi.getGDSID());
				av.setPrice(0);
				av.setFee(0);
				for(Price p : g.getPrices()){
					
					Map<String, Object> map = new HashMap<String, Object>();
					map.put("coin", p.getCurrency());
					double rate = coinMapper.query(map);
					log.info(String.format("Currency Rate:%s %s", p.getCurrency(), rate));
					
					double tktFee = p.getTicketFee();
					double fee = p.getTax();
					
					tktFee = (tktFee * (rate / 100));
					fee = (fee * (rate / 100));
					
					double adtRate = gi.getGDSInfo().getAdtKeepRate();
					double adtMoney = gi.getGDSInfo().getAdtKeepMoney();
					
					av.setPrice( tktFee + (tktFee * adtRate * 0.01) + adtMoney);
					av.setFee( fee);
					av.setCurrency( "CNY");
					
					av.setPrice( Math.ceil( av.getPrice()));
					av.setFee( Math.ceil( av.getFee()));
					
					//在原价格的基础上， 每1000元减150
					double temPrice = av.getPrice();
					double seek = Math.floor( temPrice/1000);
					double newPrice = temPrice - (150 * seek);
					log.info(String.format("每1000元减150：old->%s，seek->%s，new->%s", temPrice, seek, newPrice));
					av.setPrice( newPrice);
					
					log.info(String.format("trans currency from %s to CNY, rate:%s, adtRate:%s, adtMoney:%s, price from %s->%s, fee from %s->%s", 
							p.getCurrency(),
							rate,
							adtRate,
							adtMoney,
							p.getTicketFee(), av.getPrice(),
							p.getTax(), av.getFee()
							));
				}
				
				for(FltWay fw : g.getFltWays()){
					SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
					SimpleDateFormat dformat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
					Segment sg = new Segment();
					sg.setAirFromAirport(fw.getFromCode());
					sg.setAirFromTime(dformat.format(fw.getFltTime()));
					sg.setAirToAirport(fw.getToCode());
					sg.setAirToTime(dformat.format(fw.getArrTime()));
					sg.setSeg( fw.getWay());
					
					//temp
					Flt lastF = null;
					Flt beforeF = null;
					String stop = "",city="",airport="",airline="";
					int sgDiff = 0;
					Iata iata= new Iata();
					
					
					List<Flight> legs = new ArrayList<Flight>();
					for(Flt ft : fw.getFlts()){
						Flight f = new Flight();
						f.setSeq( ft.getSeq());
						f.setAirline( ft.getFltNo().substring(0,2));
						f.setAirNo( ft.getFltNo().substring(2));
						f.setAirDate( dateFormat.format( ft.getFltTime()));
						f.setAirDiff( ft.getLastMin());
						f.setAirModel( ft.getPlane());
						f.setAirShare( ft.getMainNo());
						//match airline
						iata.setCode( f.getAirline());
						IataUtil.MatchAirline(iata);
						f.setAirlineName( iata.getAirline());
						//from
						f.setFromCode( ft.getFromCode());
						f.setFromTerminal( ft.getFromHall());
						f.setFromTime( dformat.format( ft.getFltTime()));
						iata.setCode( f.getFromCode());
						IataUtil.MatchIATAInter( iata);
						f.setFromName( iata.getCity());
						f.setFromAirport( iata.getAirport());
						//to
						f.setToCode( ft.getToCode());
						f.setToTerminal( ft.getToHall());
						f.setToTime( dformat.format( ft.getArrTime()));
						iata.setCode( f.getToCode());
						IataUtil.MatchIATAInter( iata);
						f.setToName( iata.getCity());
						f.setToAirport( iata.getAirport());
						//seat
						av.setSeat( ft.getSeatType());
						av.setSeatQty( ft.getQty());
						//
						f.setSeat( ft.getSeat());
						f.setSeatStatus( ft.getSeatStatus());
						
						if(null == lastF){
							lastF = ft;
						}
						if(ft.getSeq() > lastF.getSeq()){
							lastF = ft;
						}
						//from
						if(ft.getSeq() == 1){
							sg.setAirDate( dateFormat.format( ft.getFltTime()));
							sg.setAirline( f.getAirline());
							sg.setAirlineName( f.getAirlineName());
							sg.setAirNo( f.getAirNo());
							sg.setAirModel( f.getAirModel());
							sg.setAirShare( f.getAirShare());
							sg.setAirFromAirport( f.getFromName());
							sg.setAirFromTime( f.getFromTime());
						}
						//stop
						if(ft.getSeq() > 1){
							stop += String.format("%s%s", 
									(StringUtil.IsNullOrEmptory(stop)?"":","),
									f.getFromName()
									);
						}
						//diff
						sgDiff += ft.getLastMin();
						if(beforeF != null){
							double temp = ft.getFltTime().getTime() - beforeF.getFltTime().getTime();
							double minute = temp / (1000 * 60);
							sgDiff += minute;
							f.setStopTime( minute);
						}
						beforeF = ft;
						legs.add( f);
					}
					if(null == lastF){
						continue;
					}
					//to
					iata.setCode( lastF.getToCode());
					IataUtil.MatchIATAInter( iata);
					sg.setAirToAirport( iata.getCity());
					sg.setAirToTime( dformat.format( lastF.getArrTime()));
					sg.setAirIsStop( false);
					sg.setAirStop("");
					sg.setAirDiff( sgDiff);
					if(lastF.getSeq() > 1){
						sg.setAirIsStop( true);
						sg.setAirStop( stop);
					}
					
					sg.setAirLegs( legs);
					av.addSegs(sg);
				}
				
				String temp = mapper.writeValueAsString( av);
				String sign = Cryption.Md5(temp + av.getTime());
				av.setSign( sign);
				reList.add( av);
			}
		} catch (Exception e) {
			log.info("国际航班查询失败 :" + e);
		}
		return reList;
	}
	
	@Override
	public String B2BOrder(String guid, List<PassengerItem> psgs){
		try{
			ObjectMapper mapper = new ObjectMapper();
			mapper.setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			
			String param = String.format("GDSID=%s&PasJson=%s&UnitID=1", guid, mapper.writeValueAsString( psgs));
			
			Client client = new Client();
			WebResource resource = client.resource(ComProp.B2B_INTER_ORDER_URL);
			log.info("国际下单请求参数:" + param);
			ClientResponse response = resource.type(MediaType.APPLICATION_FORM_URLENCODED).accept(MediaType.APPLICATION_JSON).post(ClientResponse.class, param);
			String result = response.getEntity(String.class);
			log.info("国际下单返回:"+result);
			return result;
		}catch(Exception e){
			e.printStackTrace();
		}
		return "";
	}
}
