(function ($) {
    $.fn.Paging = function (options) {
        options = options || {};
        options.target = this;
        $.Paging(options);
        return this;
    };
    $.Paging = function (option) {
        var target = option.target;
        var one_items = option.one_items;
        var total_items = option.total_items;
        var total_pages = option.total_pages;
        var pages = option.pages;
        var callback = option.callback;
        var current_page = 0;

        var InitPage = function () {
            var pageHtml = "";
            current_page = 1;
            var start_page = 0;
            for (var i = start_page; i < (10 + start_page) && i < pages.length; i++) {
                var idx = pages[i].Index;
                var str = pages[i].ItemString;
                var item = "";
                if (current_page == idx) {
                    item = '<strong>' + idx + '</strong>';
                } else {
                    item = '<a href="javascript:;" data="' + i + '">' + idx + '</a>';
                }
                pageHtml += item;
            }
            if (pages.length > 10) {
                var first = '<a href="javascript:;" data="' + 0 + '">首页</a>';
                var last = '<a href="javascript:;" data="' + (pages.length - 1) + '">尾页</a>';
                pageHtml = first + pageHtml + last;
            }
            var html = '<span class="page_total">【查询共<strong>' + total_items + '</strong>条，每页<strong>' + one_items + '</strong>条，共<strong>' + total_pages + '</strong>页，当前第<strong>' + current_page + '</strong>页】</span>';
            html = '<div><span class="page_items">' + pageHtml + '</span>' + html + '</div>';
            $(target).html(html).hide();

            $(target).find('a').click(function () {
                $(target).hide();
                var idx = parseInt($(this).attr('data'));
                console.log(pages[idx].Index);
                if (typeof callback === "function") {
                    callback(pages[idx].ItemString);
                }
                SkipPage(idx);
            });
            //默认执行第一页
            if (typeof callback === "function") {
                callback(pages[0].ItemString);
            }
        };
        var SkipPage = function (p) {
            var pageHtml = "";
            current_page = (p + 1);
            var start_page = p;
            start_page = p - 4;
            if (start_page < 0) {
                start_page = 0;
            }

            if (((pages.length - 1) - p) < 5) {
                start_page = pages.length - 10;
            }
            if (pages.length <= 10) {
                start_page = 0;
            }
            for (var i = start_page; i < (10 + start_page) && i < pages.length; i++) {
                var idx = pages[i].Index;
                var str = pages[i].ItemString;
                var item = "";
                if (current_page == idx) {
                    item = '<strong>' + idx + '</strong>';
                } else {
                    item = '<a href="javascript:;" data="' + i + '">' + idx + '</a>';
                }
                pageHtml += item;
            }
            if (pages.length > 10) {
                var first = '<a href="javascript:;" data="' + 0 + '">首页</a>';
                var last = '<a href="javascript:;" data="' + (pages.length - 1) + '">尾页</a>';
                pageHtml = first + pageHtml + last;
            }
            var html = '<span class="page_total">【查询共<strong>' + total_items + '</strong>条，每页<strong>' + one_items + '</strong>条，共<strong>' + total_pages + '</strong>页，当前第<strong>' + current_page + '</strong>页】</span>';
            html = '<div><span class="page_items">' + pageHtml + '</span>' + html + '</div>';
            $(target).html(html);
            $(target).find('a').click(function () {
                $(target).hide();
                var idx = parseInt($(this).attr('data'));
                console.log(pages[idx].Index);
                if (typeof callback === "function") {
                    callback(pages[idx].ItemString);
                }
                SkipPage(idx);
            });
        };
        InitPage();
    };
})(jQuery);