require(["index_common"], function (icommon) {
    require(["jquery","tool/input_valid","layer"], function ($, valid,lay) {
        $("#captcha").click(function(){
        	$(this).attr("src", "captcha?"+Math.random());
        });
        $("input[name=captcha]").keydown(function (e) {
            if (e.keyCode == 13) {
                $("#btn_login").click();
            }
        });
        $("#btn_login").click(function(){
        	var acc = $.trim($("input[name=userCode]").val());
        	var pwd = $.trim($("input[name=userPwd]").val());
        	var code = $.trim($("input[name=captcha]").val());
        	if(!valid.v_mobile(acc) && !valid.v_email(acc)){
        		$("input[name=userCode]").focus();
        		return;
        	}
        	
        	if(!/^([a-zA-Z0-9]{6,})$/.test(pwd)){
        		$("input[name=userPwd]").focus();
        		return;
        	}
        	
        	if(!/^([a-zA-Z0-9]{5})$/.test(code)){
        		$("input[name=captcha]").focus();
        		return;
        	}
        	$("#frm_login").attr("action","login/auth").attr("target","_self").submit();
        });
        if(/^true$/i.test( error.error)){
        	console.log(error.msg);
        	//alert(error.msg);
        	layer.msg(error.msg);
        	$("input[name=userCode]").focus();
        }
    });
});