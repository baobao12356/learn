var webpack = require('webpack');
var path  = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanPlugin = require('clean-webpack-plugin');//清理打包文件用的

const DEBUG=process.env.DEBUG;
module.exports = {
  	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  	output: {
    	path: __dirname + "/build",//打包后的文件存放的地方
    	filename: "bundle.js",//打包后输出文件的文件名
    	// publicPath: './'
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
              'style-loader',
              'css-loader?{"sourceMap":false,"modules":true,"localIdentName":"[name]_[local]_[hash:base64:3]","minimize":false}', 
              // "postcss-loader", 
              'sass-loader?sourceMap' 
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'url-loader?limit=10000&name=img/[hash:3].[name].[ext]',
            // loader: 'url-loader?limit=10000&name=img/[name].[ext]',
        },
        {
            test: /\.(eot|ttf|wav|mp3)$/,
            loader: 'file-loader?name=fonts/[hash:3].[name].[ext]',
        },
	      {    
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },//把样式独立出来
	      {
            test: /\.(js|jsx?)$/, 
            exclude: /node_modules/,
            loader: 'babel-loader', 
            query:{  
              babelrc: false,
              presets: [
                  'react', 
                  'es2015',
                  'stage-0' 
              ]
            }
        }
	    ]
	},
  resolve: {
      // modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],//为了使用antd-mobile
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
	plugins: [
		  // new HtmlWebpackPlugin({
	   //    template: __dirname + "./app/index.html",//new 一个这个插件的实例，并传入相关的参数
	   //    minify:{
    //             removeComments:true,//移除HTML中的注释
    //             collapseWhitespace:true //删除空白符与换行符
    //     }
	   //  }),
      new CleanPlugin(['build']), //清理文件夹
	    new webpack.ProvidePlugin({
		    $: "jquery",
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery'
		  }),
      new webpack.DefinePlugin({
        "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            },
        // __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
        devTools:DEBUG
      }),
	    new webpack.optimize.OccurenceOrderPlugin(true),
      new ExtractTextPlugin("css/[name].css"),//生成的css样式文件
	    new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
      }),   // 压缩代码
 	],
  // postcss: [
  //     require('autoprefixer')//调用autoprefixer插件
  // ],

}







