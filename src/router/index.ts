import HomeView from '@/views/HomeView.vue';
import NewspaperView from '@/views/NewspaperView.vue';
import RegisterView from '@/views/RegisterView.vue';
import SelectCharacterView from '@/views/SelectCharacterView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/select-character',
      name: 'select-character',
      component: SelectCharacterView
    },
    {
      path: '/newspaper',
      name: 'newspaper',
      component: NewspaperView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
});

export default router;
