<template>
	<div>
		
		<div id="A">
		<div class="AnnounCement" v-for="(item,i) in list" :style="item.id" ref="item" :key="i" @touchstart="run(i)" id="items">
			<img :src="item.pic">
		</div>
	    </div>
		
	</div>
</template>
		
<script>
	import $ from 'jquery'
	export default {
		data(){
		return{
			list:[
				{
					id:{transition:' transform 0.5s ease 0s, opacity 0.5s ease 0s',
					transform:' translate(6%, 0%) scale(1)',
					zIndex:2,
					opacity:1,},
					pic:"http://localhost:8080/images/20191210005934.jpg"
				},
				{
					id:{transition:' transform 0.5s ease 0s, opacity 0.5s ease 0s',
					transform:' translate(40%, 0%) scale(0.75)',
					zIndex:1,
					opacity:0.75},
					pic:"http://localhost:8080/images/1213sew.jpg"
				},
				{
					id:{transition:' transform 0.5s ease 0s, opacity 0.5s ease 0s',
					transform:' translate(-30%, 0%) scale(0.75)',
					zIndex:1,
					opacity:0.75},
					pic:"http://localhost:8080/images/wewr213123.jpg"
				},
			],
			// ref自定义属性
			item:'',
			// 索引值
			index:'',
			// 定时器的开关
			timer:''
		
		};
		},
		methods:{
		     run(i){
				 this.index = i
				 let that = this
					 switch (i){
					 	case 0:
						that.$refs.item[0].style.transform = 'translate(6%, 0%) scale(1)'
						that.$refs.item[0].style.zIndex = '2'
						that.$refs.item[0].style.opacity = '1'
						that.$refs.item[1].style.transform = 'translate(40%, 0%) scale(0.75)'
						that.$refs.item[1].style.zIndex = '1'
						that.$refs.item[1].style.opacity = '0.75'
						that.$refs.item[2].style.transform = 'translate(-30%, 0%) scale(0.75)'
						that.$refs.item[2].style.zIndex = '1'
						that.$refs.item[2].style.opacity = '0.75'
					 		break;
					 	case 1:
						that.$refs.item[1].style.transform = 'translate(6%, 0%) scale(1)'
						that.$refs.item[1].style.zIndex = '2'
						that.$refs.item[1].style.opacity = '1'
						that.$refs.item[2].style.transform = 'translate(40%, 0%) scale(0.75)'
						that.$refs.item[2].style.zIndex = '1'
						that.$refs.item[2].style.opacity = '0.75'
						that.$refs.item[0].style.transform = 'translate(-30%, 0%) scale(0.75)'
						that.$refs.item[0].style.zIndex = '1'
						that.$refs.item[0].style.opacity = '0.75'
					 		break;
					 	default:
						that.$refs.item[2].style.transform = 'translate(6%, 0%) scale(1)'
						that.$refs.item[2].style.zIndex = '2'
						that.$refs.item[2].style.opacity = '1'
						that.$refs.item[0].style.transform = 'translate(40%, 0%) scale(0.75)'
						that.$refs.item[0].style.zIndex = '1'
						that.$refs.item[0].style.opacity = '0.75'
						that.$refs.item[1].style.transform = 'translate(-30%, 0%) scale(0.75)'
						that.$refs.item[1].style.zIndex = '1'
						that.$refs.item[1].style.opacity = '0.75'
					 		break;
							}
		
			 },
		},
		mounted:function () {
			// 解决this指向的问题
			let that = this
			let i =0
			this.timer = setInterval(function(){
				if(i<3){
					that.run(i)
					i++
				}else{
					i=0
				}
				
			}, 3000);
			//当调整浏览器窗口大小时，发生 resize 事件。
			$(document).ready(function(e){
				$('#A').css({'marginTop':-143, 'top':50+'%'})
			})
		},
		beforeDestroy(){
			 clearInterval(this.timer);
		},
	}
</script>

<style>
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
	 
	
	.AnnounCement{
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
				/* background:lightcoral; */
				border-radius:15px ;
				
		}
		.AnnounCement img{
			width: 100%;
			height: 100%;
			border-radius:15px ;
		}
</style>
