<template>
	<div class="TyeArea">
		<div id="header">
			<div class="Searchbox1" @click="down">
				<span class="fa fa-angle-left MAIN"></span>
			</div>
			<div class="SEarch"></div>
			<div class="Searchbox2"></div>
		</div>
		
				<audio  src="http://localhost:8080/images/1.mp3" id="audio" ></audio>
				<!-- 转盘 -->
				<div class="Turntable">
				<div class="container">
				  <div class="circle"></div>
				  <div class="circle"></div>
				  <div class="circle"></div>
				  <div class="circle"></div>
				  
				</div>
				
				<!-- <canvas id = 'canvas' width="180" height="170"></canvas> --> 
				<img src="http://localhost:8080/images/1.jpg" class="img">
				</div>
		
                 <div class="musictextsde">
					 <!-- 歌词 -->
					 <ul class="musictext" style="display: none;">
						<!-- <li v-for="(item,index) in lrcs.lrctext">{{lrcs.lrctext[index]}}</li> -->
					 </ul>
					 <!-- 同步歌词时间 -->
					 <ul class="musictime" style="display: none;">
						 <!-- <li v-for="(item,index) in lrcs.lrctime">{{lrcs.lrctime[index]}}</li> -->
					 </ul>
				 </div>
			<!-- 控件 -->
			<div id="songmenu" v-on:click.stop="show">
				 <!-- 控件 -->
		          <div class="widget">
					  <div class="good"><span class="go"></span></div>
					  <div  class="witch">
						  <span class="witchchen"></span>
						  <span class="witchcs"></span>
					  </div>
					  <div class="Next"><span class="to"></span></div>
				  </div>
		        <!-- 进度条 -->
			   <div class="pmgressbar">
				      <div class="progress">
				           <div class="line" id="line"></div>
				           <div class="bar" id="bar"></div> 
				       </div>
			   </div>
			   <!-- 实时更新时间 -->
			   <div class="Real_time">
				   <div class="realTime">
					   <span id="kas">00:00</span>  <span id="end">00:00</span>
				   </div>
			   </div>
		</div>
		<div id="tttuxv" ref="sss">
			
			<sch @marcks="geturls">
				
			</sch>
      	
		</div>
	</div>
	
</template>

<script>
	import $ from 'jquery';
	import scrache from '../search/search.vue';

	export default {
		data() {
			return {
				Trc:'',
            	urls:'',
				lrc:[],
				lrcs:{
					lrctext:[],
					lrctime:[],
				}
			}
		},
		methods:{
		  geturls(data,lrc){
		                var that = this
						// console.log(lrc);
						for(var i=0;i<lrc.length;i++){
							that.lrc.push(lrc[i]);
						}
		                that.Trc = data;
		                // document.getElementById('audio').play();
		               $('.witchcs').css({background:'url(http://localhost:8080/images/witch.png) no-repeat -49px -2px',backgroundSize:'193% 133%'});
		               document.getElementsByClassName("witchcs")[0].click();
		                // cd();
						console.log(data)
		                
		            },
		show(){
			this.$refs.sss.style.top = 1000+'px'
		},
		down(){
			this.$refs.sss.style.top = 0+'px'
		}
			
		},
		mounted(){
			// 获取定时器
			$('.musictext').scroll(function(){
				console.log($('.musictext').scrollTop());
			})
			var that = this
			
			$(function(){
				 
				//页面加载完成触发 ready
				   $(document).ready(function(e){
				   //获取屏幕的的高，赋值给板心
				   var pp = window.screen.height+'px';
				   $('.TyeArea').css({'height':pp});
				   
				    
				     
				   });
				   //当调整浏览器窗口大小时，发生 resize 事件。
				   $(window).resize(function(e){
				    var pp = window.screen.height+'px';
				    $('.TyeArea').css({'height':pp});
				    
				    
				   });
				   /*********************************************/ 
				var audio = document.getElementById('audio');
				 var urlcz;  //定义一个存上一首的变量
				let ci =0;  //定义一个清除see方法的变量
				let nn=0; //定义遍历的变量
				var num =$('#kas').html();
				var list;
				// 暂停播放
					$('.witchcs').on('click', function(){
                       cd();
					})
					// 多次调用 播放暂停
					function cd(){
						ci++;
						if(audio.paused){
							  //  等于true 时候让它播放
							  audio.play();
							  $('.witchcs').css({background:'url(http://localhost:8080/images/witch.png) no-repeat -49px -2px',backgroundSize:'188% 133%'});
							 $('.container').css({display: 'block'});
								//定时器
							  // 清除方法
							  // if(ci<2){
								 //  see();
							  // }
						   }else{
							  //  等于 false 的时候让它暂停
							  audio.pause();
							   $('.witchcs').css({background:'url(http://localhost:8080/images/witch.png) no-repeat 13px 0px',backgroundSize:'133% 100%'})
							   
							    $('.container').css({display: 'none'});
						   }
					}
					
				/****************下一首******************/ 
				$('.to').on('click',function(){
					gogo();
				})
				function gogo(){
				    // url = audio.currentSrc//这里存起上一首的路径
						console.log(that.lrc.length);
	                    urlcz = audio.currentSrc//这里存起上一首的路径
	                    that.Trc = that.Trc+1;
	                    var texts = $('#list'+that.Trc+'').children().eq(3).html();
	                    var are = [texts.split ("amp;")[0]];
	                    var aee = [texts.split ('amp;')[1]];
	                    var aww = [texts.split ('amp;')[2]];
	                    var aqq = [texts.split ('amp;')[3]];
	                    var aaa = [texts.split ('amp;')[4]];
	                    var urls = are+aee+aww+aqq+aaa;
						
						$('.musictext').html('');
							if(that.lrc[that.Trc] == ""){
							console.log('die屎啦你')
							}else{
							// 		//对歌词文件进行解析分割
							var lrc = that.lrc[that.Trc];
							// var timea = [lrc.split('[')];
							// console.log(timea);
							var lys = lrc.split('[');
							// console.log(lys);
							for(var i in lys){
							var lyn = lys[i].split(']');
							// console.log(lyn[0]);
							that.lrcs.lrctime.push(lyn[0]);
							that.lrcs.lrctext.push(lyn[1]);
							}
							
							// console.log(that.lrcs.lrctime);
							// console.log(that.lrcs.lrctext);	
							
						}
	                    audio.src = urls//这是下一首的路径
						that.Trc = that.Trc-1;
	                   	that.Trc = that.Trc+1;
	                    cd();	
				}
				/****************上一首******************/ 
				//上一首
				 $('.go').on('click',function(){
					 toto();
				 });
				 function toto(){
					 //  判断的是否URL 路径
					  if(urlcz == undefined){
					      return 
					  }else{
					     audio.src = urlcz;
						  cd();
					  }
						$('.musictext').html('');
						
				 }
				 /****************自动播放下一首******************/ 
				 // 自动播放下一首
				 audio.addEventListener("ended", function(){
				      if(audio.ended == true){
				          gogo();
				       }
				  });
				/****************处理时间******************/ 
				// 定义一个处理时间的函数
				// 秒转换分钟0:00格式
				function timeToMinute(times){
				       var t;
				        if(times > -1){    //时间是从0开始计算的
				            var hour = Math.floor(times/3600);    //小时的转换
				            var min = Math.floor(times/60) % 60;  //分钟的转换
				            var sec = times % 60;                 //秒的计算
				            if(min < 10){t = "0";}                
				            t = min + ":";
				            if(sec < 10){t += "0";}
				            t += sec.toFixed(2);
				        }
				        t=t.substring(0,t.length-3);
				        return t;
				    }

                /*******************时间和进度条****************/			
			  // 获取到音频的进度条
			  // ontimeupdate 在当前播放位置改变时执行
			  var str = '';
			    audio.ontimeupdate = function(){
			   // line 这个变色的盒子 宽度 =  当前的时间 / 总的时间  * 100 + % 
			   var w = audio.currentTime / audio.duration * 100 + "%";
			     line.style.width = w ;   //改变样式
			     let time =  timeToMinute(audio.currentTime)
				 var lll = Math.round(audio.currentTime)
				 var list = lll+50;
				 $('.musictext').scrollTop(list);
			     kas.innerHTML = time   //添加html
			  }
			// 获取音频总时长
			//   canplay监听以及音频开始播放
			 audio.addEventListener("canplay", function(){
				  //获取时长
				   var dates = audio.duration;
				   console.log(dates);
				  //  处理获取的时长
				  let timeLenthg =  timeToMinute(dates)
				  end.innerHTML =  timeLenthg ;        //添加html
			 });
			
			/******************点击定位播放位置**************/ 
			   // .  点击 bar 跃进效果 
			        // 
			 $('.bar').on('click',function(event){
			        // 点击的位置 /  bar 的长度 * 总的时长  =  当前视频的播放位置
			         // 1. 点击 位置
			            var offset = event.offsetX;
			        //    2. 当前点击视频的播放位置  当前的时间
			            var current = offset / bar.offsetWidth * audio.duration;
			            // console.log(current)
			            // 3. 把当前的时间 给 currentTime 
			            audio.currentTime = current; 
			        })
			
				
			})
	
		
			/****************************************************处理音频***************************************/ 
			function see(){
				
				
				// //  AudioContext是一个音频上下文，所有的音频节点处理在音频上下文中进行，类似于canvas中的context，进行音频操作前，需要获取音频上下文
					    var AudioContext = window.AudioContext || window.webkitAudioContext;
					    // // 获取控件
					    var oAudio = document.querySelector('#audio');
						
					  
					    // // 初始化控件
					    // var oCtx = new AudioContext();
					
					    // 创建媒体源对象 
					    // var audioSrc = oCtx.createMediaElementSource(oAudio);
						
					
					    // 加工媒体源对象(分析机，分析音频对象，进行音频加工处理)
					    var analyser = oCtx.createAnalyser();
					  
					    //媒体源个分析的链接
					    audioSrc.connect(analyser)
					  
					    // 输出音频(音频输出目的地)
					    analyser.connect(oCtx.destination);
					    
					//    ***********************************************************
					   // 定义画布线条 渐变
					   var PI = Math.PI
					   var aCxt = canvas.getContext('2d');
					   // canvas.width = canvas.width-120;   //该圆宽度
					   // canvas.height = canvas.height+20;  //改变圆高度
					   var oW = canvas.width;
					   var oH = canvas.height;
					
					   var cr = 50;//环形半径
					    var minHeight = 1;
					    var meterWidth = 1;
					    var meterNum = 150;//设置方块的数量，考虑到闭环的关系 条数
					    
					
					//    var color = aCxt.createLinearGradient(oW/2,oH/2-30,oW/2,oH/2-100);
					   var color = aCxt.createLinearGradient(0,-cr,0,-oW/1.5);
					     color.addColorStop(0,'#fff');
					     color.addColorStop(.5,'blue');
					     color.addColorStop(1,'red');
					    aCxt.fillStyle = color;
					
					
					 // 数据来源 解析
					    // frequencyBinCount 的值固定为 AnalyserNode 接口中fftSize值的一半. 该属性通常用于可视化的数据值的数量.
					    // 存取数据 ： Uint8Array 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。 默认值为：1024
					    var vocieHeight = new Uint8Array(analyser.frequencyBinCount);
					    // oAudio.play();  主动播放
					    // getByteFrequencyData() 分析音频数据，做到实时更新
					
					
					    function draw(){
					        analyser.getByteFrequencyData(vocieHeight);
					        // console.log(vocieHeight) // 打印音频的数据
					        // 数据渲染
					        // 自定义获取数组里面的数据频率
							
							// 闭包返回出去全局的变量
							     // var nums = Math.round(Math.random()*10);
							     var  num = vocieHeight[2];
							     var  num1 = vocieHeight[3];
							     var  num2 = vocieHeight[4];
													// console.log(vocieHeight)
							     function nbr(){
							         return {
							             num,
							             num1,
							             num2
							             
							         };
							     }
								 
					        var step = Math.round(vocieHeight.length / meterNum);
							
					      
					        //  清除画布初始化
					       aCxt.clearRect(0,0,oW,oH);
					       aCxt.save();
					       aCxt.translate(oW/2,oH/2);
					        for( var i=0;i<meterNum;i++){
					            // 得到数组里面的具体数据
					            var audioHeight = vocieHeight[step/2 * i];
					            var meterHeight = audioHeight*(oH/2 - cr)/256||minHeight;
					            // 修改渲染方块周长
					            aCxt.rotate( 4*PI/meterNum );
								// cxt.fillRect(x,v,w,h);
					            aCxt.fillRect( -meterWidth/4 , -cr- meterHeight*1.5 , meterWidth, meterHeight);  //模板1
					            // aCxt.fillRect( meterWidth/2 , -cr- meterHeight*1.5 , meterWidth*4, meterHeight);  //模板2
					        }
					        aCxt.restore();
					       window.requestAnimationFrame(draw);
						    return nbr;   //返回对象
					    }
						
						  // 定义一个实时更新的rgb方法
						        function rgbss(){
						         let  show = draw()();
						         // console.log(show)
						         color.addColorStop(0,'rgba('+show.num+','+show.num1+', '+show.num2+', 0.8)');
						         color.addColorStop(.5,'rgba('+show.num2+','+show.num+', '+show.num1+', 0.8)');
						         color.addColorStop(1,'rgba('+show.num1+','+show.num2+', '+show.num+', 0.8)');
						        }
					      setInterval((draw,rgbss),800);
					    
				}
			    
				
			},
			components:{
				sch:scrache
			},
		}	
</script>

<style scoped="scoped">
	/*板心*/
	.TyeArea {	
		width: 100%;
		height: auto;
		position: relative;
		left: 0px;
		/* 需要给固定值 */
		top: 0px;
		background: #717474;
		/* overflow: hidden; */
	}
	
	#header {
		/*头部*/
		width: 100%;
		height: 70px;
		position: relative;
		background: #fcfcfc;
		padding-right: 2%;
		padding-left: 2%;
		display: flex;
		flex: 1;
		justify-content: center;
	}
	/*搜索框*/
	
	.Searchbox1 {
		height: 70px;
		flex: 2;
		float: right;
		/* background: lightcoral; */
		text-align: center;
	}
.MAIN{
  font-size: 50px;
  line-height: 65px;
 }
	.SEarch {
		height: 70px;
		flex: 6;
		justify-content: flex-start;
		float: right;
		/* background: lavender; */
	}
	.Searchbox2 {
		height: 70px;
		flex: 2;
		float: right;
		/* background: lightcoral; */
	}
/*------------------------------歌单----------------------------------*/
	
/*转盘父级*/
.Turntable{
	/* width:105%;
	height: 55%; */
	width: 375px;
	height: 350px;
	position: relative;
	overflow: hidden;
	margin: 0 auto;
	
}
	
/* *******************************画布 */
  #canvas{
	  width:105%;
	  height: 105%;
	  position:absolute;
	  top: -2.8%;
	  left: -4.5%;
	  margin: 0 auto;
	  display: block;
	  background: #0000000;
	  float: left;
	  margin-left: 2%;
    }
	

/* --------------------------------------------------------------------------------------------------------------------------- */	
.container {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  display: none;
}
.container .circle {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background: rgba(138, 43, 226, 0.02);
}
.container .circle:nth-of-type(1) {
  width: 300px;
  height: 280px;
  animation: rt 6s infinite linear;
  box-shadow: 0 0 1px 0 blueviolet, inset 0 0 10px 0 blueviolet;
}
.container .circle:nth-of-type(2) {
  width: 280px;
  height: 300px;
  animation: rt 10s infinite linear;
  box-shadow: 0 0 1px 0 darkviolet, inset 0 0 10px 0 darkviolet;
}
.container .circle:nth-of-type(3) {
  width: 310px;
  height: 290px;
  animation: rt 5s infinite linear;
  box-shadow: 0 0 1px 0 darkmagenta, inset 0 0 10px 0 darkmagenta;
}
.container .circle:nth-of-type(4) {
  width: 290px;
  height: 310px;
  animation: rt 15s infinite linear;
  box-shadow: 0 0 1px 0 magenta, inset 0 0 10px 0 magenta;
}

@keyframes rt {
  100% {
    transform: rotate(360deg);
  }
}
/* --------------------------------------------------------------------------------------------------------------------------------- */

/* 图片 */
.img{
	width: 233px;
	    height: 233px;
	position: absolute;
	/* background: red; */
	left: 50%;
	top: 50%;
	border-radius: 50%;
	transform:translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
	opacity: 0.5;
	/* display: none; */
	border: 2px solid #60686a8f;
}
/* 歌词 */
.musictextsde{
	position: absolute;
	top: 65%;
	width: 100%;
	height: auto;
    background: #ADD8E6;
	display: none;
}
.musictext{
	position: relative;
	width: 100%;
	height:40px;
	display: block;
	text-align: center;
	flex: 1;
	overflow: hidden;
	overflow-y:auto;
	
}
/* 歌词时间 */
.musictime{
	position: relative;
	background: lawngreen;
	width: 100%;
	height:40px;
	display: block;
	text-align: center;
	flex: 1;
	display: none;
}
/*---------------------------------------------------------------------------*/
/*控件父级*/
#songmenu {
		width: 98%;
		  height: 30%;
		  padding-right: 3%;
		  padding-left: 3%;
		  border-radius: 28px 28px 0px 0px;
		  position: fixed;
		  bottom: 0;
		  left: 50%;
		  transform: translateX(-50%);
		  -webkit-transform: translateX(-50%);
		  background: #a9a9a9d1;
		  margin: 0 auto;
	}
/* 控件 */
.widget{
	width: 100%;
	height: 70%;
	display: flex;
    flex: 1;	
	position: relative;
}
/* 上一首 */
.good{
	width: 200px;
	height: 120px;
	flex: 3;
	position: relative;
}
.good span{
	background:url('http://localhost:8080/images/good.png') no-repeat 9px 8px;
	background-size:70% 70% ;
	/* url('http://localhost:8080/images/1.jpg') */
}
.good span,.Next span{
	width:50px;
	height: 50px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -25px;
	margin-top: -25px;
}
/* 播放 */
.witch{
	width: 200px;
	height: 120px;
	position: relative;
	flex: 4;
}
.witchchen{
	width:100px;
	height: 100px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -50px;
	margin-top: -50px;
	background-image: linear-gradient(to bottom right, #5614B0 , #DBD65C); /*渐变*/
	border-radius:50% ;
}
.witchcs{
	width:50px;
	height: 50px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -25px;
	margin-top: -25px;
	/* 暂停 */
	background: url('http://localhost:8080/images/witch.png') no-repeat 9px 0px;
	background-size: 147% 100%;
	/* 播放 */
	/* background: url(http://localhost:8080/images/witch.png) no-repeat -49px -2px;
	    background-size: 193% 133%; */
}
/*下一首  */
.Next{
	position: relative;
	width: 200px;
	height: 120px;
	flex: 3;
}
.Next span{
	background:url('http://localhost:8080/images/next.png') no-repeat 15px 8px;
	background-size:70% 70% ;
}

/* 进度条 */
.pmgressbar{
	width: 100%;
	height: 10px;
	display: flex;
	flex: 1;
	position: relative;
}
/*进度条*/
.progress {
	   width: 314px;
	   height: 6px;
	   border-radius: 3px;
	   overflow: hidden;
	   background-color: #c0c0c0;
	   cursor: pointer;
	   position: absolute;
	   left: 50%;
	   margin-left:-157px;
}
  /*播放进度*/
.line {
    width: 0;
    height: 100%;
    background-color:lightcoral;
    position: absolute;
    top: 0;
    left: 0;
}
 .bar {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
	cursor:pointer;
}
/* 实时更新时间 */
.Real_time{
	width: 100%;
	height: 20px;
	display: flex;
	flex: 1;
	position: relative;
}
.realTime{
	width: 314px;
	height: 20px;
	position: absolute;
	left: 50%;
	margin-left:-157px;
}
#kas{
	float: left;
}
#kas,#end{
	width:50px;
	height: 20px;
	text-align: center;
}
#end{
	float: right;
}
/* --------------------------------------------------------------------------------------------------------------------------------------------- */

/* 歌单 */
#tttuxv{
	width: 100%;
	 height: 70%;
	 position: fixed;
	 /* background: lawngreen; */
	 top: 0px;
	 float: left;
	 z-index: 0;
	 overflow: hidden;
	 background: #7e9797;
}

</style>