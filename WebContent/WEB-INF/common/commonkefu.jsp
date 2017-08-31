<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<style type="text/css">
/******************************  固定客服样式   **************************************/
.gdkefu {
    background: rgba(0, 0, 0, 0) url("./america/images/kefubg.png") no-repeat scroll center center;
    height: 280px;
    position: fixed;
    right: 0;
    top: 300px;
    width: 183px;
    z-index: 1000;
}

.zixuna:link {
    color: #fff;
}

.zixuna {
    color: #fff;
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-left: 53px;
    margin-top: 62px;
}
.zixuna:hover{
    color: #fff;
}

.furx {
    color: #fff;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 19px;
    margin-left: -6px;
    margin-top: 30px;
    text-align: center;
}

.lxb-cb-input {
    background: #fff none repeat scroll 0 0;
    border: medium none;
    color: #000;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    margin-left: 22px;
    margin-top: 18px;
    outline: medium none;
    text-align: center;
    width: 134px;
}

.lxb-container-btn-hide {
    color: #fff;
    display: block;
    font-size: 17px;
    margin-left: 54px;
    margin-top: 9px;
}

.dhbg {
    background: rgba(0, 0, 0, 0) url("./america/images/dhbg.png") no-repeat scroll center center;
    bottom: 48px;
    height: 101px;
    left: -238px;
    position: absolute;
    width: 250px;
	display:none;
}

.shouji {
    color: #000;
    font-size: 12.5px;
    margin-left: 28px;
    margin-top: 9.2px;
}
.zuoji {
    color: #000;
    font-size: 12.5px;
    margin-left: 28px;
}

.jims {
    color: #0477bd;
    font-size: 12.5px;
    line-height: 15px;
    margin-top: 3px;
    padding: 0 13px;
    cursor:pointer;
}


</style>

<!--固定客服-->
<div class="gdkefu">
    <a class="zixuna" href="http://www5.53kf.com/webCompany.php?arg=9004442&style=1&kf=lhf,pxj,xz,xje" target="_blank">客服咨询</a>
    <p class="furx">路淘免费服务热线<br/>400-651-8800</p>
    <input onclick="userNavigationa()" class="lxb-cb-input" type="text" id="lt_phone" maxlength="12" placeholder="请输入您的电话" onfocus="document.getElementById('lt_tip').style.display='block'" onblur="document.getElementById('lt_tip').style.display='none'">
    <ins class="lxb-container-btn-hide" onclick="callus();">免费通话</ins> </ins>
    <div class="dhbg" onclick="userbb()">
          <p class="shouji">手机请直接输入：如1860086xxxx</p>
          <p class="zuoji">座机前加区号：如0105992xxxx</p>
          <p class="jims">输入您的电话号码，点击通话，稍后您将接到我们的电话，该通话对您完全免费，请放心接听！</p>
    </div>
</div>



<!--电话代码--> 
<script charset="utf-8" type="text/javascript" src="./america/js/callus.js"></script>
<script>
function userNavigationa(){
	if($('.dhbg').css('display')=="none"){
		$('.dhbg').css('display','block');
		$("#touming").show();
	}else{
    	$('.dhbg').css('display','none');
		$("#touming").hide();
	}
}
function hideMxx(){
	$('.dhbg').css('display','none');
		$("#touming").hide();
}
function userbb(){
	$('.dhbg').css('display','none');
		$("#touming").hide();
}

</script> 

