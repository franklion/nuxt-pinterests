module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-pinterests',
    meta: [{
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project',
    },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    }, {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
    }],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.min.js' },
      { src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js' },
      { src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.js' },
      { src: 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js' }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070',
  },
  plugins: [{
    src: '~/plugins/vue-masonry',
    ssr: false
  }],
  router: {
    // base: '/iprefer/labs/frank/nuxt-pinterests/',
    // mode: 'hash'
  },
  /*
   ** Build configuration
   */
  build: {

    // publicPath: 'http://thor.iprefer.com.tw/iprefer/labs/frank/nuxt-pinterests/'

    /*
     ** Run ESLINT on save
     */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
}
