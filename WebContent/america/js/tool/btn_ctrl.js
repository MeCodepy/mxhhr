define(function () {
    var LoadModel = function (obj) {
        var txt = "";
        var wait = false;
        this.working = function () {
            return wait;
        },
        this.loading = function () {
            wait = true;
            $(obj).addClass("normal_btn_loading");
            txt = $(obj).html();
            $(obj).html("正在提交...");
        },
        this.loadend = function () {
            wait = false;
            $(obj).removeClass("normal_btn_loading");
            $(obj).html(txt);
        }
        return this;
    };
    return LoadModel;
});