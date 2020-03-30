const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path');

function resolvePath(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  mode: "production",
  entry: ["./src/app.js"],
  output: {
    path: resolvePath("www"),
    filename: "app.js",
    publicPath: ""
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolvePath("src")
    }
  },
  devServer: {
    hot: true,
    open: false,
    compress: true,
    contentBase: "/www/",
    watchOptions: {
      poll: true
    }
  },
  performance: {
    hints: "warning"
  },
  optimization: {
    runtimeChunk: "single", // 等价于
    // runtimeChunk: {
    //   name: 'runtime'
    // }
    // 分割代码块
    splitChunks: {
      chunks: "async",
      // 大于30KB才单独分离成chunk
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        //公用模块抽离
        common: {
          chunks: "initial",
          minSize: 0, //大于0个字节
          minChunks: 2 //抽离公共代码时，这个代码块最小被引用的次数
        },
        default: {
          priority: -20,
          reuseExistingChunk: true
        },
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "all"
        }
      }
    },
    minimizer: [new UglifyJsPlugin({
      exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
      cache: true,
      parallel: true, // 开启并行压缩，充分利用cpu
      sourceMap: false,
      extractComments: false, // 移除注释
      uglifyOptions: {
        compress: {
          unused: true,
          drop_debugger: true
        },
        output: {
          comments: false
        }
      }
    })]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [
          resolvePath("src"),
          resolvePath("node_modules/ssr-window")
        ]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.styl(us)?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "images/[name].[hash].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify("production")
    }),
    new UglifyJsPlugin(),
    new OptimizeCSSPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        safe: true,
        map: { inline: false },
        autoprefixer: { disable: true }, // 这里是个大坑，否则会移除前缀
        mergeLonghand: false,
        discardComments: {
          removeAll: true // 移除注释
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
    new CopyWebpackPlugin([
      {
        from: resolvePath("static"),
        to: resolvePath("www/static")
      }
    ])
  ]
};