var express = require('express')
var path = require('path')

var app = express()

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');  //---
var compiler=webpack(webpackConfig); 

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: false, 
    publicPath: webpackConfig.output.publicPath,
    stats: {
    	colors: true,
	    reasons: false,
	    hash: false,
	    version: false,
	    timings: true,
	    chunks: false,
	    chunkModules: false,
	    cached: false,
	    cachedAssets: false,
    }
}));
// app.use(require("webpack-hot-middleware")(compiler,{
// 	log:console.log,
// 	path:'/__webpack_hmr'
// }));
app.use(require("webpack-hot-middleware")(compiler));



// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'app')))





// send all requests to index.html so browserHistory works
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

var PORT = process.env.PORT || 8000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
