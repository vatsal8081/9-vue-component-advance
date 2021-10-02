import { createApp } from 'vue';

import App from './App.vue';

import CardWrapper from './components/slots/CardWrapper.vue';
import userCardWrapper from './components/slots/UserCardWrapper.vue';

const app = createApp(App);

app.component('cardWrapper', CardWrapper)
app.component('userCardWrapper', userCardWrapper)


app.mount('#app');
