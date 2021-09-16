// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

import {firestorePlugin} from 'vuefire'
Vue.use(firestorePlugin)

//import vueFire from 'vuefire';  // importacion de vue fire para firebase
//Vue.use(vueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
