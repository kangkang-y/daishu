<template>
	<div class="zcc">
		<div class="tp">
			<div class="ty">
				<img src="../assets/lo.jpg" />
			<p class="gg">账户注册</p>
	<!--	<router-link to="/sy">	<p class="j">返回></p></router-link>-->
			</div>			
		</div>
		
		<div class="zw"></div>
		<div class="box">
			<p class="sj1">
					<button>	&hearts;</button><input type="text" id="sj" placeholder="请输入手机号码"/>
				</p>
				<div class="ss"></div>
			<p class="ps">
					<button>	&spades;</button><input type="password" id="ps" placeholder="请输入登录密码"/>
			</p>
			
			<div class="ss1"></div>
			<p class="ps1">
					<button>	&spades;</button><input type="password" id="ps1" placeholder="请确认登录密码"/>
			</p>
			<div class="ss2"></div>
			<div class="yz">
				<p class="sr"><button>	&spades;</button><input type="password" id="sr" placeholder="请输入验证码"/></p>
				<p class="hq"><button id="b1" class="cd" >点击发送</button></p>
			</div>
		<p class="bu">
			<button id="bu">立即注册</button>
			
		</p>
		</div>
	</div>
</template>

<script>
	$(function(){
		 var mykk=/^[1][3,4,5,7,8][0-9]{9}$/;
		$("#sj").focus(function(){
			$(".ss").html("请输入11位正确手机号");
		})
		$("#sj").blur(function(){
			if($("#sj").val()==""){
				$(".ss").html("不能为空！")
			}else if(mykk.test($("#sj").val())){
				$(".ss").html("手机号格式正确").css("color","green")
			}else{
				$(".ss").html("手机号格式错误！").css("color","red")
			}
		})
		
		$("#ps").focus(function(){
				$(".ss1").html("（至少包含 6 个字符)")
			})
			var kk=/\w{6}/g;
			$("#ps").blur(function(){
				if($("#ps").val()==""){
					$(".ss1").html("不能为空")
					return false;
				}else if(kk.test($("#ps").val())){
					$(".ss1").html("密码正确").css("color","green")
						return false;
				}else{
						$(".ss1").html("密码错误！").css("color","red")
						
				}
			})
			
			$("#ps1").focus(function(){
				$(".ss2").html("确认密码");
			})
			$("#ps1").blur(function(){
				if ($("#ps").val()==$("#ps1").val()) {
					$(".ss2").html("密码一致")
				}else{
					$(".ss2").html("密码不一致")
				}
			})
			
			$("#bu").click(function(){
				if($(".ss").html()=="手机号格式正确"&& $(".ss1").html()=="密码正确"&&$(".ss2").html()=="密码一致"){
					alert("注册成功")
				}else{
					alert("注册失败")
				}
			})
		
  time1=60;
    time2=60;
 
    function countDown($obj){
        var time;
        //有几个按钮写几个类似的。
        if($obj.attr("id")=="b1")
        {
            time=--time1;
            if(time<=0){
                time1=60;
                $obj[0].disabled=!$obj[0].disabled
                clearInterval(inter1)
                $obj.text("点击发送")
                return
            }
        }
        if($obj.attr("id")=="b2")
        {    time=--time2;
            if(time<=0){
                time1=60;
                $obj[0].disabled=!$obj[0].disabled
                clearInterval(inter2)
                $obj.text("点击发送")
                return
            }
        }
        $obj.text(time+"秒后重新发送")
    }
 
    $(function(){
        $(".cd").bind("click",function(){
            $this=$(this);
            //没有被禁用时禁用并执行倒计时
            if(!$this[0].disabled){
                $this[0].disabled='disabled';
                if($this.attr("id")=="b1"){
                    inter1=setInterval(function(){countDown($this)},1000)
                }
                if($this.attr("id")=="b2"){
                    inter2=setInterval(function(){countDown($this)},1000)
                }
 
            }
        })
    })
	})
</script>

<style scoped="scoped">

	
	.sr{
		margin-left: 360px;
	}
	.hq button{
		margin-left: 60px;
		width: 80px;
		height: 28px;
	}
	.sr button{ 
		border-top-left-radius:6px ;
		border-bottom-left-radius:6px ;
		background-color: lightgray;
		border: 2px solid lightgray;
		width: 26px;
		height: 28px;
	}
	.sr input{ 
		width: 200px;
		height: 24px;
	}

	.yz{
		display: flex;
	}
	.bu button{
		margin-top: 30px;
		background-color: red;
		color: white;
		border-radius: 8px;
		border: 1px solid red;
		margin-left: 350px;
		width: 440px;
		height: 46px;
	}
	.ss{
		height: 10px;
		margin-left: 360px;
		padding-top: 10px;
		padding-bottom: 20px;
	}
	.ss1{
	height: 10px;
		margin-left: 360px;
		padding-top: 10px;
		padding-bottom: 16px;
	}
	.ss2{
	height: 10px;
		margin-left: 360px;
		padding-top: 10px;
		padding-bottom: 16px;
	}
	.ps{
		
		margin-left: 360px;
	}
	.ps1{
		
		margin-left: 360px;
	}
	.sj1{
		padding-top: 60px;
		margin-top: 40px;
		margin-left: 360px;
	}
	.sj1 input{
		border-bottom-right-radius:6px ;
		border-top-right-radius:6px ;
		border: 1px solid darkgray;
		height: 38px;
		width: 380px;
	}
	.sj1 button{
		border:  1px solid darkgray;
		border-bottom-left-radius:6px ;
		border-top-left-radius:6px ;
		height: 40px;
		width: 38px;
	}
	.ps input{
		border-bottom-right-radius:6px ;
		border-top-right-radius:6px ;
		border: 1px solid darkgray;
		height: 38px;
		width: 380px;
	}
	.ps1 input{
		border-bottom-right-radius:6px ;
		border-top-right-radius:6px ;
		border: 1px solid darkgray;
		height: 38px;
		width: 380px;
	}
	.ps button{
		border:  1px solid darkgray;
		border-bottom-left-radius:6px ;
		border-top-left-radius:6px ;
		height: 40px;
		width: 38px;
	}
	.ps1 button{
		border:  1px solid darkgray;
		border-bottom-left-radius:6px ;
		border-top-left-radius:6px ;
		height: 40px;
		width: 38px;
	}
	.zw{
		height: 30px;
	}
	.box{
		width: 1200px;
		background-color: ghostwhite;
		margin: 0 auto;
		height: 500px;
	}
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	.tp{
		width: 100%;
		height: 80px;
		background-color: #f5f5f5;
	}
	.ty{
		margin: 0 auto;
		width: 1200px;
		height: 80px;
		display: flex;
		background-color: #f5f5f5;
	}
	.tp img {
		margin-left: 16px;
		line-height: 80px;
		width: 170px;
		height: 80px;
	}
	.gg{
		padding-left: 10px;
		border-left:2px solid darkgray ;
		margin-left:16px ;
		font-size: 28px;
		line-height: 80px;
	}
	#b1{
		width: 110px;
	}
	
</style>