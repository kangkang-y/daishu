<template>
	
	
	
	<div class="sn" >
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img12 title="真皮女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title}}</p>
		</div>
		
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img13 title="真皮女包L205655" />	
		</div>
		<p v-for="item in list">{{item.title}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img14 title="真皮女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img15 title="真皮女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img14 title="真皮女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title}}</p>
		</div>
		
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img15 title="真皮女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img13 title="真皮女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img12 title="真皮女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title}}</p>
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
<script type="text/javascript" src="../zp.js" ></script>
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