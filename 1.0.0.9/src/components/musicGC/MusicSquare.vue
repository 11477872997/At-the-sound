<template>
	<div class="TyeArea">
		<div id="header">
			<div class="Searchbox">	
			<span class="fa fa-angle-left Return" @click="black"></span>
			</div>
			
			<div class="SEarch">
				 Music Square
			</div>
		</div>
		<div id="songmenu">
			<ul class="PointListing">
				<li class="list" v-for="(item,i) in sps.header" :key="i">
				<div class="Picture">
					<img :src="sps.header[i]" width="100%" height="100%"/>
				</div>
				<b class="Song">名称:{{sps.name[i]}}</b>
				<p style="font-size: 12px;">{{sps.text[i]}}</p>
				<video :src="sps.video[i]" width="100%" height="400px" controls="controls"></video>
				<p style="text-align: right;">{{sps.passtime[i]}}</p>
			   <!--<hr />-->
				</li>
				
				
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';

	export default {
		data() {
			return {
                 sps:{
                 	//获取头像
                 	header:[],
                 	//获取名字
                 	name:[],
//               	获取发表时间
                 	passtime:[],
//               	发表文字
                 	text:[],
//               	获取视频
                 	video:[],
                 },
                 nuber:'2'
			}
		},
		methods:{
			black(){
				this.$router.go(-1)
			},
	 		createcode(){
			var that = this
			 this.$axios({
			 	methods:'GET',
			 	url:"https://api.apiopen.top/getJoke?page=2&count=5&type=video",
			 	headers:{
			 		"Content-Type":"application/x-www-form-urlencoded",
			 	}
			 }
			 ).then(data =>{
			 	for(var i=0;i<data.data.result.length;i++){
			 		that.sps.header.push(data.data.result[i].header) //获取头像
			 		that.sps.name.push(data.data.result[i].name) //获取名字
			 		that.sps.passtime.push(data.data.result[i].passtime) //发表时间
			 		that.sps.text.push(data.data.result[i].text) //发表标题
			 		that.sps.video.push(data.data.result[i].video) //发表视频
			 		
			 	}

			 }) 
	},
	setqu(){
			var that = this;
			this.nuber++
//			that.nuber.push(num)
//		    console.log(this.nuber)
			  this.$axios({
			 	methods:'GET',
			 	url:"https://api.apiopen.top/getJoke?page="+that.nuber+"&count=5&type=video",
			 	headers:{
			 		"Content-Type":"application/x-www-form-urlencoded",
			 	}
			 }
			 ).then(data =>{
			 	for(var i=0;i<data.data.result.length;i++){
			 		that.sps.header.push(data.data.result[i].header) //获取头像
			 		that.sps.name.push(data.data.result[i].name) //获取名字
			 		that.sps.passtime.push(data.data.result[i].passtime) //发表时间
			 		that.sps.text.push(data.data.result[i].text) //发表标题
			 		that.sps.video.push(data.data.result[i].video) //发表视频
			 		
			 	}
			 }) 	
		},
		handleScroll(e){
		     var that = this
			 var scrollTop = Math.round(e.target.scrollTop) //ul的差值高度
			 var scrollHeight = e.target.scrollHeight  //ul的高度  
			 var clientHeight = e.target.clientHeight  //ul文档的高度
//			 console.log(scrollTop)
//			 console.log(scrollHeight)
//			 console.log(clientHeight)
			 if(scrollHeight -clientHeight == scrollTop){
//			 	console.log(11)
			 	that.setqu()
			 }

		}

		},
		mounted:function(){
         this.createcode();
         window.addEventListener('scroll',this.handleScroll,true)
		},

		}	
</script>

<style scoped="scoped">
	.TyeArea {
		/*板心*/
		width: 100%;
		height: auto;
		position: relative;
		left: 0px;
		top: 0px;
		overflow: hidden;
	}
	
	#header {
		/*头部*/
		width: 100%;
		height: 70px;
		position: fixed;
		top: 0;
		background: #fcfcfc;
		padding-right: 2%;
		padding-left: 2%;
		display: flex;
		flex: 1;
		justify-content: center;
		z-index: 1;
	}
	.Searchbox,.SEarch{
		height: 70px;
	}
	
	/*搜索框*/
	
	.Searchbox {
		
		flex:1;
		float: right;
		/*background: lightcoral;*/
		text-align: center;
	}
	/*搜索*/
	
	.SEarch {
		flex: 9;
		justify-content: flex-start;
		/*float: left;*/
		/*background: lavender;*/
		/*padding: 4%;*/
		/*padding-left:4%;*/
		text-align: center;
		font-size: 24px;
		line-height: 70px;
		padding-right: 10%;
	}
	/*返回*/
	.Return{
		font-size:50px;
		line-height: 65px;
	}
	/**/
	.Box{
		width:85%;
		height: 40px;
		font-size:24px;
		border-radius:25px 0px 0px 25px;
		display: inline-block;
		float: left;
		text-indent:20px;
		background: #e0e0e2;
	}
	.uuc{
		width: 15%;
		height: 40px;
		float: left;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		border-radius:0px 25px 25px 0px;
		background: lightgoldenrodyellow;
	}
	/*------------------------------歌单----------------------------------*/
	
	#songmenu {
		width: 100%;
		height: 814px;
		padding-right: 3%;
		padding-left: 3%;
		position: relative;
		background: #615d57b5;
		top: 70px;
	}
	
	#songmenu .PointListing{
		width: 100%;
		height:  725px;
		position: relative;
		top: 20px;
		left: 0;
		overflow-y: auto;
	}
	
       .list{
		width: 100%;
		height: auto;
		position: relative;
		margin-bottom: 12px;
		/*border-bottom: 1px solid #bba6a6;*/
		/*background: lightblue !important;*/
		
	}
	.Picture{
		width: 50px;
		height: 50px;
		background: lavender;
		display: inline-block;
		float: left;
		margin-right: 10px;
		border-radius: 3px;
		
	}
	.Picture img{
		border-radius: 5px;
	}
	.Song{
		line-height: 24px;
	}
</style>