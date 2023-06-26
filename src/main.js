// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootsrap from "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)
app.use(router)
app.use(bootsrap)
app.mount('#app')
