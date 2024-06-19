import AvatarView from '@/views/AvatarView.vue';
import HomeView from '@/views/HomeView.vue';
import NewspaperAllView from '@/views/NewspaperAllView.vue';
import NewspaperDetailsView from '@/views/NewspaperDetailsView.vue';
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
      component: HomeView,
      meta: { title: getTitle('Aventuras sem limites') }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { title: getTitle('Cadastre-se') }
    },
    {
      path: '/select-character',
      name: 'select-character',
      component: SelectCharacterView,
      meta: { title: getTitle('Criar/Selecionar personagem') }
    },
    {
      path: '/newspaper',
      name: 'newspaper',
      component: NewspaperView,
      meta: { title: getTitle('Jornal') }
    },
    {
      path: '/newspaper-all',
      name: 'newspaper-all',
      component: NewspaperAllView,
      meta: { title: getTitle('Todos os jornais') }
    },
    {
      path: '/newspaper/:id',
      name: 'newspaper-details',
      component: NewspaperDetailsView,
      meta: { title: getTitle('Detalhes do jornal') }
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: AvatarView,
      meta: { title: getTitle('Avatares') }
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: getTitle('Nada por aqui') }
    }
  ]
});

export default router;

interface RouteMeta {
  title?: string;
}

router.beforeEach((to, _from, next) => {
  const meta = to.meta as RouteMeta;
  if (meta && meta.title) {
    document.title = meta.title;
  } else {
    document.title = getTitle();
  }
  next();
});

function getTitle(title?: string): string {
  return `One Piece RPG - ${title}`;
}
