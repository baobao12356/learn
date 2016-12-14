var webpack = require('webpack');
var path  = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


var webpackConfig =  {
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
          // loaders: ["style", "css?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]", "sass?sourceMap"]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'url-loader?limit=10000&name=img/[hash:3].[name].[ext]',
        },
        {
            test: /\.(eot|ttf|wav|mp3)$/,
            loader: 'file-loader',
        },
	      {
	        test: /\.css$/,
          // loader: ExtractTextPlugin.extract("style-loader", "css-loader")}//样式单独打印出来 
	        loader: 'style-loader!css-loader'//添加对样式表的处理  
	        // loader: 'style!css?modules!postcss'//添加对样式表的处理  
	        // loader: 'style!css?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:2]' 
	      },
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
                ],
                env:{
                  development:{
                    plugins:[
                      ['react-transform',{
                        'transforms': [
                          {
                            transform: 'react-transform-hmr',
                            imports: ['react'],
                            locals: ['module'],
                          } 
                        ] 
                      }]
                    ]
                  }
                },  
                plugins: [ 
                  'add-module-exports'
                ]
              }
            }
	    ]
	},
	resolve: {
      modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],//为了使用antd-mobile
	    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
	},
	plugins: [
		  new HtmlWebpackPlugin({
	      template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
	    }),
	    new webpack.ProvidePlugin({
		    $: "jquery"
		  }),
	    // new OpenBrowserPlugin({      //dev-server 具有这个功能
	    //   url: 'http://localhost:8000'
	    // }),
	    new webpack.DefinePlugin({
	    	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
	    }),
	    new webpack.HotModuleReplacementPlugin(),//热加载插件
	    new webpack.optimize.OccurenceOrderPlugin(true),
      // new ExtractTextPlugin("css/[name].css"),//生成的css样式文件
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

//为了使用antd-mobile
webpackConfig.module.loaders[5].query.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);
module.exports =  webpackConfig;





