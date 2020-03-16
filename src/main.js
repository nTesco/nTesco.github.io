import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { List, Image, Field, Cell, CellGroup, Form, Toast, Overlay } from 'vant'

import { Popup, Button, Col, Row, NavBar } from '@nutui/nutui'

Vue.use(List)

Vue.use(Overlay)

Popup.install(Vue)
Button.install(Vue)
Col.install(Vue)
Row.install(Vue)
NavBar.install(Vue)

Vue.config.productionTip = false
Vue.use(Image)
Vue.use(Field)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Form)
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
