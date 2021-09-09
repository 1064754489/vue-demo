const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  // lintOnSave: process.env.NODE_ENV === "development",
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      extensions: [
        '.tsx',
        '.ts',
        '.mjs',
        '.js',
        '.jsx',
        '.vue',
        '.json',
        '.wasm',
      ],
    },
  },
  chainWebpack: (config) => {
    // 处理ts文件 (新增loader)
    config.module
      .rule('ts')
      .test(/\.tsx?$/)
      .exclude.add(resolve('node_modules'))
      .end()
      .use('cache-loader')
      .loader('cache-loader')
      .options({
        cacheDirectory: resolve('node_modules/.cache/ts-loader'),
      })
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        transpileOnly: true, // 关闭类型检查，即只进行转译(类型检查交给webpack插件(fork-ts-checker-webpack-plugin)在另一个进程中进行,这就是所谓的多进程方案,如果设置transpileOnly为false, 则编译和类型检查全部由ts-loader来做, 这就是单进程方案.显然多进程方案速度更快)
        appendTsSuffixTo: ['\\.vue$'],
        happyPackMode: false,
      })
      .end()

    // eslint 自动修复 (修改已经存在的loader)
    config.module
      .rule('eslint')
      .test(/\.(vue|(j|t)sx?)$/)
      .pre() // eslint是pre处理的
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        // 修改已经存在loader的配置
        options.fix = true
        return options
      })
      .end()

    // 使用webpack 插件进行typescript 的类型检查 fork-ts-checker-webpack-plugin
    config.plugin('fork-ts-checker').use(ForkTsCheckerWebpackPlugin, [
      {
        // vue: true,
        // tslint: false,
        // formatter: 'codeframe'
        // checkSyntacticErrors: false
        // 因为fork-ts-checker-webpack-plugin是在单独的进程跑的，所以它的错误或警告信息是异步回传给到webpack进程的, 这时编译报错信息只在终端显示,不会在预览的浏览器界面显示报错信息。
        // 将async设置为false后，就要求webpack等待fork-ts-checker-webpack-plugin进程返回信息, 这样会在页面显示编译报错信息。不过这样做也可能会拖慢整个webpack的转译等待时间。
        // async: false
      },
    ])
  },
}
