<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ContextComponent from '@/components/ContextComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderTitleComponent from '@/components/HeaderTitleComponent.vue';
import { getCharacterStatus } from '@/utils/utils';
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
                <HeaderTitleComponent title="Escolha um Avatar" />
                <div class="avatar-bg">
                  <p>Selecione seu novo avatar</p>
                  <div class="columns is-multiline">
                    <div class="column is-4" v-for="index in 10" :key="index">
                      <div
                        class="is-relative is-clickable"
                        :class="{ 'avatar-opacity': index !== 1 }"
                      >
                        <img :src="getCharacterStatus(2, 1)" alt="Avatar image" />
                        <div class="avatar-vip">VIP</div>
                      </div>
                    </div>
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
.avatar-bg {
  background: url(../assets/images/layout/black-pattern.png) repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 0 20px;
}

.avatar-bg:before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 39px;
  background-image: url('../assets/images/layout/pattern-select-top.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -9px;
}

.avatar-bg:after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 39px;
  background-image: url('../assets/images/layout/pattern-select-bottom.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: -16px;
}

.avatar-bg p {
  font-family: 'yanone_kaffeesatzregular';
  font-size: 30px;
  color: #c7c7c7;
  text-shadow: 1px 1px #000;
  text-align: center;
  margin-bottom: 10px;
}

.avatar-bg img {
  width: 177px;
  border-radius: 4px;
}

.avatar-opacity {
  opacity: 0.7;
}

.avatar-vip {
  pointer-events: none;
  color: #fff;
  font:
    24px Helvetica,
    Sans-Serif;
  letter-spacing: -1px;
  background: rgba(0, 0, 0, 0.7);
  padding: 4px 0 2px;
  position: absolute;
  top: 216px;
  left: 2px;
  width: 173px;
  text-align: center;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>
