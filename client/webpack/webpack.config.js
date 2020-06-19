const fs = require('fs')
const path = require('path')
const Autoprefixer = require('autoprefixer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const QiniuPlugin = require('qiniu-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const reg = /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|prop-types|node-fetch)[\\/]/

const config = {
  stats: {
    colors: true,
  },
  output: {
    filename: '[name]-[contenthash:8].js',
    chunkFilename: '[name]-[contenthash:8].js',
    path: path.resolve(__dirname, '../../public/build'),
    publicPath: '/build',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: reg,
          chunks: 'all',
          priority: 10,
        },
        common: {
          name: 'common',
          chunks: 'all',
          priority: 5,
          minChunks: 2,
        },
      },
    },
    runtimeChunk: true,
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new UglifyWebpackPlugin({ sourceMap: true, parallel: true }),
    ],
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                Autoprefixer,
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [],
}

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name]-[contenthash:8].css',
  chunkFilename: '[name]-[contenthash:8].css',
})

const compressionPlugin = new CompressionWebpackPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.html$|\.css$/,
  threshold: 10240,
  minRatio: 0.8,
})

const isDirectory = dir => {
  let result = false
  try {
    const stat = fs.statSync(dir)
    if (stat && stat.isDirectory()) {
      result = true
    }
  } catch (err) {
    console.error(`"${dir}" is not a directory!`)
  }
  return result
}

const htmlPlugin = address => {
  const customFile = path.resolve(__dirname, `../pages/${address}/index.hbs`)
  const defaultFile = path.resolve(__dirname, '../templates/index.hbs')
  const pass = fs.existsSync(customFile)
  const template = pass ? customFile : defaultFile

  return new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, `../../views/${address}.hbs`),
    template,
    // hash: true,
    // chunks: ['runtime', 'vendors', address],
    minify: {
      collapseWhitespace: true,
      inject: true,
      minifyCSS: true,
      removeComments: true,
    },
  })
}

// const qiniuPlugin = () => {
//   const qiniu = {
//     accessKey: 'xxxx',
//     secretKey: 'xxxx',
//     bucket: 'xxxx',
//   }

//   return new QiniuPlugin({
//     ACCESS_KEY: qiniu.accessKey,
//     SECRET_KEY: qiniu.secretKey,
//     bucket: qiniu.bucket,
//     path: `blued/dream/`,
//     include: [
//       /\.js$/,
//       /\.js.gz$/,
//       /\.css$/,
//       /\.css.gz$/,
//     ],
//   })
// }

module.exports = (env, argv) => {
  config.plugins.push(miniCssPlugin)

  const dir = path.resolve(__dirname, `../pages/${env.p}`)

  let trunk = env.p
  if (/\//gi.test(env.p)) {
    trunk = env.p.split('/').slice(-1)
  }

  const entry = {}
  entry[trunk] = isDirectory(dir) ? `${dir}/index.js` : `${dir}.js`

  const pass = fs.existsSync(entry[trunk])
  if (!pass) {
    throw new Error(`Webpack Options → "entry[env.p] = ${entry[trunk]}" is not a valid path.`)
  }

  config.entry = entry
  config.plugins.push(htmlPlugin(env.p))

  if (argv.mode === 'production') {
    config.devtool = false
    // config.output.publicPath = 'https://cdn.example.com/'
    config.optimization.minimize = true
    config.plugins.push(new CleanWebpackPlugin())
    config.plugins.push(compressionPlugin)
    config.plugins.push(new HTMLInlineCSSWebpackPlugin())
    // config.plugins.push(qiniuPlugin())
  } else {
    config.devtool = 'inline-source-map'
    config.watch = true
    config.watchOptions = {
      aggregateTimeout: 300,
      ignored: [
        'build',
        'logs',
        'node_modules',
        'pm2',
        'public',
        'server',
        'views',
      ],
    }
  }

  return config
}
