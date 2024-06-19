<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ContextComponent from '@/components/ContextComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { formatDate } from '@/utils/utils';
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
                <div class="newspaper-details-bg">
                  <div class="newspaper-details-box">
                    <h3>Título do jornal</h3>
                    <p>Mensagem do jornal</p>
                    <span
                      >Anunciado pelo <b>Governo Mundial</b> em {{ formatDate(new Date()) }}.</span
                    >
                  </div>
                </div>
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
.newspaper-details-bg {
  background: url(../assets/images/newspaper/background.jpg) no-repeat;
  width: 100%;
  min-height: 506px;
  background-size: cover;
}

.newspaper-details-box {
  padding: 10px;
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 4px;
  box-shadow: 0px 0px 1px 1px #cccccc;
  font-size: 13px;
}

.newspaper-details-box h3 {
  font-family:
    Mouse Memoirs,
    sans-serif;
  font-size: 32px;
  margin-left: 15px;
}

.newspaper-details-box span {
  font-size: 12px;
}

.newspaper-details-box span:before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 6px;
  background-image: url('../assets/images/icons/sword.png');
  background-size: cover;
  background-repeat: no-repeat;
  vertical-align: middle;
}
</style>
