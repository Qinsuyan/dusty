<template>
  <nav class="dust-navigator">
    <div class="dust-navigator-left"></div>
    <div class="dust-navigator-right">
      <NavigatorItem
        v-for="item in props.items"
        :key="item.label"
        v-bind="item"
      />
    </div>
  </nav>
</template>
<script setup lang="ts">
import NavigatorItem from "./NavigatorItem.vue";
import { NavigatorProps } from "~/types/navigator";

const props = defineProps<NavigatorProps>();
</script>
<style lang="less">
.dust-navigator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 35px;
  padding: 0 10px;
  background-color: var(--color_main);
  box-shadow: var(--shadow_main);
  .dust-navigator-right,
  .dust-navigator-left {
    display: flex;
    align-items: center;
    height:25px;
  }
  .dust-navigator-right {
    column-gap: 1.5em;
  }
}
</style>
