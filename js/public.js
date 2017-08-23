$(function(){
	$('.cloose-tc button').click(function(){
		$(this).parent().fadeOut();
		})
		$('.btn-tk').click(function(e){
			e.preventDefault();
			window.location.href="index_4.html";
			})
	})