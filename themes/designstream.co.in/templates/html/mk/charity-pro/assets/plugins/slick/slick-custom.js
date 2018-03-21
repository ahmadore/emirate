$(function () {
	"use strict";
	$(document).on('ready', function() {
	    $(".regular").slick({
        dots: false,
        infinite: false,
		autoplay:true,
  		autoplaySpeed:10000,
        slidesToShow: 5,
        slidesToScroll: 1
      });
	  });
			});