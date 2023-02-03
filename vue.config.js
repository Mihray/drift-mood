// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
      proxy: {
          '/': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
            ws:false,
            target: "http://111.229.176.245:7001", //目标地址，一般是指后台服务器地址
            changeOrigin: true, //是否跨域
          },
      },
  }
}