<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ContextComponent from '@/components/ContextComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <div class="bg">
    <div class="content">
      <div class="container">
        <HeaderComponent />
        <NavBarComponent />
        <div class="columns menu-columns">
          <div class="column is-3 mb-2">
            <MenuComponent />
          </div>
          <div class="column">
            <ContextComponent>
              <template #pd>
                <div>Conteúdo dinâmico aqui</div>
              </template>
            </ContextComponent>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
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
