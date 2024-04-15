import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueMeta from 'vue-meta'

createApp.use(VueMeta).mount('#app')


createApp(App).mount('#projects')