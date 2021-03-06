﻿define(["tool/idcard"], function (idc) {
    var v_name_user = function (val) {
        var reg = /(^[\u4e00-\u9fa5]+$)|(^([a-zA-Z]{1})([a-zA-Z\s]*)([a-zA-Z]{1})$)/;
        return reg.test(val);
    };
    var v_name = function (val) {
        return (val != "");
    };
    var v_name_en = function (val) {
        var reg = /^([a-zA-Z]{1})([a-zA-Z\s]*)([a-zA-Z]{1})$/;
        return reg.test(val);
    };
    var v_tell = function (val) {
        var reg = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^\d{11}$)|(^\d{6,16}$)/;
        return reg.test(val);
    };
    var v_mobile = function (val) {
        var reg = /^\d{11}$/;
        return reg.test(val);
    };
    var v_birth = function (val) {
        var reg = /^\d{4}-\d{2}-\d{2}$/;
        return reg.test(val);
    };
    var v_card_valid = function (val) {
        var reg = /^\d{4}-\d{2}-\d{2}$/;
        if (!reg.test(val)) {
            return false;
        }
        var day = new Date(val.replace(/-/g, '/'));
        var now = new Date();
        if (day <= now) {
            return false;
        }
        return true;
    };
    var v_email = function (val) {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        return reg.test(val);
    };
    var v_int = function (val) {
        var reg = /^-?\d+$/;
        return reg.test(val);
    };
    var v_double = function (val) {
        var reg = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/;
        return reg.test(val);
    };
    var v_pwd = function (val) {
        var reg = /^[a-zA-Z0-9]{6,20}$/;
        return reg.test(val);
    };
    var v_repwd = function (val) {
        var reg = /^[a-zA-Z0-9]{6,20}$/;
        return reg.test(val);
    };
    var v_login_code = function (val) {
        var reg = /^[a-zA-Z0-9]{4}$/;
        return reg.test(val);
    };
    var v_sms_code = function (val) {
        var reg = /^[0-9]{6}$/;
        return reg.test(val);
    };
    var v_w = function (val) {
        return /^(\w{2,20})$/.test(val);
    };
    var v_form = function (obj, $) {
        var reb = true;
        $(obj).find(".verify").each(function () {

            if ($(this).is(":disabled")) {
                return true;//return true 相当于continue; return false 相当于break;
            }

            var temp_reb = true;
            var type = $(this).attr('verify');
            var val = $.trim($(this).val());
            if (type == 'name_user') {
                if (!v_name_user(val)) {
                    temp_reb = false;
                }
            }
            if (type == 'name') {
                if (!v_name(val)) {
                    temp_reb = false;
                }
            }
            if (type == "nameen") {
                if (!v_name_en(val)) {
                    temp_reb = false;
                }
            }
            if (type == 'idno') {
                var idtype = $(this).parent().find('select.idtype').val();
                if (val == '') {
                    temp_reb = false;
                } else {
                    if (idtype == "NI") {
                        if (idc.checkIDCard(val) == false) {
                            temp_reb = false;
                        }
                    }
                }
            }
            if (type == 'birth') {
                if (!v_birth(val)) {
                    temp_reb = false;
                }
            }
            if (type == "card_valid") {
                if (!v_card_valid(val)) {
                    temp_reb = false;
                }
            }
            if (type == 'mobile') {
                if (!v_mobile(val)) {
                    temp_reb = false;
                }
            }
            if (type == 'mobile_noneed') {
                if (val != '') {
                    if (!v_birth(val)) {
                        temp_reb = false;
                    }
                }
            }
            if (type == 'tel') {
                if (!v_tell(val)) {
                    temp_reb = false;
                }
            }
            if (type == "email") {
                if (!v_email(val)) {
                    temp_reb = false;
                }
            }
            if (type == "mobile_email") {
                if (!v_mobile(val) && !v_email(val)) {
                    temp_reb = false;
                }
            }
            if (type == 'int') {
                if (!v_int(val)) {
                    temp_reb = false;
                }
            }
            if (type == 'double') {
                if (!v_double(val)) {
                    temp_reb = false;
                }
            }
            if (type == "pwd") {
                if (!v_pwd(val)) {
                    temp_reb = false;
                }
            }
            if (type == "repwd") {
                if (!v_repwd(val)) {
                    temp_reb = false;
                }
            }
            if (type == "login_code") {
                if (!v_login_code(val)) {
                    temp_reb = false;
                }
            }
            if (type == "sms_code") {
                if (!v_sms_code(val)) {
                    temp_reb = false;
                }
            }
            if (type == "code_20") {
                if (!v_w(val)) {
                    temp_reb = false;
                }
            }
            if (!temp_reb) {
                $(this).css({ "border-color": "#ff6000" });
                $(this).focus();
                reb = false;
            } else {
                var style = $(this).attr("style");
                
                if (null != style && undefined != style) {
                    var reg = /border\-color:(.*?);/i;
                    var temp = style.replace(reg, "");
                    $(this).attr("style", temp);
                }
            }
        });
        return reb;
    };
    var r = {};
    r.v_name_en = v_name_en;
    r.v_idno = idc.checkIDCard;
    r.v_tell = v_tell;
    r.v_mobile = v_mobile;
    r.v_birth = v_birth;
    r.v_card_valid = v_card_valid;
    r.v_email = v_email;
    r.v_int = v_int;
    r.v_double = v_double;
    r.v_form = v_form;
    r.v_pwd = v_pwd;
    return r;
});