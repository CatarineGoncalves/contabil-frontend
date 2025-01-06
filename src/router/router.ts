import { createRouter, createWebHistory } from 'vue-router';
import ListagemPersonagem from '@/components/ListagemPersonagem.vue';
import DetalhesPersonagem from '@/components/DetalhesPersonagem.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListagemPersonagem,
  },
  {
    path: '/personagem/:id',
    name: 'personagem',
    component: DetalhesPersonagem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
