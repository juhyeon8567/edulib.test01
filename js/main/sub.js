// 모바일 더보기 메뉴
$(document).ready(function(){
	$('.more-btn').click(function(){
		$('.mobile_layer').show();
	}),
	$('.mo-clsbtn').click(function(){
		$('.mobile_layer').hide();
	});
});


$(".more-btn").click(function(){
	let documentHeight = $(document).height();
	let windowHeight = $(window).height();
	$('.mo-dark-bg').css('height',documentHeight);
	$(".mobile_layer").css('height',windowHeight);
	$('.mo-dark-bg').show();
	$(".mobile_layer").animate({right:"0", opacity: "1"}, '0.3s');
});
$(".mo-clsbtn, .mo-dark-bg").click(function(){
	$('.mo-dark-bg').hide();
	$(".mobile_layer").animate({right:"-100%", opacity: "0"},"fast");
});


// 찜한콘텐츠 > sortable 
$(function() {
    $("#sortable").sortable({
		items: "li:not(.clicknot)",
    	handle: '.sort-icon',
		cursor: 'move'
    });
	$("#sortable li").disableSelection();
});

// 모바일 검색창
$('.search-box2').click(function(){
	$('.mo-src-layer').show();
}),
$('.mo-clsbtn').click(function(){
	$('.mo-src-layer').hide();
});

$(document).ready(function(){
	$(".search-box2").click(function(){
		let documentHeight = $(document).height();
		let windowHeight = $(window).height();
		$('.mo-dark-bg2').css('height',documentHeight);
		$(".mo-src-layer").css('height',windowHeight);
		$('.mo-dark-bg2').show();
		$(".mo-src-layer").animate({right:"0", opacity: "1"}, '0.3s');
	});
	$(".mo-clsbtn, .mo-dark-bg2").click(function(){
		$('.mo-dark-bg2').hide();
		$(".mo-src-layer").animate({right:"-100%", opacity: "0"},"fast");
	});
});

// 모바일메뉴 > 초등
$('.main_gnb_menu > .sub1').click(function(){
	$('.cont-navlayer').show();
}),
$('.mo-clsbtn2').click(function(){
	$('.cont-navlayer').hide();
});

// 모바일메뉴 > 중학
$('.main_gnb_menu > .sub2').click(function(){
	$('.cont-navlayer2').show();
}),
$('.mo-clsbtn2').click(function(){
	$('.cont-navlayer2').hide();
});

// 모바일메뉴 > 계기교육
$('.main_gnb_menu > .sub3').click(function(){
	$('.cont-navlayer3').show();
}),
$('.mo-clsbtn2').click(function(){
	$('.cont-navlayer3').hide();
});

// 모바일메뉴 > 교육이슈
$('.main_gnb_menu > .sub4').click(function(){
	$('.cont-navlayer4').show();
}),
$('.mo-clsbtn2').click(function(){
	$('.cont-navlayer4').hide();
});

// 모바일메뉴 > 주제별패키지
$('.main_gnb_menu > .sub5').click(function(){
	$('.cont-navlayer5').show();
}),
$('.mo-clsbtn2').click(function(){
	$('.cont-navlayer5').hide();
});


// 마이에듀립 > 상단공통알림바 열/닫
// $('.meb-push button').click(function(){
// 	$('.meb-push .card-header .spc-bubble').fadeIn();
// });

// 메인 > 탑버튼
$(function() {
	$(window).scroll(function() { 
		if ($(this).scrollTop() > 200) { 
			$('#topBtn').fadeIn(); } 
		else { $('#topBtn').fadeOut();}
	}); 
	$("#topBtn").click(function() {
   	$('html, body').animate({ scrollTop : 0  }, 300);
    return false; });
});

// 에듀립소개 메인 콘텐츠 슬라이드 (신규추가)
var Mainswiper = new Swiper('.intro-swiper', {
	slidesPerView: "auto",
	spaceBetween: 5,
	loop: true,
	pagination: {
		el: '.intro-pagination',
		clickable: true
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	}
});

// 이용가이드 슬라이드 (신규추가)
var arrMenu = ["계기교육", "교육이슈", "주제별 패키지"];
var Mainswiper = new Swiper('.ctfull-swiper', {
	effect : 'fadeOut',
	loop: true,
	loopedSlides: 3,
	pagination: {
		el: '.ct-pagination',
		clickable: true,
		renderBullet: function(index, className) {
			return '<span class="' + className + '">' + arrMenu[index] + '</span>'
		}
	},
	navigation: {
		nextEl: '.ct-nav .swiper-button-next',
		prevEl: '.ct-nav .swiper-button-prev'
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	}
});

// 그랜드이벤트 페이지 콘텐츠 슬라이드 (신규추가)
var Mainswiper = new Swiper('.grand-swiper', {
	slidesPerView: "auto",
	spaceBetween: 5,
	loop: true,
	pagination: {
		el: '.gsc-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.gsc-nav .swiper-button-next',
		prevEl: '.gsc-nav .swiper-button-prev'
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	}
}); 

// $('.like-list .todo-list').each(function(idx, el) {
// 	$(el).mouseover(function() {
// 		$(this).find('.folder-img > img').hide();
// 		$(this).find('.sort-icon').show();
// 	}).mouseleave(function() {
// 		$(this).find('.folder-img > img').show();
// 		$(this).find('.sort-icon').hide();
// 	});
// });


// 영상 전체보기 (풀스크린)
function video_fullscreen() {
	document.getElementById("video_obj").requestFullscreen();
}

// 영상 > 재생 및 일시정지
$('.play-start').click(function(){
	$('.play-pause').show()
	$('.play-start').hide();
});
$('.play-pause').click(function(){
	$('.play-start').show()
	$('.play-pause').hide();
});


// 볼륨 조절 (음소거) 클릭 이벤트
$('.volume-btn').click(function(){
	$('.volume-ps-btn').show()
	$('.volume-btn').hide();
});
$('.volume-ps-btn').click(function(){
	$('.volume-btn').show()
	$('.volume-ps-btn').hide();
});

// 볼륨 버튼에 오버시 볼륨바 나오게
$('.volume-btn').mouseover(function(){
	$('.volume-bar').show()
});
$('.volume-bar').mouseleave(function(){
	$('.volume-bar').hide()
});

