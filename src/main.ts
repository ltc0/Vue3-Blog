import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import naive from "naive-ui";
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import SvgIcon from "@/components/SvgIcon/index.vue";
import './assets/index.postcss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import plugins from '@/plugin'
const head = createHead()

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.use(head)
app.use(naive);
app.use(createPinia())
app.use(plugins)
app.component("svg-icon", SvgIcon);
app.mount('#app')
