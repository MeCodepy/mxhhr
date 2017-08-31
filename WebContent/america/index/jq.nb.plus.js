function isIos() {
	return browser.versions.ios || browser.versions.iPhone || browser.versions.iPad
}
var browser = {
	versions: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1,
			presto: u.indexOf('Presto') > -1,
			webKit: u.indexOf('AppleWebKit') > -1,
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
			mobile: !! u.match(/AppleWebKit.*Mobile.*/),
			ios: !! u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf("Adr"),
			iPhone: u.indexOf('iPhone') > -1,
			iPad: u.indexOf('iPad') > -1,
			webApp: u.indexOf('Safari') == -1
		}
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

function popTao(img, title, content, tip, op) {
	var pop;
	var poph;
	if (op == 9158) {
		if (isIos()) {
			poph = ""
		} else {
			poph = "height:140px"
		}
	}
	if (!document.querySelector(".popw")) {
		var frag = document.createDocumentFragment(),
			html = "";
		var popw = document.createElement("div");
		frag.appendChild(popw);
		popw.className = "popw";
		html += "<div class='popwbg'></div>";
		html += "<div class='popwbox taobox'>";
		html += "<div class='taologo btndh' style='background-image:url(" + img + ")' id='" + img + "'><img src='" + img + "' style='    width:60px;height:60px;top:-30px;left:50%;border-radius:40px;'></div>";
		html += "<div style='background-image:url(../addons/bsht_tbk/res/images/nbclose.png);position:absolute;right:50px;width:30px;height: 30px;background-size: cover;background-repeat: no-repeat;bottom: -18px;margin-right: -60px;box-shadow: 0 2px 5px #999;border: 2px solid #fff;border-radius: 50px;' class='nbclose'></div>";
		html += "<div class='taocon'>";
		html += "<div class='taotitle'>";
		html += "<div class='popwtitle taotitle'>长按虚线框内文字——>>全选——>>复制</div>";
		html += "<div class='popwcontent' id='taocontent'></div>";
		html += "</div></div>";
		html += "<div style='width:100%;'><div class='taotip' style='width:40%;display:inline-block;'></div><div class='taotip2' style='display:block;float:right;' id='nbcopy'></div></div>";
		html += "<div class='taokaobox'>";
		if (!tip) {
			if (isIos()) {
				html += "<a href='javascript:;' class='taokao taokaocopy'><img src='../addons/bsht_tbk/res/images/ioscopy.png'  style='width:100%;max-width:650px'></a>"
			} else {
				html += "<a href='javascript:;' class='taokao taokaocopy'><img src='../addons/bsht_tbk/res/images/androidcopy.png' style='width:100%;max-width:650px'></a>"
			}
		} else {
			html += "<a href='javascript:;' class='taokao'>" + tip + "</a>"
		}
		html += "</div>";
		html += "</div>";
		popw.innerHTML = html;
		document.body.appendChild(frag);
		selection();
		canclepopw();
	}
	if (isIos()) {
		$(".popwcontent").html("<div id='copy_key_ios_nb' class='share' data-taowords='" + content + "'>" + content + "</div>")
	} else {
		content = content.replace(/\<\/?(br|p){1}\s*\/?\s*\>/gim, "");
		content = content.replace(/&nbsp;/gim,"");
		$(".popwcontent").html("<textarea style='border:0;" + poph + "' class='copybox share' id='copy_key_android_nb' data-taowords='" + content + "'>" + content + "</textarea>")
	}
	pop = document.querySelector(".popw");
	pop.style.display = "-webkit-box";
	$(".popwbox").addClass("popwboxshow");
	$(".copybox").on("input", function() {
		$(this).val(content)
	});
	if ($(".partnerwx").length < 1) {
		selection();
	} else {
		$(".copybox").hide();
	}
}
function canclepopw() {
	$(".popwcancel,.popwbg,.popwcomfirm,.nbclose").click(function() {
		$(".popwbox").removeClass("popwboxshow");
		$(".popw").remove()
	})
}
function userAction(name, content, headerportrait) {
	var act;
	if (!document.querySelector(".useract")) {
		var useract = document.createElement("div");
		document.body.appendChild(useract);
		useract.className = "useract"
	}
	act = document.querySelector(".useract");
	act.innerHTML = "<img src='" + headerportrait + "'>" + name + ":" + content;
	act.classList.add("useractshow")
}
function openWXimg() {
	$(".pjimg").each(function(index) {
		var imgsObj = $(this).find("div");
		var imgs = new Array();
		for (var i = 0; i < imgsObj.size(); i++) {
			imgs.push(imgsObj.eq(i).attr('src'))
		}
		$(this).find("div").on('click', function() {
			WeixinJSBridge.invoke('imagePreview', {
				'current': $(this).attr('src'),
				'urls': imgs
			})
		})
	})
}
function openWXimgnb(obj) {
	var img = obj.id;
	wx.previewImage({
		'current': img,
		'urls': [img]
	})
}
function nbclose() {
	$('.popwbox').hide();
	$('.popwbg').hide()
}
function selection() {
	if (isIos()) {
		$("#copy_key_ios_nb").css("display", "block");
		$("#copy_key_android_nb").css("display", "none")
	} else {
		$("#copy_key_ios_nb").css({
			"display": "block",
			opacity: 0,
			position: "relative",
			"z-index": 1
		});
		$("#copy_key_android_nb").height($("#copy_key_ios_nb").height() + "px");
		$("#copy_key_ios_nb").hide()
	}
	/*
	document.addEventListener("selectionchange", function(e) {
		if (window.getSelection().anchorNode.parentNode.id == 'copy_key_ios_nb' || window.getSelection().anchorNode.id == 'copy_key_ios_nb') {
			var key = document.getElementById('copy_key_ios_nb');
			window.getSelection().selectAllChildren(key)
		}
	}, false);
	*/
}


function getios() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/iphone/i) == "iphone" || ua.match(/ipad/i) == "ipad") {
		return true;
	} else {
		return false;
	}
}
