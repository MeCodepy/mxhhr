(function ($) {
    $.fn.City = function () {
        var f = null;
        var b = true;
        var g = null;
		var city_hidden=null;
        var c = new Array();
		var city_data=CityIataData;
		
        this.Bind = function (p, m, hid) {
            document.onclick = h;
            b = false;
            f = p;
            g = m;
			city_hidden=hid;
            if (f != null) {
                $(f).keyup(function () {
                    i();
                });
                $(f).mouseout(function () {
                    document.onclick = j
                });
                $(f).mouseover(function () {
                    b = false;
                    document.onclick = h
                });
                if (g != null) {
                    $(g).mouseout(function () {
                        document.onclick = j
                    });
                    $(g).mouseover(function () {
                        b = false;
                        document.onclick = h
                    })
                }
                var q = $(f).offset();
                var k = q.left;
                var n = q.top;
                var o = $(f).outerHeight();
                d();
                $("div.citypanel").css("top", n + o);
                $("div.citypanel").css("left", k);
                $("div.citypanel").show();
                $("div.citypanel").find("ul.tab-nav li").removeClass("selected");
                $("div.citypanel").find("ul.tab-nav li:eq(0)").addClass("selected");
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel").hide();
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel:eq(0)").show();
                $("div.citypanel div.tab-content").find("a").click(function () {
                    $(f).val($(this).html());
					//$(f).attr('data',$(this).attr('data'));
					if(city_hidden !=null){
						$(city_hidden).val( $(this).attr('data'));
					}
                    i();
                });
                $(f).focus()
            }
        };
        var d = function () {
			var tab_html="";
			var pannel_html="";
			if(city_data !=null){
				for(var tab in city_data){
					var tabname = city_data[tab].tabname;
					var tabdata = city_data[tab].tabdata;
					if(tab==0){
						tab_html += '<li class="selected">'+tabname+'</li>';
					}else{
						tab_html += '<li class="">'+tabname+'</li>';
					}
					pannel_html += '<div class="tab-pannel">';
					for(var idx in tabdata){
						var dt=tabdata[idx].dt;
						var dd=tabdata[idx].dd;
						pannel_html += "<dl><dt>"+dt+"</dt><dd>";
						for(var ix in dd){
							var name=dd[ix].n;
							var code=dd[ix].c;
							pannel_html += '<a href="javascript:void(0);" data="'+code+'">'+name+"</a>";
						}
						pannel_html += "</dd></dl>";
					}
					pannel_html += "</div>";
				}
			}
            $("div.citypanel").remove();
            var k = '<div class="citypanel">';
            k += '<div class="tip">\u70ED\u95E8\u57CE\u5E02(\u652F\u6301\u6C49\u5B57/\u62FC\u97F3/\u82F1\u6587\u5B57\u6BCD)<a href="javascript:;" title="关闭"></a></div>';
            k += '<ul class="tab-nav">';
			k += tab_html;
            k += "</ul>";
            k += '<div class="tab-content">'+pannel_html+'</div>';
            k += "</div>";
            $(document.body).append(k);
            $("div.citypanel").find("ul.tab-nav li").click(function () {
                var l = $(this).index();
                $("div.citypanel").find("ul.tab-nav li").removeClass("selected");
                $(this).addClass("selected");
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel").hide();
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel:eq(" + l + ")").show()
            });
            $("div.citypanel").find("ul.tab-nav li").removeClass("selected");
            $("div.citypanel").find("ul.tab-nav li:eq(0)").addClass("selected");
            $("div.citypanel").find("div.tab-content").find("div.tab-pannel").hide();
            $("div.citypanel").find("div.tab-content").find("div.tab-pannel:eq(0)").show();
            $("div.citypanel").find("div.tip").find("img").click(function () {
                i();
            });
            $("div.citypanel").mouseover(function () {
                b = false;
                document.onclick = h
            });
            $("div.citypanel").mouseout(function () {
                document.onclick = j
            })
        };
        var j = function () {
            if (!b) {
                i();
            }
        };
        var h = function () { };
        var i = function () {
            b = true;
            $("div.citypanel").hide()
        };
    };
    $.fn.IntCity = function (iata_data) {
        var f = null;
        var b = true;
        var g = null;
		var city_hidden=null;
        var c = new Array();
        var city_data = iata_data;
        this.Bind = function (p, m, hid) {
            document.onclick = h;
            b = false;
            f = p;
            g = m;
			city_hidden=hid;
            if (f != null) {
                $(f).keyup(function () {
                    i();
                });
                $(f).mouseout(function () {
                    document.onclick = j
                });
                $(f).mouseover(function () {
                    b = false;
                    document.onclick = h
                });
                if (g != null) {
                    $(g).mouseout(function () {
                        document.onclick = j
                    });
                    $(g).mouseover(function () {
                        b = false;
                        document.onclick = h
                    })
                }
                var q = $(f).offset();
                var k = q.left;
                var n = q.top;
                var o = $(f).outerHeight();
                d();
                $("div.citypanel").css("top", n + o);
                $("div.citypanel").css("left", k);
                $("div.citypanel").show();
                $("div.citypanel").find("ul.tab-nav li").removeClass("selected");
                $("div.citypanel").find("ul.tab-nav li:eq(0)").addClass("selected");
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel").hide();
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel:eq(0)").show();
                $("div.citypanel div.tab-content").find("a").click(function () {
                    $(f).val($(this).attr('title'));
					//$(f).attr('data',$(this).attr('data'));
					if(city_hidden !=null){
						$(city_hidden).val( $(this).attr('data'));
					}
                    i();
                });
                $(f).focus()
            }
        };
        var d = function () {
			var tab_html="";
			var pannel_html="";
			if(city_data !=null){
			    for (var tab in city_data) {
			        var tabname = city_data[tab].k.toUpperCase();
			        var tabdata = city_data[tab].v;
			        if (tab == 0) {
			            tab_html += '<li class="selected">' + tabname + '</li>';
			        } else {
			            tab_html += '<li class="">' + tabname + '</li>';
			        }
			        pannel_html += '<div class="tab-pannel">';
			        for (var idx in tabdata) {
			            var dt = tabdata[idx].c;
			            var dd = tabdata[idx].l;
			            pannel_html += "<dl><dt>" + dt + "</dt><dd>";
			            for (var ix in dd) {
			                var name = dd[ix].n;
			                var code = dd[ix].c;
			                pannel_html += "<a href=\"javascript:void(0);\" data=\"" + code + "\" title=\"" + name + "\">" + name + "</a>";
			            }
			            pannel_html += "</dd></dl>";
			        }
			        pannel_html += "</div>";
			    }
			}
            $("div.citypanel").remove();
            var k = '<div class="citypanel">';
            k += '<div class="tip">支持中文/拼音/英文输入<a href="javascript:;" title="关闭"></a></div>';
            k += '<ul class="tab-nav">';
			k += tab_html;
            k += "</ul>";
            k += '<div class="tab-content">'+pannel_html+'</div>';
            k += "</div>";
            $(document.body).append(k);
            $("div.citypanel").find("ul.tab-nav li").click(function () {
                var l = $(this).index();
                $("div.citypanel").find("ul.tab-nav li").removeClass("selected");
                $(this).addClass("selected");
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel").hide();
                $("div.citypanel").find("div.tab-content").find("div.tab-pannel:eq(" + l + ")").show()
            });
            $("div.citypanel").find("ul.tab-nav li").removeClass("selected");
            $("div.citypanel").find("ul.tab-nav li:eq(0)").addClass("selected");
            $("div.citypanel").find("div.tab-content").find("div.tab-pannel").hide();
            $("div.citypanel").find("div.tab-content").find("div.tab-pannel:eq(0)").show();
            $("div.citypanel").find("div.tip>a").click(function () {
                i();
            });
            $("div.citypanel").mouseover(function () {
                b = false;
                document.onclick = h
            });
            $("div.citypanel").mouseout(function () {
                document.onclick = j
            })
        };
        var j = function () {
            if (!b) {
                i();
            }
        };
        var h = function () { };
        var i = function () {
            b = true;
            $("div.citypanel").hide()
        };
        var analyse=function(data){
            if(data == null || data == undefined){return "";}
            var reg = new RegExp("\\(([a-zA-Z0-9]{3})\\)");
		    var arr = data.match(reg);
		    if(arr != null && arr != undefined){
			    if(arr.length==2){
				    return arr[1];
			    }
		    }
		    return "";
        };
    };
    $.fn.idnoTip = function () {
        var _Idno = null;
        var _Idno_Tip = null;
        this.bind = function (element) {
            _Idno = element;
            if (_Idno != null) {
                $(_Idno).blur(function () {
                    $(_Idno_Tip).hide();
                });
                $(_Idno).focus(function () {
                    var val = $(this).val();
                    if (val.length == 0)
                        return false;
                    analyse($(this));
                    location($(this));
                });
                $(_Idno).keypress(function (e) {
                    var idtype = $(this).attr("idtype");
                    var val = $(this).val();
                    if (val.length == 18 && e.which != 8 && idtype == "identity")
                        return false;
                });
                $(_Idno).keyup(function () {
                    var idno = $(this).val();
                    if (idno.length > 0) {
                        if ($(_Idno_Tip).is(":hidden")) {
                            location($(this));
                        }
                    } else {
                        if ($(_Idno_Tip).is(":visible")) {
                            $(_Idno_Tip).hide();
                        }
                    }
                    analyse($(this));
                });
            }
        };
        var load = function () {
            _Idno_Tip = document.createElement("div");
            $(_Idno_Tip).attr("class", "blurTip");
            $(_Idno_Tip).html("");
            $(_Idno_Tip).hide();
            $(document.body).append(_Idno_Tip);
        };
        var analyse = function (element) {
            var idno = $(element).val();
            var i1 = "", i2 = "", i3 = "";
            if (idno.length > 6)
                i1 = idno.substr(0, 6);
            else
                i1 = idno;
            if (idno.length > 14) {
                i2 = idno.substr(6, 8);
                i3 = idno.substring(14, idno.length > 18 ? 18 : idno.length);
            } else
                i2 = idno.substring(6, idno.length);
            $(_Idno_Tip).html(i1 + "&nbsp;&nbsp;" + i2 + "&nbsp;&nbsp;" + i3);
        };
        var location = function (element) {
            var idtype = $(element).attr("idtype");
            if (idtype != "identity")
                return false;
            var pos = $(element).offset();
            var l = pos.left;
            var t = pos.top;
            var w = $(element).outerWidth();
            var h = $(element).outerHeight();
            var p = $(element).css("padding-top");
            var tp = $(_Idno_Tip).css("padding-left");
            var reg = /\d{1,}/;
            var res = reg.exec(p);
            p = parseInt(res[0]);
            res = reg.exec(tp);
            tp = parseInt(res[0]);
            $(_Idno_Tip).width(w - (tp * 2) - 2);
            $(_Idno_Tip).css("left", l);
            $(_Idno_Tip).css("top", (t - h - p + 4));
            $(_Idno_Tip).show();
        };
        load();
    };
})(jQuery);