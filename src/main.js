import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';

import CardBase from './components/UI/CardBase.vue';
import CoachBase from './components/UI/CoachBase.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';

const app = createApp(App)

app.component('base-spinner', BaseSpinner);
app.component('card-base', CardBase);
app.component('coach-base', CoachBase);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.use(router);
app.use(store);

app.mount('#app')
