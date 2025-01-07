<template>
  <div class="container">
    
    <Carregamento v-if="carregando" />
    
    <template v-else>
      <img style="display:flex; justify-self:center; margin-top: 4em" :src="MarvelLogo" alt="logo da marvel">
      <BuscaInput @buscar="carregarPersonagens" />
      
      <ListagemPersonagem  :personagens="personagens" @saiba-mais="irParaDetalhes"  />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { metodoBuscarPersonagensNaAPI } from "@/services/marvelServices";
import BuscaInput from "@/components/BuscarPersonagem.vue";
import ListagemPersonagem from "@/components/ListagemPersonagem.vue";
import Carregamento from "@/components/Carregamento.vue";
import type { Personagem } from "@/types/interfaceMarvel";
import {  useRouter } from 'vue-router';
import MarvelLogo from '@/assets/img/images.png'
const router = useRouter();

const irParaDetalhes = (id: number) => {
  router.push({ name: 'personagem-detalhes', params: { id: id.toString() } });
};



const personagens = ref<Personagem[]>([]);
const carregando = ref(true);

const carregarPersonagens = async (busca?: string) => {
  carregando.value = true;
  try {
    const data = await metodoBuscarPersonagensNaAPI(0, 100, busca);
    personagens.value = data.results;
  } catch (error) {
    console.error("Erro ao carregar personagens:", error);
  } finally {
    carregando.value = false;
  }
};


onMounted(() => {
  carregarPersonagens();
});
</script>
