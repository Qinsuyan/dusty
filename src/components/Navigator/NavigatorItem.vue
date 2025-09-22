<template>
  <div class="dust-navigator-item">
    <span class="dust-navigator-item-icon">
      <Icon v-if="props.icon" :name="props.icon" />
      <template v-if="props.iconRender">{{ props.iconRender }}</template>
    </span>
    <span class="dust-navigator-item-label">
      {{ props.label }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { NavigatorItemProps } from "~/types/navigator";
import { Icon } from "~/Icon";
const props = defineProps<NavigatorItemProps>();
</script>
<style lang="less">
.dust-navigator-item {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  height: 100%;
  border-radius: var(--radius_main);
  color: var(--color_text_reverse);
  transition: all 50ms ease-in-out;
  .dust-navigator-item-icon,
  .dust-navigator-item-label {
    padding-right: 4px;
  }
  &:hover {
    background-color: var(--color_main_light);
    color: var(--color_text_main);
  }
}
</style>
