<template>
	<div class="bd">
			<div class="le">
				<img src="../assets/bo7.jpg" />
			</div>
			<div class="ri">
				<ul class="ri_ul">
					<li>账户登录</li>
					<li>短信快捷登录</li>
				</ul>
				<p class="sj1">
					<button>	&hearts;</button><input type="text" id="sj" placeholder="请输入手机号码"/>
				</p>
				<div class="ss"></div>
			<p class="ps">
					<button>	&spades;</button><input type="password" id="ps" placeholder="请输入登录密码"/>
			</p>
			<div class="ss1"></div>
		<p class="bu">
			<button id="bu">登录</button>
			
		</p>
		<p class="ee"><span><input type="checkbox"/>下次自动登录</span><span>忘记密码?</span><router-link to="/zc"><span>立即注册</span></router-link> </p>
	<p class="cc"><span class="nn">其他登录</span><span class="sp_im"><img src="../assets/wx.jpg"/></span></p>
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
			
			
			$("#bu").click(function(){
				if($(".ss").html()=="手机号格式正确"&& $(".ss1").html()=="密码正确"){
					alert("登录成功")
				}else{
					alert("登录失败")
				}
			})
		
		      
			
	})
</script>

<style scoped="scoped">
	.ww{
		position: fixed;
		top: -100px;
	}
	.cc{
		margin-left: 50px;
		
		line-height: 40px;
	}
	
	
	.sp_im img{
		margin-left: 10px;
		margin-top: 10px;
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}
	.ee{
		padding-top: 20px;
	}
	.ee span:nth-child(1){
		margin-left:50px ;
	}
	.ee span:nth-child(2){
		margin-left:192px ;
	}
	.ee span:nth-child(3){
		color: red;
	}
	.bu button{
		background-color: red;
		color: white;
		border-radius: 8px;
		border: 1px solid red;
		margin-left: 50px;
		width: 440px;
		height: 46px;
	}
	.ss{
		height: 10px;
		margin-left: 60px;
		padding-top: 10px;
		padding-bottom: 20px;
	}
	.ss1{
	height: 10px;
		margin-left: 60px;
		padding-top: 10px;
		padding-bottom: 16px;
	}
	.ps{
		
		margin-left: 60px;
	}
	.sj1{
		margin-top: 40px;
		margin-left: 60px;
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
	.ps button{
		border:  1px solid darkgray;
		border-bottom-left-radius:6px ;
		border-top-left-radius:6px ;
		height: 40px;
		width: 38px;
	}
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	.ri_ul li{
	
		text-align: center;
		width: 110px;
		height: 40px;
		line-height: 40px;
	}
	.ri_ul li:nth-child(2){
		margin-left: 6px;
	}
	.ri_ul li:nth-child(1){
		color: red;
		background-color: white;
	}
	.ri{
		width: 566px;
		height:416px;	
		background-color: #f5f5f5;
	}
	.ri_ul{
		
		display: flex;
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
		height: 70px;
	}
	.gg{
		padding-left: 10px;
		border-left:2px solid darkgray ;
		margin-left:16px ;
		font-size: 28px;
		line-height: 80px;
	}
	.j{
		line-height: 80px;
		font-size: 20px;
		margin-left: 700px;
	}
	.le img{
		width: 570px;
		height: 416px;
	}
	.bd{
		padding-top: 50px;
		justify-content: space-between;
		display:flex ;
		width: 1200px;
		margin: 0 auto;
		height: 416px;
	}
</style>