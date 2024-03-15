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
    navigationTooltips: ["home", "about", "portfolio", "lodev", "connect"],
    anchors: ["home", "about", "portfolio", "lodev", "connect"],
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

  //ajax form
  $(function () {
    // Get the form.
    var form = $("#ajax-contact");

    // Get the messages div.
    var formMessages = $("#form-messages");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData }).

      done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
      }).
      fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
          "Oops! An error occured and your message could not be sent.");

        }
      });
    });
  });
});
//# sourceURL=pen.js

	
//tab
$(document).ready(function() {
    const subTabNav = $(".tab_btn > li a"); // 서브 탭 앵커 태그

    // 서브 탭 클릭 이벤트 핸들러
    subTabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");

        // 해당 서브 탭 활성화
        $(target).addClass("active").siblings('.active').removeClass("active");
        $(this).closest('li').addClass("active").siblings().removeClass("active");
    });

    // 메인 탭 클릭 이벤트 핸들러
    tabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");

        // 해당 메인 탭 활성화
        $(target).addClass("active").siblings('.active').removeClass("active");
        $(this).closest('li').addClass("active").siblings().removeClass("active");

        // 서브 탭 유지 또는 첫 번째 서브 탭 활성화
        const subTabActive = $(target).find('.sub_tab_nav li.active');
        if (!subTabActive.length) {
            $(target).find('.tab_btn > li:first-child a').trigger('click');
        } else {
            subTabActive.find('a').trigger('click');
        }
    });

    // 페이지 로드 시 첫 번째 탭 활성화
    const mainTabActive = tabNavLi.filter('.active');		
    if (!mainTabActive.length) {
        tabNavLi.first().find('a').trigger('click');
    } else {
        mainTabActive.find('a').trigger('click');
		
    }
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
	const POPUP_BTN =  document.querySelectorAll("#lay_btn");
	const LAYER_POPUP = document.querySelectorAll("#lay_view");
	const OVERLAY =  document.querySelector('.overlay');

	POPUP_BTN.forEach(function(btn, i){
	 btn.addEventListener("click", function(){
		OVERLAY.style.display = 'block';
		LAYER_POPUP[i].style.display = 'block';
		 $('.slick-dots').fadeToggle(200)	;
		 var tx = ($(window).width()-$("#lay_view .view_area").width())/2;
		 var ty = ($(window).height()-$("#lay_view .view_area").height())/2;
		 $("#lay_view .view_area").css({left:tx+"px",top:ty+"px"});
		 
	  })
	}) 
	LAYER_POPUP.forEach(function(el, i){
	  el.querySelector('.btn_close').addEventListener("click", function(){
		  $('.slick-dots').fadeToggle(200)	;
		OVERLAY.style.display = 'none';
		el.style.display = 'none';
		 
	  })
	}) 



});
