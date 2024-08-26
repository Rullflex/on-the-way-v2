import { createApp } from 'vue';
import App from './App.vue';
import { createRouter } from './router';

const router = createRouter();
router.start();

const app = createApp(App);
app.use(router);
app.mount('#app');
