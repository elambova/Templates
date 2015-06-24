'use strict';
$(document).ready(function () {
    $('#menu li a').click(function () {
       $('#menu li').find('.active').removeClass('active');
       $(this).addClass('active');
    });
});