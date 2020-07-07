<template>
	
	
	
	<div class="sn" >
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img16 title="拉杆箱56566"/>	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
		
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img17 title="拉杆箱56566" />	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img18 title="拉杆箱56566"/>	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img19 title="拉杆箱56566"/>	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img18 title="拉杆箱56566"/>	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
		
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img19 title="拉杆箱56566"/>	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img16 title="拉杆箱56566"/>	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img17 title="拉杆箱56566"/>	
		</div>
		<p v-for="item in list">{{item.title2}}</p>
		</div>
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
<script type="text/javascript" src="../lg.js" ></script>
<style scoped="scoped">
	.sn1:hover{
		border: 1px solid darkgray;
	}
.sn{
	
	flex-wrap: wrap;
	padding-top: 26px;
	display: flex;
	justify-content: space-around;
	width: 1300px;
	margin: 0 auto;
}
.sn1{
	border: 1px solid gainsboro;
}
.sn1 img{
	width: 260px;
	height: 260px;
}
.bo p{
text-align: center;

}
</style>