<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
</script>

<template>
  <div class="bg">
    <div class="content">
      <div class="container">
        <HeaderComponent />
        <NavBarComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url(../assets/images/layout/grain.png),
    url(../assets/images/layout/background.png),
    linear-gradient(
      180deg,
      rgba(15, 23, 42, 1) 0%,
      rgba(30, 41, 59, 1) 35%,
      rgba(51, 65, 85, 1) 100%
    );
  background-repeat: repeat, no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
