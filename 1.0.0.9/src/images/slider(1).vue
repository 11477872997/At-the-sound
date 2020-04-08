<template>
    <div>
		<!--滑块-->
		
			
			<h2 class="Hot">热门推荐</h2>
			<div class="C">
			<ul id="Slide">
				<li class="Ranking">
					<div ></div>
					<span>Hot Bot</span>
				</li>
				<li  class="MV">
					<div></div>
					<span>&nbsp;M V</span>
				</li>
				<li class="Novel">
					<div></div>
					<span>Novel</span>
				</li>
			</ul>
			</div>
		
	</div>
</template>

<script>
import $ from 'jquery';

export default {
      data(){
      	return{
      		
      	}
      },
      mounted(){
$(function(){
$(document).ready(function(e){
	

	$('.C').css({'marginTop':-65, 'top':50+'%'})
	

})	
/*----------------------------------------------------------------*/	
var mun = 0;//声明一个存储变量
var cctvX;
      		
      		
      		
$('#Slide').on('touchstart',function(e){
var cctv = e.originalEvent.changedTouches[0].pageX;
cctvX=cctv;
});
$('#Slide').on('touchmove',function(e){
var cctv10X = e.originalEvent.changedTouches[0].pageX;
// console.log(cctv10X);
var sum = cctv10X - cctvX;
            
if(sum<0){
$('#Slide').css({'left':mun+sum,'transition':'all 0.5s'});
mun = sum + mun;
if(mun<= -270){
$('#Slide').css({'left':-330,'transition':'all 0.5s'});

}
}else if(sum>0){
$('#Slide').css({'left':mun+sum,'transition':'all 0.5s'});
mun = sum + mun;
              
if(mun>= 0){
$('#Slide').css({'left':50 ,'transition':'all 0.5s'});

}
}
});

$('#Slide').on('touchend',function(e){ //触摸离开
if(mun <= -270){ //判断一个左滑距离超过280回弹
$('#Slide').css({'left': -280,'transition':'all 0.5s'});
mun = -270; 
}if(mun >= 0){//判断一个右滑距离超过0回弹
$('#Slide').css({'left': 0 ,'transition':'all 0.5s'});
mun = 0;
}
});    		
      		
      		
});
}  
};
	
</script>


<style scoped="scoped">
/*-----------------------------------------滑块---------------------------------------------------*/
.Hot{
width: 100%;
height: 31px;
line-height:50px;
position: relative;
padding-left:4%;
font-size: 24px;
top: 10px;
}.C{
	width: 100%;
	height: 130px;
	position: relative;
	/* top:50px; */
}
#Slide{/*滑动区域*/
width:700px;
height:130px;
position: absolute;

left: 0;
/*background: lightblue;*/
}#Slide li{
width: 190px;
height: 100px;
position: relative;

top: 16px;
float: left;
/* padding: 1%; */
margin-left: 22px;
border-radius: 5px;
/*border: 1px solid #333333;*/	
}#Slide li{
background: #00000000 !important;
}#Slide li div{
width:80px;
height:80px;
position: relative;
background: #0022ff1f;
border-radius: 5px;
box-shadow: 7px -5px 7px -7px #333333;
display: inline-block;
float: left;
margin-left: 5px;
}#Slide li span{
margin-left:10px ;
line-height: 60px;
font-size: 21px;
}



</style>

