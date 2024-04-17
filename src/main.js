import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueMeta from 'vue-meta'

const app = createApp(App)
app.use(VueMeta)
app.mount('#projects')
