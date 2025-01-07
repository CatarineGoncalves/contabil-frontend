import { createRouter, createWebHistory } from 'vue-router';
import DetalhesPersonagem from '@/components/DetalhesPersonagem.vue';
import MarvelPersonagemPage from '@/page/marvelPersonagemPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MarvelPersonagemPage,
  },
  {
    path: '/personagem/:id',
    name: 'personagem-detalhes',
    component: DetalhesPersonagem,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
