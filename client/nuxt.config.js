const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "LonelyRail",
    meta: [
      { charset: 'utf-8' },
      { name: 'renderer', content: 'webkit' },
      { name: 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bulma@0.6.0/css/bulma.min.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '@/assets/css/global.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   '@/plugins/element-ui'
  // ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/api/': 'http://localhost:3030/'
  },

  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    //publicPath: "https://static.lonelyrail.com/_nuxt",
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  dev: true
}
