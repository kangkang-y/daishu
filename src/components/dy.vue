<template>
	<div class="pa">
<div class="oo" v-for="kk in list">

	<img :src=kk.img1 />
	<img :src=kk.img2 />
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
<script type="text/javascript" src="../dy.js" ></script>
<style>
	.oo img{
		width: 1300px;
		margin: 0 auto;
	}
	.oo{
		margin-top: 26px;
	}
</style>