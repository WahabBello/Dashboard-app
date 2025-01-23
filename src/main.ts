/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'
import router from './router';
import vuetify from './plugins/vuetify';
import VueApexCharts from "vue3-apexcharts";
// Components

// Composables

const app = createApp(App)
app.use(router);
app.use(vuetify);
app.use(VueApexCharts);

app.component("ApexChart", VueApexCharts);
registerPlugins(app)

app.mount('#app')
