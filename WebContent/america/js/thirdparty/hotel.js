$(function () {
    InitHotel();
    SearchHotels();
});
function SearchHotels() {
    var param = {
        Action: "SearchHotels",
        hotel_to_city: $("#hid_hotel_to_city").val(),
        hotel_key_place: $("#hid_hotel_key_place").val(),
        hotel_in_date: $("#hid_hotel_in_date").val(),
        hotel_out_date: $("#hid_hotel_out_date").val(),
        fee_type: $("#hid_fee_type").val()
    };
    $.ajax({
        url: '/b2g/hotel/TransJson.aspx?' + Math.random(),
        type: 'POST',
        data: param,
        cache: false,
        dataType: 'json',
        error: function (a, b, c) {
            console.log(c);
            AvFinished(from, to, 0, type, trip_type, new Array());
        },
        success: function (result) {
            if (result.Succeed == true) {
                console.log(result.Obj);
            } else {
                console.log(result.Msg);
            }
        },
        complete: function (req, status) {
            console.log(status);
        }
    });
}
function InitHotel() {
    var hotel_date = new Date();
    hotel_date.setDate(hotel_date.getDate() + 3);
    $('#hotel_in_date').val(hotel_date.Format("yyyy-MM-dd"));
    hotel_date.setDate(hotel_date.getDate() + 3);
    $('#hotel_out_date').val(hotel_date.Format("yyyy-MM-dd"));
    InitJCal($('#hotel_in_date'), $('#hotel_in_date_jcal'), 2, false, null, function (day) {
        var _month = day.getMonth() + 1;
        if (_month < 10)
            _month = '0' + _month;
        var _day = day.getDate();
        if (_day < 10)
            _day = '0' + _day;
        var day_str = day.getFullYear() + '/' + _month + '/' + _day;
        var temp = new Date(day_str);
        temp.setDate(temp.getDate() + 3);
        $('#hotel_out_date').val(temp.Format("yyyy-MM-dd"));
    });
    InitJCal($('#hotel_out_date'), $('#hotel_out_date_jcal'), 2, false, $('#hotel_in_date'), null);
    InitHotelCity();
}
function InitHotelCity() {
    $("#hotel_to_city").click(function () {
        $('.icbcJcalendar').hide();
        $("div.citypanel").hide();
        var ct = new $.fn.HotelCitys();
        ct.Bind(this, null, $("input[name=hotel_to_city]"));
    });
    $("#hotel_key_place").click(function () {
        $('.icbcJcalendar').hide();
        $("div.citypanel").hide();
        var hb = new $.fn.HotelBusiness();
        hb.Bind(this, null, $("input[name=hotel_key_place]"), $("input[name=hotel_to_city]").val());
    });
}