import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// allows us to specify just the endpoints when we use axios across our 
// vue app (ie axios.get('/api/v1/products/') vs axios.get('localhost:port/api/v1/products'))
axios.defaults.baseURL = 'http://127.0.0.1:8000'

// use() allows us to install a vue plugin
createApp(App).use(store).use(router, axios).mount('#app')
