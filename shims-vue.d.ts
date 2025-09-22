declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // 保留泛型默认值，让 TypeScript 自动推导组件类型
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}
