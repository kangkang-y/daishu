<template>
	<div class="pa">
	<h2 style="margin-top: 26px; margin-bottom: 20px;">袋鼠品牌</h2>
		<ul class="ul1">
			<router-link to="/pa/jj"><li class="to" title="品牌简介">品牌简介</li></router-link>
			<router-link to="/pa/xx"><li class="to" title="形象代言人">形象代言人</li></router-link>
			<router-link to="/pa/dy"><li class="to" title="发展历程">发展历程</li></router-link>		
			<router-link to="/pa/zt"><li class="to" title="品牌展厅">品牌展厅</li></router-link>
			<router-link to="/pa/qw"><li class="to" title="品牌权威">品牌权威</li></router-link>
			<router-link to="/pa/dp"><li class="to" title="形象大片">形象大片</li></router-link>
			<!--<li style="margin-left: 100px;">您现在的位置：品牌简介</li>-->
		</ul>
		
		
			<router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	.pa{
		width: 1300px;
		margin: 0 auto;
	}
	.ul1{
		width: 600px;
		display: flex;
		justify-content: space-around;
		
	}
	.to{
		width: 80px;
		text-align: center;
	}
	.to{
		border-right:1px solid black ;
		padding-bottom: 2px;
		padding-top: 2px;
		padding-right: 10px;
		padding-left:10px ;
		
	}
	.router-link-active{
		color: black;
		background-color: goldenrod;
		
	}
	a:hover{
		background-color: goldenrod;
		
	}
</style>