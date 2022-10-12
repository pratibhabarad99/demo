import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: '226050101944-3m2596h8810cbjf89ulqiria0c06h8cu.apps.googleusercontent.com'
  })
app.mount('#app')
