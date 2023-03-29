import { App } from 'vue'

import VueMarkdownEditor from './mdEditor'

const pluginList = [
    VueMarkdownEditor
]
const plugins = {
    install (app: App<Element>) {
        // 批量注册插件  改用自动引入
        Object.entries(pluginList).forEach(([, v]) => {
            app.use(v)
        })
    }
}

export default plugins