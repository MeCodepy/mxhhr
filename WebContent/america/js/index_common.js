require.config({
    baseUrl: "./america/js",
    paths: {
        "jquery": "thirdparty/jquery.min",
        "jtemplates": "thirdparty/jquery-jtemplates",
        "page": "thirdparty/paging",
        "jcal": "thirdparty/icbcJcal",
        "city": "thirdparty/city",
        "suggest": "thirdparty/suggest",
        "suggest_auto": "thirdparty/suggest.auto",
        "suggest_inter": "thirdparty/suggest.inter",
        "ajax_submit": "thirdparty/jquery.form",
        "xjtree": "thirdparty/xjtree",
        "layer": "thirdparty/layer",
        "treetable": "thirdparty/jquery.treetable",
        "jform": "thirdparty/jquery.form",
        "slider": "thirdparty/slider",
        "tips": "thirdparty/jquery.tips",
        "slideBox" : "jquery.slideBox.min"	
    },
    shim: {
        "jtemplates": { deps: ['jquery'] },
        "page": { deps: ['jquery'] },
        "jcal": { deps: ['jquery'] },
        "city": { deps: ['jquery'] },
        "suggest": { deps: ['jquery'] },
        "suggest_auto": { deps: ["jquery"] },
        "suggest_inter": { deps: ['jquery'] },
        "ajax_submit": { deps: ['jquery'] },
        "xjtree": { deps: ['jquery'] },
        "layer": { deps: ['jquery'] },
        "treetable": { deps: ['jquery'] },
        "jform": { deps: ['jquery'] },
        "slider": { deps: ['jquery'] },
        "tips": { deps: ["jquery"] },
        "slideBox" : { deps: ["jquery"] }
    }
});

require(["jquery"], function ($) {
    $.fn.HoverLayer = function () {
        var mouse_in = false;
        this.Bind = function (options) {
            var options = options || {};
            var link = options.link || null;
            var list = options.list || null;
            if (link == null || list == null)
                return;
            $(link).mouseover(function () {
                $(list).show();
            });
            $(link).mouseout(function () {
                if (mouse_in) {
                    $(list).show();
                } else {
                    $(list).hide();
                }
            });
            $(list).mouseover(function () {
                $(list).show();
                mouse_in = true;
            });
            $(list).mouseout(function () {
                mouse_in = false;
                $(list).hide();
            });
        };
    };
    var hover = new $.fn.HoverLayer();
    hover.Bind({
        link: $(".gui_toolkit_float>div.gui_toolkit_user"),
        list: $(".gui_toolkit_float>div.gui_toolkit_box")
    });
});