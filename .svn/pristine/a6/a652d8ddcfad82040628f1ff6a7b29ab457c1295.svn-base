/**
 * 订单确认
 */
require(["index_common"], function (icommon) {
    require(["private.airinter.confirm"]);
});
define("private.airinter.confirm",["jquery", "jtemplates", "tool/fun", "tool/data_country"], function ($, tpl, fun, country) {
    var init = function () {
        var b64 = fun.base64_dec(data.data);
        var param = JSON.parse(b64);
        var token = fun.base64_dec(param.token);
        var json = JSON.parse(token);
        $("#flight_info_list").setTemplateElement("flts_list_template");
        $("#flight_info_list").setParam("date_substr", fun.date_substr);
        $("#flight_info_list").setParam("total_times", fun.total_times);
        $("#flight_info_list").setParam("date_format", fun.date_format);
        $("#flight_info_list").processTemplate(json).show();
        //联系人
        $("#contact").val(param.contact);
        $("#mobile").val(param.mobile);
        $("#email").val(param.email);
        //乘机人
        initPsgs(param.psgs);
        //价格
        psgChange(param);
        //btn
        initBtn();
        $(".markget").click(function(){
            var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(!myreg.test($(".phone-input").val())){
            	alert("请填写有效的手机号码！");
            	return false;
        	}
            $.post("Login/code",{"userCode":$(".phone-input").val(),"userName":$("#contact").val()},function(data){
            	$(".warningDiv").text(data.msg);
            	$(".warningDiv").removeAttr("hidden");  
            })
            
        });
        $(".vt_submit").click(function(){
        	var code=$(".verify-code-input").val().trim();
        	if(!code){
        		alert("请正确输入验证码！");
        		return false;
        	}
        	$.post("Login/checkCode",{"code":$(".verify-code-input").val(),"userName":$("#contact").val()},function(data){
        		if(data.statu){
        			$("#frmSubmit").submit();
        		}else{
        			alert(data.Msg);
        			return;
        		}
        		 
            })
        	
        })
    };
    $(".closea").click(function(){
    	$(".keep").removeAttr("style");
		$(".outBag").attr("hidden","true");
    });
    var initPsgs = function (json) {
        $("#psg_list").empty();
        $("#psg_list").setTemplateElement("psg_list_template");
        $("#psg_list").setParam("country", nameCountry);
        $("#psg_list").processTemplate(json).show();
    };
    var nameCountry = function (iata) {
        for (var tab in country) {
            var tabdata = country[tab];
            for (var idx in tabdata) {
                var dd = tabdata[idx].v;
                for (var ix in dd) {
                    var ll = dd[ix].l;
                    for (var lx in ll) {
                        var name = ll[lx].n;
                        var code = ll[lx].c;
                        if (iata == code) {
                            return name;
                        }
                    }
                }
            }
        }
        return "";
    };
    var psgChange = function (param) {
        var token = fun.base64_dec(param.token);
        var json = JSON.parse(token);

        var len = $("#psg_list").find(".passenger_info").length;
        //计算价格
        var price = json.price, fee = json.fee, insure = 0;

        //insure
        //0,null,"",false,undefined,NaN  is false
        if (Boolean(param.insures) === false) {
            param.insures = new Array();
        }
        for (var k in param.insures) {
            insure += param.insures[k].price;
        }

        var total = (price + fee + insure) * len;
        var temp = {
            price: price,
            fee: fee,
            one: (price + fee + insure),
            post: 0,
            num: len,
            total: total,
            ins: param.insures
        };
        $("#total_price").setTemplateElement("total_price_template");
        $("#total_price").processTemplate(temp).show();
        if (param.insures.length > 0) {
            $("#insure_box").setTemplateElement("insure_template");
            $("#insure_box").processTemplate(param.insures);
        }
    };
    var initInsure = function (json) {

    };
    var initBtn = function () {
        $("a.order_submit").click(function (){
        	
        	//验证是否登录
        	$.post("Login","",function(data){
        		if(data.Login){
        			 $("#frmSubmit").submit();
        		}
        		else{
        			//全局隐藏
        			$(".keep").attr("style","background-color: #000;display: block;height: 100%; left: 0;opacity: 0.5;position: fixed;top: 0;width: 100%; z-index: 999;");
        			$(".outBag").removeAttr("hidden");
        			$(".phone-input").val($("#mobile").val());
        		}
        	})
        	
           
        });
        $("a.order-submit").click(function () { history.go(-1);});
    };
    
    
    //style="background-color: #000;display: block;height: 100%; left: 0;opacity: 0.5;position: fixed;top: 0;width: 100%; z-index: 999;"
   
    
    init();
});


//倒计时
var countdown=90; 
function settime(obj) { 
	$(".markget").attr("style","background-color:#cccccc;cursor: default");
    if (countdown == 0) { 
        $(obj).removeAttr("disabled");   
        $(".markget").removeAttr("style");
        obj.value="获取验证码";
        countdown = 60; 
        return;
    } else { 
        $(obj).attr("disabled", true); 
        obj.value="重新发送(" + countdown + ")"; 
        countdown--; 
    }  
setTimeout(function() { 
    settime(obj) }
    ,1000)   
}