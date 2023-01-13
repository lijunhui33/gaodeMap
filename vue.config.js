const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: "./",
  devServer: {
    port: 8100,
    proxy: {
      '/api': {
        target: 'http://api.yashaoxf.com', // target表示代理的服务器url
        // target: 'http://i8sisv.natappfree.cc',
        changeOrigin: true, //允许跨域
        pathRewrite: { // pathRewrite表示路径重写，key表示一个正则，value表示别名 
          '^/api': '' // 即用 '/api'表示'http://localhost:3000/api'
        }
      }
    }
  }
});
