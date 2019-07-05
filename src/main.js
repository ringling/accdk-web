// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/main.scss'
import '~/assets/css/font-awesome.min.css'

// import '~/assets/js/breakpoints.min.js'
// import '~/assets/js/browser.min.js'
import '~/assets/js/jquery.min.js'
import '~/assets/js/jquery.dropotron.min.js'
import '~/assets/js/jquery.scrollex.min.js'
import '~/assets/js/util.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

}
