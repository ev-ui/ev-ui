var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CopyWebpackPlugin=require('copy-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var APP_PATH = path.resolve(__dirname, 'app');
var SRC_PATH = path.resolve(__dirname, 'demo');
module.exports={
	entry:['./demo/app.js'],
	output:{
		path:path.resolve(__dirname,'app'),
		// publicPath:'./',
		filename:'[name].js'
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','stage-0','react'],
                    plugins: [
                        ['import', [{ libraryName: "antd", style: 'css' }]]
                    ]
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(jpg|png|gif|svg)$/,
				loader:'url-loader',
				query:{
					limit:8192,
					name:'res/img/[name].[ext]'
				}
			},
			{
				test:/\.(ttf|woff|eot)$/,
				loader:'url-loader',
				query:{
					limit:8192,
					name:'res/font/[name].[ext]'
				}
			}
		]
	},
	resolve:{
		alias:{
			'ev-ui':path.join(__dirname,'src'),
			__src:path.join(__dirname,'demo','src'),
			__public:path.join(__dirname,'demo','public'),
			__res:path.join(__dirname,'demo','res'),
			__utils:path.join(__dirname,'demo','utils')
		}
	},
	devServer:{
        contentBase:APP_PATH,
		port:6777,
        inline:true,
		open:true,
		openPage:'',
		proxy:{
			"/api/*":{
				target:"http://localhost:9999/",
				secure:false,
				pathRewrite:{"/api":"/"}
			}
		}
    },
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname+"/demo/index.html",
            filename:'index.html'
        }),
        // new CopyWebpackPlugin([
		// 	{from:path.resolve(SRC_PATH,'index.d.ts'),to:'index.d.ts'}
		// ])

		// // 生产环境打包
		// new webpack.DefinePlugin({
		// 	"process.env":{
		// 		NODE_ENV:JSON.stringify('production')
		// 	}
		// }),
		// // 去掉注释，忽略警告
		// new webpack.optimize.UglifyJsPlugin({
		// 	comments:false,
		// 	compress:{
		// 		warnings:false
		// 	}
		// }),
		// new CompressionWebpackPlugin({ //gzip 压缩
		// 	asset: '[path].gz[query]',
		// 	algorithm: 'gzip',
		// 	test: new RegExp(
		// 		'\\.(js|css)$'    //压缩 js 与 css
		// 	),
		// 	threshold: 10240,
		// 	minRatio: 0.8
		// }),
		// //css单独打包
		// new ExtractTextPlugin("[name].[contenthash].css")
	]
}