import { createApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta'
import 'tailwindcss/tailwind.css' // Import Tailwind CSS

const app = createApp(App)
app.use(createMetaManager())
app.mount('#projects')