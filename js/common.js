$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
      current = 0,
      elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // initialize wow.js
  new WOW().init();
    });



$(document).ready(function () {
  // Push the body and the nav over by 285px over
  var main = function () {
    $("#home").click(function () { 
      $("body").animate(
      {
        right: "0px" },
      500);
    });
  };

  $(document).ready(main);

  // initiate full page scroll

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 300,
    navigation: true,
    navigationTooltips: ["home", "about", "portfolio", "design", "connect"],
    anchors: ["home", "about", "portfolio", "design", "connect"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
    } });


  // move section down one
  $(document).on("click", ".mouse", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname)
      {
        var target = $(this.hash);
        target = target.length ?
        target :
        $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
          {
            scrollTop: target.offset().top },

          700);

          return false;
        }
      }
    });
  });


});

	



$(function(){
//slider
$('.slider-items').slick({
        autoplay:false,
		prevArrow:'.prev',
		nextArrow:'.next',
		slidesToShow:1,
		 fade: true,
		 dots:true,
		 centerMode: true,
		 centerPadding: '1px',
		cssEase: 'linear'
      });

//laypup
	const POPUP_BTN =  document.querySelectorAll("#lay_btn, #app_btn");
	const LAYER_POPUP = document.querySelectorAll("#lay_view");
	const OVERLAY =  document.querySelector('.overlay');

	POPUP_BTN.forEach(function(btn, i){
	 btn.addEventListener("click", function(){
		OVERLAY.style.display = 'block';
		LAYER_POPUP[i].style.display = 'block';
		 $('.slick-dots, #fp-nav').fadeToggle(200)	;
		 var tx = ($(window).width()-$("#lay_view .view_area").width())/2;
		 var ty = ($(window).height()-$("#lay_view .view_area").height())/2;
		 $("#lay_view .view_area").css({left:tx+"px",top:ty+"px"});	 
		 
	  })
	}) 
	LAYER_POPUP.forEach(function(el, i){
	  el.querySelector('.btn_close').addEventListener("click", function(){
		  $('.slick-dots, #fp-nav').fadeToggle(200)	;
		OVERLAY.style.display = 'none';
		el.style.display = 'none';
		 
	  })
	}) 

 $('.view_area').css('height', $(window).height()); 
	 $(window).resize(function() {
        $('.view_area').css('height', $(window).height()); 
    }); 



//


});
