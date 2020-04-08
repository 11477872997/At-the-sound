<template>
		<!-- 注册框 -->
		<div class="register">
				<input type="text" class="text" placeholder="usename" v-model="loginR.user" @blur="us()"  />
				<span class="use"></span>
				<input type="password" class="passWordOne" placeholder="password" v-model="loginR.paw1" @blur="pawone()"/>
				<span class="paw1"></span>
				<input type="password"  class="passWordtwo" placeholder="password" v-model="loginR.paw2" @blur="pawtwo()"/>
				<span class="paw2"></span>
				<div class="yaz"><input type="text"  class="cansvas" placeholder="captcha" v-model="cat"/> <canvas id="canvas"></canvas></div>
				<input type="button" value="注 册" class="btn" @click="pass()"/>
		</div>
</template>
<script>
	import $ from 'jquery';
	import { Toast,MessageBox } from 'mint-ui';
	
	export default {
	  data() {
	    // 注意：组件中的 data 必须是 function
	    return {
			loginR:{
				paw1:'',
				paw2:'',
				user:'',
			},
		  cat:'',
		  stats:{
			  one:'sssss',
			  two:'',
			  three:''
		  }
	    };
	  },
	  methods: {
		  // 用户名不能为空
		  us(){
					const that = this
					if(this.loginR.user == ''){
							// 这里是判断vue不能为空
							Toast({
									message: '用户名不能为空',
									position: 'bottom',
									duration: 2000
								});
							return false
					}else{
						    const that = this
							let formdata = this.$qs.stringify(this.loginR);
							// console.log(formdata)
							this.$axios.post('http://localhost:8888/api/resgi',formdata).then(data =>{
							// console.log(data)
									if(data.data.errno == -1){
											Toast({
												message: '用户已存在',
												position: 'bottom',
												duration: 2000,
											});
											that.loginR.user == ' '
				
									}
							})
					}

				   
			  },
			  // 密码1不能为空
			pawone(){

					const pawssword =  /^[\w_-]{6,16}$/;
					
					if(this.loginR.paw1 == ''){
							Toast({
								
									message: '密码不能为空',
									position: 'bottom',
									duration: 2000
							});
					  	
					  return false
					  
				  }else if(!pawssword.test(this.loginR.paw1)){
					  // 判断密码正则
							Toast({
								
									message: '6-20位字母数字密码',
									position: 'bottom',
									duration: 2000
							});
							
							return false
				  }else{
					  this.stats.one = true
				  }
				  
			  },
			  // 密码2不能为空
				pawtwo(){
					const that = this
					const pawssword =  /^[\w_-]{6,16}$/;
					  if(this.loginR.paw2 == ''){
						  // 这里是判断vue不能为空
						  Toast({
							  
								message: '确认密码不能为空',
								position: 'bottom',
								duration: 2000
						  });
						  
						  return false
						  
					  }else if(!pawssword.test(this.loginR.paw2)){
						  // 判断密码正则
						  Toast({
							  
								message: '6-20位字母数字密码',
								position: 'bottom',
								duration: 2000
						  });
						  return false
						  
					  }else if(this.loginR.paw1!=this.loginR.paw2){
						  
						   MessageBox('提示', '密码不一致');
					  }
					  else{
						  this.stats.two = true
					  }
				},
			  
		 // 密码不相等
		  pass(){  
                    const that = this
					let formdata = this.$qs.stringify(this.loginR);
					// console.log(formdata)
					this.$axios.post('http://localhost:8888/api/land',formdata).then(data =>{
							   // console.log(data)
							   if(data.data.msg.errno== 0){
								MessageBox('恭喜你', '注册成功');
								that.$router.push({path:'/land'});
							   }
					})

			  },
	 
	  },
	  mounted(){
		  let that = this; 
		  $(function(){
		          var show_num = [];
		          draw(show_num);
		           
		          $("#canvas").on('click',function(){
		              draw(show_num);
					  
		          })
		          $(".btn").on('click',function(){
		              var val = $(".cansvas").val().toLowerCase()
		  
		              var num = show_num.join("");
		              if(val==''){
		                  MessageBox('温馨提示', '请输入验证码');
		  						  draw(show_num);
		              }else if(val == num){
		                  // MessageBox('恭喜你', '验证码正确');
		  
		              }else{
						  $(".cansvas").val('');
						  draw(show_num);
		                  MessageBox('温馨提示', '验证码输入错误');
		                  
		              }
		          })
		       })
		  
		      //生成并渲染出验证码图形
		      function draw(show_num) {
		          var canvas_width=$('#canvas').width();
		          var canvas_height=$('#canvas').height();
		          var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
		          var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
		          canvas.width = canvas_width;
		          canvas.height = canvas_height;
		          var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
		          var aCode = sCode.split(",");
		          var aLength = aCode.length;//获取到数组的长度
		          
		          for (var i = 0; i <4; i++) {  //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
		              var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
		              var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
		              // var deg = Math.random() - 0.5; //产生一个随机弧度
		              var txt = aCode[j];//得到随机的一个内容
		              show_num[i] = txt.toLowerCase();
		              var x = 10 + i * 20;//文字在canvas上的x坐标
		              var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
		              context.font = "bold 23px 微软雅黑";
		  
		              context.translate(x, y);
		              context.rotate(deg);
		  
		              context.fillStyle = randomColor();
		              context.fillText(txt, 0, 0);
		  
		              context.rotate(-deg);
		              context.translate(-x, -y);
		          }
		  				for (var i = 0; i <= 5; i++) { //验证码上显示线条
		  				            context.strokeStyle = randomColor();
		  				            context.beginPath();
		  				            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
		  				            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
		  				            context.stroke();
		  				        }
		  				        for (var i = 0; i <= 30; i++) { //验证码上显示小点
		  				            context.strokeStyle = randomColor();
		  				            context.beginPath();
		  				            var x = Math.random() * canvas_width;
		  				            var y = Math.random() * canvas_height;
		  				            context.moveTo(x, y);
		  				            context.lineTo(x + 1, y + 1);
		  				            context.stroke();
		  				        }
		  				}
		  				
		  				//得到随机的颜色值
		  				function randomColor() {
		  					var r = Math.floor(Math.random() * 256);
		  					var g = Math.floor(Math.random() * 256);
		  					var b = Math.floor(Math.random() * 256);
		  					return "rgb(" + r + "," + g + "," + b + ")";
		  				}
	  }
	};
</script>
<style lang="css" scoped="scoped">
		/* 注册框 */
	.register{
		width: 220px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -120px;
		margin-left: -110px;
		/* background: red; */
	}
	/* 去掉默认样式 */
	input {
		background: none;
		outline: none; /*去掉选中的样式*/
		border: none;
	}
	.text,.passWordOne,.passWordtwo{
		width: 200px;
		height: 32px;
		display: flex;
		flex: 1;
		margin: 0 auto;
		position: relative;
		margin-top: 5px;
		margin-bottom: 5px;
		border-radius: 80px;
		font-size: 0.65rem;
		text-align: center;
		border: 1px solid #FFFFFF;
		background: #988c8cc7;
		color: white;
	}
	.text[type="text"]:focus,.passWordOne[type="password"]:focus,.passWordtwo[type="password"]:focus{
	    width: 220px;
		border: 1px solid #2ecc71;
		
	}
	/* 错误文字提示 */
	.use,.paw1,.paw2{
		display: flex;
		flex: 1;
		width: 180px;
		height: 40px;
		position: relative;
		text-align: center;
	    font-size:0.65rem ;
		color: red;
		/* background: #2ECC71; */
		margin: 0 auto;
		
	}
	/* 提交按钮 */
	.btn{
		width: 80px;
		height: 34px;
		display: flex;
		flex: 1;
		margin: 0 auto;
		position: relative;
		margin-top: 50px;
		margin-bottom: 2px;
		border-radius: 80px;
		font-size:0.65rem ;
		text-align: center;
		border: 1px solid #009688;
		/* color: whitesmoke; */
		padding: 0 0 0 27px;
		color: #ccc;
		/* background: #988c8cc7; */
	}
	.btn[type="button"]:active{
		width: 100px;
		border: 1px solid #3498db;
		padding: 0 0 0 37px;
	}
	/* 提示文子 */
	  input::-webkit-input-placeholder{
	           color:white;
	        }
	        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
	            color:white;
	        }
	        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
	            color:white;
	        }
	        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
	           color:white;
	        }
			
		/* 验证码匹配 */
		.yaz{
			width: 200px;
			height: 32px;
			display: flex;
			flex: 1;
			margin: 0 auto;
			position: relative;
			margin-top: 5px;
			margin-bottom: 5px;
			font-size: 0.65rem;
			text-align: center;
			
			/* background: #A9A9A9; */
		}
		.cansvas{
			/* 设置边款不占位置 */
			box-sizing:border-box;
			-moz-box-sizing:border-box; /* Firefox */
			-webkit-box-sizing:border-box; /* Safari */
			width: 100px;
			height: 32px;
			flex: 5;
			       /* 左上角 右上角 右下角  左下角 */
		    border-radius: 80px 0px 0px 80px;
			border: 1px solid #ffffff;
			text-align: center;
			background: #988c8cc7;
			color: #fff;
		}
		#canvas{
			width: 100px;
			height: 32px;
			flex: 5;
		    border-radius: 0px 80px 80px 0px;
			border: 1px solid #ffffff;
			background: #988c8cc7;
		}
</style>