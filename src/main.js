import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// Style
import 'normalize.css';
import './assets/style/main.scss';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
