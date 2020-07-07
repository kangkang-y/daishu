<template>
	
	
	
	<div class="sn" >
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<router-link to="/ss/nbxq"><img :src=item.img8 title="时尚女包L205655"/>	</router-link>
		</div>
		
		<p v-for="item in list">{{item.title1}}</p>
		</div>
		
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img9 title="时尚女包L205655" />	
		</div>
		<p v-for="item in list">{{item.title1}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img10 title="时尚女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title1}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img11 title="时尚女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title1}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img10 title="时尚女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title1}}</p>
		</div>
		
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img11 title="时尚女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title1}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img8 title="时尚女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title1}}</p>
		</div>
		<div class="bo">
			<div class="sn1" v-for="item in list">
			<img :src=item.img9 title="时尚女包L205655"/>	
		</div>
		<p v-for="item in list">{{item.title1}}</p>
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
<script type="text/javascript" src="../sn.js" ></script>
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