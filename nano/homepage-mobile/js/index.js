/**
 * Created by Steve on 2016/5/4.
 */
$(function(){

	changeFontSize();
	$(window).resize(function(){
		changeFontSize();
	});

	var nanoSwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		loop: true
		//autoplay: 3000
	});

	//控制菜单唤出和隐藏
	$("#toggle-block").click(function(event) {
		event.stopPropagation();
		$("body").toggleClass("call-out");
	});

	$("body").click(function(event) {
		event.stopPropagation();
		$(this).removeClass("call-out");
	});

	$(".sidebar .toEnglish").click(function(event) {
		event.stopPropagation();
		window.open("http://nanohome.cn/m/index.html");
	});

	$(".sidebar-list li").click(function(event) {
		event.stopPropagation();
		var showBlock = $(".content-container>." + $(this).attr("class"));
		$(this).siblings().removeClass("touched");
		$(this).addClass("touched");
		showBlock.siblings().css("display", "none");
		showBlock.css("display", "block");
		if($(this).hasClass("cooperation")) {
			$(".navbar .header-title").css("color", "#fff");
			$("#toggle-block .black").css("display", "none").siblings().css("display", "block");
		} else {
			$(".navbar .header-title").css("color", "#676767");
			$("#toggle-block .white").css("display", "none").siblings().css("display", "block");
		}
	});
});

function changeFontSize() {
	var docEle = window.document.documentElement;
	docEle.style.fontSize = Math.floor(docEle.clientHeight * 0.015625) + 'px';
}
