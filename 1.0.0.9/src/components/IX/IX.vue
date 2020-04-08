<template>
	<div id="Tall">
			<div class="TypeArea">
				<!--头-->
				<div id="top">
					<a class="fa fa-bars MyCenter"></a>
					<div class="Theme">X C Z H</div>
					<a class="fa fa-search Search"></a>
				</div>
				
				<div id="PErson">
					<!--个人中心-->
					<div class="PErson">
						<div class="PersonalInformation">
							<!--头像-->
							<div class="HeadPortraits"></div>
							<ul class="WIT">
								<li>用户ID</li>
								<li>未登录</li>
								<li>登录</li>
								<li>注销</li>
							</ul>
						</div>
						
					</div>
					<!--返回-->
					<div class="BeatIt"></div>
				</div>
				<!--屏蔽层-->
				    <div id="shielding"></div>
				<!--轮播-->
				
	<!-- 		        <div  :style="div0" v-on:touchmove="dd"></div>
					<div  :style="div1" v-on:touchmove="de"></div>
					<div  :style="div2" v-on:touchmove="da"></div> -->
					
					<!-- <div class="AnnounCement" v-for="(item,i) in list" :style="item.id" ref="item" :key="i" @touchstart="run(i)" id="items"></div> -->
					<car id="content"></car>
					
				
				<!--收藏夹-->
				<div id="MyHobby">
					<span class="Like">
						<h2>J'aime la musique1</h2>
						<h4> I like music</h4>
					</span>
					<span class="Like2">
						<span class="fa fa-gratipay"></span>
					</span>
				</div>
				
				<!--滑块-->
				<!-- <div class="Slider">
					
					<div class="Hot">热门推荐</div>
					<div class="C">
					<ul id="Slide">
						<li></li>
						<li></li>
						<li></li>
					</ul>
					</div>
				</div> -->
				<move class="Slider"></move>
				<!--播放控件-->
				<div class="Play">
					<a class="UP fa fa-step-backward"></a>
					<span class="Song"></span>
					<div class="keypad" >
						<!--圆-->
						<div class="chart"></div>
						
						<!-- <input type="button"  class="switch" @click="flag =!flag" > -->
						<!-- </input> -->
						<!--<button class="switch fa fa-pause" @click="toggle" v-show="flag" ></button>-->
						<!-- <span v-show="flag" class="stop fa fa-play"></span> -->
					</div>
					<a class="DOWN fa fa-step-forward"></a>
		<!-- 			<img src="images/cjx5traro006m0zoc64udzi58-tile1-k-byte.jpg"> -->
				</div>
			</div>
			
		</div>
</template>

<script>
	import $ from 'jquery'
	import carousel from '../carousel/carousel.vue'
	import slider from '../slider/slider.vue'
	export default{
		data(){
		return{
	      username:'',
	

		};
		},
		methods:{
   //          land(){
			// 	console.log(222)
			// 	console.log(window.localStorage.getItem("userName"))
			// }
		},
		
		components:{
			// 组件注册
			car:carousel,
			move:slider
		},
		mounted:function () {

			var that = this
			//页面加载完成触发 ready
			$(document).ready(function(e){
			//获取屏幕的的高，赋值给板心
			var pp = window.screen.height+'px';
			$('.TypeArea').css({'height':pp});
			
				// if(window.Screen.availHeight = 812){
				// 	// console.log(11)
				// 	$('#top').css({'height':70+'px'});
				// 	$('.Play').css({'height':80+'px'});
				// }
					
			});
			//当调整浏览器窗口大小时，发生 resize 事件。
			$(window).resize(function(e){
				var pp = window.screen.height+'px';
				$('.TypeArea').css({'height':pp});
				
				
			});
			
			// 注销
			$('.WIT').find('li').eq(3).on('touchstart',function(e){ 
				window.localStorage.removeItem("userName");
				$('.HeadPortraits').css('background','url(http://localhost:8080/images/user.png) 36%,-1% no-repeat');
				$('.WIT').find('li').eq(1).html('未登录')
				// $('.WIT').find('li').eq(1).html('')
				$('.WIT').find('li').eq(2).show()
			});
			// 登录
			$('.WIT').find('li').eq(2).on('touchstart',function(e){ 
				that.$router.push({path:'/land'});
			});
			$('.Search').on('touchstart',function(e){ 
				// var that = this
				  if(window.localStorage.getItem("userName")==null){
				  	 that.$router.push({path:'/land'})
				  }else{
					  that.$router.push({path:'/wid'});
				}
				
			});
			//-------------------打开个人中心---------------------------------------	
			//获得按钮 
			$('.MyCenter').on('touchstart',function(e){ 
			//封装好的函数
					// console.log(window.localStorage.getItem("userName"))
					if(window.localStorage.getItem("userName")==null){
						$('.WIT').find('li').eq(1).html('未登录')
						$('.HeadPortraits').css('background','url(http://localhost:8080/images/user.png) 36%,-1% no-repeat');
					}else{
						$('.WIT').find('li').eq(1).html(window.localStorage.getItem("userName"))
						$('.WIT').find('li').eq(2).hide()
						$('.HeadPortraits').css('background','url(http://localhost:8080/images/20191210005941.jpg) 36%,-1% no-repeat');
					}
					
			Appear();
			});
			//--------------------------退出------------------------------------
			//获取返回区域
			$('.BeatIt').on('touchstart',function(e){
			//封装好的函数
			Appear();
			});
			
			//封装好的函数
			var Appear = (function(){
			//获取id当前位置 
			var current = $('#PErson').offset().left;
			var cc;
			////第一次是 0>-375  负值走真区间
			////第二次是 0>0 不成立走加假区间
			cc=0>current?0:-375; 
			$('#PErson').css({'left':cc,'transition':'all 0.5s'});
			//隐藏和显示之间的切换
			$("#shielding").toggle();
			});
			
							
			//-------------------------移动----------------------------------							
			var startX = 0;//获取手指初始坐标
			//------------------触摸----------------------------------------------
			$('#PErson').on('touchstart',function(e){
			// 获取手指初始坐标
			startX = e.targetTouches[0].pageX;	
			});
			//-------------------------滑动----------------------------------
			$('.PErson').on('touchmove',function(e){
			//获取内容坐标
			 var loosen = $('#PErson').offset().left;
				// 距离 =   滑动的坐标 - 触摸的坐标
			var moveX = e.originalEvent.changedTouches[0].pageX - startX;
			//大于0 让他固定在原来位置 （不准右滑）
			if(moveX >0){
			$('#PErson').css({'left':0});
			}else if(moveX<0){
				//小于0 （左滑 ）                     滑动的距离加给他
			$('#PErson').css({'left':moveX,'transitionDuration':'0s'});
			//滑动是透明的减少
			$("#shielding").css({'opacity':0.5,'transition':'all 0.3s'});
			//------------------触摸离开-----------------------------------------
			$('.PErson').on('touchend',function(e){	
			//判断松开是 ，id的值
			if (loosen>=-100){
			//滑到一半位置让他回到原理位置
			$('#PErson').css({'left':0,'transition':'all 0.3s'});
			$("#shielding").css({'opacity':0.8});
			$("#shielding").css({'display':'block'});
			//判断松开是 ，id的值
			 }else if(loosen<=-130){
			//为0 时什么是都没发生
			if(loosen=0){
			$('#PErson').css({'left':0,'transition':'all 0.3s'});
			//滑动大于一半位置让他离开
			}
			else{$('#PErson').css({'left':-100+'%','transition':'all 0.3s'});}
			$("#shielding").css({'display':'none'});
			}
			});
			}if(moveX<=-120){
			$("#shielding").css({'opacity':0.3,'transition':'all 0.3s'}); 
			};		   
			});
			
			
			
			
		},
		beforeDestroy(){
			 clearInterval(this.timer);
		},
	}
</script>

<style scoped="scoped">
	/*------------------------------------------------------------去除默认样式--------------------------------------------------------------*/
#Tall{ /*可视大小*/
width: 100%;
height: 100%;
position: absolute;
/*display: flex;*/
display: table;
table-layout: fixed;
}
		
		/*板心*/
		.TypeArea{
			width: 100%;
			height:auto;
			position: relative;
			left: 0px;
			top: 0px;
			overflow:hidden;
			/* max-width: 375px; */
			min-height: 667px;
		}
	/*---------------------------------------------------------------*/
		/*头部*/
		#top{
			
			width: 100%;
			height: 55px;
			background: #fcfcfc;
			position: fixed;
			top: 0;
			padding-right: 2%;
			padding-left: 2%;
			display: flex;
			flex: 1;
			justify-content: center;
			/* box-shadow: 0 7px 5px -5px #333333; */
			z-index: 10;
		}
		#top .MyCenter,.Search,.Theme{
			line-height: 55px;
			font-size: 24px;
			flex: 1;
		}
		/*左边*/
		.MyCenter{	
			float: left;
			}
		/*右边*/
		.Search{
			justify-content:flex-start;
			float: right;
			
		}
	
		/*中间*/
		#top .Theme{
			height: 55px;
			margin: 0 auto;
			justify-content: center;
			text-align: center;
			flex: 8;
			
		}
/*----------------------------个人中心-------------------------------------------*/
/* 屏蔽罩 */
		#shielding{
		 width: 100%;
		 height: 100%;
		 position: absolute;
		 background: #191a1a70;
		 opacity: 0.8;
		 z-index: 9998;
		 display: none;
		}
			
		#PErson{
			width: 100%;
			height: 100%;
			position: absolute;
			/*background: #A9A9A9;*/
			/*left: 0;*/
			left: -100%;
			
			z-index: 9999;
		}
		.PErson{
			width:80%;
			height: 100%;
			background: url(http://localhost:8080/images/timg.jpg) no-repeat 40% 0%;
			float: left;
			background-size: 200% 100%;
		}
		.BeatIt{
			width: 20%;
			height: 100%;
			/*background: #191a1a57;*/
			float: left;
		}
		
		/*个人资料*/
		.PersonalInformation{
			width:100%;
			height:60%;
			border-radius: 0px 25px 25px 0px;
			position: relative;
			top: 50%;
			transform: translateY(-50%);
		    -webkit-transform: translateY(-50%);
			/* background: #3d3c37d1; */
			z-index: 1;
		}	
		
		/*头像*/
		  .HeadPortraits{
		   width: 100px;
		   height: 100px;
		   border-radius: 50%;
		   background: url(http://localhost:8080/images/20191210005941.jpg) 36%,-1% no-repeat;
		   background-size: 160% 100%;
		   
		   position: relative;
		   left: 50%;
		   transform: translate(-50%,20%); 
		                       /*(X,Y)*/
		      -webkit-transform: translate(-50%,20%);
		  }
		.WIT{
			width: 100%;
			height: 40%;
			position: relative;
			/*background: lightgreen;*/
			transform: translateY(20%)
		}
		.WIT li{
			width: 80%;
			height: 30px;
			line-height: 30px;
			border-radius: 25px;
			position: relative;
			left: 50%;
			transform: translate(-50%,85%); 
			                    /*(X,Y)*/
		    -webkit-transform: translate(-50%,85%);
			text-align: center;
			background: #eaeaea !important;
			margin-top: 10px;
			border: 1px solid #88888842;
			color: #666666;
			font-size: 14px;
		}
		.WIT li:nth-child(3){
			background: #30ccbebf !important;
			color: white;
		}.WIT li:nth-child(4){
			background: #ff4600 !important;
			color: white;
		}
		
	/*------------------------轮播区域-------------------------------------*/
		/*轮播区域*/
		#content{
			width: 100%;
			height:43%;
			min-height:286px;
			/* background: lemonchiffon; */
			float: left;
			position: relative;
			margin-top: 55px;
	        
		}
		#content #A{
			width: 100%;
			height:286px;
			position:relative;
			float: left;
			/* top: 50%;
			margin-top: -143px; */
		}
		
		#content .AnnounCement{
				    color: #fff;
				    width: 200px;
				    height: 200px;
				    position: absolute;
				    top: 50%;
				    left: 50%;
					margin-left: -110px;
					margin-top: -110px;
				    text-align: center;
				    line-height: 10vw;
				    font-family: sans-serif;
				    font-size: 6vw;
					background:lightcoral;
					/* border: 5px solid red; */
			}

		
	/*------------------------------我喜欢的音乐--------------------------------------------*/
	     #MyHobby{
	     	
	     	width: 100%;
	     	height:80px;
	     	position: relative;
	     	float: left;
	     	padding-right: 4%;
			padding-left: 4%;
			
			background: #f5f5f54d;
			display: flex;
			flex: 1;	
			box-shadow: 0 -7px 5px -8px #333333, 0 7px 5px -8px #333333;;
	     }
	      #MyHobby .Like,.Like2{
			/*  padding-top: 4%; */
	      	height: 80px;
	     	/* position: relative; */
	      }
	     
	     #MyHobby .Like{
	     	
			flex: 8;
			float: left;
			
	     }
	     .Like h2{
	     	line-height: 50px;
	     }
	      #MyHobby .Like2{
	    
	     	
			flex: 2;
			float: right;
			text-align: center;
			font-size: 38px;
			color: lightpink;
			line-height: 80px;
	     }
	     
	/*-----------------------------------------滑块---------------------------------------------------*/
	/*可视区域*/
	.Slider{
			width: 100%;
			   height: 30%;
			   min-height:182px;
			      float: left;
			   position: relative;
			   bottom: 0px;
			   overflow:hidden;
			   margin-bottom:62px;
			   transform: translateY(20%);
			   -webkit-transform:translateY(20%);
	}
	
	/*-------------------------------------------播放区域-------------------------------------------------------*/
	.Play{
		    width: 100%;
			height: 62px;
			margin-top: 15px;
			background:white;
		    float: left;
			position: fixed;
			bottom: 0px;
			box-shadow: 0 -7px 5px -8px #333333;
			display: flex;
			flex: 1;	
			z-index: 10;
			display: none;
	}
	.UP,.DOWN,.switch{
		flex: 1;
		text-align: center;
		/*background: teal;*/
		
		font-size: 25px;
		line-height:62px;
		position: relative;
	}
	
	/*上一首*/
	.UP{
		float: left;
		line-height:62px;
	}
	/*下一首*/
	.DOWN{
		float: right;
	}
	/*歌名*/
	.Song{
		flex: 3;
		background: lightblue;
		position: relative;
	}
	
	/*暂停播放 区域*/
	.keypad{
		flex: 1;
		/*background: bisque;*/
		position: relative;
		
	}
	/*圆圈背景图*/
	.chart{
		width:50px;
		height:50px;
		border-radius: 50%;
		border: 1px solid black;
		position: absolute;
		top:50%;
		left: 50%;
		margin-left:-25px;
		margin-top: -25px;
		/*background: lavender;*/
		z-index: 1;
	}
	
	/*播放按钮*/
	.switch{
		width: 30px;
		display: block;
		z-index: 2;
		position: relative;
		left: 50%;
		margin-left: -17px;
		background: #00000000;
		border: 0px ;
	}
	
	.stop{
		
		position: absolute;
		top: 30%;
	    left: 41%;
		font-size: 24px;
	}
	.fa-play{
		
		/*margin-left:-14px;*/
		text-shadow: 0px 0px 5px #4e8ca0,0px 0px 10px #ADD8E6,0px 0px 15px #ADD8E6;
	}

</style>
