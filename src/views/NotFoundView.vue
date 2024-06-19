<script setup lang="ts"></script>

<template>
  <div class="error-bg">
    <div class="content">
      <h1 class="is-size-1 has-text-white">Bancando o espertinho é?</h1>
      <p class="is-size-3 has-text-white">Não existe acesso nesta ação!</p>
    </div>
  </div>
</template>

<style scoped>
.error-bg {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(../assets/images/layout/error.jpg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.content {
  flex: 1;
}
</style>
