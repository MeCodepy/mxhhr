//每页显示的条数
var pieces = 5;

$(function(){
	var stats="all";
	$("#pt").html('<div><ul class="page" maxshowpageitem="10" pagelistcount="'+ pieces +'"  id="page"></ul></div>');
	$.post("air/myorderCount",{"stat":stats},function(data){
		 $("#page").initPage(data,1,function(pag){
			   getData(pag,stats);
		    });
	  });
	  
})


function getData(page,stat){
	$("#allList").html('<img class="downloads" src="./america/images/download.gif">');
	$.ajax({
		url:"air/myorderList",
		data : {'page':page,'stat':stat,'pieces':pieces},
		success: function(data){
			var obj=data.obj;
			var html='';
			var status='';
			if(obj.length>0){
				
				for(var i=0;i<obj.length;i++){
					html+='<div class="prfe" >';
					html+='<p>订单号：'+obj[i].exorderId +'<a class="infoorder" target="_top" href="air/orderDetail?orderId='+obj[i].orderId +'">查看订单</a></p>';
					html+='<ul><li><span class="list_pic"><img src="./america/images/logo/'+ obj[i].orderListFlt[0].flt_No.substring(0,2) +'.png"></span>';
					html+='<span class="list_title">';
					var flt=obj[i].orderListFlt;
					for(var j=0;j<flt.length;j++){
						html+='<span class="flight_go"><i>'+flt[j].branch +'</i><i>'+flt[j].flt_No +'</i><i>'+flt[j].depname +'</i><em class="jiantou">&nbsp;</em><i>'+flt[j].arrname +'</i></span>';
					}
					html+='</span><span class="list_money"><em class="yen">¥</em><em class="money_data">'+obj[i].totalPrice +'</em></span>';
					html+='<span class="list_date">';
					for(var k=0;k<flt.length;k++){
						html+='<span>'+flt[k].depday +'</span>';
					}
					html+='</span><span class="list_state">';
					if (obj[i].stat=='009') {
						status='已取消';
					}else if(obj[i].stat=='012'){
						status='待支付';
					}else if(obj[i].stat=='002'){
						status='已付款';
					}else if(obj[i].stat=='011'){
						status='待确认'
					}else if(obj[i].stat=='001'){
						status='出票中'
					}
					
					html+= status + '</span><span class="list_cz">';
					if(obj[i].stat=='012'){
						html+='<a class="order_pay" target="_top" href="air/pay?orderId=' + obj[i].orderId + '">立即支付</a>';
					}
					if(obj[i].stat!='009' && obj[i].stat!='002' && obj[i].stat!='001'){
						html+='<a class="order_cancel_gjjp" href="javascript:cancel(\''+ obj[i].orderId +'\');">取消订单</a>';
					}
					
					html+='</span></li><div style=" clear:both;"></div>';
					html+=' </ul>  ';
					html+='</div> ';
					html+='<div style=" clear: both;">&nbsp;&nbsp;&nbsp;&nbsp;</div>';
				}
			}
			
			$("#allList").html(html);
			
		},
		error : function(){
			alert("后台错误，请联系客服！");
		}
	})
}

function cancel(orderId){
	if(!confirm("确认取消订单？")){
		return false;
	}
	$.ajax({
		url : "air/cancel?orderId=" + orderId, 
		type : "get", 
		success : function(data){
			if(data=="0"){
				alert("取消订单成功！");
				window.location.reload(); 
			}else{
				alert("取消订单失败！请联系客服！");
			}
		},
		error : function(){
			alert("后台错误！");
		}
		
	})
}


function next(stats){
	var id="";
	if(stats=="all"){
		id="all";
	}else if(stats=="012"){
		id="onPayment"
	}else if(stats="002"){
		id="payment";
	}
	   $(".alls").removeAttr("style");
	   $("#"+id).attr("style", "border-left:2px solid #ff7800;	"); 
	   $("#pt").html('<div><ul class="page" maxshowpageitem="10" pagelistcount="'+ pieces +'"  id="page"></ul></div>');
	   
	   $.post("air/myorderCount",{"stat":stats},function(data){
			 $("#page").initPage(data,1,function(pag){
				 getData(pag,stats);
			    });
		  });
}