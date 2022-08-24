const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path');
// const Version = new Date().getTime();

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    config.resolve.symlinks(true)
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components')
        }
      }
    });
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            // propList: ["*","!border*"],
            //rootValue: 192,
            rootValue: 37.5,
           // rootValue: 75,
            propList: ['*'],
            selectorBlackList: ['pc'],
          })
        ]
      }
    }
  },
  devServer: {
    // open: process.platform === 'darwin',
    open: true,      // 是否打开浏览器
    // host: '0.0.0.0',
    host: 'localhost',
    port: 8080,
    // https: false,
    // hotOnly: false,
    hot: true, //
    compress: true, // 开启压缩
    disableHostCheck: true,  // 开启 webpack4.0 热更新

    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': ''
        },
      },
    }
  },

  // 第三方插件配置
  pluginOptions: {
    // ...
    'style-resources-loader': {
      preProcessor: 'less',
      // less所在文件路径
      patterns: [path.resolve(__dirname, './src/assets/styles/index.less')]
    }
  }
};
