<template>
    <div>
		<!--滑块-->
		
			
			<h2 class="Hot">HOTLISTS</h2>
			<div class="C">
			<ul id="Slide">
				<li class="Ranking">
					<div @click="setsp"></div>
					<span>Music Square</span>
				</li>
				<li  class="MV">
					<div @click="dt"></div>
					<span>&nbsp;D T</span>
				</li>
				<li class="Novel">
					<div  @click="play"></div>
					<span>RadioSet</span>
				</li>
			</ul>
			</div>
		<audio src="" id='play'></audio>
	</div>
</template>

<script>
import $ from 'jquery';
import url from '../../js/url.js' 
export default {
      data(){
      	return{
			index:'',
			
      	}
      },
	  methods:{
		  play(){
			  var that = this
			  if(window.localStorage.getItem("userName")==null){
				  that.$router.push({path:'/land'})
			  }else{
				  that.index++
				  if(that.index%2!=0){
				  				  document.getElementById('play').src = url.arr[that.index]
				  				  // console.log(url);
				  				  document.getElementById('play').play()
				  }else{
				  				  document.getElementById('play').pause()
				  }
			  }

		  },
		  setsp(){
			  var that = this
			  if(window.localStorage.getItem("userName")==null){
			  				  that.$router.push({path:'/land'})
			  }else{
			      this.$router.push({path:'/musicGC'})
			}
		  },
		  dt(){
			  var that = this
			  if(window.localStorage.getItem("userName")==null){
			  				  that.$router.push({path:'/land'})
			  }else{
			      this.$router.push({path:'/dt'})
			}
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
					$('#Slide').css({'left':mun+sum,'transition':'all 0.5s'},
			);
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
width: 96%;
height: 39px;
line-height: 30px;
position: relative;
padding-left: 0%;
font-size: 24px;
top: 0px;
padding-bottom: 4%;
border-bottom: 4px solid #cd4848;
margin: 0 auto;
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
margin-right: 10px;
}#Slide .Ranking div{
 background:url(http://localhost:8080/images/190348409091.jpg);
 background-size: 100%;
}#Slide .Ranking span{
	line-height: 28px;
}
#Slide .MV div{
 background:url(http://localhost:8080/images/51163695992608.jpg);
 background-size: 100%;
}#Slide .Novel div{
 background:url(http://localhost:8080/images/101164284262494.jpg);
 background-size: 100%;
}
#Slide li span{
line-height: 60px;
font-size: 21px;
}



</style>

