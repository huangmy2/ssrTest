export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ssr_demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/common.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
      '@nuxtjs/axios'
  ],
  
  axios: {
    proxy: true,
    credentials: true
  },
  
  
  proxy: {
    '/api/': {
      // 设置不同环境地址
      target: process.env.NODE_ENV == "production"
      ? "https://sport-data.dongqiudi.com/"
      : "https://beta-sport-data.dongqiudi.com/",
      pathRewrite: {
         '^/api/': '/',
         changeOrigin: true
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}
