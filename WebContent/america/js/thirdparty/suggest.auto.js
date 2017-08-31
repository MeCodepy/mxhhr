(function ($) {
    $.suggest = function (input, options) {
        var $input = $(input).attr("autocomplete", "off");
        var $results;
        var timeout = false; // hold timeout ID for suggestion results to appear	
        var prevLength = 0; // last recorded length of $input.val()
        var cache = []; // cache MRU list
        var cacheSize = 0; // size of cache in chars (bytes?)
        if (!options.attachObject) options.attachObject = $(document.createElement("ul")).appendTo('body');
        $results = $(options.attachObject);
        $results.addClass(options.resultsClass);
        resetPosition();
        $(window).load(resetPosition) // just in case user is changing size of page while loading
        .resize(resetPosition);
        $input.blur(function () {
            setTimeout(function () {
                $results.hide()
            },
            200);
        });
        $input.focus(function () {
            //if($.trim($(this).val())=='中文/拼音'){
            //	$(this).val('').css('color','#000');
            //}
            //if($.trim($(this).val())==''){
            //	displayItems('');//显示热门城市列表
            //}
        });
        $input.click(function () {
            resetPosition();
            //var q=$.trim($(this).val());
            //displayItems(q);
            //$(this).select();
        });
        // help IE users if possible
        try {
            $results.bgiframe();
        } catch (e) { }
        $input.keyup(processKey); //
        function resetPosition() {
            // requires jquery.dimension plugin
            var offset = $input.offset();
            $results.css({
                top: (offset.top + input.offsetHeight) + 'px',
                left: offset.left + 'px'
            });
        }
        function processKey(e) {
            // handling up/down/escape requires results to be visible
            // handling enter/tab requires that AND a result to be selected
            if ((/27$|38$|40$/.test(e.keyCode) && $results.is(':visible')) || (/^13$|^9$/.test(e.keyCode) && getCurrentResult())) {
                if (e.preventDefault) e.preventDefault();
                if (e.stopPropagation) e.stopPropagation();
                e.cancelBubble = true;
                e.returnValue = false;
                switch (e.keyCode) {
                    case 38:
                        // up
                        prevResult();
                        break;
                    case 40:
                        // down
                        nextResult();
                        break;
                    case 13:
                        // return
                        selectCurrentResult();
                        break;
                    case 27:
                        //	escape
                        $results.hide();
                        break;
                }
            } else if ($input.val().length != prevLength) {
                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(suggest, options.delay);
                prevLength = $input.val().length;
            }
        }
        function suggest() {
            var q = $.trim($input.val());
            displayItems(q);
        }
        function displayItems(items) {
            var html = '';
            if (items != '') {
                for (var idx in options.source) {
                    var match = false;
                    var temp = options.model;
                    for (var k in options.source[idx]) {
                        var val = options.source[idx][k];
                        var match_reg = new RegExp('^' + items + '.*$', 'im');
                        if (match_reg.test(val)) {
                            match = true;
                        }
                        var reg = new RegExp("\\$" + k, "g");
                        temp = temp.replace(reg, val);
                    }
                    if (match == true) {
                        html += $(temp).attr('suggest', idx).prop("outerHTML");
                        //html += temp;
                    }
                }
                var suggest_tip = "";
                if (html == '') {
                    suggest_tip = '<div class="gray ac_result_tip">对不起，找不到：' + items + '</div>';
                    if (typeof options.callback === "function") {
                        options.callback(null);
                    }
                }
                html = suggest_tip + '<ul>' + html + '</ul>';
            } else {
                if (typeof options.callback === "function") {
                    options.callback(null);
                }
            }
            $results.html(html).show();
            $results.children('ul').children('li:first-child').addClass(options.selectClass);
            $results.children('ul').children('li').mouseover(function () {
                $results.children('ul').children('li').removeClass(options.selectClass);
                $(this).addClass(options.selectClass);
            }).click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                selectCurrentResult();
            });
        }
        function getCurrentResult() {
            if (!$results.is(':visible')) return false;
            var $currentResult = $results.children('ul').children('li.' + options.selectClass);
            if (!$currentResult.length) $currentResult = false;
            return $currentResult;
        }
        function selectCurrentResult() {
            $currentResult = getCurrentResult();
            if ($currentResult) {
                var idx = $currentResult.attr('suggest');
                $results.hide();
                if (typeof options.callback === "function") {
                    options.callback(options.source[idx], $input);
                }
            }
        }
        function nextResult() {
            $currentResult = getCurrentResult();
            if ($currentResult) $currentResult.removeClass(options.selectClass).next().addClass(options.selectClass);
            else $results.children('ul').children('li:first-child').addClass(options.selectClass);
        }
        function prevResult() {
            $currentResult = getCurrentResult();
            if ($currentResult) $currentResult.removeClass(options.selectClass).prev().addClass(options.selectClass);
            else $results.children('ul').children('li:last-child').addClass(options.selectClass);
        }
    }
    $.fn.suggest = function (source, options) {
        if (!source)
            return;
        options = options || {};
        options.source = source;
        options.hot_list = options.hot_list || [];
        options.delay = options.delay || 0;
        options.resultsClass = options.resultsClass || 'ac_results';
        options.selectClass = options.selectClass || 'ac_over';
        options.matchClass = options.matchClass || 'ac_match';
        options.minchars = options.minchars || 1;
        options.delimiter = options.delimiter || '\n';
        options.onSelect = options.onSelect || false;
        options.dataDelimiter = options.dataDelimiter || '\t';
        options.dataContainer = options.dataContainer || null;
        options.attachObject = options.attachObject || null;
        options.attachHidden = options.attachHidden || null;
        options.model = options.model || "";
        options.callback = options.callback || null;
        this.each(function () {
            new $.suggest(this, options);
        });
        return this;
    };
})(jQuery);