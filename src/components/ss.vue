<template>
	
	<div class="ss">
	<div class="xl1">
		<div class="top">
			<ul class="ul1">
				<router-link to="/ss/sn"><li>时尚女包</li></router-link>
				<router-link to="/ss/zp"><li>真皮女包</li></router-link>
				<router-link to="/ss/lg"><li>拉杆箱</li></router-link>
				<router-link to="/ss/np"><li>男包</li></router-link>
				<router-link to="/ss/sb"><li>手包银包</li></router-link>
				<router-link to="/ss/pd"><li>皮带</li></router-link>
				<router-link to="/ss/sp"><li>饰品</li></router-link>	
				<router-link to="/ss/qt"><li>其他</li></router-link>
			</ul>
		</div>
		<router-view></router-view>
	</div>
		
		
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

.top{
	
	width: 1300px;
	margin: 0 auto;
}
.ul1{
	display: flex;
	width: 720px;
	justify-content: space-around;
}
.router-link-active{
		color: black;
		background-color: goldenrod;
		
	}
	a:hover{
		background-color: goldenrod;
	}
a{
	color: black;
}
.ul1 li{
	padding-left: 8px;
	
	padding-right: 8px;
	width: 74px;
	text-align: center;
	border-right:1px solid black;
}
</style>