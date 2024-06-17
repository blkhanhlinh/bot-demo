import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.scss'
import VueShowdownPlugin from 'vue-showdown'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

app.use(
  VueShowdownPlugin, {
    flavor: 'github',
    options: {
      emoji: true,
      ghCodeBlocks: true,
      ellipsis: true,
      encodeEmails: true,
    }
  }
)

app.mount('#app')