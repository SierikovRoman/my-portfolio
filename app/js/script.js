$(document).ready(function(){

	var $btnTop = $(".top");
	$(window).on("scroll", function(){
		if($(window).scrollTop() >= 280){
			$btnTop.fadeIn();
		}else{
			$btnTop.fadeOut();
		}	
	});

	$btnTop.on("click", function(event) {
		$("html, body").animate({
			scrollTop: 0
		}, 900)
	});

	/* Доделать ! */
	$(function() {
		$("tr").slice(0, 3).show();
		$("#loadMore").on('click', function(e){
			e.preventDefault();
			console.log("q");
			$("tr:hidden").slice(0, 3).slideDown();
		})
	});

});