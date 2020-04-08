<template>
	<div class="TyeAr">
		<!-- 搜索 -->
		<div id="header">
			<div class="Searchbox">	
			<span class="fa fa-angle-left Return" @click="back"></span>
			</div>
			
			<div class="SEarch">
				<input type="text" value="张学友"   class="Box" autofocus/>
				<input type="button" class="uuc " @click="music">
					<!--<span class="fa fa-search"></span>-->
				</input>
			</div>
		</div>
		<!-- 显示歌单 -->
		<div id="clert">
			<!-- 列表 -->
			<div :id="'list'+i" class="list"  v-for="(item,i) in this.musict.pic" :key='i' @click="url(i)" ref="'data'+i">
				<!-- 头像 -->
				<div class="Picture">
					<img :src="musict.pic[i]" width="100%" height="100%">
				</div>
				<!-- 作者 -->
				<b class="Song">作者:{{musict.author[i]}}</b>
				<!-- 歌名 -->
				<p>歌名:{{musict.title[i]}}</p>
				<!-- 路径 -->
				<span style="display: none;">{{musict.url[i]}}</span>
				<!-- <andio id='urs/'> -->
				<img style="display: none;" id="urls" :src="urls"/>
			</div>
		</div>
		
		
		<audio id="urls"/>
	</div>
	
</template>

<script>
	import $ from 'jquery';
  
	export default {
		data() {
			return {
				musict:{
					//图片
					pic:[],
					//歌曲路径
					url:[],
					//歌手
					author:[],
					//歌名
					title:[],
					lrc:[],
				},
				//求豆麻袋
				urls:'',
				list:'',
				//存放时间的数组
				lrc:{
					lrctext:[],
					lrctime:[],
				},
				//定义一个值来进行下一页判断
				page:0,
				//判断页面清空的数组
				input:[],
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			//请求歌曲数据方法
				music(){
				let that = this;
				that.page= that.page+1;
				
				//清空页面原本存在的数据
				//获取input框中的请求数据,做请求链接的拼接
				var inpt = $(".Box").val();
				that.input.push(inpt);
				// console.log(that.input);
				if(that.input[0] == that.input[1]){
					console.log('这两个逼一样')
					console.log(that.input[0]);
					console.log(that.input[1]);
					that.input.pop();
				}else if(that.input[1] != undefined){
					if(that.input[0] != that.input[1]){
						that.page = 1;
						$('#clert').html('');
						that.input.shift();
						console.log(that.input);
					}
				}
				
				console.log(that.input);
				//通过axios请求数据
				this.$axios.get('http://hn216.api.yesapi.cn/?s=App.Music.Search&input='+that.input[0]+'&filter=name&website=kuwo&page='+that.page+'&app_key=9CB286E4B9B7FA498BE0A5E9F78544AB&sign=FEC5F13DFB4CC6E2CC8264DA1E308140').then(function(response){
					//将获取到的数据提取到data
					for(var i=0;i<response.data.data.music.length;i++){
					      //图片改为从qq获取
					      that.musict.url.push(response.data.data.music[i].url);
					      that.musict.author.push(response.data.data.music[i].author);
					      that.musict.title.push(response.data.data.music[i].title);
						  that.musict.lrc.push(response.data.data.music[i].lrc);
					     }
				});
				//图片的请求
				this.$axios.get('http://hn216.api.yesapi.cn/?s=App.Music.Search&input='+that.input[0]+'&filter=name&website=qq&page='+that.page+'&app_key=9CB286E4B9B7FA498BE0A5E9F78544AB&sign=A0FAB319C8F71D0996FB1BEADD224CE3').then(function(response){
					for(var i=0;i<response.data.data.music.length;i++){
						that.musict.pic.push(response.data.data.music[i].pic);
					}
				})
			},
			//获取路径并赋予audio
			url(list){
				let that = this;
				var text = $('#list'+list+'').children().eq(3).html();
				    var arr = [text.split ("amp;")[0]];
				    var att = [text.split ('amp;')[1]];
				    var atd = [text.split ('amp;')[2]];
				    var atr = [text.split ('amp;')[3]];
				    var atl = [text.split ('amp;')[4]];
				    var url = arr+att+atd+atr+atl;
					document.getElementById('audio').src = url;

					that.list = list;
					that.$emit('marcks',that.list,that.musict.lrc,that.musict.pic);
					$('.musictext').html('');
					if(that.musict.lrc[list] == ""){
					}else{
						//对歌词文件进行解析分割
						var lrc = that.musict.lrc[list];
							//切割歌词
							var lys = lrc.split('[');
							//二次切割
							for(var i in lys){
								var lyn = lys[i].split(']');
								//将切割好的歌词传入到data中的数组里
								that.lrc.lrctime.push(lyn[0]);
								that.lrc.lrctext.push(lyn[1]);
							}
							//遍历数组给dom添加值。
							for(var i=1;i<that.lrc.lrctext.length;i++){
								$('.musictext').html($('.musictext').html()+'</br>'+that.lrc.lrctext[i]);
							}
				}
			},
			
			//重复查歌的操作
			handleScrolls(e){
					     var that = this
						 var scrollTop = Math.round(e.target.scrollTop) //ul的差值高度
						 var scrollHeight = e.target.scrollHeight  //ul的高度  
						 var clientHeight = e.target.clientHeight  //ul文档的高度
						 if(scrollHeight -clientHeight == scrollTop){
						 	console.log(that.page);
						 	that.music()
						 }
					}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScrolls,true)
		}
		}
</script>

<style scoped="scoped">
	.TyeAr {
		/*板心*/
		width: 100%;
		height: auto;
		position: relative;
		left: 0px;
		top: 0px;
		background:#607d8b;
		
	}
	#header {
		/*头部*/
		width: 100%;
		height: 70px;
		position: absolute;
		background: #f1f1f1;
		padding-right: 2%;
		padding-left: 2%;
		display: flex;
		flex: 1;
		justify-content: center;
		float: left;
		top: 0;
		z-index: 2;
	}
	.Searchbox,.SEarch{
		height: 70px;
	}
	
	/*搜索框*/
	/* -------------------------------------------------------------------------------------------- */
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
		float: left;
		/*background: lavender;*/
		padding: 4%;
		/*padding-left:4%;*/
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
		  background: url(http://localhost:8080/images/20191210074010.png) #e0e0e2 no-repeat 0px 2px;
		  background-size: 80%;
	}
/*------------------------------歌单----------------------------------*/
	/* 歌单显示区域 */
	#clert{
	    width: 100%;
	    height: 467px;
	    position: relative;
	    overflow: hidden;
		overflow-y: auto;
		padding-right: 3%;
		padding-left: 3%;
		padding-top: 80px;
		background: #607d8b;
	}
	
	#sonenu {
		width: 100%;
		height: 570px;
		padding-right: 3%;
		padding-left: 3%;
		position: relative;
		background: bisque;
	}
	
	/* #sonenu .PointListing{
		width: 100%;
		height: 597px;
		position: relative;
		top: 20px;
		left: 0;
	} */
	
	/* 列表 */
       .list{
             width: 100%;
             height: 55px;
             position: relative;
             margin-bottom: 11px;
             padding: 0.6%;
             border-radius: 3px;
             /* border-bottom: 1px solid #bba6a6; */
             /* background: #8cafbb2e !important; */
             color: #000000;
        }
	/* 头像 */
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
	  border-radius: 3px;
	 }
	/* 作者 */
	.Song{
		line-height: 24px;
	}
	.ttyx{
	  color: #c0c0c0;
	 }
	
</style>





