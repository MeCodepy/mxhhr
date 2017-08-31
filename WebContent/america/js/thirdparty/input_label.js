function InitInputLabel() {
    $('body').on('focus', '.iptinleft>.ininput', function () {
        $(this).parent().css({
            'border-color': '#ff7200'
        });
    }).on('blur', '.iptinleft>.ininput', function () {
        $(this).parent().css({
            'border-color': '#cccccc'
        });
    });
}