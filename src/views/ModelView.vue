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

<style scoped></style>
