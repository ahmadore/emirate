$(function () {
	"use strict";
	  var slider = new MasterSlider();

	    // adds Arrows navigation control to the slider.
	    //slider.control('arrows');
	    slider.control('timebar' , {insertTo:'#masterslider'});
	    slider.control('bullets');

	     slider.setup('masterslider' , {
	         width:1600,    // slider standard width
	         height:700,   // slider standard height
	         space:0,
	         layout:'fullwidth',
	         loop:true,
	         preload:0,
	         autoplay:true
	    });
	    
	});

