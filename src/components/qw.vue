<template>
	<div class="qw">
		<div class="qw1" v-for="item in list">
			<img :src=item.img6 />
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
<script type="text/javascript" src="../qw.js" ></script>
<style scoped="scoped">
	.qw1 img{
		width: 1300px;
		margin: 0 auto;
		
	}
	.qw1{
		margin-top: 26px;
	}
</style>