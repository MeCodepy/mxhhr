/*document.writeln("<ins id=\"LXB_CONTAINER\" class=\"lxb-container\"> <ins id=\"lt_tip\" class=\"lxb-cb-input-tip\" style=\"\"> <ins class=\"lxb-cb-input-tip-mobile\">手机请直接输入：如1860086xxxx<\/ins> <ins class=\"lxb-cb-input-tip-tel\">座机前加区号：如0105992xxxx<\/ins> <ins class=\"lxb-cb-input-tip-em\"> 输入您的电话号码，点击通话，稍后您将接到我们的电话，该通话对您 <em>完全免费<\/em> ，请放心接听！ <\/ins> <ins class=\"lxb-cb-input-tip-cursor\"><\/ins> <\/ins><ins class=\"clear\"><\/ins><input class=\"lxb-cb-input\" type=\"text\" id=\"lt_phone\" maxlength=\"12\" placeholder=\"请输入您的电话号码\" onfocus=\"document.getElementById(\'lt_tip\').style.display=\'block\'\" onblur=\"document.getElementById(\'lt_tip\').style.display=\'none\'\"><ins class=\"lxb-container-btn-hide\" onclick=\"callus();\"><\/ins> <\/ins> ");document.writeln("<link href=\"./callus/callus.css\" rel=\"stylesheet\" type=\"text\/css\" \/>");
*/



var http_request = false;
var callobj;
function makeRequest(url, functionName, httpType, sendData) {
	http_request = false;
	if (!httpType) httpType = "GET";
	if (window.XMLHttpRequest) {
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/plain');
		}
		} else if (window.ActiveXObject) {
			try {
				http_request = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!http_request) {
		alert('Cannot send an XMLHTTP request');
		return false;
	}
	var changefunc="http_request.onreadystatechange = "+functionName;
	eval (changefunc);
	http_request.open(httpType, url, true);
	http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http_request.send(sendData);
	alert("提交成功!我们的机票顾问会尽快与您联系，请留意您的来电！");
}
// 返回操作(AJAX) ///////////////////
function ReturnInnerHTML(){
	if (http_request.readyState == 4) {
	//	alert(http_request.status + http_request.responseText );
		if (http_request.status == 200){
			if(http_request.responseText!="ok"){
				alert("亲，你已经成功提交你的联系方式，稍后请留意我们的客服电话020-81106052，谢谢");
			}else{
//				alert("ok" + http_request.responseText);
			}
		}else if(http_request.status == 500){
			alert("亲，你已经成功提交你的联系方式，稍后请留意我们的客服电话020-81106052，谢谢");
		}
	}
}
function callus(){
	var tel,send;
	tel=document.getElementById("lt_phone").value;
	tel=tel.replace(/^\s\s*/, '').replace(/\s\s*$/, '').replace(/-/g, '');
	if(tel.length==0){
		alert("请输入联系电话!");
		return;
	}else if(tel.length>11 || tel.length<6){
		alert("请输入正确的联系电话!");
		return;
	}else if(checkNum(tel)==false){
		alert("联系电话只能是数字,请输入正确的联系电话!");
		return;
	}

//	send="tel=" + tel + "&curl=" + escape(document.URL).replace(/\./g, '{@}') + "&reurl=" + escape(getCookie("calluskey")).replace(/\./g, '{@}'); 
	content="网页电话呼叫<br>电话号码：" + tel + "<br>";
	content+="咨询页面：<a target='_blank' href='" + document.URL + "'>" + document.URL + "</a><br>";
	content+="搜索页面：<a target='_blank' href='" + getCookie("calluskey") + "'>" + getCookie("calluskey") + "</a><br>";    
	content=content.replace(/&/g,"%26");
	send="sources=5&contact.contMobile=" + tel + "&order.memo=" + encodeURI(content) + "&contact.contName=" + "网页电话呼叫&contact.contEmail=";


//	makeRequest("http://flight.lutao.com/callus/mail.asp?rand=" + Math.random(),"ReturnInnerHTML","post",send );
	makeRequest("http://www.lutao.com/intentionOrder.action?","ReturnInnerHTML","post",send );
//	alert("呼叫成功!请留意您的来电");
	
}


href=window.location.href; //当前url
ref=document.referrer;  //来路
domain_href=href.substring(7,href.length);
domain_href=domain_href.substring(0,domain_href.indexOf("/"));

domain_ref=ref.substring(7,ref.length);
domain_ref=domain_ref.substring(0,domain_ref.indexOf("/"));
//alert(domain_href + "_____" + domain_ref);
if(domain_href!=domain_ref){
	document.cookie  = 'calluskey=' & ref;
	SetCookie("calluskey",ref)
}
function getCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}
function SetCookie(name,value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 1; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=";// + exp.toGMTString();
}
//是否全是数字,true为是
function checkNum(str){return str.match(/\D/)==null} 

