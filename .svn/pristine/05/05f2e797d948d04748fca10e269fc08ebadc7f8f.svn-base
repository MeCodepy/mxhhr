package com.lutao.common.utils;


public class FlightTimeUtil {

	public static String getFlightTime(String depTime,String arrTime){
		 String [] depSpilt=depTime.split(":");
			String [] arrSpilt=arrTime.split(":");
			Integer depHous=Integer.valueOf(depSpilt[0]);
			Integer depMinute=Integer.valueOf(depSpilt[1]);
			Integer arrHous=Integer.valueOf(arrSpilt[0]);
			Integer arrMinute=Integer.valueOf(arrSpilt[1]);
			String housPoor="";
			String minutePoor="";
		  if(arrMinute<depMinute){
			  if(arrHous>depHous){
				  housPoor+=arrHous-depHous-1+"时";
				  minutePoor=60-depMinute+arrMinute+"分";
				  housPoor+=minutePoor;
			  }else{
				  housPoor=(24-depHous+arrHous)-1+"时";
				  minutePoor=60-depMinute+arrMinute+"分";
				  housPoor+=minutePoor;
			}
			  
		  }else{
			  if(arrHous>depHous){
				  housPoor+=arrHous-depHous+"时";
				  minutePoor=arrMinute-depMinute+"分";
				  housPoor+=minutePoor;
			  }else{
				  housPoor=(24-depHous+arrHous)+"时";
				  minutePoor=arrMinute-depMinute+"分";
				  housPoor+=minutePoor;
			}
		  }
		  return housPoor;
	}
 
}
