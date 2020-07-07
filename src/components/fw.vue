<template>
	<div class="fw">
		<div class="fw1">
			<p>店铺范围</p>
			<div class="ff">
				<ul class="uul">
				<router-link to="/fw/sh"><li>袋鼠生活馆</li></router-link>
				<router-link to="/fw/zs"><li>店铺展示</li></router-link>	
				<router-link to="/fw/fb"><li>全国店铺分布</li></router-link>
				</ul>
			
			</div>
		</div>
		<router-view></router-view>
	
		
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	@import url("../fw.css");
</style>