<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ContextComponent from '@/components/ContextComponent.vue';
import { ref } from 'vue';
import type { Newspaper } from '@/interfaces/newspaper';
import { formatDateToNewspaper, getCharacterBattle, getCharacterMini } from '@/utils/utils';
import HeaderTitleComponent from '@/components/HeaderTitleComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const newspapers = ref<Newspaper[]>([
  {
    id: 1,
    date: '6/18/2024',
    title: 'Mensagem do jornal 1',
    description: 'Descrição do jornal 1'
  },
  {
    id: 2,
    date: '6/19/2024',
    title: 'Mensagem do jornal 2',
    description: 'Descrição do jornal 2'
  },
  {
    id: 3,
    date: '6/20/2024',
    title: 'Mensagem do jornal 3',
    description: 'Descrição do jornal 3'
  },
  {
    id: 4,
    date: '6/21/2024',
    title: 'Mensagem do jornal 4',
    description: 'Descrição do jornal 4'
  },
  {
    id: 5,
    date: '6/22/2024',
    title: 'Mensagem do jornal 5',
    description: 'Descrição do jornal 5'
  }
]);
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
                <div class="newspaper-box">
                  <div
                    class="newspaper-title"
                    v-for="(newspaper, index) in newspapers"
                    :key="index"
                  >
                    <RouterLink :to="`/newspaper/${index}`">
                      <div class="newspaper-title-date">
                        {{ formatDateToNewspaper(new Date(newspaper.date)) }}
                      </div>
                      <div class="newspaper-title-title">{{ newspaper.title }}</div>
                    </RouterLink>
                  </div>
                  <div class="newspaper-title">
                    <RouterLink to="/newspaper-all">
                      <div class="newspaper-title-date">[+]</div>
                      <div class="newspaper-title-title">Ver todas notícias</div>
                    </RouterLink>
                  </div>
                </div>
                <HeaderTitleComponent title="Próximos Eventos" />
                <HeaderTitleComponent title="Season 1" />
                <div class="columns is-multiline">
                  <div
                    class="column is-one-quarter is-flex is-justify-content-center"
                    v-for="index in 14"
                    :key="index"
                  >
                    <div class="top-wanted">
                      <img :src="getCharacterBattle(4)" alt="Wanted image" />
                      <div class="name">Test</div>
                      <div class="date">1º 05/05 04:34</div>
                    </div>
                  </div>
                </div>
                <HeaderTitleComponent title="Ranking" />
                <div class="box">
                  <div class="top-organization mb-5">
                    <div class="columns is-multiline">
                      <div class="column is-4">
                        <div class="top-box" v-for="index in 3" :key="index">
                          <img :src="getCharacterMini(5)" alt="Character mini" />
                          <div class="top-position-1">1</div>
                          <div class="name">Test</div>
                          <div class="level">Nível: 999</div>
                        </div>
                      </div>
                      <div class="column is-4">
                        <div class="top-box" v-for="index in 3" :key="index">
                          <img :src="getCharacterMini(5)" alt="Character mini" />
                          <div class="top-position-1">1</div>
                          <div class="name">Test</div>
                          <div class="level">Nível: 999</div>
                        </div>
                      </div>
                      <div class="column is-4">
                        <div class="top-box" v-for="index in 3" :key="index">
                          <img :src="getCharacterMini(5)" alt="Character mini" />
                          <div class="top-position-1">1</div>
                          <div class="name">Test</div>
                          <div class="level">Nível: 999</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="top-organization top-player">
                    <div class="columns is-multiline">
                      <div class="column is-4">
                        <div class="top-box" v-for="index in 3" :key="index">
                          <img :src="getCharacterMini(5)" alt="Character mini" />
                          <div class="top-position-1">1</div>
                          <div class="name">Test</div>
                          <div class="level">Nível: 999</div>
                        </div>
                      </div>
                      <div class="column is-4">
                        <div class="top-box" v-for="index in 3" :key="index">
                          <img :src="getCharacterMini(5)" alt="Character mini" />
                          <div class="top-position-1">1</div>
                          <div class="name">Test</div>
                          <div class="level">Nível: 999</div>
                        </div>
                      </div>
                      <div class="column is-4">
                        <div class="top-box" v-for="index in 3" :key="index">
                          <img :src="getCharacterMini(5)" alt="Character mini" />
                          <div class="top-position-1">1</div>
                          <div class="name">Test</div>
                          <div class="level">Nível: 999</div>
                        </div>
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
.top-wanted {
  background: url(../assets/images/layout/top-wanted.png) no-repeat;
  width: 114px;
  height: 160px;
  position: relative;
}

.top-wanted img {
  width: 92px;
  height: 67px;
  object-fit: cover;
  position: absolute;
  top: 35px;
  left: 11px;
}

.top-wanted .name {
  font-size: 22px;
  font-family: 'Mouse Memoirs';
  color: #554125;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px #bdaa92;
  text-transform: uppercase;
  position: absolute;
  top: 105px;
  left: 11px;
  width: 92px;
  height: 27px;
  text-align: center;
}

.top-wanted .date {
  font-size: 12px;
  font-family: 'Mouse Memoirs', sans-serif;
  color: #554125;
  text-shadow: 1px 1px 1px #d3d3d3;
  position: absolute;
  top: 139px;
  left: 11px;
  width: 58px;
  height: 15px;
}

.top-organization {
  background: url(../assets/images/newspaper/top-organization.png) no-repeat;
  width: 100%;
  height: auto;
  padding: 65px 0 0 6px;
  background-size: cover;
  border-radius: 10px;
}

.top-player {
  background: url(../assets/images/newspaper/top-player.png) no-repeat;
  background-size: cover;
}

.top-box {
  width: 216px;
  height: 90px;
  box-shadow: inset 0 0 20px 0 rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin-bottom: 5px;
  position: relative;
}

.top-box img {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
  width: 75px;
  height: 75px;
  border-radius: 15px;
  object-fit: cover;
  position: absolute;
  top: 7px;
  left: 7px;
}

.top-box .top-position-1 {
  background: url(/src/assets/images/newspaper/top-1.png) no-repeat;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 7px;
  left: 7px;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
  font-size: 28px;
  font-family: 'yanone_kaffeesatzregular';
  color: #fff;
  line-height: 21px;
}

.top-position-2 {
  background: url(/src/assets/images/newspaper/top-2.png) no-repeat;
}

.top-position-3 {
  background: url(/src/assets/images/newspaper/top-3.png) no-repeat;
}

.top-box .name {
  text-shadow: 1px 0 0 #6b5e45;
  font-size: 26px;
  font-family: 'yanone_kaffeesatzregular';
  color: #fff;
  width: 110px;
  height: 29px;
  font-weight: bold;
  position: absolute;
  top: 7px;
  left: 94px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.top-box .level {
  text-shadow: 1px 0 0 #6b5e45;
  font-size: 20px;
  font-family: 'yanone_kaffeesatzregular';
  color: #fff;
  width: 110px;
  height: 29px;
  position: absolute;
  top: 37px;
  left: 94px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
