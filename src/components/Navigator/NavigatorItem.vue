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
import { computed } from "vue";
const props = defineProps<NavigatorItemProps>();
</script>
<style lang="less">
.dust-navigator-item {
}
</style>
