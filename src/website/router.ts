import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("@/pages/Home/index.vue") },
  { path: "/components", component: () => import("@/pages/Comps/index.vue") },
  { path: "/:pathMatch(.*)*", component: () => import("@/pages/404.vue") },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
