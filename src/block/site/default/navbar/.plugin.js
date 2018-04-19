(function() {
	"use strict";
	$(window).on('load', 
		function(){
			var toggle_navbar = $(".navbar__hamburger-btn").data("toggle-nav"),
				toggle_body = $(".navbar__hamburger-btn").data("body"),
				toggle_collapse = $(".navbar__hamburger-btn").data("collapse-nav"); 
			$(".navbar__hamburger-btn").on('click',function() {				
				$(toggle_body).toggleClass("is--open-navbar");
				$(toggle_navbar).toggleClass("is--open");
				$(toggle_collapse).toggleClass("is--open");
				$(this).toggleClass("is--active");
				//$(this).closest(".navbar").find(".navbar__form").addClass("is--active");
			});	
			var tggl_navbar = $(".navbar__hamburger-search-btn").data("toggle-nav"),
				tggl_body = $(".navbar__hamburger-search-btn").data("body"),
				tggl_collapse = $(".navbar__hamburger-search-btn").data("collapse-nav"); 
			$(".navbar__hamburger-search-btn").on('click',function() {				
				$(tggl_body).toggleClass("is--open-navbar");
				$(tggl_navbar).toggleClass("is--open");
				$(tggl_collapse).toggleClass("is--open");
				$(this).toggleClass("is--active");
				//$(this).closest(".navbar").find(".navbar__form").addClass("is--active");
			});	
			/*$(document.body).on('click', function(event) {
				if($(event.target).closest('.navbar').length == 0){	
					$(toggle_body).removeClass("is--open-navbar");
					$(toggle_navbar).removeClass("is--open");
					$(toggle_collapse).removeClass("is--open");
					$(".navbar__hamburger-btn").removeClass("is--active");
				}		
			});	*/	
		}
	);
})();