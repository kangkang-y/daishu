
$(document).ready(function(){
   var i = 0 ;
   var timer;
 
  //用jquery方法设置第一张图片显示，其余隐藏
  $('.item').eq(0).show().siblings('.item').hide();
   
  //调用showTime()函数（轮播函数）
  showTime();
   
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $('.tab').hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    i = $(this).index();
    Show();
    clearInterval(timer);
  },function(){
    //
    showTime();
  });
   
  //鼠标点击左侧的箭头
  $('.prev').click(function(){
    clearInterval(timer);
    if(i == 0){
      i = 5;//注意此时i的值
    }
    i--;
    Show();
    showTime();
  });
   
  //鼠标点击右侧的箭头
  $('.next').click(function(){
    clearInterval(timer);
    if(i == 4){
      i = -1;//注意此时i的值
    }
    i++;
    Show();
    showTime();
  });
 
   
//创建一个showTime函数
function showTime(){
  //定时器
  timer = setInterval(function(){
    //调用一个Show()函数
    Show();
    i++;
    //当图片是最后一张的后面时，设置图片为第一张
    if(i==5){
      i=0;
    }
  },2000);
}
 
 
//创建一个Show函数
function Show(){
  //在这里可以用其他jquery的动画
  $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
   
  //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
  $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
   
}
 


$(function(){

    setInterval(function(){
 $(document).ready(function(){
	$(function(){
	$(".bo2_1").hover(function(){
		$(".hh").animate({
		"top":"98px"
		},500)
	},function(){
		$(".hh").animate({
			"top":"66px"
		},500)
	})
})


	$(function(){
		$(".bo2_2").hover(function(){
			$(".bo2_2 img").animate({
				"width":"auto",
			"height":"416px"
			
			
			},300)
		},function(){
			$(".bo2_2 img").animate({
				"width":"520px",
			"height":"410px"
			},300)
		})
	})
$(function(){
	$(".bo3_1").hover(function(){
		$(".ll").animate({
			"top":"130px"
		},300)
		
	},function(){
		$(".ll").animate({
			"top":"100px"
		},300)
	})
})

$(function(){
	$(".p2 img").hover(function(){
					$(this).css({
					"transform":"scale(1.2)"
                   
					})
				},function(){
					$(this).css({
						"transform":"scale(1)"
					})
				})
})
//$(function(){
//	$(".p2 img").hover(function(){
//		$(".p2 img").animate({
//			"width":"510px",
//			"height":"480px",
//		 
//		},300)
//	},function(){
//		$(this).animate({
//			"width":"436px",
//			"height":"390px",
//			"opacity":"1"
//		},300)
//	})
//})
$(function(){
	$(".p3 img").hover(function(){
					$(this).css({
					"transform":"scale(1.2)"
                   
					})
				},function(){
					$(this).css({
						"transform":"scale(1)"
					})
				})
})
$(function(){
	$(".p3 img").hover(function(){
		$(".oo").animate({
			"top":"120px"
		},300)
	},function(){
		$(".oo").animate({
			"top":"100px"
		},300)
	})
})
$(function(){
	$(".p4 img").hover(function(){
		$(".lo").animate({
			"top":"126px"
		},300)
	},function(){
		$(".lo").animate({
			"top":"110px"
		},300)
	})
})
$(function(){
	$(".p4 img").hover(function(){
					$(this).css({
					"transform":"scale(1.2)"
                   
					})
				},function(){
					$(this).css({
						"transform":"scale(1)"
					})
				})
})
$(function(){
	$(".p5 img").hover(function(){
		$(".lp").animate({
			"top":"120px"
		},300)
	},function(){
		$(".lp").animate({
			"top":"100px"
		},300)
	})
})


})
$(function(){
	$(".p5 img").hover(function(){
					$(this).css({
					"transform":"scale(1.2)"
                   
					})
				},function(){
					$(this).css({
						"transform":"scale(1)"
					})
				})
})
		
		$(function(){
	
	$(".sj").hover(function(){
		$(".sp1").show()
	},function(){
		$(".sp1").hide()
	})
		$(".lx").hover(function(){
		$(".sp2").show()
	},function(){
		$(".sp2").hide()
	})
})
		
	



});
        

    },0);

});