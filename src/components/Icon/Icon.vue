<template>
  <MaterialIcon :class="sizeClass" :name="props.name" :style="customStyle" />
</template>
<script setup lang="ts">
import { MaterialIcon } from "@dbetka/vue-material-icons";
import { computed } from "vue";
import { IconProps } from "~/types/icon";

const props = defineProps<IconProps>();
const sizeClass = computed(() => {
  if (props.size) {
    if (typeof props.size === "number") {
      return "dust-icon";
    } else {
      return `dust-icon dust-icon-${props.size}`;
    }
  }
  return "dust-icon";
});
const customStyle = computed(() => {
  const styles: Partial<CSSStyleDeclaration> = {};
  if (props.size) {
    if (typeof props.size === "number") {
      styles.fontSize = `${props.size}px`;
      styles.width = `${props.size}px`;
      styles.height = `${props.size}px`;
    }
  }
  if (props.color) {
    styles.color = props.color;
  }
});
</script>
<style lang="less">
.dust-icon {
  font-size: 20px;
  height: 24px;
  margin-top: 6px;
  user-select: none;
  .dust-icon-small {
    font-size: 12px;
    width: 12px;
    height: 12px;
  }
  .dust-icon-large {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
}
</style>
