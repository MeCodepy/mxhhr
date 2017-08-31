define(["tool/base64"], function (b64) {
    return {
        date_format: function (str, fmt) {
            var d = new Date(str.replace(/-/g, '/'));
            var o = {
                "M+": d.getMonth() + 1,//月份
                "d+": d.getDate(),//日
                "h+": d.getHours(),//小时
                "m+": d.getMinutes(),//分
                "s+": d.getSeconds(),//秒
                "q+": Math.floor((d.getMonth() + 3) / 3),//季度
                "S": d.getMilliseconds()//毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        },
        param: function (key) {
            var result = location.search.match(new RegExp("[\?\&]" + key + "=([^\&]+)", "i"));
            if (result == null || result.length < 1) {
                return "";
            }
            return decodeURIComponent(result[1]);
        },
        urldecode: function (obj) {
            return decodeURIComponent(obj);
        },
        total_segs: function(arr) {
            return arr.length;
        },
        total_times: function (time) {
            var hour = parseInt(time / 60);
            var min = time % 60;
            var str = "";
            if (hour > 0)
                str += hour + "小时";
            if (min > 0)
                str += min + "分";
            return str;
        },
        get_time: function (time){
        	var txt="";
        	var diff = (new Date().getTime() - time.getTime());
        	if(diff < 60 * 1000){
        		txt = "刚刚";
        	}else if(diff < 60 * 60 * 1000){
        		var m = parseInt(diff/60000);
        		txt = m + "分钟";
        	}else if(diff < 24 * 60 * 60 * 1000){
        		var h = parseInt(diff/3600000);
        		txt = h + "小时";
        	}else if(diff < 30 * 24 * 60 * 60 * 1000){
        		var d = parseInt(diff/(24 * 60 * 60 * 1000));
        		txt = d + "天";
        	}else{
        		txt = "一个月前";
        	}
        	return txt;
        },
        get_week: function (date) {
            var week = "";
            var reg = /^(\d{4})-(\d{2})-(\d{2})$/
            if (reg.test(date)) {
                var d = new Date(date.replace(/-/g, '/'));
                switch (d.getDay()) {
                    case 0: week = '日';
                        break;
                    case 1: week = '一';
                        break;
                    case 2: week = '二';
                        break;
                    case 3: week = '三';
                        break;
                    case 4: week = '四';
                        break;
                    case 5: week = '五';
                        break;
                    case 6: week = '六';
                        break;
                }
                week = (d.getMonth() + 1) + "月" + d.getDate() + "日（周" + week + "）";
            }
            return week;
        },
        get_time_route: function (str) {
            var d = new Date(str.replace(/-/g, '/'));
            var time = (d.getMonth() + 1) + "月" + d.getDate() + "日 " + d.getHours() + ":" + d.getMinutes();
            return time;
        },
        get_hour:function(str){
            var d = new Date(str.replace(/-/g, '/'));
            return d.getHours();
        },
        get_time_millis: function (str) {
            var d = new Date(str.replace(/-/g, '/'));
            return d.getTime();
        },
        get_day_cn: function (date) {
            var day = "";
            var reg = /^(\d{4})-(\d{2})-(\d{2})$/
            if (reg.test(date)) {
                var d = new Date(date.replace(/-/g, '/'));
                day = (d.getMonth() + 1) + "月" + d.getDate() + "日";
            }
            return day;
        },
        date_substr: function (time, len) {
            //if (time.length != 16) { return ""; }
            if (len == 5) {
                return time.substring(11);
            }
            if (len == 10) {
                return time.substring(0, 10);
            }
        },
        base64_enc: function (input) {
            var temp = JSON.stringify(input);
            temp = b64.enc(temp);
            return temp;
        },
        base64_dec: function (input) {
            var temp = b64.dec(input);
            return temp;
        },
        idno_to_birth: function (idno) {
            var year = idno.substr(6, 4);
            var month = idno.substr(10, 2);
            var day = idno.substr(12, 2);
            //var d = new Date(year + "/" + month + "/" + day);
            return year + "-" + month + "-" + day;
        },
        idno_to_sex: function (idno) {
            var temp = idno.substr(16, 1);
            var and = (temp & 1);
            return and;
        },
        sex2name: function (sex) {
            var re = "女";
            switch (sex) {
                case 0: re = "女";
                    break;
                case 1: re = "男";
                    break;
            }
            return re;
        },
        age2name: function (age) {
            var re = "成人";
            switch (sex) {
                case 1: re = "成人";
                    break;
                case 2: re = "儿童";
                    break;
                case 3: re = "婴儿";
                    break;
            }
            return re;
        },
        id2name: function (id) {
            var re = "身份证";
            switch (id) {
                case 1: re = "身份证";
                    break;
                case 2: re = "护照";
                    break;
                case 3: re = "其他";
                    break;
            }
            return re;
        },
        stop_html: function (arr) {
            var temp = new Array();
            var org_html = "";
            var dst_html = "";
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].stop == true) {
                    temp.push(arr[i].name);
                }
                if (arr[i].index == 1) {
                    org_html = "<td class=\"right\">" + arr[i].name + "</td>";
                }
                if (arr[i].last == true) {
                    dst_html = "<td class=\"left\">" + arr[i].name + "</td>";
                }
            }
            var html = org_html;
            html += "<td class=\"center\"><div class=\"arrow\">";
            if (temp.length > 0) {
                html += "<i>转</i>";
            }
            html += "</div><div>" + temp.join("，") + (temp.length == 0 ? "&nbsp;" : "") + "</div></td>";
            html += dst_html;
            return html;
        }
    };
});