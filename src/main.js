import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Services from "./pages/Services.vue";
import Contactanos from "./pages/Contactanos.vue";
import Mas from "./pages/Mas.vue";
import btnServi from "./pages/Contactanos.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/services", component: Services },
  { path: "/Contactanos", component: Contactanos },
  { path: "/Mas", component: Mas },
  { path: "/services", component:btnServi},
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
