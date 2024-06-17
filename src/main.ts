import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Tooltip, vTooltip } from 'floating-vue';
import './assets/main.css';
import 'bulma/css/bulma.css';
import 'animate.css';
import 'floating-vue/dist/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive('tooltip', vTooltip);
app.component('VTooltip', Tooltip);

app.mount('#app');
