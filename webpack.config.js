var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  	entry:  [__dirname + "/app/main.js", 'webpack-hot-middleware/client' ],//已多次提及的唯一入口文件
  	output: {
    	path: __dirname + "/build",//打包后的文件存放的地方
    	filename: "bundle.js",//打包后输出文件的文件名
    	publicPath: '/'
  	},
  	module: {//在配置文件里添加JSON loader
	    loaders: [
	      {
	        test: /\.json$/,
	        loader: "json-loader"
	      },
	      {
            test: /\.scss$/,
            loaders: [
            		"style-loader",
            		'css-loader?{"sourceMap":true,"modules":true,"localIdentName":"[name]_[local]_[hash:base64:3]","minimize":false}',  
            		"sass-loader?sourceMap",
            	]
          },
          {
              test: /\.(png|jpg|jpeg|gif|svg)$/,
              loader: 'url-loader?limit=50000&name=img/[hash:3].[name].[ext]',
          },
          {
              test: /\.(eot|ttf|wav|mp3)$/,
              loader: 'file-loader',
          },
	      {
	        test: /\.css$/,
	        loader: 'style!css?modules!postcss'//添加对样式表的处理   
	      },
	      {
	        test: /\.(js|jsx?)$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
	        query: {
	          presets: ['es2015','react'],
	          "env": {
					    "development": {
					    "plugins": [["react-transform", {
					       "transforms": [{
					         "transform": "react-transform-hmr",

					         "imports": ["react"],

					         "locals": ["module"]
					       }]
					     }]]
					    }
					  }
			}
	      }
	    ]
	},
	plugins: [
		new HtmlWebpackPlugin({
	      template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
	    }),
	    new webpack.HotModuleReplacementPlugin(),//热加载插件
	    new webpack.optimize.OccurenceOrderPlugin(true),
	],
	postcss: [
	    require('autoprefixer')//调用autoprefixer插件
	],
  	devServer: {
	    contentBase: "./app",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新
	    hot: true,
	    port:"8000",
	    Info:true
	}
}