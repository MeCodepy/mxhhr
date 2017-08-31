/**
 * slider
 */
define(function() {
	Slider = function (container, options) {
        "use strict";

        if (!container) return;

        var options = options || {},
            currentIndex = 0,
            cls = options.activeControllerCls,
            delay = options.delay,
            isAuto = options.auto,
            controller = options.controller,
            event = options.event,
            interval,
            slidesWrapper = container.children().first(),
            slides = slidesWrapper.children(),
            length = slides.length,
            childWidth = container.width(),
            totalWidth = childWidth * slides.length;

        function init() {
            var controlItem = controller.children();

            mode();

            event == 'hover' ? controlItem.mouseover(function () {
                stop();
                var index = $(this).index();
                play(index, options.mode, 'noAuto');
            }).mouseout(function () {
                isAuto && autoPlay();
            }) : controlItem.click(function () {
                stop();
                var index = $(this).index();
                play(index, options.mode, 'noAuto');
                isAuto && autoPlay();
            });

            isAuto && autoPlay();
            play(currentIndex, options.mode);
        }

        function mode() {
            var wrapper = container.children().first();

            options.mode == 'slide' ? wrapper.width(totalWidth) : wrapper.children().css({
                'position': 'absolute',
                'left': 0,
                'top': 0
            }).first().siblings().hide();
        }

        var laodImage = function(index, noAuto) {
            var $current = slides.eq(index);
            var img = $current.find("img");
            if (img.length > 0 && img.attr("data-src")) {
                img.attr("src", img.attr("data-src").replace(/^http:/g, 'https:'));
                img.removeAttr("data-src");
                stop();
                img[0].onload = function() {
                    isAuto && !noAuto && autoPlay();
                }
                img[0].onerror = function() {
                    isAuto && !noAuto && autoPlay();
                }
            }
        };

        function autoPlay() {
            stop();
            interval = setInterval(function () {
                play(currentIndex+1, options.mode);
            }, options.time);
        }

        function play(index, mode, noAuto) {
            if (index == length) { index = 0; }
            if (index == -1) { index = length - 1; }
            laodImage(index, noAuto);
            mode == 'slide' ? (function () {
                if (index > currentIndex) {
                    slidesWrapper.animate({
                        left: '-=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else if (index < currentIndex) {
                    slidesWrapper.animate({
                        left: '+=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else {
                    return;
                }
            })() : (function () {
                if (slidesWrapper.children(':visible').index() == index) return;
                slidesWrapper.children().fadeOut(delay).eq(index).fadeIn(delay);
            })();
            try {
                controller.children('.' + cls).removeClass(cls);
                controller.children().eq(index).addClass(cls);
            } catch (e) { }
            currentIndex = index;
            if (container.find('img[data-src]').length == 0) {
                container.removeClass("u-loading");
            }
        }

        function stop() {
            clearInterval(interval);
        }

        function prev() {
            stop();
            play(currentIndex-1);
            isAuto && autoPlay();
        }

        function next() {
            stop();
            play(currentIndex+1);
            isAuto && autoPlay();
        }

        init();

        return {
            prev: function () {
                prev();
            },
            next: function () {
                next();
            }
        }
    };
	return {slide:Slider};
});