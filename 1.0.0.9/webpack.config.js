const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueloaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const proxy = require('http-proxy-middleware');

module.exports = {

	entry:path.join(__dirname,'./src/main.js'),
	output: {
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	devServer:{
	    // host: 'localhost', //可选，ip
	    port: 8080, //可选，端口
	    contentBase:path.resolve(__dirname,'src'), //可选，基本目录结构
		open:true,
	    compress: true ,//可选，压缩
		hot:true,        //这是热更新的第一步
	
	},
	plugins:[
		//配置插件的节点
		new webpack.HotModuleReplacementPlugin(),  //new 一个热更新模块对象
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		}),
		new VueloaderPlugin(),
		new MiniCssExtractPlugin({
		      // Options similar to the same options in webpackOptions.output
		      // both options are optional
		      filename: '[name].css',
		      chunkFilename: '[id].css',
		    }),
	],
	module:{  //配置所有第三方模块加载器
		rules: [   //所有第三方模块匹配规则
			// { test: /\.css$/, use: ['style-loader', 'css-loader'] },  //配置处理css文件
			{ test: /\.(jpg|png|gif|bmp|jpeg|svg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
			{ test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
	        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",options:{} }, // 配置 Babel 来转换高级的ES语法  
			{ test: /\.vue$/, use: 'vue-loader' }, // 处理 .vue 文件的 loader
			{
				test: /\.css$/,
				use: [
				  {
					loader: MiniCssExtractPlugin.loader,
					options: {
					  publicPath: (resourcePath, context) => {
						// publicPath is the relative path of the resource to the context
						// e.g. for ./css/admin/main.css the publicPath will be ../../
						// while for ./css/main.css the publicPath will be ../
						return path.relative(path.dirname(resourcePath), context) + '/';
					  },
					},
				  },
				  'css-loader',
				],
			},
		],
		// presets:[[ '@babel/preset-env',{targets: {edge: "17",firefox: "60",chrome: "67",safari: "11.1",  useBuiltIns: 'usage' } ]]
	},
	resolve:{
		alias:{
			'vue$':path.join(__dirname,'./node_modules/vue/dist/vue.js')
		}
	}
}