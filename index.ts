import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import '@dbetka/vue-material-icons/dist/index.css'
import materialIcons from '@dbetka/vue-material-icons';
import "~/index.less";

createApp(App).use(materialIcons).use(router).mount("#app");
