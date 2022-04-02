import { createApp, ref } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/main.scss'
import lang from './lang'
import 'particles.js'
import { clickOutside } from './directives/mydirectives.js'
import './plugins/algoliasearch'

const app = createApp(App)

function changeLanguage (langType) {
    app.config.globalProperties.$language.value = langType
    app.config.globalProperties.$t = (key) => {
        const langType = app.config.globalProperties.$language.value
        return lang[langType] ? lang[langType][key] : lang['VN'][key]
    }
}
app.config.globalProperties.$language = ref('VN')
changeLanguage('VN')
app.config.globalProperties.$showModal = ref(false)

app.directive("click-outside", clickOutside)
app.use(store).use(router).mount('#app')
