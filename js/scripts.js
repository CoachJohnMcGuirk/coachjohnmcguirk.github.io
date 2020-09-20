	
$(document).ready(function() {
	
	"use strict";
	
	PageLoad();
	FirstLoad();
	Sliders();	
	Showcase();
	ShowcaseCarousel();
	Portfolio();
	AjaxLoad();	
	Shortcodes();
	JustifiedGrid();
	Lightbox();
	ContactForm();
	PlayVideo();
	ContactMap();	
});



/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {	
		
		if ($('#page-content').hasClass("light-content")) {
			$('.preloader-wrap').addClass('light-content');			
		}
		
		$('body').removeClass('hidden');		
		
		var width = 100,
			perfData = window.performance.timing, 
			EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
			time = ((EstimatedTime/1000)%50) * 10
			
		// Loadbar Animation
		$(".loadbar").animate({
			width: width + "%"
		}, time / 0.9 );	
		
		
		// Percentage Increment Animation
		var PercentageID = $("#precent"),
				start = 0,
				end = 100,
				durataion = time + 0;
				animateValue(PercentageID, start, end, durataion);
				
		function animateValue(id, start, end, duration) {
		  
			var range = end - start,
			  current = start,
			  increment = end > start? 1 : -1,
			  stepTime = Math.abs(Math.floor(duration / range)),
			  obj = $(id);
			
			var timer = setInterval(function() {
				current += increment;
				$(obj).text(current);
			  //obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}
		
		// Fading Out Loadbar on Finised
		setTimeout(function(){
			$('.loadbar').append('<span class="hold-progress-bar"></span>');
			
			TweenMax.to($('.hold-progress-bar'), 0.5, {force3D:true,width:'100%', delay:1, ease:Power2.easeOut, onComplete:function(){  //modified time
				TweenMax.set($(".trackbar"), {visibility:'hidden', opacity:0});
				$('body').waitForImages({
						finished: function() {
							
							TweenMax.to($(".percentage"),0.5, {force3D:true, opacity:0, y:-30, delay:0, ease:Power1.easeInOut});
							TweenMax.to($(".headphones, .headphones-text"),0.3, {force3D:true, opacity:0, y:-50, delay:0.2, ease:Power2.easeOut});
							TweenMax.to($(".preloader-wrap"),0.7, {force3D:true, yPercent: -101, delay:0.6, ease:Power2.easeInOut});
							TweenMax.set($(".preloader-wrap"), {visibility:'hidden', delay:1.4, opacity:0});
							
							setTimeout(function(){
							
								$('body').waitForImages({
									finished: function() {
										TweenMax.to($("#header-container, .header-middle, #footer-container"), 1, {force3D:true, opacity:1, delay:0, ease:Power2.easeOut}); //modified time
										$('body').removeClass('hidden-ball');		
									},
									waitForAll: true
								});
								
								if( $('.hero-video-wrapper').length > 0 ){
									$('#hero-bg-wrapper').find('video').each(function() {
										$(this).get(0).play();
									}); 
								}
								
								TweenMax.to($("#main"), 0, {force3D:true, opacity:1, delay:0, ease:Power2.easeOut});//modified time
								if( $('#hero').hasClass("has-image")) {	
									TweenMax.to($("#hero-bg-image"), 1, {force3D:true, scale:1.05 , opacity:1, delay:0.2, ease:Power2.easeOut});
									TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:0, opacity:1, delay:0.95, ease:Power2.easeOut});
									TweenMax.to($(".hb-left"), 0.4, {force3D:true, y:0, opacity:1, delay:1.1, ease:Power2.easeOut, onComplete:function(){
										$('.hb-left').addClass('enable');
									}});
									TweenMax.to($(".hb-right"), 0.4, {force3D:true, y:0, opacity:1, delay:1.2, ease:Power2.easeOut});									
									TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:1.15, ease:Power2.easeOut});
								} else {
									TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.95, ease:Power2.easeOut});									
									TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:1, ease:Power2.easeOut});							
								}								
								
								if ($('#hero-bg-image').hasClass("light-content")) {
									$('#hero-caption').addClass('light-content');
									setTimeout(function(){
										$('#magic-cursor').addClass('light-content');
									} , 700 );			
									setTimeout(function(){
										$('#header-container').addClass('light-content');
									} , 600 );
								}
								
								// Fading In Showcase elements on Finised
								TweenMax.set($("#showcase-holder"), {opacity:0, scale:1.05});								
								TweenMax.to($("#showcase-holder"), 0.4, {force3D:true, opacity:1, scale:1, delay:0.8, ease:Power2.easeOut});
								
								TweenMax.set($('.stroked .swiper-pagination-bullet-active').prev().find('.title'), {opacity:0, y:-120});
								TweenMax.set($('.no-stroked .swiper-pagination-bullet-active').find('.title'), {opacity:0, y:60});
								TweenMax.set($('.stroked .swiper-pagination-bullet-active').find('.title'), {opacity:0, y:60});
								TweenMax.set($('.stroked .swiper-pagination-bullet-active').next().find('.title'), {opacity:0, y:240});
								
								var slidertitleheight = $(".title").height()
								
								TweenMax.to($('.stroked .swiper-pagination-bullet-active').prev().find('.title'), 0.5, {force3D:true, opacity:0.3, y:-slidertitleheight, delay:0.8, ease:Power2.easeOut});
								TweenMax.to($('.no-stroked .swiper-pagination-bullet-active').find('.title'), 0.5, {force3D:true, opacity:1, y:0, delay:0.9, ease:Power2.easeOut});
								TweenMax.to($('.stroked .swiper-pagination-bullet-active').find('.title'), 0.5, {force3D:true, opacity:0.3, y:0, delay:0.9, ease:Power2.easeOut});
								TweenMax.to($('.stroked .swiper-pagination-bullet-active').next().find('.title'), 0.5, {force3D:true, opacity:0.3, y:slidertitleheight, delay:1, ease:Power2.easeOut});
								
								TweenMax.set($('.swiper-slide-active').find('.title'), {y:slidertitleheight});
								TweenMax.set($('.swiper-slide-active').find('.subtitle'), {y:40});
								
								
								TweenMax.to($('.swiper-slide-active').find('.title'), 0.8, {force3D:true, y:0, delay:0.8, ease:Power2.easeOut});
								TweenMax.to($('.swiper-slide-active').find('.subtitle'), 0.7, {force3D:true, y:0, delay:0.9, ease:Power2.easeOut});
								
								
								
								// Fading In Small Carousel elements on Finised
								var tlCarousel = new TimelineLite();
								tlCarousel.set($("#showcase-carousel .swiper-slide"), {x: 300, opacity:0});
								$("#showcase-carousel .swiper-slide").each(function(index, element) {
									tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.9, ease:Power3.easeOut}, index * 0.1)
								});
								// Fading In Large Carousel elements on Finised
								var tlCarousel = new TimelineLite();
								tlCarousel.set($("#large-showcase-carousel .swiper-slide"), {x: 300, opacity:0});
								$("#large-showcase-carousel .swiper-slide").each(function(index, element) {
									tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.9, ease:Power3.easeOut}, index * 0.1)
								});
								TweenMax.set($(".swiper-scrollbar"), {scaleX: 0,});
								TweenMax.to($(".swiper-scrollbar"), 1.2, {force3D:true, scaleX: 1, delay:0.9, ease:Power2.easeOut});			
									
								setTimeout( function(){	
									$('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
								} , 600 );
								
								setTimeout( function(){	
									$('body').removeClass("load-next-project");
									$('body').addClass("header-visible");
									$('#showcase-holder').removeClass("disabled");
								} , 1600 );
								
								setTimeout( function(){	
									$('body').removeClass("show-loader")
								} , 800 );	
								
							} , 100 );
						},
					waitForAll: true
				});
				
			}});
	  
		}, time);
		
		
		
	}// End Page Load
		


/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	

	function FirstLoad() {	
		
		
		if ($("body").hasClass("smooth-scroll")) {
			const ScrollArea = document.querySelector('#content-scroll');
			var scrollbar = window.Scrollbar;
			// Use plugins
			scrollbar.use(OverscrollPlugin);
			// Config
			var ScrollbarOptions = {
				damping:0.05,
				renderByPixel: true,
				continuousScrolling: true,
				plugins: {
					overscroll: {
						effect: 'bounce',
						damping: 0.2,
						maxOverscroll: 60
					}
				},
			};
			// Initialise
			var scrollbar = Scrollbar.init(ScrollArea, ScrollbarOptions);
		}
		
		if( $('#project-nav').length > 0 ){
		
			if( $('body').hasClass("load-project-page")) {			
				if ($("body").hasClass("smooth-scroll")) {
					TweenMax.to(scrollbar, 1.5, {scrollTo:180, delay:0.3, ease:Power4.easeInOut});
				} else {                    
					TweenMax.to(window, 1.5, {scrollTo:180, delay:0.3, ease:Power4.easeInOut});           
				}				
			}
			
			if( $('body').hasClass("load-project-page-carousel")) {			
				if ($("body").hasClass("smooth-scroll")) {
					TweenMax.to(scrollbar, 1.5, {scrollTo:180, delay:0.3, ease:Power4.easeInOut});
				} else {                    
					TweenMax.to(window, 1.5, {scrollTo:180, delay:0.3, ease:Power4.easeInOut});           
				}				
			}
			
			if( $('body').hasClass("load-project-thumb")) {			
				if ($("body").hasClass("smooth-scroll")) {
					TweenMax.to(scrollbar, 1.5, {scrollTo:180, delay:0.6, ease:Power4.easeInOut});
				} else {                    
					TweenMax.to(window, 1.5, {scrollTo:180, delay:0.6, ease:Power4.easeInOut});           
				}				
			}
		}
		
		$("html,body").animate({scrollTop: 0}, 1);
		
		if ($("#page-content").hasClass("light-content")) {
			$("main, nav, #main-content").css('background-color', '#141414');
			$('#magic-cursor').addClass('light-content');
			if( $('#hero').length > 0 ){						
				if( $('#hero').hasClass("has-image")) {	
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		} else {
			$("main").css('background-color', '#fff');
			$("nav").css('background-color', '#141414');
			$("#main-content").css('background-color', '#fff');
			$('#magic-cursor').removeClass('light-content');
			if( $('#hero').length > 0 ){	
				if( $('#hero').hasClass("has-image")) {	
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		}
		
		$('.section-image').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		$('.item').each(function() {
			var image = $(this).find('.item-image').data('src');	
			$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
		});
		
		$('.thumb-page').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		$('.video-cover').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		//Load Default Page
		$('a.ajax-link').on('click', function() {
			$("body").addClass("show-loader");	
			$(".flexnav").removeClass("flexnav-show");
			$('#menu-burger').removeClass("open");
			$('header').removeClass('white-header');
			var tlMenu = new TimelineLite();
			$(".fullscreen-menu .menu-timeline").each(function(index, element) {
				tlMenu.to(element, 0.25, {y:-30, opacity:0, ease:Power2.easeIn}, index * 0.03)
			});	
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if( $('#showcase-holder').length > 0 ){
				TweenMax.to($(".swiper-pagination-bullet .title"), 0.4, {force3D:true, opacity:0, ease:Power2.easeOut});
				TweenMax.to($("#main, #hero-bg-wrapper, #project-nav, .next-project-image"), 0.3, {opacity:0, delay:0.2, ease:Power0.ease});
			} else {
				TweenMax.to($("#main, #hero-bg-wrapper, #project-nav, .next-project-image"), 0.3, {opacity:0, delay:0.1, ease:Power0.ease});
			}		
			TweenMax.to($("#footer-container, .header-middle"), 0.3, {opacity:0, ease:Power0.ease});
		});
		
		//Load Project from Showcase
		$('#showcase-slider a.title').on('click', function() {			
			$('#showcase-tilt').addClass('disabled');
			$('header').removeClass('white-header');		
			TweenMax.to($(".showcase-captions-wrap.stroked, .header-middle"), 0.3, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".arrows-wrap"), 0.2, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".socials-wrap"), 0.2, {force3D:true, opacity:0, delay:0.15, ease:Power2.easeOut});
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', delay:0.3, scale:1, opacity:1});
			$("body").addClass("load-project-page").addClass("show-loader");
		});
		
		//Load Project from Showcase Carousel
		$('#showcase-carousel-slider a.title').on('click', function() {
			$('#showcase-tilt').addClass('disabled');
			TweenMax.to($("#showcase-carousel-slider .section-image"), 0.7, {force3D:true, scale:1, maxWidth: '100%', height:"100%", top:0, delay:0, ease:Power2.easeInOut});
			TweenMax.to($("#showcase-carousel-slider .img-mask"), 0.7, {force3D:true, padding:0, delay:0, ease:Power2.easeInOut});
			TweenMax.to($("#showcase-carousel-slider .title span"), 0.4, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".arrows-wrap"), 0.2, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".socials-wrap"), 0.2, {force3D:true, opacity:0, delay:0.15, ease:Power2.easeOut});
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', delay:0.3, scale:1, opacity:1});
			$("body").addClass("load-project-page-carousel").addClass("show-loader");
		});
		
		
		//Load Page From Menu
		$('nav .ajax-link').on('click', function() {
			var tl = new TimelineLite();
			$(".menu-timeline").each(function(index, element) {
				tl.to(element, 0.25, {y:-80, opacity:0, ease:Power1.easeIn }, index * 0.05)
			});
			$('header').removeClass('white-header');
		});
		
		$('#burger-wrapper').on('click', function() {
			$('#menu-burger, nav').toggleClass('open');			
			setTimeout( function(){			
				if ($('#menu-burger').hasClass("open")) {
					$('header').addClass('over-sidebar').addClass('over-white-section');
					if (!$('#page-content').hasClass("light-content")) {	
						$('#magic-cursor').addClass('light-content');
						$('#header-container').addClass('light-content');
					}
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".menu-timeline"), {y: 80, opacity:0});
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.4, ease:Power2.easeOut}, index * 0.1)
					});
						
				} else {	
					//Fade Out Navigation Lists					
					var tlMenu = new TimelineLite();
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.25, {y:-80, opacity:0, ease:Power2.easeIn}, index * 0.05)
					});
					if (!$('#page-content').hasClass("light-content")) {	
						setTimeout( function(){
							$('#magic-cursor').removeClass('light-content');
							$('#header-container').removeClass('light-content');
						} , 500 );
					}
					setTimeout( function(){
						$(".touch-button.active").trigger("click");
						$('header').removeClass('over-sidebar').removeClass('over-white-section');
					} , 500 );
				}							
			} , 20 );
		});
		
		
		
		
		
		// Page  Navigation Events
		$('.next-ajax-link-page').on('click', function() {					
			$("body").addClass("load-next-page");
			$("body").addClass("show-loader");
			$('header').removeClass('white-header');
			var pageheight = $(".scroll-content").height()
			if ($("body").hasClass("smooth-scroll")) {
				TweenMax.to(scrollbar, 0.5, {scrollTop :pageheight, ease:Power4.easeIn});
			} else {                    
                TweenMax.to(window, 0.5, {scrollTo :$("footer").offset().top, ease:Power4.easeIn});               
            }	
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if ($('#project-nav').hasClass("light-content")) {				
				setTimeout(function(){
					$('body').addClass('light-content');								
				} , 300 );
			}
			if ($("body").hasClass("smooth-scroll")) {
				var navmove = $("#content-scroll").height() - $("#hero").height() - $("footer").height() 			
			} else {
				var navmove = window.innerHeight - $("#hero").height() - $("footer").height() 		   
			}
			
			TweenMax.to($(".subtitle-info"), 0.3, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".subtitle-name"), 0.3, {force3D:true, opacity:1, y: 0, delay:0.3, ease:Power2.easeOut});
			
			TweenMax.to($("#main-page-content, #hero"), 0.3, {opacity:0});		
			TweenMax.to($("#page-nav"), 0.6, {y: - navmove, ease:Power2.easeInOut});
			TweenMax.to($("footer"), 0.3, {opacity:0, delay:0.2, ease:Power2.easeInOut});
		});
		
		
		// Project Navigation Events
		$('.next-title').on('click', function() {					
			$("body").addClass("load-next-project").addClass("show-loader");
			$('header').removeClass('white-header');
			var pageheight = $(".scroll-content").height()
			if ($("body").hasClass("smooth-scroll")) {
				TweenMax.to(scrollbar, 0.5, {scrollTop:pageheight, ease:Power4.easeIn});
			} else {                    
                TweenMax.to(window, 0.5, {scrollTo:$("footer").offset().top, ease:Power4.easeIn});               
            }		
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if ($('#project-nav').hasClass("light-content")) {				
				setTimeout(function(){
					$('body').addClass('light-content');								
				} , 300 );
			}
									
			TweenMax.staggerTo($('.next-title span').sort(() => Math.round(Math.random())-0.1), 0.5, {scaleY:2, y:-200, opacity:0, ease:Power2.easeInOut},  0.03)						
			
			TweenMax.staggerTo($('.main-title span').sort(() => Math.round(Math.random())-0.1), 0.5, {y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.03)
			TweenMax.to($(".next-subtitle-name"), 0.4, {force3D:true, opacity:1, y: 0, delay:0.5, ease:Power2.easeOut});
			
			TweenMax.to($("#main-page-content"), 0.3, {opacity:0});			
			TweenMax.to($(".next-project-image"), 1, {scale:1, opacity: 1, ease:Power1.easeOut});
			TweenMax.to($("footer"), 0.3, {opacity:0, ease:Power2.easeInOut});
			
			setTimeout(function(){
				$('body').find('a.next-ajax-link-project').trigger('click');								
			} , 300 );
				
		});
		
		
		if( $('#project-nav').length > 0 ){
			$('#main-page-content').addClass('project-page');			
			$('.next-title, .main-title').each(function(){
				var words = $(this).text().split(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<div /> ").text(words[index]));
				}
			});
			
			$('.next-title div, .main-title div').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			});
						
		}
		
		if( $('.portfolio').length > 0 ){
			$('#main-page-content').addClass('portfolio-page');			
		}
			
		// Slider Center on click
		$('.slider').on('click', function() {				
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);	
			if ($("body").hasClass("smooth-scroll")) {					
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);                    
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});                    
			}
			else{                    
				$("html, body").animate({ scrollTop: scrollIt }, 350);                
			}				
		});
		
		// Carousel Center on click
		$('.carousel').on('click', function() {				
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);	
			if ($("body").hasClass("smooth-scroll")) {					
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);                    
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});                    
			}
			else{                    
				$("html, body").animate({ scrollTop: scrollIt }, 350);                
			}				
		});
		
		$('.item').on('click', function() {				
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);	
			if ($("body").hasClass("smooth-scroll")) {					
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);                    
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});                    
			}
			else{                    
				$("html, body").animate({ scrollTop: scrollIt }, 350);                
			}				
		});
		
		
		// Video Center on click
		$('.video-wrapper').on('click', function() {				
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
			if ($("body").hasClass("smooth-scroll")) {					
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);                    
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});                    
			}
			else{                    
				$("html, body").animate({ scrollTop: scrollIt }, 350);                
			}				
		});
		
		
		var viewportWidth = $(window).width();
		if (viewportWidth < 1024) {				
			$('.hero-video-wrapper').remove();							 
		}
		
		$('#backtotop').on('click', function() {	
			if ($("body").hasClass("smooth-scroll")) {
				TweenLite.to(scrollbar, 1.5, {scrollTop:0, ease:Power4.easeInOut});
			} else {
				$("html,body").animate({scrollTop: 0}, 800);
			}
		});
		
		$('#scrolldown').on('click', function() {	
			var heroheight = $("#hero").height();			
			if ($("body").hasClass("smooth-scroll")) {
				TweenLite.to(scrollbar, 1.5, {scrollTop:heroheight, ease:Power4.easeInOut});
			} else {
				TweenLite.to(window, 1.5, {scrollTop:heroheight, ease:Power4.easeInOut});
			}
		});
		
		
		// Tilt Showcase Wrapper
		if( $('#hero').hasClass("has-image")) {				
			var timeout;
			$(window).resize(changePersective);				
			changePersective();				
			function changePersective(){
				TweenMax.set('#hero-bg-wrapper', {perspective: $('body').width()});
			}
			$('#hero').mousemove(function(e){
				if(timeout) clearTimeout(timeout);
				setTimeout(callParallaxHero.bind(null, e));			
			});				
			function callParallaxHero(e){
				parallaxItHero(e, '#hero-bg-image', 0); //5
				moveItHero(e, '#hero-bg-image', - 30); //80
			}				
			function parallaxItHero(e, target, movement){
				var $this = $('#hero-bg-wrapper');
				var relX = e.pageX - $this.offset().left;
				var relY = e.pageY - $this.offset().top;					
				TweenMax.to(target, 1, {
					rotationY: (relX - $this.width()/1.5) / $this.width() * movement,
					rotationX: (relY - $this.height()/2) / $this.height() * movement,
				})
			}				
			function moveItHero(e, target, movement){
				var $this = $('#hero-bg-wrapper');
				var relX = e.pageX - $this.offset().left;
				var relY = e.pageY - $this.offset().top;					
				TweenMax.to(target, 1, {
					x: (relX - $this.width()/2) / $this.width() * movement,
					y: (relY - $this.height()/2) / $this.height() * movement,
				})
			}
		}
		
		var heroparallax = TweenMax.to('#hero-image-parallax', 1, {yPercent:-20, scale:0.95, opacity:0, ease:Linear.easeOut});
		var captionParallax = TweenMax.to('.has-image #hero-caption', 0.5, {yPercent:30, ease:Linear.easeNone});
		var bottomParallax = TweenMax.to('.has-image .hero-bottom', 0.5, {opacity:"0", ease:Linear.easeNone});
		
		var bottomheroparallax = TweenMax.to('.next-project-image', 1, {top:"0",  scale:1.05, opacity:0.8, ease:Linear.easeNone});
		var bottomcaptionParallax = TweenMax.to('.next-project-title', 0.5, {top:"0", scale:1, opacity:1, ease:Linear.easeNone});
		
		var controller = new ScrollMagic.Controller();
		
		var heroScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'120%'
		})
		.setTween(heroparallax)
		.addTo(controller);
		  
		var captionScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'100%'
		})
		.setTween(captionParallax)
		.addTo(controller);
		
		var bottomScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'20%'
		})
		.setTween(bottomParallax)
		.addTo(controller);
		
		
		
		
		var bottomheroScene = new ScrollMagic.Scene({
			triggerElement: '#project-nav',
			triggerHook: 1,
			duration:'100%'
		})
		.setTween(bottomheroparallax)
		.addTo(controller);
		  
		var bottomcaptionScene = new ScrollMagic.Scene({
			triggerElement: '#project-nav',
			triggerHook: 1,
			duration:'100%'
		})
		.setTween(bottomcaptionParallax)
		.addTo(controller);
				
		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				heroScene.refresh()
				captionScene.refresh()
				bottomScene.refresh()
				bottomheroScene.refresh()
				bottomcaptionScene.refresh()
			});
		}		
		
		// 	parallax image 
		$(".has-parallax").each( function () {
			var $this = $(this);
			var $thisHeight = $(this).height();
			var bg = $this.find("img");
			
			// Add tweenmax for backgroundParallax
			var parallax = TweenMax.fromTo( bg, 1, {y: '-20%'}, {y: '10%',delay:0.1, ease:Power2.easeOut});
			
			// Create scrollmagic scene
			var parallaxScene = new ScrollMagic.Scene({
				triggerElement: this, // <-- Use this to select current element
				triggerHook: 1,
				duration:'300%'
			})
			.setTween(parallax)
			.addTo(controller);
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					parallaxScene.refresh()
				});
			}
			
		});
		
		// animate each
		$('.has-animation').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(1)
			
			scene.on('enter', function(){
				$this.delay($this.attr('data-delay')).queue(function(next){
					TweenMax.to($this, 0.8, {force3D:true, opacity:1, y:0, scale:1, delay:0.1, ease:Power2.easeOut});
					next();
				});
			});
			
			scene.on('leave', function(event){
				$this.removeClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		$('.has-mask').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
		
		$('.has-mask span').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
		
		$('.has-mask').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(1)
			
			scene.on('enter', function(){				
				
				var tl = new TimelineLite();
						
				$this.find('span > span').each(function(index, element) {
					tl.to(element, 0.6, {y:0, opacity:1, delay:0.1, ease:Power2.easeOut}, index * 0.03)
				});
				
			});
			
			scene.on('leave', function(event){
				$this.removeClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		$('.item-appear').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(0.9)
			
			scene.on('enter', function(){				
				$this.addClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		
		var $elheight = window.innerHeight;
		
		$(".parallax-portfolio .item").each( function () {
			var $this = $(this);
			var $thisheight = $(this).height() + $elheight;
			var bg = $this.find(".item-image");
			
			// Add tweenmax for backgroundParallax
			var parallax = TweenMax.fromTo( bg, 1, {y: '-20%'}, {y: '20%', ease:Linear.easeNone});
			
			// Create scrollmagic scene
			var parallaxScene = new ScrollMagic.Scene({
				triggerElement: this, // <-- Use this to select current element
				triggerHook: 1,
				duration:$thisheight
			})
			.setTween(parallax)
			.addTo(controller);
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					parallaxScene.refresh()
				});
			}
			
		});
		
		
		$('.white-section').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).outerHeight();
			
			var whiteScene = new ScrollMagic.Scene({triggerElement:this,duration: $thisHeight})
				.addTo(controller);
			
			whiteScene.triggerHook(0.08)
			
			whiteScene.on('enter', function(){				
				$('header').addClass('white-header');
			});
			
			whiteScene.on('leave', function(){
			  $('header').removeClass('white-header');
		  });
					
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					whiteScene.refresh()
				});
			}
		})
		
		
		
	}// End First Load
	
	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				TweenMax.to($("#header-container, .header-middle"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});				
			},
			waitForAll: true
		});
		
		TweenMax.to($("#main"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});
						
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				
				$('.hero-title').each(function(){
					var words = $(this).text().slice(" ");
					var total = words.length;
					$(this).empty();
					for (index = 0; index < total; index ++){
						$(this).append($("<span /> ").text(words[index]));
					}
				});
				
				TweenMax.staggerTo($('.hero-title span').sort(() => Math.round(Math.random())-0.1), 0.5, {y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.03)
				
				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut});
				TweenMax.to($(".hb-left"), 0.4, {force3D:true, y:0, opacity:1, delay:0.8, ease:Power2.easeOut, onComplete:function(){
					$('.hb-left').addClass('enable');
				}});
				TweenMax.to($(".hb-right"), 0.4, {force3D:true, y:0, opacity:1, delay:0.9, ease:Power2.easeOut});	
			} else {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-title"), 0, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hb-left"), 0.4, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut, onComplete:function(){
					$('.hb-left').addClass('enable');
				}});
				TweenMax.to($(".hb-right"), 0.4, {force3D:true, y:0, opacity:1, delay:0.1, ease:Power2.easeOut});	
			}
			TweenMax.to($(".scroll-down-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.85, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
		} else {
			TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.1, ease:Power2.easeOut});
			TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.15, ease:Power2.easeOut});
			TweenMax.to($(".post-article-wrap"), 0.4, {force3D:true, y: 0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.15, ease:Power2.easeOut});			
		}		
		
		if ($('#hero-bg-image').hasClass("light-content")) {
			$('#hero-caption').addClass('light-content');
			setTimeout(function(){
				$('#magic-cursor').addClass('light-content');
			} , 700 );			
			setTimeout(function(){
				$('#header-container').addClass('light-content');
			} , 600 );
		}
		
		TweenMax.to($("#showcase-holder"), 0.4, {force3D:true, opacity:1, scale:1, delay:0.2, ease:Power2.easeOut});//modified time
		
		TweenMax.to($("#footer-container"), 1, {force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('.load-project-thumb').length > 0 ){
			setTimeout( function(){
				$('#hero-bg-wrapper').find('video').each(function() {
					$(this).get(0).play();
				});
				$('.thumb-container').remove();				
			} , 200 );
		} else {
			$('#hero-bg-wrapper').find('video').each(function() {
				$(this).get(0).play();
			});
		}
		
		setTimeout( function(){	
			$('header').removeClass('white-header');
			$('body').removeClass("load-project-thumb").removeClass("load-project-page").removeClass("load-project-page-carousel").removeClass("load-next-project").removeClass("show-loader").removeClass("load-next-page");
		} , 800 );
		
		setTimeout( function(){				
			$('#showcase-holder').removeClass("disabled");
		} , 1900 );
		
	
	}// End Lazy Load		





/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function Showcase() {
		
	
		if( $('#showcase-slider').length > 0 ){	
		
			
			var titles = [];
			var subtitle = [];
			var counter = [];
			$('#showcase-slider .swiper-slide').each(function(i) {
			  	titles.push($(this).data('title'));
				subtitle.push($(this).data('subtitle'))
				
			});
						
			var interleaveOffset = 0.4;
			
			var swiperOptions = {
				direction: "vertical",
				loop: false,
				grabCursor: true,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 1,
				allowTouchMove:true,  
				speed:900,
				autoplay: false,
				effect: "slide",
				mousewheel: true,
				pagination: {
					el: '.showcase-captions',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="outer ' + className + '">' + '<div class="inner">' + '<div class="scale-wrapper">' + '<div class="title">' + '<div>' + titles[index] + '</div>' + '</div>' + '</div>' + '<div class="subtitle">' + subtitle[index] + '</div>' + '</div>' + '</div>';
						 
					},
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.height * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(0, " + innerTranslate + "px,0)";
						}
						if ($('.swiper-slide').first().hasClass('swiper-slide-active')){
							$('body').addClass('scale-up-top');
						} else { 
							$('body').removeClass('scale-up-top');
						}
						
						if ($('.swiper-slide').last().hasClass('swiper-slide-active')){
							$('body').addClass('scale-up-bottom');
						} else { 
							$('body').removeClass('scale-up-bottom');
						}
					  
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
						}   
				 	},
					init: function () {						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
					},				
					slideChangeTransitionStart: function () {						
						
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:2, y:-200, opacity:0, ease:Power2.easeInOut},  0.02)
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {y:-40, opacity:0, delay:0, ease:Power2.easeIn},  -0.02)						
						
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:1, y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.02)
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {y:0, opacity:1, scale:1, delay:0.5, ease:Power2.easeOut}, -0.02)										
						
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:2, y:200, opacity:0, ease:Power2.easeInOut},  0.02)
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {y:40, opacity:0, delay:0, ease:Power2.easeIn},  -0.02)						
						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
						
						$('.swiper-button-white').addClass('disable-click'); 					
						
					},		
					slideChangeTransitionEnd: function () {	
						
						$('.swiper-button-white').removeClass('disable-click');
						
						$('.swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('.swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});
						
					}
  				},
			};
							
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
			
			
			$('.showcase-captions-wrap .title').each(function(){
				var words = $(this).text().split(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<div /> ").text(words[index]));
				}
			});
			
			$('.showcase-captions-wrap .title div').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			});
			
			$("#showcase-slider .swiper-slide").find(".title").each(function(i) {				
				$(this).wrap( "<div class='outer'><div class='inner'></div></div>" );
			});
			
			$("footer").addClass("showcase-footer")
			
			
			
			// Tilt Showcase Wrapper
			var maxTilt = 1.5;
			var mouseX, mouseY;
			$(document).on("mousemove", function(event) {
				mouseX = event.pageX;
				mouseY = event.pageY;
			});
			$('#showcase-tilt').each(function() {
				var thisWidth = $(this).width();
				var thisHeight = $(this).height();
				var thisOffset = $(this).offset();
				$(document).mousemove(function() {
					var horTilt = ((mouseX / thisWidth) * (maxTilt * 2)) - maxTilt;
					var verTilt = (((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2)) - maxTilt;					
					TweenMax.to('#showcase-tilt', 1,{rotationY: horTilt, rotationX: verTilt, scale: 1.05, ease:Power1.easeOut});
				});
			});
			
			if ($(window).width() >= 1024) {
			$('#showcase-slider').on('mousedown touchstart', function(event) {				
				$('body').addClass('scale-up');
				if ($('.swiper-slide').first().hasClass('swiper-slide-active')){
						$('body').addClass('scale-up-top');
					} else { 
						$('body').removeClass('scale-up-top');
					}
					
					if ($('.swiper-slide').last().hasClass('swiper-slide-active')){
						$('body').addClass('scale-up-bottom');
					} else { 
						$('body').removeClass('scale-up-bottom');
					}	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			});	
					
			$('#showcase-slider').on('mouseup touchend', function(event) {
				$('body').removeClass('scale-up').removeClass('scale-up-bottom').removeClass('scale-up-top');
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			});
			
			}
			
		}	
		
			
	}//End Showcase
	
	
	
/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function ShowcaseCarousel() {
		
	
		if( $('#showcase-carousel-slider').length > 0 ){	
		
			
			var titles = [];
			var subtitle = [];
			var counter = [];
			$('#showcase-carousel-slider .swiper-slide').each(function(i) {
			  	titles.push($(this).data('title'));
				subtitle.push($(this).data('subtitle'))
				
			});
						
			var interleaveOffset = 0;

			var swiperOptions = {
				direction: "vertical",
				loop: false,
				grabCursor: true,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 1,
				allowTouchMove:true,  
				speed:900,
				autoplay: false,
				effect: "slide",
				mousewheel: true,
				pagination: {
					el: '.showcase-captions',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="outer ' + className + '">' + '<div class="inner">' + '<div class="scale-wrapper">' + '<div class="title">' + '<div>' + titles[index] + '</div>' + '</div>' + '</div>' + '<div class="subtitle">' + subtitle[index] + '</div>' + '</div>' + '</div>';
						 
					},
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.height * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(0, " + innerTranslate + "px,0)";
						}
						if ($('.swiper-slide').first().hasClass('swiper-slide-active')){
							$('body').addClass('scale-up-top');
						} else { 
							$('body').removeClass('scale-up-top');
						}
						
						if ($('.swiper-slide').last().hasClass('swiper-slide-active')){
							$('body').addClass('scale-up-bottom');
						} else { 
							$('body').removeClass('scale-up-bottom');
						}
					  
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
						}   
				 	},
					init: function () {						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
					},				
					slideChangeTransitionStart: function () {						
						
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:2, y:-200, opacity:0, ease:Power2.easeInOut},  0.02)
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {y:-40, opacity:0, delay:0, ease:Power2.easeIn},  -0.02)						
						
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:1, y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.02)
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {y:0, opacity:1, scale:1, delay:0.5, ease:Power2.easeOut}, -0.02)										
						
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:2, y:200, opacity:0, ease:Power2.easeInOut},  0.02)
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {y:40, opacity:0, delay:0, ease:Power2.easeIn},  -0.02)						
						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
						
						$('.swiper-button-white').addClass('disable-click');  					
						
					},		
					slideChangeTransitionEnd: function () {	
						
						$('.swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('.swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('.swiper-button-white').removeClass('disable-click'); 
						
					}
  				},
			};
							
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
			$('.showcase-captions-wrap .title').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			});
			
			$("#showcase-carousel-slider .swiper-slide").find(".title").each(function(i) {				
				$(this).wrap( "<div class='outer'><div class='inner'></div></div>" );
			});
			
			$("footer").addClass("showcase-footer")
			
			
			
			// Tilt Showcase Wrapper
			var maxTilt = 1.5;
			var mouseX, mouseY;
			$(document).on("mousemove", function(event) {
				mouseX = event.pageX;
				mouseY = event.pageY;
			});
			$('#showcase-tilt').each(function() {
				var thisWidth = $(this).width();
				var thisHeight = $(this).height();
				var thisOffset = $(this).offset();
				$(document).mousemove(function() {
					var horTilt = ((mouseX / thisWidth) * (maxTilt * 2)) - maxTilt;
					var verTilt = (((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2)) - maxTilt;					
					TweenMax.to('#showcase-tilt', 1,{rotationY: horTilt, rotationX: verTilt, scale: 1.05, ease:Power1.easeOut});
				});
			});
			
			
			
			
			$('#showcase-carousel-slider').on('mousedown touchstart', function(event) {				
				$('body').addClass('scale-up');
				if ($('.swiper-slide').first().hasClass('swiper-slide-active')){
						$('body').addClass('scale-up-top');
					} else { 
						$('body').removeClass('scale-up-top');
					}
					
					if ($('.swiper-slide').last().hasClass('swiper-slide-active')){
						$('body').addClass('scale-up-bottom');
					} else { 
						$('body').removeClass('scale-up-bottom');
					}	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			});	
					
			$('#showcase-carousel-slider').on('mouseup touchend', function(event) {				
				$('body').removeClass('scale-up');
				$('body').removeClass('scale-up').removeClass('scale-up-bottom').removeClass('scale-up-top');
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			});
			
		}	
		
			
	}//End Showcase		


/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function Portfolio() {	
			
		if( $('.portfolio-wrap').length > 0 ){			
			
			
			
			if ($("body").hasClass("smooth-scroll")) {
				var elem = document.querySelector("#content-scroll");
				var scrollbar = Scrollbar.init(elem,
				{
					renderByPixels: true,
					damping:0.05
				});
			}
			
			var $container = $('.portfolio');
		
			$container.isotope({
				layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			$("#all").trigger('click');
				
			$('.item').each(function() {
				var image = $(this).find('.item-image').data('src');	
				$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
			});
			
			
			$(".item-image").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).find('video').each(function() {
					$(this).get(0).play();
				});
			});
			
			$('.item-image').on('mousedown', function(event) {
				return false;
			});
				
			$(".item-image").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$(this).find('video').each(function() {
					$(this).get(0).pause();
				});
			});
			
			$("#main-page-content").mouseenter(function(e) {					
				$( "#ball" ).addClass("hold")
			});
			
			$("#main-page-content").mouseleave(function(e) {					
				$( "#ball" ).removeClass("hold")
			});
			
			
			$('#main-page-content.portfolio-page').on('mousedown', function(event) {
				$( "#ball" ).removeClass("hold");
				TweenMax.to('#ball', 1,{width:60, height:60});
				TweenMax.to('#hold-event', 1,{scale:0, width:56, height:56});
				var progress = $('#hold-event');
				TweenMax.to(progress, 1, {force3D:true, backgroundColor : 'rgba(255, 255, 255, 1)'﻿, onComplete:function(){
					
					//Execute trigger click here
					var heroheight = $("#hero").height() 
					if ($("body").hasClass("smooth-scroll")) {
						TweenLite.to(scrollbar, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
					} else {
						TweenLite.to(window, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
					}
					
					TweenMax.to(progress, 0.3,{force3D:true, backgroundColor : 'rgba(255, 255, 255, 0)'});
					TweenMax.to('#ball', 0.3,{width:30, height:30});
					TweenMax.to($("#hero"), 2, {force3D:true, scale: 1, opacity:0, delay:0, ease:Power2.easeInOut});
					TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:0.3, delay:0, ease:Power2.easeInOut});
					$('#filters-overlay').addClass('active');
					TweenMax.to($(".below-caption .item-caption"), 0.5, {opacity:0, delay:0.2, ease:Power2.easeOut});
					
					//Fade In Navigation Lists
					TweenMax.set($(".filters-info"), {y:30, opacity:0});
					TweenMax.to($(".filters-info"), 0.4, {force3D:true, y:0, opacity:1, delay:0.7, ease:Power2.easeOut});
					var tlMenu = new TimelineLite();
					tlMenu.set($(".filters-timeline"), {y:60, opacity:0});
					$(".filters-timeline").each(function(index, element) {
						tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.8, ease:Power3.easeOut}, index * 0.1)
					});
			  }});
			});
			
			$('#main-page-content.portfolio-page').on('mouseup touchend', function(event) {
				$( "#ball" ).addClass("hold")
				TweenMax.to('#ball', 0.3,{width:30, height:30});
				TweenMax.to('#hold-event', 0.3,{force3D:true, scale:1, width:26, height:26, backgroundColor : 'rgba(255, 255, 255, 0)'});
			});
			
			//Overlay Menu
			$('#show-filters, #close-filters').on('click', function() {			
				$('#filters-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#filters-overlay').hasClass("active")) {	
						TweenMax.to($("#hero, #show-filters"), 0.6, {force3D:true, scale: 1, opacity:0, delay:0.6, ease:Power2.easeInOut});
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:0.3, delay:0, ease:Power2.easeInOut});					
						TweenMax.to($(".below-caption .item-caption"), 0.3, {opacity:0, ease:Power2.easeOut});
						
						//Fade In Navigation Lists
						TweenMax.set($(".filters-info"), {y:30, opacity:0});
						TweenMax.to($(".filters-info"), 0.4, {force3D:true, y:0, opacity:1, delay:0.7, ease:Power2.easeOut});
						var tlMenu = new TimelineLite();
						tlMenu.set($(".filters-timeline"), {y:60, opacity:0});
						$(".filters-timeline").each(function(index, element) {
							tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.8, ease:Power3.easeOut}, index * 0.1)
						});
							
					} else {					
						
						TweenMax.to($("#hero, #show-filters"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						TweenMax.to($(".below-caption .item-caption"), 0.5, {opacity:1, delay:0.5, ease:Power2.easeOut});
						
						//Fade Out Navigation Lists
						TweenMax.to($(".filters-info"), 0.2, {force3D:true, y:-30, opacity:0, delay:0, ease:Power1.easeIn});					
						var tlMenu = new TimelineLite();
						$(".filters-timeline, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, 0.25, {opacity:0, y:-60, delay:0.1, ease:Power1.easeIn }, index * 0.1)
						});
						TweenMax.to('#hold-event', 0.3,{force3D:true, scale:1, width:26, height:26, backgroundColor : 'rgba(255, 255, 255, 0)'});	
						TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			
			$("#close-filters").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
			});
				
			$("#close-filters").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("close-icon");
				$('#ball i').remove();
			});
			
			
			//Title Center Hover Effect
			if( $('.centered-caption').length > 0 ){
			
				$( ".item-caption" ).wrap( "<div class='item-caption-wrap'></div>" );
				$('.item-title .scale-wrapper').each(function(){
					var words = $(this).text().slice(" ");
					var total = words.length;
					$(this).empty();
					for (index = 0; index < total; index ++){
						$(this).append($("<span /> ").text(words[index]));
					}
				});
				
				$(".portfolio").find(".item .item-appear").on("mouseenter", function(e) {
						
						TweenMax.to($(this).find('.item-title'), 0, {force3D:true, opacity:1,  y: 0});
						TweenMax.staggerTo($(this).find('.item-title span').sort(() => Math.round(Math.random())-0.1), 0.5, {y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.03)									
						TweenMax.to($(this).find(".item-cat"), 0.2, {force3D:true, opacity:1,  y: 0, delay:0.4, ease:Power2.easeOut});
						
					}).on("mouseleave", function(e) {
						
						TweenMax.to($(this).find('.item-title'), 0.3, {force3D:true, opacity:0, y: -50, ease:Power2.easeIn});
						TweenMax.set($(this).find('.item-title span'), { scaleY:2, y:100, opacity:0, delay:0.3});
						TweenMax.to($(this).find(".item-cat"), 0.2, {force3D:true, opacity:0,  y: -30, delay:0.1, ease:Power2.easeOut});
						TweenMax.set($(this).find(".item-cat"), {y: 30, opacity:0,  delay:0.3});									
						
					})
				
			}
			
			
			FitThumbScreen();
			
		}	
	
	}//End Portfolio

	
		
	

/*--------------------------------------------------
Function Shortcodes
---------------------------------------------------*/
	
	function Shortcodes() {
		
		// Accordion	  
		
		$('dd.accordion-content').slideUp(1).addClass('hide');		
		$('dl.accordion').on('click', 'dt', function() {
			$(this).addClass('accordion-active').next().slideDown(200).siblings('dd.accordion-content').slideUp(200).prev().removeClass('accordion-active');						
		});	
		$('dl.accordion').on('click', 'dt.accordion-active', function() {
			$(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(200);
		});
		
		$(".flexnav").flexNav({ 'animationSpeed' : 250 });
	
	}//End Shortcodes
	

	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		if( $('.slider').length > 0 ){
		
			$('.slider').owlCarousel({
				loop:true,
				margin:500,
				center: true,
				autoHeight:false,
				nav:true,
				navSpeed: 500,
				items:1,			
			});
			
			$( ".slider .owl-prev" ).removeClass( "parallax-wrap" );
			$( ".slider .owl-next" ).removeClass( "parallax-wrap" );
			
			$(".owl-prev").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
			});
				
			$(".owl-prev").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			$(".owl-next").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
			});
				
			$(".owl-next").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
		
		}
		
		if( $('.carousel').length > 0 ){
		
			$('.carousel').owlCarousel({
				loop:true,
				margin:20,
				autoHeight:false,
				navSpeed: 600,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					479:{
						items:2
					},
					1024:{
						items:3
					},
					1466:{
						items:3
					}
				}
			});
			
			$( ".carousel .owl-prev" ).removeClass( "parallax-wrap" );
			$( ".carousel .owl-next" ).removeClass( "parallax-wrap" );
			
			$(".owl-prev").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
			});
				
			$(".owl-prev").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			$(".owl-next").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
			});
				
			$(".owl-next").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
		}
		
		if( $('.carousel-auto').length > 0 ){
		
			$('.carousel-auto').owlCarousel({
				loop:true,
				margin:20,
				autoWidth:true,
				navSpeed: 600,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					479:{
						items:2
					},
					1024:{
						items:3
					},
					1466:{
						items:3
					}
				}
			});
			
			setTimeout( function(){	
				$( ".carousel-auto .owl-prev" ).removeClass( "parallax-wrap" );
				$( ".carousel-auto .owl-next" ).removeClass( "parallax-wrap" );
			} , 100 );
			
			setTimeout( function(){	
				
			$(".owl-prev").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
			});
				
			$(".owl-prev").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			$(".owl-next").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
			});
				
			$(".owl-next").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			} , 200 );		
			
		}
		
		
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:false,
				items:1,
				autoplay:false,
				smartSpeed: 750,
				autoHeight:true,
				autoplayHoverPause:true,
				nav:true,
				navText: ["<div class='prev-testimonial parallax-element'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>","<div class='next-testimonial parallax-element'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>"],
			});
		}
		
		
	}//End Sliders	
	
	
/*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/	
	
	function JustifiedGrid() {
		
		if( $('#justified-grid').length > 0 ){
		
			$('#justified-grid').justifiedGallery({
				rowHeight : 300,
				lastRow : 'nojustify',
				margins : 10
			});
		
		}
		
	}//End Justified Grid	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
		
		$(".image-link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
		});
			
		$(".image-link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1,  x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
			
	}//End Lightbox	
	
	
	
/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		
	function ContactForm() {	
	
		if( jQuery('#contact-formular').length > 0 ){
			
			$('#contactform').submit(function(){
				var action = $(this).attr('action');
				$("#message").slideUp(750,function() {
					$('#message').hide();
					$('#submit').attr('disabled','disabled');		
					$.post(action, {
						name: $('#name').val(),
						email: $('#email').val(),
						comments: $('#comments').val()
					},
					function(data){
						document.getElementById('message').innerHTML = data;
						$('#message').slideDown('slow');
						$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
						$('#submit').removeAttr('disabled');
						if(data.match('success') != null) $('#contactform').slideUp('slow');		
					}
				);		
				});		
				return false;		
			});		
		}

	}//End ContactForm
	
	
	
/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/	


	function PlayVideo() {
	
		if( $('.video-wrapper').length > 0 ){	
			
			
			$(".video-wrapper").mouseenter(function(e) {
				if ($(this).hasClass("play")) {
					$( "#ball" ).addClass("pause-movie")		
				}
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				$( "#ball" ).addClass("over-movie").append( '<i class="fa fa-play"></i><i class="fa fa-pause"></i>' );
			});
			
			$(".video-wrapper").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				$("#ball").removeClass("over-movie").removeClass("pause-movie");
				$('#ball i').remove();
			});
			
			$(".video-wrapper .control").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '20px', scale: 0});
			});
			
			$(".video-wrapper .control").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			});
			
			var videocenter = ($(window).height() - $('.video-cover').height()) / 2
					
			////////////////////////////////////////////////////// REFACTOR //////////////////////////////////////////////////////
			// plays or pause the video function of its current state
			var playpause = function( videoObj ) {
				
				if( videoObj[0] != null ){
					if(videoObj[0].paused || videoObj[0].ended) {
						
						videoObj.parent().addClass('play');
						videoObj[0].play();
					}
					else {
						
						videoObj.parent().removeClass('play');
						videoObj[0].pause();
					}
				}
			};
			
			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
			// Events
			// click to video cover - will start the video
			$('.video-wrapper').on('click', function() {
				
				$('html,body').animate({scrollTop: $(this).offset().top - videocenter},390);		
				// hide the video cover in order to start playing
				$(this).find('.video-cover').addClass('hidden');
				
				$( "#ball" ).toggleClass("pause-movie");
				
				// pause first the other videos
				var current_wrapper = $(this);
				$('#main-page-content').find('.video-wrapper').each(function() {
					
					if( !current_wrapper.is( $(this) ) ){
						
						$(this).removeClass('play');
						$(this).find('video').each(function() {
							
							if( !$(this).get(0).paused && !$(this).get(0).ended ) {
								
								$(this).get(0).pause();
							}
						});
					}
					
				});
				
				// trigger the click for the inner video
				$(this).find('video').each(function() {

					playpause( $(this) );
				});

			});
			
			//fullscreen button clicked
			$('.btnFS').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				if($.isFunction(video_object[0].webkitEnterFullscreen)) {
					video_object[0].webkitEnterFullscreen();
				}	
				else if ($.isFunction(video_object[0].mozRequestFullScreen)) {
					video_object[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
				
			});
				
			//sound button clicked
			$('.sound').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				video_object[0].muted = !video_object[0].muted;
				$(this).toggleClass('muted');
				if(video_object[0].muted) {
					parent_wrapper.find('.volumeBar').css('width',0);
				}
				else{
					parent_wrapper.find('.volumeBar').css('width', video_object[0].volume*100+'%');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			//progress bar (video timebar) clicked
			$('.progress').on('click', function( e ) {
				
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
									
				// calculate click position
				// and update video current time
				// as well as progress bar
				var maxduration 	= video_object[0].duration;
				var position 			= e.pageX - $(this).offset().left;
				var percentage 	= 100 * position / $(this).width();
				if(percentage > 100) {
					
					percentage = 100;
				}
				if(percentage < 0) {
					
					percentage = 0;
				}
				$('.timeBar').css('width', percentage+'%');	
				video_object[0].currentTime = maxduration * percentage / 100;
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			$('#main-page-content').find('video').each(function() {
			
				var video = $(this);
				var video_wrapper = $(this).parent();
				
				//remove default control when JS loaded
				video[0].removeAttribute("controls");
				video_wrapper.find('.control').fadeIn(500);
				video_wrapper.find('.caption').fadeIn(500);
			 
				//before everything get started and we have the info about the video such as duration
				video.on('loadedmetadata', function() {
					
					var video_object = $(this);
					var parent_wrapper = $(this).parent();
					//set video properties
					parent_wrapper.find('.current').text(timeFormat(0));
					parent_wrapper.find('.duration').text(timeFormat(video[0].duration));
					
				});
				
				//display current video buffered progress
				video.on('progress', function() {
					
					var video_object 		= $(this);
					var parent_wrapper 	= $(this).parent();
					var maxduration 		= video_object [0].duration;
					
					if (maxduration > 0) {
					  for (var i = 0; i < video_object [0].buffered.length; i++) {
							if (video_object [0].buffered.start(video_object [0].buffered.length - 1 - i) <video_object [0].currentTime) {
								var perc = (video_object [0].buffered.end(video_object [0].buffered.length - 1 - i) / maxduration) * 100 + "%";
								parent_wrapper.find('.bufferBar').css('width',perc+'%');
								break;
							}
						}
					}
					
				});
				
				//display current video play time
				video.on('timeupdate', function() {
					
					var parent_wrapper 	= $(this).parent();
					var currentPos 			= $(this).get(0).currentTime;
					var maxduration 		= $(this).get(0).duration;
					var perc 					= 100 * currentPos / maxduration;
					parent_wrapper.find('.timeBar').css('width',perc+'%');	
					parent_wrapper.find('.current').text(timeFormat(currentPos));	
				});
				
				//video screen and play button clicked
				video.on('click', function() { 
					
					playpause( $(this) ); 
				});
				
				//video canplay event
				video.on('canplay', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeOut(100); //?
				});
				
				//video canplaythrough event
				//solve Chrome cache issue
				var completeloaded = false;
				video.on('canplaythrough', function() {
					
					completeloaded = true;
				});
				
				//video ended event
				video.on('ended', function() {		
					
					$(this).get(0).pause();
					$(this).parent().removeClass("play");
					$( "#ball" ).toggleClass("pause-movie");
				});
			
				//video seeking event
				video.on('seeking', function() {
					
					//if video fully loaded, ignore loading screen
					if(!completeloaded) { 
						var parent_wrapper = $(this).parent();
						parent_wrapper.find('.loading').fadeIn(200); //?
					}	
				});
				
				//video seeked event
				video.on('seeked', function() { });
				
				//video waiting for more data event
				video.on('waiting', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeIn(200); //?
				});
				
			});
			
		}
		
	}// End PlayVideo					
	
	
	/*--------------------------------------------------
Function Contact Map
---------------------------------------------------*/	
		
	function ContactMap() {	
	
		if( jQuery('#map_canvas').length > 0 ){					
			var latlng = new google.maps.LatLng(43.270441,6.640888);
			var settings = {
				zoom: 14,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false};			
				var newstyle = [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				}
			];
			var mapOptions = {
				styles: newstyle,
				mapTypeControlOptions: {
					 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'holver']
				}
			};
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			var mapType = new google.maps.StyledMapType(newstyle, { name:"Grayscale" });    
				map.mapTypes.set('holver', mapType);
				map.setMapTypeId('holver');
						
			
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;">Hello Friend!</h4>'+
				'<div id="bodyContent">'+
				'<p color:#999; font-size:14px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var companyImage = new google.maps.MarkerImage('images/marker.png',
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)<!-- Position of the marker -->
			);
			var companyPos = new google.maps.LatLng(43.270441,6.640888);	
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				icon: companyImage,               
				title:"Our Office",
				zIndex: 3});	
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});	
		}
		
		return false
	
	}//End ContactMap
	
	
/*--------------------------------------------------
Function Load Via Ajax
---------------------------------------------------*/	
		
	function LoadViaAjax() {		
		
		FirstLoad();		
		LazyLoad();		
		Portfolio();
		Showcase();
		ShowcaseCarousel();		
		Shortcodes();
		Sliders();
		JustifiedGrid();
		Lightbox();
		ContactForm();
		PlayVideo();
		ContactMap();		
	
	}//End Load Via Ajax				
	
		