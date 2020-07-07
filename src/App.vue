<template>

  <div id="app">
 <div class="top">
  	 	<div class="top1">
  	 		 <ul class="left">
   	<li>招商热线：400-608-0266</li>
   </ul>
   <ul class="right">
  
   	   <router-link to="/#"><li>返回首页</li></router-link>
   	     <router-link to="/lx"><li>联系我们</li></router-link>
	       <li class="sj"><img src="./assets/icon1.jpg" />
	       <p class="sp1"><img src="./assets/shoujicode.gif" /> </p>
	       </li>
   	     <li class="lx"><img src="./assets/icon2.jpg" />
   	     <p class="sp2"><img src="./assets/wxcode.gif" /> </p>
   	     </li>
   </ul>
  	 	</div>
  
   </div>
     <div class="bo1">
   	<ul class="u1">
   		<router-link to="/#"><li><img src="./assets/dfa86e16-4300-4157-8aa6-ac4e8e1d74e0.jpg" /> </li> </router-link>
   	</ul>
   	<ul class="u2">
   		<router-link to="/pa"><li title="袋鼠品牌">袋鼠品牌 /</li></router-link>
   		<router-link to="/xl"><li title="产品系列">产品系列 /</li></router-link>
   		<router-link to="/fw"><li title="店铺范围"> 店铺范围/</li></router-link>	
      <router-link to="/xw"><li title="新闻活动"> 新闻活动/</li></router-link>
   	<router-link to="/jm">	<li title="加盟招募">加盟招募  /</li></router-link>
   		<router-link to="/gf"><li title="官方商城">官方商城 /</li></router-link>
   		<router-link to="hy"><li title="会员招募">会员专区  /</li></router-link>
   	</ul>
   	<ul class="u3">
   		<li><input type="text" placeholder="请输入名称或编号" />
   		
   		</li>
   		<a><p><img src="./assets/search.png" /> </p></a>
   	</ul>
   </div>
   <router-view></router-view>
   <div class="footer">
 	<div class="fo1">
 		<img src="./assets/bo9.jpg" />
 	</div>
 	<div class="fo2">
 		<ul>
 			<li><router-link to="pa">袋鼠品牌 </router-link></li>
 			<li>品牌介绍</li>
 				<li>形象代言人</li>
 			<li>发展历程</li>
 				<li>品牌权威</li>
 			<li>品牌展厅</li>
 				<li>形象大片</li>
 		
 		</ul>
 		<ul>
 			<li> <router-link to="xl">产品系列</router-link> </li>
 			<li>时尚女包</li>
 			<li>男包</li>
 			<li>真皮女包</li>
 			<li>拉杆箱</li>
 			<li>手包 银包</li>
 			<li>饰品</li>
 			<li>皮带</li>
 			<li>其他</li>
 		</ul>
 		<ul>
 			<li><router-link to="fw">店铺范围</router-link></li>
 			<li>袋鼠生活馆</li>
 			<li>店铺展示</li>
 			<li>全国店面分布</li>
 		</ul>
 		<ul>
 			
 			<li>新闻活动</li>
 			<li>企业活动</li>
 			<li>媒体报道</li>
 		</ul>
 		<ul>
 			<li>加盟招募</li>
 			<li>加盟优势</li>
 			<li>产品优势</li>
 			<li>加盟支持</li>
 			<li>加盟热线</li>
 		</ul>
<ul>
	<li>官方商城</li>
	<li>会员专区</li>
</ul>
<div class="qq">
	<p>客服热线</p>
	<p>400-608-0266</p>
	<p>工作时间：9:00-18:00</p>
	<p>防伪码查询：</p>
	<p><a href=""><img src="./assets/4.jpg" /> </a> </p>
</div>
<div class="xx">
	<img src="./assets/xx.jpg" />
</div>

 	</div>
 	<div 	class="bom">
	<p>Copyright 2017 袋鼠品牌 all rights reserved</p> 
<p>粤ICP备16080574号 中企动力提供网站建设</p>
</div>
 </div>
 
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style scoped="scoped">
@import url("1.css");
@import url("footer.css");
</style>
