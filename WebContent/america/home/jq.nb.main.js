var lastTime = 0;
var prefixes = "webkit moz ms o".split(" ");
var requestAnimationFrame = window.requestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame;
for (var i = 0; i < prefixes.length; i++) {
	if (requestAnimationFrame && cancelAnimationFrame) {
		break
	}
	prefix = prefixes[i];
	requestAnimationFrame = requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
	cancelAnimationFrame = cancelAnimationFrame || window[prefix + "CancelAnimationFrame"] || window[prefix + "CancelRequestAnimationFrame"]
}
if (!requestAnimationFrame || !cancelAnimationFrame) {
	requestAnimationFrame = function(a, b) {
		var c = new Date().getTime();
		var d = Math.max(0, 16 - (c - lastTime));
		var e = window.setTimeout(function() {
			a(c + d)
		}, d);
		lastTime = c + d;
		return e
	};
	cancelAnimationFrame = function(a) {
		window.clearTimeout(a)
	}
}
window.requestAnimationFrame = requestAnimationFrame;
window.cancelAnimationFrame = cancelAnimationFrame;

function closeview(a) {
	var b = document.createElement("a");
	b.className = "close";
	if (!document.querySelector(".close")) {
		document.body.appendChild(b);
		b.href = "javascript:;";
		b.style.display = "none";
		b.style.width = "7.5rem";
		b.style.height = "45px";
		b.style.position = "fixed";
		b.style.left = "0";
		b.style.bottom = "0";
		b.style.lineHeight = "45px";
		b.style.textAlign = "center";
		b.style.color = "#888";
		b.style.zIndex = "1000000"
	} else {
		$(".close").removeClass("none")
	}
}
var setScrT;
var openveiewani;
window.addEventListener("scroll", function() {
	imgScrollIndex = 0;
	var a = document.body.scrollTop;
	//console.log("imgScrollIndex:", a)
}, false);
setTimeout(function() {
	window.addEventListener("popstate", function(e) {
		$(".close").click();
		$(".close").hide();
		$(".openview").hide();
		$(".loadingbar").hide();
		$(".nknet").not(".scroll-wrapper .nknet").removeAttr("style");
		var a = $(".goods-list li").innerWidth();
		$(".goods-list li img").css("height", a);
		window.location.hash
	}, false)
}, 300);

function prevent(a) {
	a.preventDefault()
}

function showloading() {
	if (document.querySelector(".isnowdataappending")) return;
	var a = document.createElement("div");
	a.className = "isnowdataappending";
	a.style.cssText = "background:#f1f1f1;width:100%;height:35px;line-height:35px;text-align:center;font-size:12px;color:#666;";
	a.innerHTML = "正在加载...";
	if (document.querySelector("#lists")) {
		document.querySelector("#lists").parentNode.appendChild(a)
	}
}
$(function() {


    $(document).delegate("a", "click", function (e) {
        if ($(this).hasClass("new-coupon")) return;

        var url = $(this).attr("href");
        if($("#list_box").length == 0) return;
        //e.preventDefault();
        //$(this).attr("target", "_blank");

        //isLoadingOrIsLoaded("", true, false);
        window.localStorage.setItem("top", document.body.scrollTop);
        window.localStorage.setItem("html", $("#list_box").parent().html());
        window.localStorage.setItem("url", window.location.href);
    });

    if(window.localStorage.getItem("url") == window.location.href && window.localStorage.getItem("top") != "null") {
        $("#list_box").parent().html(window.localStorage.getItem("html"));
        document.body.scrollTop = window.localStorage.getItem("top");
        window.localStorage.setItem("top", "null");
        window.localStorage.setItem("html", "null");
        //window.localStorage.setItem("url", null);
    }



	/*
	$(document).delegate(".picCon a", "click", function() {
		if ($(this).hasClass("new-coupon")) return;
		$(".loadingbar").show();
		event.preventDefault();
		window.sct = document.body.scrollTop;
		if ($(".scroll-wrapper").length < 1) {
			var g = document.createElement("div");
			g.className = "scroll-wrapper";
			document.body.appendChild(g)
		}
		showloading();
		var h = $(this).attr("data-id");
		$.ajax({
			type: "get",
			url: $(this).attr("href"),
			dataType: "text",
			success: function(a) {
				pushHistory(h);
				window.location.hash = "#nbtbk";
				$(".openview").show();
				$(".close").hide();
				$(".hbdxk").fadeOut(200);
				var b = $(".scroll-wrapper");
				var c = a.indexOf("<body>");
				var d = a.indexOf("</body>");
				b.html(a.slice(c + 7, d));
				b.addClass("openview");
				$(".nknet").not(".scroll-wrapper .nknet").css({
					opacity: 0,
					position: "fixed",
					overflow: "hidden"
				});
				var e = 100;
				var f = function() {
						openveiewani = requestAnimationFrame(f);
						b.css({
							top: (e -= e / 5) + "%"
						});
						if (e <= .1) {
							b.css({
								top: "0%"
							})
						}
					};
				f();
				setTimeout(function() {
					closeview(h);
					$(".close").addClass("none")
				}, 400);
				$(".loadingbar").hide()
			}
		})
	})
	*/
});