import { createSSRApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta'
import 'tailwindcss/tailwind.css' // Import Tailwind CSS

const app = createSSRApp(App)
app.use(createMetaManager())
app.mount('#projects')