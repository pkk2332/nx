const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // ,
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      // }
    ],
    //     script: [
    //   {
    //     src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    //     type: "text/javascript"
    //   },
    //   {
    //     src:
    //       "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    //     type: "text/javascript"
    //   },
    //   {
    //     src:
    //       "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    //     type: "text/javascript"
    //   }
    // ]

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: 'blue',
    height: '6px'
  },

  /*
  ** Global CSS
  */

  css: [
   'vue2-animate/dist/vue2-animate.min.css',
   './node_modules/bootstrap/dist/css/bootstrap.css'
  ],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  {src:'~/plugins/scroll', ssr : false},
{src:'~plugins/bootstrap.js', ssr:false}
  ],

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
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extractCSS:true,
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
         
}
    

  
}
