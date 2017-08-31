/**
 * 填写订单
 */
require(["index_common"], function (icommon) {
    require(["private.fill"]);
});
define("private.fill", ["jquery", "tips", "tool/fun", "jtemplates", "tool/input_valid", "jcal", "city", "tool/data_country"], function ($, tip, fun, tpl, valid, jcal, city, country) {
    var init = function () {
        var b64 = fun.base64_dec(data.token);
        var json = JSON.parse(b64);
        $("#flight_info_list").setTemplateElement("flts_list_template");
        $("#flight_info_list").setParam("date_substr", fun.date_substr);
        $("#flight_info_list").setParam("total_times", fun.total_times);
        $("#flight_info_list").setParam("date_format", fun.date_format);
        $("#flight_info_list").processTemplate(json).show();

        //psg_item_template   passenger_list
        initPsgs();
        initInsure(json);

        //init history passengers handle
        $("#psg_history_list").on("click", "a.p_h_item", function () {
            if ($(this).hasClass("p_h_item_selected") == false) {
                var adt = 0, chd = 0, inf = 0;
                var adtSel = 0, chdSel = 0, infSel = 0;
                $("#psg_list").find("input.class_ptype").each(function () {
                    var ptype = $(this).val();
                    if (ptype == "ADT") { adt++; }
                    if (ptype == "CHD") { chd++; }
                    if (ptype == "INF") { inf++; }
                });
                $("#psg_history_list>a.p_h_item_selected").each(function () {
                    var d = $(this).attr("d");
                    var str = fun.base64_dec(d);
                    var json = JSON.parse(str);
                    if (json.ptype == "ADT") {
                        adtSel++;
                    }
                    if (json.ptype == "CHD") {
                        chdSel++;
                    }
                    if (json.ptype == "INF") {
                        infSel++;
                    }
                });
                var d = $(this).attr("d");
                var str = fun.base64_dec(d);
                console.log(str);
                var json = JSON.parse(str);
                if (json.ptype == "ADT" && adtSel >= adt) {
                    console.log("已选中的成人数量达到上限，不能再勾选成人！");
                    return false;
                }
                if (json.ptype == "CHD" && chdSel >= chd) {
                    console.log("已选中的儿童数量达到上限，不能再勾选儿童！");
                    return false;
                }
                if (json.ptype == "INF" && infSel >= inf) {
                    console.log("已选中的婴儿数量达到上限，不能再勾选婴儿！");
                    return false;
                }
            }

            $(this).toggleClass("p_h_item_selected");
            
            psgHistorySelected();
        });
    };
    var initBtn = function () {
        $("a.order-submit").click(function () {
            var bool = valid.v_form($(this).parents("form"), $);
            console.log(bool);
            if (bool == false) { return; }
            $("#frm_order").submit();
        });
        $("a.order-goBack").click(function () {
            window.close();
        });
    };
    var initInput = function () {
        $("#psg_list").on("focus", "input.class_firstname", function () {
            var msg = "名字如：Xiao Ming（拼音或英文";
            inputTips(this, msg);
        }).on("focus", "input.class_lastname", function () {
            var msg = "姓氏如：Wang（拼音或英文）";
            inputTips(this, msg);
        }).on("focus", "input.class_idno", function () {
            var msg = "为了确保出行，请准确填写登机证件号码";
            inputTips(this, msg);
        }).on("focus", "input.class_birth", function () {
            var msg = "请准确填写乘客出生日期";
            inputTips(this, msg);
        }).on("focus", "input.class_card_valid", function () {
            var msg = "请准确填写证件有效期，且旅行结束日比证件到期日须至少早6个月";
            inputTips(this, msg);
        }).on("focus", "input.input_country", function () {
            var msg = "请选择乘客国籍";
            inputTips(this, msg);
        }).on("focus", "input.input_card_country", function () {
            var msg = "请选择乘客证件签发国家";
            inputTips(this, msg);
        }).on("click", "input.input_country", function () {
            $('.icbcJcalendar').hide();
            $("div.citypanel").hide();
            new $.fn.IntCity(country.data_country).Bind(this, null, $('input.class_country'));
        }).on("click", "input.input_card_country", function () {
            $('.icbcJcalendar').hide();
            $("div.citypanel").hide();
            new $.fn.IntCity(country.data_country).Bind(this, null, $('input.class_card_country'));
        });
        $(".contact_info").on("focus", "input[name=contact]", function () {
            var msg = "请填写联系人";
            inputTips(this, msg);
        }).on("focus", "input[name=mobile]", function () {
            var txt = $.trim($(this).val());
            var msg = "请填写联系手机号码";
            if (!valid.v_mobile(txt)) {
                msg = "请填写正确手机号码";
            }
            inputTips(this, msg);
        });
        $("#history_passengers_result").on("input", ".inputSeaholder", function () {
            psgHistory();
        });
        $("#history_passengers_result").on("click", "a.cb", function () {
            $(this).toggleClass("cb_checked");
            if ($(this).is(".cb_checked")) {
                var pid = $(this).attr('uid');
                var sex = $(this).attr('sex');
                var age = $(this).attr('age');
                var idtype = $(this).attr('idtype');
                var idno = $(this).attr('idno');
                var country = $(this).attr("country");
                var birth = $(this).attr('birth');
                var lname = $(this).attr('last_name');
                var fname = $(this).attr('first_name');
                var idcountry = $(this).attr('id_country');
                var idvalid = $(this).attr('id_valid');
                var json = {
                    pid: pid,
                    idx: 1,
                    sex: sex,
                    lastname: lname,
                    firstname: fname,
                    country: country,
                    birth: birth,
                    idtype: idtype,
                    idno: idno,
                    card_country: idcountry,
                    card_valid: idvalid,
                    sexname: new Date().getTime()
                };

                var last = $('#passenger_list').find('div.passenger_info:last');
                var l_name = $(last).find("input[name=passenger_name_last]").val();
                var l_idno = $(last).find("input[name=certificate_no]").val();
                if (l_name == "" && l_idno == "") {
                    $(last).remove();
                }
                var temp = $("#psg_item_template").html();
                temp = temp.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                temp = $.trim(temp);
                temp = temp.replace(/^<\!\[CDATA\[([\s\S]*)\]\]>$/im, '$1');
                temp = temp.replace(/^<\!--([\s\S]*)-->$/im, '$1');

                var tp = $.createTemplate(temp);
                tp.setParam("country", nameCountry);
                var html = $.processTemplateToText(tp, json);
                $('#passenger_list').append(html);
            } else {
                var len = $('#passenger_list').find('div.passenger_info').length;
                if (len > 1) {
                    var pid = $(this).attr('uid');
                    $('#passenger_list').find('div.passenger_info[key=' + pid + ']').remove();
                } else {
                    var json = {
                        pid: 0,
                        idx: 1,
                        sex: 1,
                        lastname: "",
                        firstname: "",
                        country: "CN",
                        birth: "",
                        idtype: 1,
                        idno: "",
                        card_country: "CN",
                        card_valid: "",
                        sexname: new Date().getTime()
                    };
                    $('#passenger_list').setTemplateElement("psg_item_template");
                    $("#passenger_list").setParam("country", nameCountry);
                    $('#passenger_list').processTemplate(json).show();
                }
            }
            var pos = $("#passenger_list>div").last().offset();
            $("body,html").animate({ scrollTop: (pos.top - 50) }, 700);
            psgChange();
        });
    };
    var initBirth = function () {
        var target = $("#psg_list").find("input.class_birth");
        var temp = new Date();
        temp.setFullYear(temp.getFullYear() - 30, 0, 1);
        $("#birth_box").icbcJcal({
            multi: true,
            multi_parent: "#psg_list",
            multi_child: "input.class_birth",
            input_target: null,
            day: temp,
            days: 1,
            showMonths: 1,
            monthSelect: false,
            invDay: true,
            yearMonthSelect: true,
            minYear: temp.getFullYear() - 100,
            maxYear: new Date().getFullYear()
        });
    };
    var initCardValid = function () {
        var target = $("#psg_list").find("input.class_card_valid");
        var temp = new Date();
        temp.setFullYear(temp.getFullYear() + 1, 0, 1);
        $("#card_valid_box").icbcJcal({
            multi: true,
            multi_parent: "#psg_list",
            multi_child: "input.class_card_valid",
            input_target: null,
            day: temp,
            days: 1,
            showMonths: 1,
            monthSelect: false,
            invDay: true,
            yearMonthSelect: true,
            minYear: new Date().getFullYear(),
            maxYear: temp.getFullYear() + 20
        });
    };
    var inputTips = function (obj, msg) {
        $(obj).tips({
            side: 1,
            msg: msg,
            time: 0,
            x: 0,
            y: 0
        });
    };
    var psgChange = function () {
        var len = $("#psg_list").find(".passenger_info").length;


        //insure
        var insArr = new Array();
        var insIdx = 0;
        $("#insure_box").find("div.input_hidden").html("");//clear
        $("#insure_box").find("input[type=checkbox]:checked").each(function () {
            var key = $(this).val();
            var txt = $(this).attr("txt");
            var pr = $(this).attr("pr");
            var max = $(this).attr("max");

            insArr.push({
                "idx": insIdx,
                "key": key,
                "txt": txt,
                "price": Number(pr),
                "maxPay": max
            });
            insIdx++;
        });

        //计算价格
        var b64 = fun.base64_dec(data.token);
        var json = JSON.parse(b64);
        var price = json.price, fee = json.fee, insure = 0;
        for (var k in insArr) {
            insure += insArr[k].price;
        }
        var total = (price + fee + insure) * len;
        var temp = {
            price: price,
            fee: fee,
            one: (price + fee + insure),
            post: 0,
            num: len,
            total: total,
            ins: insArr
        };
        $("#total_price").setTemplateElement("total_price_template");
        $("#total_price").processTemplate(temp).show();
        if (insArr.length > 0) {
            $("#insure_box").find("div.input_hidden").setTemplateElement("insure_hidden_template");
            $("#insure_box").find("div.input_hidden").processTemplate(insArr);
        }
    };
    var psgHistory = function () {
        $("#psg_history_list").hide();
        $.ajax({
            url: "air/myPsgHis/?" + Math.random(),
            type: "POST",
            cache: false,
            dataType: "json",
            error: function (a, b, c) {
                console.log(c);
            },
            success: function (result) {
                console.log(result);
                if (result.succeed) {
                    $("#psg_history_list").setTemplateElement("psg_history_template");
                    $("#psg_history_list").setParam("enc", fun.base64_enc);
                    $("#psg_history_list").processTemplate(result.data).show();
                }
            },
            complete: function (req, status) {
                console.log(status);
            }
        });
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
    var initPsgs = function () {
        $("#psg_list").empty();
        var json = [clone(psgValue)];
        $("#psg_list").setTemplateElement("psg_list_template");
        $("#psg_list").setParam("country", nameCountry);
        $("#psg_list").processTemplate(json).show();
        psgChange();
        psgHistory();
    };
    var old = function () {
        //更换人数
        $("#btn_change_psg").click(function () {
            if ($('.qiehuanaa').css('display') == "none") {
                $('.qiehuanaa').css('display', 'block');
                $('.aaaa').css('display', 'none');
            }
        });
        $("#btn_change_psg_cancel").click(function () {
            $('.qiehuanaa').css('display', 'none');
            $('.aaaa').css('display', 'block');
        });
        $("#btn_change_psg_submit").click(function () {
            var adult = Number($("#sel_psg_adult").val());
            var chd = Number($("#sel_psg_chd").val());
            var inf = Number($("#sel_psg_inf").val());
            $("#sel_psg_adult_txt").html(adult + "人");
            $("#sel_psg_chd_txt").html(chd + "人");
            $("#sel_psg_inf_txt").html(inf + "人");
            $("#btn_change_psg_cancel").click();
            var json = Array();
            var idx = 1;
            for (var i = 0; i < adult; i++) {
                var temp = clone(psgValue);
                temp.age = "ADT";
                temp.idx = idx;
                json.push(temp);
                idx++;
            }
            for (var i = 0; i < chd; i++) {
                var temp = clone(psgValue);
                temp.age = "CHD";
                temp.idx = idx;
                json.push(temp);
                idx++;
            }
            for (var i = 0; i < inf; i++) {
                var temp = clone(psgValue);
                temp.age = "INF";
                temp.idx = idx;
                json.push(temp);
                idx++;
            }
            
            $("#psg_list").setTemplateElement("psg_list_template");
            $("#psg_list").setParam("country", nameCountry);
            $("#psg_list").processTemplate(json).show();
            psgChange();
            $("#psg_history_list>a.p_h_item").removeClass("p_h_item_selected");
        });

        //共享隐藏显示
        $('.section-flight-base').find('.flight-codeshare-info').hover(function () {
            $(this).find('.gongxianghd').show();
            $(this).addClass('flight-codeshare-info_hover');
        }, function () {
            $(this).find('.gongxianghd').hide();
            $(this).removeClass('flight-codeshare-info_hover');
        });

        //退改签及购买说明显示内容
        $('.tn-order-flight-rule').find('.col-rule-info').hover(function () {
            $(this).find('.tn-flight-rule').show();
            $(this).addClass('col-rule-info_hover');
        }, function () {
            $(this).find('.tn-flight-rule').hide();
            $(this).removeClass('col-rule-info_hover');
        });

        //机型隐藏显示
        $('.section-flight-base').find('.flight-craftType-info').hover(function () {
            $(this).find('.eye-containers').show();
            $(this).addClass('flight-craftType-info_hover');
        }, function () {
            $(this).find('.eye-containers').hide();
            $(this).removeClass('flight-craftType-info_hover');
        });



        $(".teshu").click(function () {
            if ($(this).css("color") == "rgb(1, 149, 255)") {
                $(this).css({ "color": "#c5c5c5" });
            } else {
                $(this).css({ "color": "#0195ff" });
            }
        });
    };
    var clone = function (obj) {
        var o;
        if (typeof obj == "object") {
            if (obj === null) {
                o = null;
            } else {
                if (obj instanceof Array) {
                    o = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        o.push(clone(obj[i]));
                    }
                } else {
                    o = {};
                    for (var j in obj) {
                        o[j] = clone(obj[j]);
                    }
                }
            }
        } else {
            o = obj;
        }
        return o;
    };
    var psgHistorySelected = function(){
        var arr = new Array();
        var idx = 1;
        var adt = 0, chd = 0, inf = 0;
        var adtSel = 0, chdSel = 0, infSel = 0;
        $("#psg_list").find("input.class_ptype").each(function () {
            var ptype = $(this).val();
            if (ptype == "ADT") { adt++; }
            if (ptype == "CHD") { chd++; }
            if (ptype == "INF") { inf++; }
        });
        $("#psg_history_list>a.p_h_item_selected").each(function () {
            var d = $(this).attr("d");
            var str = fun.base64_dec(d);
            var json = JSON.parse(str);
            if (json.ptype == "ADT") {
                if (adtSel >= adt) {
                    return;//continue;
                }
                adtSel++;
            }
            if (json.ptype == "CHD") {
                if (chdSel >= chd) {
                    return;//continue;
                }
                chdSel++;
            }
            if (json.ptype == "INF") {
                if (infSel >= inf) {
                    return;//continue;
                }
                infSel++;
            }
            var item = clone(psgValue);
            item.pid = json.id;
            item.idx = idx;
            item.age = json.ptype;
            item.sex = json.sex.key;
            item.firstname = json.firstname;
            item.lastname = json.lastname;
            item.idtype = json.idtype;
            item.idno = json.idno;
            item.card_country = json.idnation;
            item.card_valid = json.idvalid;
            item.birth = json.birth;
            item.country = json.nation;
            arr.push(item);
            idx++;
        });
        while (adtSel < adt) {
            var item = clone(psgValue);
            item.age = "ADT";
            item.idx = idx;
            arr.push(item);
            adtSel++;
            idx++;
        }
        while (chdSel < chd) {
            var item = clone(psgValue);
            item.age = "CHD";
            item.idx = idx;
            arr.push(item);
            chdSel++;
            idx++;
        }
        while (infSel < inf) {
            var item = clone(psgValue);
            item.age = "INF";
            item.idx = idx;
            arr.push(item);
            infSel++;
            idx++;
        }
        $("#psg_list").setTemplateElement("psg_list_template");
        $("#psg_list").setParam("country", nameCountry);
        $("#psg_list").processTemplate(arr).show();
        psgChange();
    };
    var psgValue = {
        pid: 0,
        idx: 1,
        age: "ADT",//ADT CHD INF
        sex: 0,//女0 男1
        firstname: "",
        lastname: "",
        country: "CN",
        birth: "",
        idtype: "PP",//NI PP OT
        idno: "",
        card_country: "CN",
        card_valid: ""
    };
    var insureData = [
            { "key": "accident", "name": "航空意外险", "price": 60, "max": "100万" },
            { "key": "delay", "name": "延误险", "price": 60, "max": "300元" },
            { "key": "travel", "name": "国际旅行险", "price": 155, "max": "130万" }
    ];
    var initInsure = function (flts) {
        var data = clone(insureData);
        var len = flts.segs.length;
        for (var k in data) {
            data[k].price = data[k].price * len;
        }
        $("#insure_box").setTemplateElement("insure_template");
        $("#insure_box").processTemplate(data).show();
        $("#insure_box").on("change", "input[type=checkbox]", function () {
            psgChange();
        });
    };
    init();
    initBtn();
    initInput();
    initBirth();
    initCardValid();
    old();
});