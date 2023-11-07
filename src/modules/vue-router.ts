import type { App } from 'vue'
import router from '@/router/index'

export function install(app: App) {
  app.use(router)
}
