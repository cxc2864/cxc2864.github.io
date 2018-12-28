/**
 * Created by Steve on 2016/4/21.
 */
$(function(){
	changeFontSize();
	$(window).resize(function(){
		changeFontSize();
	});
});

var nanoSwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	loop: true,
	pagination: '.swiper-pagination',
	paginationClickable :true,
	//autoplay: 5000
	mousewheelControl : true
});

function changeFontSize() {
	var docEle = window.document.documentElement;
	var rem = Math.floor(docEle.clientWidth * 0.0073);
	docEle.style.fontSize = rem + 'px';
	$(".download .download-Nano").css("width", 21.3 * rem + 'px').css("height", 5.5 * rem + 'px').css("line-height", 5.5 * rem + 'px');
}
