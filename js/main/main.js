
$(document).ready(function(){
	
	$('.main_gnb_menu > li').click(function() {
		$('.depth').hide();
		var cls = $(this).data('target');
		var $menuArea = $('.main_gnb_depth .' + cls);
		$menuArea.stop().slideDown(400);
		
		$menuArea.find('.drop-box .grade .cls-menu span').css('background-color','#f2f9ff');
		$menuArea.find('.drop-box .grade .cls-menu .subject1').hide();
		
		$menuArea.find('.drop-box .grade .cls-menu span:eq(0)').css('background-color','#d3eaff');
		$menuArea.find('.drop-box .grade .cls-menu .subject1:eq(0)').show();
	});
	
	$('.depth').mouseleave(function() {
		$('.depth').stop().slideUp(300);
	}),
	$('.btn_gnb_close').click(function(){
		$('.depth').hide();
	});

	// 학년에 마우스오버시 과목 노출
	$('.drop-box .grade .cls-menu').mouseover(function() {
		$(this).siblings().find('span').css('background-color','#f2f9ff');
		$(this).siblings().find('.subject1').hide();
		
		$(this).find('span').css('background-color','#d3eaff');
		$(this).find('.subject1').show();
	});


	/*
	$('.main_gnb_menu > li').click(function() {
		if ( $(this).hasClass('active') ) {
			$('.main_gnb_depth .nav1').stop().slideUp(300);
			$(this).removeClass('active');
		} else {
			$('.main_gnb_depth .nav1').stop().slideDown(300);
			$(this).addClass('active');
		}
	});
	*/

	/*
	$('.sub1').click(function() {
		if ( $(this).hasClass('active') ) {
			$('.main_gnb_depth .nav1').stop().slideUp(300);
			$(this).removeClass('active');
		} else {
			$('.main_gnb_depth .nav1').stop().slideDown(300);
			$(this).addClass('active');
		}
	});

	/*
	$('.main_gnb_menu > li').click(function() {
		var cls = $(this).data('target');
		console.log(cls);
		if ( $(this).hasClass('active') ) {
			$('.main_gnb_depth .' + cls).stop().slideUp(300);
			$(this).removeClass('active');
		} else {
			$('.main_gnb_depth .' + cls).stop().slideDown(300);
			$(this).addClass('active');
		}
	});
	*/

	// $('.main_gnb_menu > li').mouseenter(function() {
	// 	$('.depth').hide();
		
	// 	var cls = $(this).data('target');
	// 	$('.main_gnb_depth .' + cls).stop().slideDown(400);

	// 	/*
	// 	if ( $(this).hasClass('active') ) {
	// 		$('.main_gnb_depth .' + cls).stop().slideUp(300);
	// 		$(this).removeClass('active');
	// 	} else {
	// 		$('.main_gnb_depth .' + cls).stop().slideDown(300);
	// 		$(this).addClass('active');
	// 	}
	// 	*/
	// });
	// $('.depth').mouseleave(function() {
	// 	$('.depth').stop().slideUp(300);
	// });
	  
});

// gnb 메뉴 뎁스
// $('.main_gnb_menu > li').click(function() {
// 	$('.depth').hide();
	
// 	var cls = $(this).data('target');
// 	$('.main_gnb_depth .' + cls).stop().slideDown(400);
	
// });
// $('.depth').mouseleave(function() {
// 	$('.depth').stop().slideUp(300);
// });



// aos animate
AOS.init();

// 메인배너 :: 로딩 체감속도 때문에 상단에 위치
var Mainswiper = new Swiper('.main-swiper .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 40,
	centeredSlides: true,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-nav .swiper-button-next',
		prevEl: '.swiper-nav .swiper-button-prev'
	},
	autoplay: {
		delay: 5000, //5초간 유지
		disableOnInteraction: false
	},
	breakpoints: {
		767: {
          spaceBetween: 0,
		  centeredSlides: false
        }
	}
});

// 메인배너 시작 및 정지 기능
// $('.start').on('click' , function(){
// 	mySwiper.autoplay.start();
// 	return false;
// })
// $('.stop').on('click' , function(){
// 	mySwiper.autoplay.stop();
// 	return false;
// })

// 에듀립소개 콘텐츠 스와이퍼
var Mainswiper = new Swiper('.cp-swiper', {
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.cp-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-nav .cp-btn-next',
		prevEl: '.swiper-nav .cp-btn-prev'
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	}
});

// 해시태그 스와이프
var swiper = new Swiper(".swiper-hashtag", {
	slidesPerView: "auto",
	spaceBetween: 5
});

// 메인 콘텐츠 스와이퍼
$(".cont-swiper .sub-swiper-container").each(function(k, v){
	var mySwiper = new Swiper($(v), {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 20,
		navigation: {nextEl: $('.swiper-button-next', $(this).parent()), prevEl: $('.swiper-button-prev', $(this).parent())},
		breakpoints: {
			767: {
			  slidesPerView: 2.3,
			  slidesPerGroup: 2
			}
		}
	});
	// 메인 콘텐츠 해시태그 롤링기능
	$(v).find('.swiper-hashtag').mouseover(function() {
		mySwiper.allowTouchMove = false;
		console.log('move false');
	}).mouseleave(function() {
		mySwiper.allowTouchMove = true;
		console.log('move true');
	});
});

// 모바일 이벤트 배너 스와이퍼
var Subswiper = new Swiper('.mo-event-ct', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});

// 서브페이지 사이드탭메뉴 중단원 메뉴
$('.lnb2 > li.fir-menu > a.fir-menu-a').click(function() {
	if ($(this).hasClass('active') ) {
		$(this).parent().find(' > ul').stop().slideUp(300);
		$(this).removeClass('active');
	} else {
		$(this).parent().find(' > ul').stop().slideDown(300);
		$(this).addClass('active');
	}
});

// 배너 클릭시 영상팝업
$('.ban-top > .btn').click(function(){
	$('.banner_pop').hide();
}),
$('.banner_pop').click(function(){
	$('.banner_pop, .ban-bg').hide();
});

// 계기교육 아코디언 메뉴
$(function() {
	var Accordion = function(el, active) {
		this.el = el || {};
		active = active || 0;
		var that = this;
		var links = this.el.find('.month-item, .mo-navtop');
		links.each(function(i){
			var link = links.eq(i);
			if (link.next().length === 0) { link.find('.fa').hide(); }
			link.on('click', { link: link }, that.dropdown);
		});
		if (active > 0) {
			links.eq(active - 1).trigger('click');
		}
	}
	Accordion.prototype.dropdown = function(e) {
		e.preventDefault();
		var $this = e.data.link;
		$this.parent()
			.siblings('.open').find('.submenu, .mo-submenu').slideUp()
		.addBack().removeClass('open');
		$this.parent()
			.toggleClass('open')
			.find('.submenu, .mo-submenu').stop().slideToggle();
	};
	var accordion = new Accordion($('#month_accordion, #accordion'), 1);
});

// 콘텐츠 썸네일 영상 미리보기 => ie 오류코드 / (const, => 안씀.)
// const video = Array.from(document.querySelectorAll('.cont-item'));
// video.forEach((item) => {
// 	const videoItem = item.querySelector('video');
// 	item.addEventListener('mouseover', () => {
//     	item.classList.add('active');
//     	!videoItem.play() ? videoItem.play() : '';
//   	});
//   	item.addEventListener('mouseleave', () => {
//     	item.classList.remove('active');
//     	videoItem.play() ? videoItem.pause() : '';
//   	});
// });

// 콘텐츠 썸네일 영상 미리보기
var video = document.querySelectorAll('.cont-item-wide .cont-item');
Array.prototype.forEach.call(video, function(item){
	var videoItem = item.querySelector('video');
		item.addEventListener('mouseover', function() {
    	item.classList.add('active');
    	!videoItem.play() ? videoItem.play() : '';
  	});
  		item.addEventListener('mouseleave', function() {
    	item.classList.remove('active');
    	videoItem.play() ? videoItem.pause() : '';
  	});
});

// 마우스오버시 썸네일 사라지고 영상 보여주기
// $('.cont-item-wide .cont-item').each(function(idx, el) {
// 	$(el).mouseover(function() {
// 		if( !tccom.common.util.isMobile() ) {
// 			$(this).find('.thum-type, .thum-type2 , .cont-thumbnail > img').hide();
// 			$(this).find('.video_item').show();
// 		}
// 	}).mouseleave(function() {
// 		if( !tccom.common.util.isMobile() ) {
// 			$(this).find('.thum-type, .thum-type2 , .cont-thumbnail > img').show();
// 			$(this).find('.video_item').hide();
// 		}
// 	});
// });


// 자동썸네일 사라지고 영상 보여주기
$('.cont-item-wide .cont-item').each(function(idx, el) {
	$(el).mouseover(function() {
		$(this).find('.thum-types, .thum-image > img').hide();
		$(this).find('.thum-video-item').show();
	}).mouseleave(function() {
		$(this).find('.thum-types, .thum-image > img').show();
		$(this).find('.thum-video-item').hide();
	});
});

// $('.cont-item-wide .cont-item').each(function(idx, el) {
// 	$(el).mouseover(function() {
// 		if( !tccom.common.util.isMobile() ) {
// 			$(this).find('.thum-types, .thum-image > img').hide();
// 			$(this).find('.video_item').show();
// 		}
// 	}).mouseleave(function() {
// 		if( !tccom.common.util.isMobile() ) {
// 			$(this).find('.thum-types, .thum-image > img').show();
// 			$(this).find('.video_item').hide();
// 		}
// 	});
// });




// 콘텐츠 썸네일 마우스오버시 각각 다른방향으로 나오게
// console.log($('.cont-thumbnail').length);
// $('.cont-item-wide .cont-thumbnail').each(function(idx, el) {
// 	var activeClass = "cont-wide-active";

// 	if (idx === 0 || idx === 4 || idx === 8) {
// 		activeClass= "cont-wide-active-left";
// 	}
// 	else if (idx === 3 || idx === 7 || idx === 11) {
// 		activeClass= "cont-wide-active-right";
// 	}
// 	$(el).mouseover(function() {
// 		$(el).parents('.cont-item').addClass(activeClass);
// 	});
// });
// $('.cont-item-wide .cont-item').mouseleave(function() {
// 	$(this).removeClass("cont-wide-active-left cont-wide-active-right cont-wide-active");
// });

// quickmenu
$('.quick-close .quick-title').click(function(){
	$('.quick-open').fadeIn('300')
	$('.quick-close').hide();
});
$('.quick-open .quick-title').click(function(){
	$('.quick-close').fadeIn('300')
	$('.quick-open').hide();
});


// link-copy tooltip
// tippy('.link-copy', {
// 	content: '링크복사',
// 	placement: 'bottom',
// 	animation: 'scale'
// });

// tippy('.inquiry', {
// 	content: '문의하기',
// 	placement: 'bottom',
// 	animation: 'scale'
// });