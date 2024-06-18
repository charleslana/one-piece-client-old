<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="header-title">{{ title }}</div>
</template>

<style scoped>
.header-title {
  background: url(../assets/images/layout/header-title.png) no-repeat;
  width: 100%;
  height: 53px;
  font-family: 'Trade Winds', cursive;
  color: #0369a1;
  font-size: 26px;
  font-weight: normal;
  text-shadow: 1px 1px #0369a1;
  padding: 7px 0 0 40px;
  margin: 0 0 10px 0;
}
</style>
