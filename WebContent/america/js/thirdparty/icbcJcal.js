/*
* jCal calendar multi-day and multi-month datepicker plugin for jQuery
*	version 0.3.6
* Author: Jim Palmer
* Released under MIT license.
*/
(function ($) {
    $.fn.icbcJcal = function (opt) {
        //$.icbcJcal(this, opt);
        var _jCal_DocumentClick = false;
        var jcal_panel = this;
        $(this).mouseout(function () {
            document.onclick = jCalHide;
        });
        $(this).mouseover(function () {
            _jCal_DocumentClick = false;
            document.onclick = jCalNull;
        });
        var jCalHide = function () {
            if (!_jCal_DocumentClick) {
                $('.citypanel').hide();
                $('.icbcJcalendar').hide();
                _jCal_DocumentClick = true;
            }
        };
        var jCalNull = function () {
        };
        var ClickInit = function (opt) {
            try {
                var curd = $(opt.input_target).val();
                var reg = /^(\d{4})-(\d{2})-(\d{2})$/
                if (reg.test(curd)) {
                    curd = new Date(curd.replace(/-/g, '/'));
                    $(jcal_panel).find("div.day").each(function () {
                        var id = $(this).attr("data");
                        var date = new Date(id.replace(/-/g, '/'));
                        if (curd.getTime() == date.getTime())
                            $(this).addClass("selectedDay");
                        else
                            $(this).removeClass("selectedDay");
                        var nowd = new Date();
                        if (date.getFullYear() == nowd.getFullYear() && date.getMonth() == nowd.getMonth() && date.getDate() == nowd.getDate())
                            $(this).html("\u4eca\u5929").addClass("currentDay");
                    });
                }
            } catch (e) { }
        };
        if (opt.input_target != null && opt.input_target != undefined) {
            $(opt.input_target).bind('click', function () {
                $.icbcJcal(jcal_panel, opt);
                $('.citypanel').hide();
                $('.icbcJcalendar').hide();
                var win_width = document.documentElement.clientWidth;
                var win_height = document.documentElement.clientHeight;
                var pos = $(this).offset();
                var l = pos.left;
                if (pos.left > (win_width / 2)) {
                    l = pos.left + $(this).outerWidth(true);
                    $(jcal_panel).css("right", (win_width - l));
                    $(jcal_panel).css("left", 'auto');
                } else {
                    $(jcal_panel).css("right", 'auto');
                    $(jcal_panel).css("left", l);
                }

                //top
                var baseTop = pos.top - $(window).scrollTop();
                if (baseTop > (win_height / 2)) {
                    var h = $(jcal_panel).outerHeight(true);
                    $(jcal_panel).css("top", (pos.top - h));
                } else {
                    $(jcal_panel).css("top", (pos.top + $(this).outerHeight(true)));
                }
                //$(jcal_panel).css("top", (pos.top + $(this).outerHeight(true)));
                //width
                $(jcal_panel).css("width", opt.showMonths * 370);
                $(jcal_panel).show();
                _jCal_DocumentClick = false;
                document.onclick = jCalHide;
                ClickInit(opt);
                return false;
            });
        }
        if (opt.multi == true) {
            $(opt.multi_parent).on("click", opt.multi_child, function () {
                var target_opt = opt;
                target_opt.input_target = this;
                target_opt.callback = function (day, days) {
                    var _month = day.getMonth() + 1;
                    if (_month < 10)
                        _month = '0' + _month;
                    var _day = day.getDate();
                    if (_day < 10)
                        _day = '0' + _day;
                    var day_str = day.getFullYear() + '-' + _month + '-' + _day;
                    $(target_opt.input_target).val(day_str);
                    $(jcal_panel).hide();
                    return true;
                };
                $.icbcJcal(jcal_panel, target_opt);
                $('.citypanel').hide();
                $('.icbcJcalendar').hide();
                var win_width = document.documentElement.clientWidth;
                var pos = $(this).offset();
                var l = pos.left;
                if (pos.left > (win_width / 2)) {
                    l = pos.left + $(this).outerWidth(true);
                    $(jcal_panel).css("right", (win_width - l));
                    $(jcal_panel).css("left", 'auto');
                } else {
                    $(jcal_panel).css("right", 'auto');
                    $(jcal_panel).css("left", l);
                }
                $(jcal_panel).css("top", (pos.top + $(this).outerHeight(true)));
                //width
                $(jcal_panel).css("width", target_opt.showMonths * 370);
                $(jcal_panel).show();
                _jCal_DocumentClick = false;
                document.onclick = jCalHide;
                ClickInit(target_opt);
                return false;
            });
        }
    };
    $.icbcJcal = function (target, opt) {
        opt = $.extend({
            //target input
            input_target: null,
            day: new Date(),
            // date to drive first cal
            days: 1,
            // default number of days user can select
            showMonths: 1,
            // how many side-by-side months to show
            monthSelect: true,
            // show selectable month and year ranges via animated comboboxen
            dCheck: function (day) {
                return true;
            },
            // handler for checking if single date is valid or not
            callback: function (day, days) {
                return true;
            },
            // callback function for click on date
            selectedBG: 'rgb(0, 143, 214)',
            // default bgcolor for selected date cell
            defaultBG: 'rgb(255, 255, 255)',
            // default bgcolor for unselected date cell
            dayOffset: 0,
            // 0=week start with sunday, 1=week starts with monday
            forceWeek: false,
            yearMonthSelect: false,
            minYear: 1900,
            maxYear: 2090,
            //当日期小于今天，显示可选择状态
            invDay: false,
            //历史日历，只能选择小于或者等于当前日期
            historyDay: false,
            // true=force selection at start of week, false=select days out from selected day
            dow: ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'],
            // days of week - change this to reflect your dayOffset
            ml: ['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708', '8\u6708', '9\u6708', '10\u6708', '11\u6708', '12\u6708'],
            ms: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            _target: target // target DOM element - no need to set extend this variable
        },
        opt);
        //opt.day = new Date(opt.day.getFullYear(), opt.day.getMonth(), 1);
		if(opt.yearMonthSelect){
			//opt.day = new Date(1990, 0, 1);
			opt.invDay=true;
		}
		if(opt.input_target != null){
			var temp = $(opt.input_target).val();
			var reg = /(\d{4})-(\d{2})-(\d{2})/
			if (reg.test(temp)) {
			    var tempday = new Date(temp.replace(/-/g, '/'));
			    if (tempday.getFullYear() > opt.minYear && tempday.getFullYear() < opt.maxYear) {
			        opt.day = tempday;
			    }
			}
		}
        if (!$(opt._target).data('days')) $(opt._target).data('days', opt.days);
        $(target).stop().empty();
        if (opt.showMonths == 1) {
            $(target).css("width", "auto");
        }
        for (var sm = 0; sm < opt.showMonths; sm++) {
            if (sm == 1)
                $(target).append('<div class="icbcJcalMo icbcJcalMo_right"></div>');
            else
                $(target).append('<div class="icbcJcalMo"></div>');
        }
        //modify by dwzhao
        $(target).append("<div class=\"icbcJcalclear\"></div>");
        //modify end
        opt.cID = 'c' + $('.icbcJcalMo').length;
        $('.icbcJcalMo', target).each(function (ind) {
            drawCalControl($(this), $.extend({},
            opt, {
                'ind': ind,
                'day': new Date(new Date(opt.day.getTime()).setMonth(new Date(opt.day.getTime()).getMonth() + ind))
            }));
            drawCal($(this), $.extend({},
            opt, {
                'ind': ind,
                'day': new Date(new Date(opt.day.getTime()).setMonth(new Date(opt.day.getTime()).getMonth() + ind))
            }));
        });
        if ($(opt._target).data('day') && $(opt._target).data('days')) reSelectDates(target, $(opt._target).data('day'), $(opt._target).data('days'), opt);
    };
    function drawCalControl(target, opt) {
        var curmon = opt.day.getMonth() + 1;
        if (curmon < 10)
            curmon = "0" + curmon;
        curmon = opt.day.getFullYear() + '-' + curmon;
		
		//select year
		var utc_now = new Date();
		var year_select = '<span class="ySelect"><select class="ymSelect">';
		for (var i = opt.minYear; i <= opt.maxYear; i++) {
			if(i==opt.day.getFullYear()){
				year_select+='<option selected="selected" value="'+i+'">'+i+'</option>';
			}else{
				year_select+='<option value="'+i+'">'+i+'</option>';	
			}
		}
		year_select+='</select>\u5e74</span>';
		//select month
		var month_select='<span class="mSelect"><select class="ymSelect">';
		for(var i=1;i<=12;i++){
			if(i==(opt.day.getMonth()+1)){
				month_select+='<option selected="selected" value="'+(i-1)+'">'+i+'</option>';
			}else{
				month_select+='<option value="'+(i-1)+'">'+i+'</option>';
			}
		}
		month_select+='</select>\u6708</span>';
		
		var monthTitle='';
		if(opt.yearMonthSelect){
			monthTitle=year_select+month_select;
		}else{
			monthTitle='<span class="monthYear">' + opt.day.getFullYear() + '\u5e74</span>' + '<span class="monthName">' + opt.ml[opt.day.getMonth()] + '</span>';
		}
		
        $(target).append('<div class="icbcJcal" data="' + curmon + '">' + ((opt.ind == 0) ? '<div class="left" />' : '') + '<div class="month">' + monthTitle + '</div>' + ((opt.ind == (opt.showMonths - 1)) ? '<div class="right" />' : '') + '</div>');
        if (opt.monthSelect) $(target).find('.icbcJcal .monthName, .icbcJcal .monthYear').bind('mouseover', $.extend({},
        opt),
        function (e) {
            $(this).removeClass('monthYearHover').removeClass('monthNameHover');
            if ($('.icbcJcalMask', e.data._target).length == 0) $(this).addClass($(this).attr('class') + 'Hover');
        }).bind('mouseout',
        function () {
            $(this).removeClass('monthYearHover').removeClass('monthNameHover');
        }).bind('click', $.extend({},
        opt),
        function (e) {
            $('.icbcJcalMo .monthSelector, .icbcJcalMo .monthSelectorShadow').remove();
            var monthName = $(this).hasClass('monthName'),
            pad = Math.max(parseInt($(this).css('padding-left')), parseInt($(this).css('padding-left'))) || 2,
            calcTop = (($(this).offset()).top - ((monthName ? e.data.day.getMonth() : 2) * ($(this).height() + 0)));
            calcTop = calcTop > 0 ? calcTop : 0;
            var topDiff = ($(this).offset()).top - calcTop;
            $('<div class="monthSelectorShadow" style="' + 'top:' + $(e.data._target).offset().top + 'px; ' + 'left:' + $(e.data._target).offset().left + 'px; ' + 'width:' + ($(e.data._target).width() + (parseInt($(e.data._target).css('paddingLeft')) || 0) + (parseInt($(e.data._target).css('paddingRight')) || 0)) + 'px; ' + 'height:' + ($(e.data._target).height() + (parseInt($(e.data._target).css('paddingTop')) || 0) + (parseInt($(e.data._target).css('paddingBottom')) || 0)) + 'px;">' + '</div>').css('opacity', 0.01).appendTo($(this).parent());
            $('<div class="monthSelector" style="' + 'top:' + calcTop + 'px; ' + 'left:' + (($(this).offset()).left) + 'px; ' + 'width:' + ($(this).width() + (pad * 2)) + 'px;">' + '</div>').css('opacity', 0).appendTo($(this).parent());
            for (var di = (monthName ? 0 : -2), dd = (monthName ? 12 : 3); di < dd; di++) $(this).clone().removeClass('monthYearHover').removeClass('monthNameHover').addClass('monthSelect').attr('id', monthName ? (di + 1) + '_1_' + e.data.day.getFullYear() : (e.data.day.getMonth() + 1) + '_1_' + (e.data.day.getFullYear() + di)).html(monthName ? e.data.ml[di] : (e.data.day.getFullYear() + di)).css('top', ($(this).height() * di)).appendTo($(this).parent().find('.monthSelector'));
            var moSel = $(this).parent().find('.monthSelector').get(0),
            diffOff = $(moSel).height() - ($(moSel).height() - topDiff);
            $(moSel).css('clip', 'rect(' + diffOff + 'px ' + ($(this).width() + (pad * 2)) + 'px ' + diffOff + 'px 0px)').animate({
                'opacity': .92,
                'clip': 'rect(0px ' + ($(this).width() + (pad * 2)) + 'px ' + $(moSel).height() + 'px 0px)'
            },
            'fast',
            function () {
                $(this).parent().find('.monthSelectorShadow').bind('mouseover click',
                function () {
                    $(this).parent().find('.monthSelector').remove();
                    $(this).remove();
                });
            }).parent().find('.monthSelectorShadow').animate({
                'opacity': .1
            },
            'fast');
            $('.icbcJcalMo .monthSelect', e.data._target).bind('mouseover mouseout click', $.extend({},
            e.data),
            function (e) {
                if (e.type == 'click') $(e.data._target).icbcJcal($.extend(e.data, {
                    day: new Date($(this).attr('id').replace(/_/g, '/'))
                }));
                else $(this).toggleClass('monthSelectHover');
            });
        });
		$(target).find('.icbcJcal .ymSelect').bind('change',$.extend({},opt),
			function(e){
				var year = $(this).parents('.month').find('.ymSelect:eq(0)').val();
				var month = $(this).parents('.month').find('.ymSelect:eq(1)').val();
				e.data.day = new Date(year, month, 1);
				$($('.icbcJcalMo', e.data._target)).empty();
				drawCalControl($('.icbcJcalMo:first', e.data._target), e.data);
				drawCal($('.icbcJcalMo:first', e.data._target), e.data);
			}
		);
        $(target).find('.icbcJcal .left').bind('click', $.extend({}, opt),
        function (e) {
            var curstr = $(this).parent().attr("data");
            var curdate = new Date(Date.parse(curstr));
            var nowdate = new Date();
            if (curdate <= nowdate && e.data.showMonths > 1)
                return false;
            if ($('.icbcJcalMask', e.data._target).length > 0)
                return false;
            var mD = {
                w: 0,
                h: 0
            };
            $('.icbcJcalMo', e.data._target).each(function () {
                mD.w += $(this).width() + parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'));
                var cH = $(this).height() + parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom'));
                mD.h = ((cH > mD.h) ? cH : mD.h);
                $(this).addClass("icbcJcalMo_right");
            });
            $(e.data._target).find(".icbcJcalclear").remove();
            $(e.data._target).prepend('<div class="icbcJcalMo"></div>');
            $(e.data._target).append('<div class="icbcJcalclear"></div>');
            e.data.day = new Date($('div[id*=' + e.data.cID + 'd_]:first', e.data._target).attr('id').replace(e.data.cID + 'd_', '').replace(/_/g, '/'));
            e.data.day.setDate(1);
            e.data.day.setMonth(e.data.day.getMonth() - 1);
            drawCalControl($('.icbcJcalMo:first', e.data._target), e.data);
            drawCal($('.icbcJcalMo:first', e.data._target), e.data);
            if (e.data.showMonths > 1) {
                $('.right', e.data._target).clone(true).appendTo($('.icbcJcalMo:eq(1) .icbcJcal', e.data._target));
                $('.left:last, .right:last', e.data._target).remove();
            }
            $(e.data._target).append('<div class="icbcJcalSpace" style="width:' + mD.w + 'px; height:' + mD.h + 'px;"></div>');
            $('.icbcJcalMo', e.data._target).wrapAll('<div class="icbcJcalMask" style="clip:rect(0px ' + mD.w + 'px ' + mD.h + 'px 0px); width:' + (mD.w + (mD.w / e.data.showMonths)) + 'px; height:' + mD.h + 'px;">' + '<div class="icbcJcalMove"></div>' + '</div>');
            //modify by dwzhao
            $('.icbcJcalMove').children('.icbcJcalMo:not(:last)').appendTo($(e.data._target));
            $('.icbcJcalSpace, .icbcJcalMask', e.data._target).empty().remove();
            if ($(e.data._target).data('day')) reSelectDates(e.data._target, $(e.data._target).data('day'), $(e.data._target).data('days'), e.data);
            $(e.data._target).find("div.icbcicbcJcalclear").remove();
            $(e.data._target).append("<div class=\"icbcJcalclear\"></div>");
            $(e.data._target).show();
            //modify end
        });
        $(target).find('.icbcJcal .right').bind('click', $.extend({},
        opt),
        function (e) {
            if (e.data.historyDay == true) {
                var curstr = $(this).parent().attr("data");
                var curdate = new Date(Date.parse(curstr));
                var now = new Date();
                var nowmonth = new Date(now.getFullYear(), now.getMonth(), 1);
                if (curdate >= nowmonth)
                    return false;
            }

            if ($('.icbcJcalMask', e.data._target).length > 0) return false;
            var mD = {
                w: 0,
                h: 0
            };
            $('.icbcJcalMo', e.data._target).each(function () {
                mD.w += $(this).width() + parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'));
                var cH = $(this).height() + parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom'));
                mD.h = ((cH > mD.h) ? cH : mD.h);
                $(this).removeClass("icbcJcalMo_right");
            });
            $(e.data._target).find(".icbcJcalclear").remove();
            if (e.data.showMonths == 1) {
                $(e.data._target).append('<div class="icbcJcalMo"></div>');
            } else {
                $(e.data._target).append('<div class="icbcJcalMo icbcJcalMo_right"></div>');
            }
            $(e.data._target).append('<div class="icbcJcalclear"></div>');
            e.data.day = new Date($('div[id^=' + e.data.cID + 'd_]:last', e.data._target).attr('id').replace(e.data.cID + 'd_', '').replace(/_/g, '/'));
            e.data.day.setDate(1);
            e.data.day.setMonth(e.data.day.getMonth() + 1);
            drawCalControl($('.icbcJcalMo:last', e.data._target), e.data);
            drawCal($('.icbcJcalMo:last', e.data._target), e.data);
            if (e.data.showMonths > 1) {
                $('.left', e.data._target).clone(true).prependTo($('.icbcJcalMo:eq(1) .icbcJcal', e.data._target));
                $('.left:first, .right:first', e.data._target).remove();
            }
            $(e.data._target).append('<div class="icbcJcalSpace" style="width:' + mD.w + 'px; height:' + mD.h + 'px;"></div>');
            $('.icbcJcalMo', e.data._target).wrapAll('<div class="icbcJcalMask" style="clip:rect(0px ' + mD.w + 'px ' + mD.h + 'px 0px); width:' + (mD.w + (mD.w / e.data.showMonths)) + 'px; height:' + mD.h + 'px;">' + '<div class="icbcJcalMove"></div>' + '</div>');

            //modify by dwzhao
            $(".icbcJcalMove").children('.icbcJcalMo:not(:first)').appendTo($(e.data._target));
            $('.icbcJcalSpace, .icbcJcalMask', e.data._target).empty().remove();
            if ($(e.data._target).data('day')) reSelectDates(e.data._target, $(e.data._target).data('day'), $(e.data._target).data('days'), e.data);
            $(".icbcJcalMove").children('.icbcJcalMo:not(:first)').removeClass('');
            $(e.data._target).find("div.icbcicbcJcalclear").remove();
            $(e.data._target).append("<div class=\"icbcJcalclear\"></div>");
            $(e.data._target).show();
            //modify end
        });
    };
    function reSelectDates(target, day, days, opt) {
        return;
    };
    function drawCal(target, opt) {
        for (var ds = 0, length = opt.dow.length; ds < length; ds++)
            $(target).append('<div class="dow">' + opt.dow[ds] + '</div>');
        var fd = new Date(new Date(opt.day.getTime()).setDate(1));
        var ldlm = new Date(new Date(fd.getTime()).setDate(0));
        var ld = new Date(new Date(new Date(fd.getTime()).setMonth(fd.getMonth() + 1)).setDate(0));
        var copt = {
            fd: fd.getDay(),
            lld: ldlm.getDate(),
            ld: ld.getDate()
        };
        var offsetDayStart = ((copt.fd < opt.dayOffset) ? (opt.dayOffset - 7) : 1);
        var offsetDayEnd = ((ld.getDay() < opt.dayOffset) ? (7 - ld.getDay()) : ld.getDay());
        for (var d = offsetDayStart, dE = (copt.fd + copt.ld + (7 - offsetDayEnd)); d < dE; d++) {
            var cur_m = (fd.getMonth() + 1);
            var cur_d = (d - (copt.fd - opt.dayOffset));
            if (cur_m < 10)
                cur_m = "0" + cur_m;
            if (cur_d < 10)
                cur_d = "0" + cur_d;
            var cur_date = fd.getFullYear() + "-" + cur_m + "-" + cur_d;

            //dingwz
            var day_html = "";
            if (d <= (copt.fd - opt.dayOffset)) {
                day_html = '<div id="' + opt.cID + 'd' + d + '" class="pday">' + (copt.lld - ((copt.fd - opt.dayOffset) - d)) + '</div>';
            } else if (d > ((copt.fd - opt.dayOffset) + copt.ld)) {
                day_html = '<div id="' + opt.cID + 'd' + d + '" class="aday">' + (d - ((copt.fd - opt.dayOffset) + copt.ld)) + '</div>';
            } else {
                var clas = ((opt.dCheck(new Date((new Date(fd.getTime())).setDate(d - (copt.fd - opt.dayOffset)))) || opt.invDay) ? 'day' : 'invday');
                if (opt.historyDay) {
                    var cd = new Date(cur_date.replace(/-/g, '/'));
                    var now = new Date();
                    var cnow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    if ((cd.getTime() > cnow.getTime())) {
                        clas = "invday";
                    }
                }
                day_html = '<div id="' + opt.cID + 'd_' + (fd.getMonth() + 1) + '_' + (d - (copt.fd - opt.dayOffset)) + '_' + fd.getFullYear() + '" data="' + cur_date + '" class="' + clas + '">' + (d - (copt.fd - opt.dayOffset)) + '</div>';
            }
            $(target).append(day_html);
            //dingwz
            //$(target).append(((d <= (copt.fd - opt.dayOffset)) ? '<div id="' + opt.cID + 'd' + d + '" class="pday">' + (copt.lld - ((copt.fd - opt.dayOffset) - d)) + '</div>' : ((d > ((copt.fd - opt.dayOffset) + copt.ld)) ? '<div id="' + opt.cID + 'd' + d + '" class="aday">' + (d - ((copt.fd - opt.dayOffset) + copt.ld)) + '</div>' : '<div id="' + opt.cID + 'd_' + (fd.getMonth() + 1) + '_' + (d - (copt.fd - opt.dayOffset)) + '_' + fd.getFullYear() + '" data="' + cur_date + '" class="' + ((opt.dCheck(new Date((new Date(fd.getTime())).setDate(d - (copt.fd - opt.dayOffset)))) || opt.invDay) ? 'day' : 'invday') + '">' + (d - (copt.fd - opt.dayOffset)) + '</div>')));
        }
        $(target).find('div[id^=' + opt.cID + 'd]:first, div[id^=' + opt.cID + 'd]:nth-child(7n+2)').each(function () {
            if (!$(this).hasClass('aday') && !$(this).hasClass('pday')) {
                $(this).addClass("weekday");
            }
        });
        $(target).find('div[id^=' + opt.cID + 'd]:first, div[id^=' + opt.cID + 'd]:nth-child(7n+8)').each(function () {
            if (!$(this).hasClass('aday') && !$(this).hasClass('pday')) {
                $(this).addClass("weekday");
            }
        });

        try {
            if (opt.input_target != null) {
                var curd = $(opt.input_target).val();
                var reg = /^(\d{4})-(\d{2})-(\d{2})$/
                if (reg.test(curd)) {
                    curd = new Date(curd.replace(/-/g, '/'));
                    $(target).find("div.day").each(function () {
                        var id = $(this).attr("data");
                        var date = new Date(id.replace(/-/g, '/'));
                        if (curd.getTime() == date.getTime())
                            $(this).addClass("selectedDay");
                        else
                            $(this).removeClass("selectedDay");
                        var nowd = new Date();
                        if (date.getFullYear() == nowd.getFullYear() && date.getMonth() == nowd.getMonth() && date.getDate() == nowd.getDate())
                            $(this).html("\u4eca\u5929").addClass("currentDay");
                    });
                }
            }
        } catch (e) {
        }

        $(target).find('div[id^=' + opt.cID + 'd]:first, div[id^=' + opt.cID + 'd]:nth-child(7n+2)').before('<br style="clear:both; font-size:0.1em;" />');
        var seldayids = 'div[id^=' + opt.cID + 'd_]:not(.invday)';
        if (opt.showMonths == 1)
            seldayids = 'div[id^=' + opt.cID + 'd_]';
        if (opt.historyDay == true) {
            seldayids = 'div[id^=' + opt.cID + 'd_]:not(.invday)';
        }
        $(target).find(seldayids).bind("mouseover mouseout click", $.extend({}, opt),
        function (e) {
            if ($('.icbcJcalMask', e.data._target).length > 0) return false;
            var osDate = new Date($(this).attr('id').replace(/c[0-9]{1,}d_([0-9]{1,2})_([0-9]{1,2})_([0-9]{4})/, '$1/$2/$3'));
            if (e.data.forceWeek) osDate.setDate(osDate.getDate() + (e.data.dayOffset - osDate.getDay()));
            var sDate = new Date(osDate.getTime());
            if (e.type == 'click') $('div[id*=d_]', e.data._target).stop().removeClass('selectedDay').removeClass('overDay').css('backgroundColor', '');
            for (var di = 0,
            ds = $(e.data._target).data('days'); di < ds; di++) {
                var currDay = $(e.data._target).find('#' + e.data.cID + 'd_' + (sDate.getMonth() + 1) + '_' + sDate.getDate() + '_' + sDate.getFullYear());
                if (e.data.showMonths > 1 && (currDay.length == 0 || $(currDay).hasClass('invday')))
                    break;
                if (e.type == 'mouseover')
                    $(currDay).addClass('overDay');
                else if (e.type == 'mouseout')
                    $(currDay).stop().removeClass('overDay').css('backgroundColor', '');
                else if (e.type == 'click')
                    $(currDay).stop().addClass('selectedDay');
                sDate.setDate(sDate.getDate() + 1);
            }
            if (e.type == 'click') {
                e.data.day = osDate;
                e.data.callback(osDate, di);
                $(e.data._target).data('day', e.data.day).data('days', di);
            }
        });
    };
})(jQuery);

function InitJCal(target, content, months, inv, check_day, call_back) {
    $(content).icbcJcal({
        input_target: target,
        day: new Date(),
        days: 1,
        showMonths: months == null ? 2 : months,
        monthSelect: false,
        invDay: inv == undefined ? false : (inv && true),
        dCheck: function (day) {
            var now = new Date();
            try {
                if (check_day != null) {
                    var temp = $(check_day).val();
                    var reg = /^(\d{4})-(\d{2})-(\d{2})$/
                    if (reg.test(temp)) {
                        now = new Date(temp.replace(/-/g, '/'));
                    }
                }
            } catch (e) { }
            if (now.getFullYear() == day.getFullYear() && now.getMonth() == day.getMonth() && now.getDate() == day.getDate())
                return true;
            return now.getTime() < day.getTime();
        },
        callback: function (day, days) {
            var _month = day.getMonth() + 1;
            if (_month < 10)
                _month = '0' + _month;
            var _day = day.getDate();
            if (_day < 10)
                _day = '0' + _day;
            var day_str = day.getFullYear() + '-' + _month + '-' + _day;
            $(target).val(day_str);
            $('.citypanel').hide();
            $('.icbcJcalendar').hide();
            if (typeof call_back === 'function') {
                call_back(day);
            }
            return true;
        }
    });
}
function InitCardValid(target, content) {
    var temp = new Date();
    temp.setFullYear(temp.getFullYear() + 2, 0, 1);
    $(content).icbcJcal({
        input_target: target,
        day: temp,
        days: 1,
        showMonths: 1,
        monthSelect: false,
        invDay: true,
        yearMonthSelect: true,
        minYear: new Date().getFullYear(),
        maxYear: temp.getFullYear()+50,
        callback: function (day, days) {
            var _month = day.getMonth() + 1;
            if (_month < 10)
                _month = '0' + _month;
            var _day = day.getDate();
            if (_day < 10)
                _day = '0' + _day;
            var day_str = day.getFullYear() + '-' + _month + '-' + _day;
            $(target).val(day_str);
            $('.citypanel').hide();
            $('.icbcJcalendar').hide();
            if (typeof call_back === 'function') {
                call_back(day);
            }
            return true;
        }
    });
}
function InitBirthDay(target, content) {
    var temp = new Date();
    temp.setFullYear(temp.getFullYear() - 30, 0, 1);
    $(content).icbcJcal({
        input_target: target,
        day: temp,
        days: 1,
        showMonths: 1,
        monthSelect: false,
        invDay: true,
        yearMonthSelect: true,
        minYear: temp.getFullYear()-100,
        maxYear: new Date().getFullYear(),
        callback: function (day, days) {
            var _month = day.getMonth() + 1;
            if (_month < 10)
                _month = '0' + _month;
            var _day = day.getDate();
            if (_day < 10)
                _day = '0' + _day;
            var day_str = day.getFullYear() + '-' + _month + '-' + _day;
            $(target).val(day_str);
            $('.citypanel').hide();
            $('.icbcJcalendar').hide();
            if (typeof call_back === 'function') {
                call_back(day);
            }
            return true;
        }
    });
}
function InitHistory(target, content) {
    $(content).icbcJcal({
        input_target: target,
        day: new Date(),
        days: 1,
        showMonths: 1,
        monthSelect: false,
        invDay: true,
        yearMonthSelect: false,
        historyDay: true,
        callback: function (day, days) {
            var _month = day.getMonth() + 1;
            if (_month < 10)
                _month = '0' + _month;
            var _day = day.getDate();
            if (_day < 10)
                _day = '0' + _day;
            var day_str = day.getFullYear() + '-' + _month + '-' + _day;
            $(target).val(day_str);
            $('.citypanel').hide();
            $('.icbcJcalendar').hide();
            if (typeof call_back === 'function') {
                call_back(day);
            }
            return true;
        }
    });
}

// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1,                 //月份 
        "d+": this.getDate(),                    //日 
        "h+": this.getHours(),                   //小时 
        "m+": this.getMinutes(),                 //分 
        "s+": this.getSeconds(),                 //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}