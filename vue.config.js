module.exports = {
  outputDir: '../../../../../../',
  devServer: {
    disableHostCheck: true,
    overlay: false, 
    port: 4000, 
    contentBase: '.',
    proxy: {
      '^/api/': {
        target: 'http://localhost:8080', // 요청할 서버 주소
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        logLevel: 'debug', // 터미널에 proxy 로그가 찍힌다. 
      }
    }
  },
  
  lintOnSave: true,
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
