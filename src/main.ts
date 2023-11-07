import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import './permission'
import '@/assets/styles/main.scss'

const app = createApp(App)
const modules: any = import.meta.glob('./modules/*.ts', { eager: true })
Object.values(modules).forEach((i: any) => {
  app.use(i)
})
app.mount('#app')
