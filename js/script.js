$(function(){
	/* mobile tab */
	var contentMobile=$('.content_m');
	contentMobile.find('ul>li>ul').hide();
	contentMobile.find('ul>li.on>ul').show();
	
	contentMobile.find('ul>li>a').on('click', function(e){
		e.preventDefault();
		var $this=$(this);
		
		$this.next('ul').show().parent('li').addClass('on').siblings('li').removeClass('on').find('ul').hide();
	});
	
	/* mobile menu */
	$('.mobile .m_menu_btn').on('click', function(){
		$('.m_menu').slideToggle(1000);
	});
	
	/* bx Slider */
	//var mainBgColor=new Array('#e0eaf3', '#fff5b1', '#fef1e1', '#ddf8ff');
	var slider=$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		auto:true,
		speed:1000,
		onSlideAfter:function(){
			/* $('#bxslider').css({background:mainBgColor[slider.getCurrentSlide()]});
			$('#header').css({background:mainBgColor[slider.getCurrentSlide()]}); */
		}
	});
	
	
	/* banner slide */
	var slide=$('.banner_area .area'),
		slideList=$('.banner_area .area li'),
		slideWidth=slideList.width(),
		setIntervalId=undefined;
	
	bannerSlide();
	function bannerSlide(){
		setIntervalId=setInterval(function(){
			slide.stop().animate({left:-slideWidth},500, function(){
				$('.banner_area .area li:first').insertAfter('.banner_area .area li:last');
				slide.css({left:0});
			});			
		},2000);
	}
	
	$('.banner_left_btn, .banner_right_btn, .banner_area').on('mouseover focus', function(){
		clearInterval(setIntervalId);
	})
	$('.banner_left_btn, .banner_right_btn, .banner_area').on('mouseout leave', function(){
		bannerSlide();
	})
	
	function left01(){
		$('.banner_area .area li:last').insertBefore('.banner_area .area li:first');
		slide.css({left:-slideWidth}).stop().animate({left:0},500);
	}
	function right01(){
		slide.stop().animate({left:-slideWidth},500, function(){
			$('.banner_area .area li:first').insertAfter('.banner_area .area li:last');
			slide.css({left:0});
		});
	}
	
	$('.banner_left_btn').click(function(){
		left01();
	});
	$('.banner_right_btn').click(function(){
		right01();
	});
});