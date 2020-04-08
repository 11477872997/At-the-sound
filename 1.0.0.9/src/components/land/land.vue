<template>
	<!-- 主体 -->
         <div class="Advertising">
			 
			 <div class="lo1">
			<router-link to="/land/login" tag="span" class="r">登录</router-link>
			</div>
			<div class="re2">
			<router-link to="/land/register" tag="span">注册</router-link>
			</div>
			<transition mode="out-in" name="fade">
			<router-view></router-view>
			</transition>
			<video autoplay loop muted>
			 <source src="http://localhost:8080/images/51edfea7429b95e0156b3e901d3e2af6.mp4" type="video/mp4"  />
			 </video>
		 </div>
</template>

<script>
	export default {
               
	  }
</script>

<style lang="css" scoped="scoped">
	
.Advertising{
	width: 200px;
	height: 40px;
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	flex: 1;
	margin-top:137px ;
	text-align: center;
	line-height:40px;
	/* position: relative; */
	
	/* background: #3498DB; */
	
	 
}
.lo1{
	width: 50px;
	height: 40px;
	background:#08080859;
	flex: 5;
	color: #A9A9A9;
	border-radius: 80px 0px 0px 80px;
	border: 1px solid #ffffff;
}
.re2{
	width: 50px;
	height: 40px;
	flex: 5;
	color: #A9A9A9;
	background:#08080859;
	border-radius: 0px 80px 80px 0px;
	border: 1px solid #ffffff;
}
.mui-active{
	font-weight: 800;
	font-size:24px;
	color:#F5F5F5;
	text-shadow:  0px 0px 1px #2196f380;
	
}



/* 背景视频 */
video{
		position: fixed;/*视频定位方式设为固定*/
		right: -183px;
		bottom: -108px;/*视频位置*/
		min-width: 100%;
		min-height: 136%; /*不会因视频尺寸造成页面需要滚动*/
		width: auto;
		height: auto; /*尺寸保持原视频大小*/
		z-index: -100; /*z轴定位，小于0即可*/
		-webkit-filter: grayscale(20%);/*添加灰度蒙版，如果设定为100%则视频显示为黑白*/
		/*加滤镜*/
		filter: blur(15px); /*背景模糊设置*/
		-webkit-filter: grayscale(100%);
		filter:grayscale(100%); /*背景灰度设置*/
		z-index:-11 */

}
source{  
	min-width: 100%;  
	min-height: 100%;  
	height: auto;  
	width: auto;  
} 

/* .v-enter,
.v-leave-to{
	opacity: 0;
	transform-style: preserve-3d;
	transform: translate(200px 200px 300px);
	transform: translateY(300px);
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease; 
} */

@keyframes bounce-in {
     0% {
        transform: rotateY(180deg) ;

      }
 
   
      50% {
        transform: rotateY(90deg)  ;
      }
      
   100% {
        transform: rotateY(0deg)  ;
      }
    }

    .fade-enter-active {
      /* transform-origin: left center; */
      /* animation: bounce-in 1s linear forwards; */
    }

    .fade-leave-active {
      /* transform-origin: left center; */
      animation: bounce-in 1s linear forwards;
    }

</style>