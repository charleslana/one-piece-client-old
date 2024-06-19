<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ContextComponent from '@/components/ContextComponent.vue';
import { ref } from 'vue';
import type { Newspaper } from '@/interfaces/newspaper';
import FooterComponent from '@/components/FooterComponent.vue';
import { formatDateToNewspaper } from '@/utils/utils';

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
  },
  {
    id: 6,
    date: '6/23/2024',
    title: 'Mensagem do jornal 6',
    description: 'Descrição do jornal 6'
  },
  {
    id: 7,
    date: '6/24/2024',
    title: 'Mensagem do jornal 7',
    description: 'Descrição do jornal 7'
  },
  {
    id: 8,
    date: '6/25/2024',
    title: 'Mensagem do jornal 8',
    description: 'Descrição do jornal 8'
  },
  {
    id: 9,
    date: '6/26/2024',
    title: 'Mensagem do jornal 9',
    description: 'Descrição do jornal 9'
  },
  {
    id: 10,
    date: '6/27/2024',
    title: 'Mensagem do jornal 10',
    description: 'Descrição do jornal 10'
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
                    <RouterLink to="/newspaper">
                      <div class="newspaper-title-date">
                        {{ formatDateToNewspaper(new Date(newspaper.date)) }}
                      </div>
                      <div class="newspaper-title-title">{{ newspaper.title }}</div>
                    </RouterLink>
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

<style scoped></style>
