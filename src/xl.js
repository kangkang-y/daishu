
		
$(document).ready(function(){
	
		$(function(){
	$(".li1").hover(function(){
		$(".l").show()
	},function(){
			$(".l").hide()
	})
})
$(function(){
	$(".li2").hover(function(){
		$(".l1").show()
	},function(){
			$(".l1").hide()
	})
})
$(function(){
	$(".li3").hover(function(){
		$(".l2").show()
	},function(){
			$(".l2").hide()
	})
})
$(function(){
	$(".p1 img").hover(function(){
		$(".ii").animate({
			"left":"766px"
		},500)
	},function(){
		$(".ii").animate({
			"left":"720px"
		},500)
	})
})
$(function(){
	$(".jo img").hover(function(){
		$(".ii1").animate({
			"left":"100px"
		},500)
	},function(){
		$(".ii1").animate({
			"left":"60px"
		},500)
	})
})
$(function(){
	$(".pp img").hover(function(){
		$(this).animate({
			"margin-top":"0px"
		},500)
	},function(){
		$(this).animate({
			"margin-top":"36px"
		},500)
	})
})


})




