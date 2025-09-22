<template>
  <Navigator :items="navItems" />
</template>
<script setup lang="ts">
import Navigator from "~/Navigator/Navigator.vue";
import { NavigatorItemProps } from "~/types/navigator";

const navItems: NavigatorItemProps[] = [
  {
    label: "主页",
    icon: "home",
  },
  {
    label: "组件",
    icon: "grid_view",
  },
];
</script>
