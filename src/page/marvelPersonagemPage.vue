<template>
  <div class="container">
    <Carregamento v-if="carregando" />

    <template v-else>
      <BuscaInput @buscar="carregarPersonagens" />
      
      <ListagemPersonagem  :personagens="personagens" @saiba-mais="abrirDialog"  />
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

const abrirDialog = (personagem: Personagem) => {
  console.log('Abrir dialog para:', personagem);
};

onMounted(() => {
  carregarPersonagens();
});
</script>
