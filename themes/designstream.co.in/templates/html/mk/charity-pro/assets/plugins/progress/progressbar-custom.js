$(function () {
	"use strict";
	$('#branding').LineProgressbar({
			percentage:80,
			});
			$('#photo').LineProgressbar({
			percentage:70,
			fillBackgroundColor: '#84c54e'
			});
			$('#web').LineProgressbar({
			percentage:90,
			fillBackgroundColor: '#84c54e'
			});
			$('#Market').LineProgressbar({
			percentage:60,
			fillBackgroundColor: '#84c54e'
			});
			$('#Community').LineProgressbar({
			percentage:85,
			fillBackgroundColor: '#84c54e'
			});
			$('#Donation').LineProgressbar({
			percentage:92,
			fillBackgroundColor: '#84c54e'
		});
			
			
			$(".progress-bar").loading();
		$('').on('click', function () {
			 $(".progress-bar").loading();
		});
			});