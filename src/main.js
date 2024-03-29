import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routers'
import 'virtual:windi.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// register all the element-pluss icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
app.mount('#app')
