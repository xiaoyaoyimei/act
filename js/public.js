$(function(){
	$('.cloose-tc button').click(function(){
		$(this).parent().fadeOut();
		})
		$('.btn-tk').click(function(e){
			e.preventDefault();
			window.location.href="index_4.html";
			})
			$('.title-list .title-tab img').click(function(e){
				var index=$(this).data('index');
				var title=$('.title-tab');
				var cont=$('.cont-wrap');
				title.eq(index).siblings().hide().end().show();
				cont.eq(index).show().siblings('.cont-wrap').hide();
				})
	})