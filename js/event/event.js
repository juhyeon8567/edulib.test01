$(document).ready(function(){

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

