<template>
	<router-view></router-view>
</template>

<script>
	import $ from 'jquery'
	export default{
		data(){
		return{
	

		};
		},
		methods:{

		},
		
		mounted:function () {

			
			//页面加载完成触发 ready
			$(document).ready(function(e){
			//获取屏幕的的高，赋值给板心
			var pp = window.screen.height+'px';
			$('.TypeArea').css({'height':pp});
					
			});
			//当调整浏览器窗口大小时，发生 resize 事件。
			$(window).resize(function(e){
				var pp = window.screen.height+'px';
				$('.TypeArea').css({'height':pp});
				
				
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
			margin-bottom:62px ;
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
