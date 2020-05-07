$(document).ready(function() {

    function vrijeme() {

        var saaat = $('#location-output').addClass('sat');

        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();


        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }

        var ampm = "";
        $('.hours').html(h);
        $('.minute').html(m);
        $('.sekunde').html(s);

    }
    setInterval(vrijeme, 1000);
});