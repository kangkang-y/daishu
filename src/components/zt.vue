<template>
	<div class="zt">
		<div class="zt1" v-for="item in list">
			<img :src=item.img3 />
			<img :src=item.img4 />
			<img :src=item.img5 />
		</div>
	</div>
</template>

<script>
				export default {
  data () {
    return {
    }
  }
}
</script>
<script type="text/javascript" src="../zt.js" ></script>
<style scoped="scoped">
	.zt1{
		margin-top:26px ;
	}
	.zt1 img{
		width: 1300px;
		margin: 0 auto;
	}
</style>