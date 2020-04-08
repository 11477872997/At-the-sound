<template>
	<div class="TyeArea">
		<div id="header">
			<div class="Searchbox">	
			<span class="fa fa-angle-left Return" @click="black"></span>
			</div>
			
			<div class="SEarch">
					D T
			</div>
		</div>
		<div id="songmenu">
			<ul class="PointListing">
				<li class="list" v-for="(item,i) in sps.cover" :key="i" @click="set(i)">
				<div class="Picture">
					<img :src="sps.cover[i]" width="100%" height="100%"/>
				</div>
				<b class="song">创 作</b>
				<p style="line-height: 30px;font-size: 12px;">{{sps.title[i]}}</p>
				<!--<b id="song"></b>-->
				</li>
				
				
			</ul>
			<audio id="audio"></audio>
		</div>
	</div>
</template>
<!--http://bapi.xinli001.com/fm2/broadcast_list.json/?offset=2-->
<script>
	import $ from 'jquery';

	export default {
		data() {
			return {
                 sps:{
                 	//获取图片
                 	cover:[],
                 	//标题
                 	title:[],
//               	播放路径
                 	url:[],
                 },
                 nuber:'2',
                 index:''
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
			 	url:"http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=1",
			 	headers:{
			 		"Content-Type":"application/x-www-form-urlencoded",
			 	}
			 }
			).then(data =>{
			 	for(var i=0;i<data.data.data.length;i++){
			 		that.sps.cover.push(data.data.data[i].cover) //获取头像
			 		that.sps.title.push(data.data.data[i].title) //获取名字
			 		that.sps.url.push(data.data.data[i].url) //发表时间
			 	}
//			 	 console.log(data.data.data[0].cover)  //获取图片
//			 	console.log(data.data.data[0].title)    //标题
//			 	console.log(data.data.data[0].url) //播放路径

			 }) 
	},
	set(num){
		var that = this;
		this.index++
		if(this.index%2!=0){
       	 document.getElementById('audio').src = that.sps.url[num]
    	 document.getElementsByClassName("song")[num].innerHTML= '正在播放~~';
		 document.getElementById('audio').play();
		}else{
			document.getElementById('audio').pause()
			   document.getElementsByClassName("song")[num].innerHTML= '标题';
		}


	},
	setqu(){
			var that = this;
			this.nuber++
//			that.nuber.push(num)
//		    console.log(this.nuber)
			  this.$axios({
			 	methods:'GET',
			 	url:"http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id="+that.nuber+"",
			 	headers:{
			 		"Content-Type":"application/x-www-form-urlencoded",
			 	}
			 }
			 ).then(data =>{
			 	for(var i=0;i<data.data.data.length;i++){
			 		that.sps.cover.push(data.data.data[i].cover) //获取头像
			 		that.sps.title.push(data.data.data[i].title) //获取名字
			 		that.sps.url.push(data.data.data[i].url) //发表时间
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
			 	console.log(11)
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
		background:#f1f1f1;
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
		/* background:url(http://localhost:8080/images/42k386.png); */
		background: linear-gradient(#607D8B, gray);
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
		min-height: 63px;
		position: relative;
		padding-top: 2%;
		padding-left:5%;
		padding-right: 4%;
		margin-top: 8px;
    	margin-bottom: 25px;
		border-radius: 33px;
		/*border-bottom: 1px solid #bba6a6;*/
		background: #ffffffe0 !important;
		
		
	}
	.Picture{
		width: 50px;
		height: 50px;
		position: relative;
		background: lavender;
		display: inline-block;
		float: left;
		margin-right: 10px;
		border-radius: 3px;
		
	}
	.Picture img{
		border-radius: 5px;
		
	}
	.song{
		/* color: #666666; */
		line-height: 21px;
		/* float: left; */
	}
</style>