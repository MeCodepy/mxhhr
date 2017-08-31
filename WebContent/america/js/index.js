require(["index_common"], function (icommon) {
    require(["jquery", "private.index","slideBox"], function ($, air,slideBox) {
        $("a.chang").click(function () {
            var temp = $("#org_city").val();
            var temp_code = $("input[name=org_city]").val();
            $("#org_city").val($("#dst_city").val());
            $("input[name=org_city]").val($("input[name=dst_city]").val());
            $("#dst_city").val(temp);
            $("input[name=dst_city]").val(temp_code);
        });
        //手风琴动画效果
        var _index7 = 0;
        $(".flash4 ul li").mouseover(function (){
            _index7 = $(this).index();
            $(this).stop().stop().animate({ width: 538 }, 500).siblings("li").stop().animate({ width: 107 }, 500);
            $(".imgCen").eq(_index7).css("display", "block").siblings(".imgCen").css("display", "none");
            $(".imgBot").eq(_index7).css("display", "none").siblings(".imgBot").css("display", "block");
            $(".imgTop img").eq(_index7).addClass("tm").siblings(".imgTop img").removeClass("tn");
        });
        $(".flash4 ul li").mouseout(function () {
            $(".imgBot").css("display", "block");
        });
        $('#carousel').slideBox();
    });
});
define("private.index", ['jquery', 'jcal', "layer", "tool/cookie", "city", "suggest_inter", "tool/data_iata_america"], function ($, jcal, lay, cookie, city, suggest, inata) {
    var now = new Date();
    now.setDate(now.getDate() + 2);
    $('#org_date').val(now.Format("yyyy-MM-dd"));
    InitJCal($('#org_date'), $('#jcal_panel'), 2, false, null, function (day) {
    	var type = $("input[name=trip_type]").val();
    	if(type=="S"){
    		return;
    	}
        var _month = day.getMonth() + 1;
        if (_month < 10)
            _month = '0' + _month;
        var _day = day.getDate();
        if (_day < 10)
            _day = '0' + _day;
        var day_str = day.getFullYear() + '/' + _month + '/' + _day;
        var temp = new Date(day_str);
        temp.setDate(temp.getDate() + 3);
        $('#dst_date').val(temp.Format("yyyy-MM-dd"));
    });
    $("#ticketBox>.ticNav").on('click', "li", function () {
    	$("#ticketBox>.ticNav>li").removeClass("active");
    	$(this).addClass("active");
        var type = $(this).attr("d");
        $("input[name=trip_type]").val(type);
        init_date();
    });
    $("#btn_search").click(function () {
        //org_city
        var temp = $.trim($("#org_city").val());
        if (temp == "") {
            $("#org_city").click();
            return false;
        }
        //dst_city
        temp = $.trim($('#dst_city').val());
        if (temp == "") {
            $('#dst_city').click();
            return false;
        }
        //org_date
        var reg = /^(\d{4})-(\d{2})-(\d{2})$/
        temp = $.trim($('#org_date').val());
        if (!reg.test(temp)) {
            $("#org_date").click();
            $("#org_date").focus();
            return false;
        }
        //dst_date
        var type = $("input[name=trip_type]").val();
        if (type == "D") {
            temp = $.trim($('#dst_date').val());
            if (!reg.test(temp)) {
                $("#dst_date").click();
                $("#dst_date").focus();
                return false;
            }
        }
        //valid domestic
        var dep = $("input[name=org_city]").val();
        var arr = $("input[name=dst_city]").val();
        if (domestic(dep) && domestic(arr)) {
            if (!confirm("您选择的是国内航线，是否继续预订?")) {
                $("#dst_city").click();
                return;
            }
        }
        $("#frm_search").submit();
    });
    var init = function () {
        $(".hotCity").on("click", "a.liaojie", function () {
            var dst = $(this).attr("d");
            //list?org_date=2017-05-20&inf=0&seat=normal&org_city=SHA&dst_city=LAX&trip_type=S
            var date = new Date();
            date.setDate(date.getDate() + 5);
            var params = {
                org_city: $("#localCity").val(),
                dst_city: dst,
                org_date: date.Format("yyyy-MM-dd"),
                trip_type: "S",
                seat: "normal"
            };
            if ($("#frmHotCity").length == 0) {
                $("body").append("<form id=\"frmHotCity\"></form>");
            }
            $("#frmHotCity").attr("action", "list");
            $("#frmHotCity").attr("method", "get");
            $("#frmHotCity").attr("target", "_self");
            $("#frmHotCity").empty();
            for (var k in params) {
                var ipt = "<input type=\"hidden\" name=\"" + k + "\" value=\"" + params[k] + "\"/>";
                $("#frmHotCity").append(ipt);
            }
            $("#frmHotCity").submit();
        });
        $(".page-ticket").on("click", "a.time_limit_discount", function () {
            var dep = $(this).attr("dep");
            var arr = $(this).attr("arr");
            var date = new Date();
            date.setDate(date.getDate() + 5);
            var params = {
                org_city: dep,
                dst_city: arr,
                org_date: date.Format("yyyy-MM-dd"),
                trip_type: "S",
                seat: "normal"
            };
            if ($("#frmHotCity").length == 0) {
                $("body").append("<form id=\"frmHotCity\"></form>");
            }
            $("#frmHotCity").attr("action", "list");
            $("#frmHotCity").attr("method", "get");
            $("#frmHotCity").attr("target", "_self");
            $("#frmHotCity").empty();
            for (var k in params) {
                var ipt = "<input type=\"hidden\" name=\"" + k + "\" value=\"" + params[k] + "\"/>";
                $("#frmHotCity").append(ipt);
            }
            $("#frmHotCity").submit();
        });
    };
    var init_inter_iata = function () {
        //移除事件
        $("#org_city").unbind("click");
        $("#org_city").unbind("suggest");
        $("#dst_city").unbind("click");
        $("#dst_city").unbind("suggest");

        $('#org_city').click(function () {
            $('.icbcJcalendar').hide();
            $("div.citypanel").hide();
            new $.fn.IntCity(inata.data_iata_america.gn).Bind(this, null, $('input[name=org_city]'));
        });
        $('#dst_city').click(function () {
            $('.icbcJcalendar').hide();
            $("div.citypanel").hide();
            new $.fn.IntCity(inata.data_iata_america.gj).Bind(this, null, $('input[name=dst_city]'));
        });
        var array = new Array();
        for (var tab in inata.data_iata_america.gn) {
            array.push(inata.data_iata_america.gn[tab]);
        }
        for (var tab in inata.data_iata_america.gj) {
            array.push(inata.data_iata_america.gj[tab]);
        }
        $("#org_city").suggestInter( array, { attachObject: "#org_city_tips", dataContainer: "input[name=org_city]" });
        $("#dst_city").suggestInter( array, { attachObject: "#dst_city_tips", dataContainer: "input[name=dst_city]" });
    };
    var init_city = function () {
        $("#localCity").val("CAN");//默认值
        $("input[name=org_city]").val("CAN");
        $("#org_city").val("广州");
        var time = new Date().getTime();
        $.ajax({
            url: "https://ws.qunar.com/ips.jcp?_=" + time,
            type: "get",
            cache: false,
            dataType: "jsonp",
            error: function (a, b, c){
                console.log(c);
            },
            success: function (result){
                console.log(result);
                var city = result.city;
                var code = get_iata_code(city);
                if (/^([a-zA-Z0-9]{3})$/.test(code)) {
                    $("#localCity").val(code);
                    $("input[name=org_city]").val(code);
                    $("#org_city").val(city);
                }
            },
            complete: function (req, status) {
                console.log(status);
            }
        });
    };
    var get_iata_code = function (city) {
        var tabdata = inata.data_iata_america.gn;
        for (var idx in tabdata) {
            var dd = tabdata[idx].v;
            for (var ix in dd) {
                var ll = dd[ix].l;
                for (var lx in ll) {
                    var name = ll[lx].n;
                    var code = ll[lx].c;
                    if (city == name) {
                        return name;
                    }
                }
            }
        }
        return "";
    };
    var domestic = function (city) {
        var tabdata = inata.data_iata_america.gn;
        for (var idx in tabdata) {
            var dd = tabdata[idx].v;
            for (var ix in dd) {
                var ll = dd[ix].l;
                for (var lx in ll) {
                    var code = ll[lx].c;
                    if (city == code) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    var init_date = function(){
        var type = $("input[name=trip_type]").val();
        if (type == "S") {
            $("#dst_date").attr("disabled", "disabled");
            $("#dst_date").unbind("click");
            $("#dst_date").val("");
        } else if (type == "D") {
            $("#dst_date").removeAttr("disabled");
            InitJCal($("#dst_date"), $("#dst_date_panel"), 2, false, $("#org_date"), null);
        }
    };
    init();
    init_inter_iata();
    init_city();
    init_date();
});