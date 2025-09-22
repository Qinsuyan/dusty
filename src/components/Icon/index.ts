import { App } from "vue";
import Icon from "./Icon.vue";
export { Icon };
export default {
  install(app: App) {
    app.component("dust-icon", Icon);
  },
};
