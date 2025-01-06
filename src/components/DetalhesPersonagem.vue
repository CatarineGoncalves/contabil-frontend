

<template>
  <div class="detalhes-personagem">
    <router-link to="/" class="botao-voltar">← Voltar para Lista</router-link>
    
    <CarregandoSpinner v-if="carregando" />
    <div v-else-if="erro" class="erro">{{ erro }}</div>
    <div v-else-if="personagem" class="info-personagem">
      <img 
        :src="`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`" 
        :alt="personagem.name"
      >
      <div class="info">
        <h1>{{ personagem.name }}</h1>
        <p>{{ personagem.description || 'Nenhuma descrição disponível.' }}</p>
        
        <h2>Quadrinhos</h2>
        <ul v-if="personagem.comics.items.length">
          <li v-for="comic in personagem.comics.items" :key="comic.name">
            {{ comic.name }}
          </li>
        </ul>
        <p v-else>Nenhum quadrinho disponível.</p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { metodoBuscarPersonagemPorId } from './../services/marvelServices';
import type { Personagem } from '@/types/interfaceMarvel';

const route = useRoute();
const personagem = ref<Personagem | null>(null);
const carregando = ref(true);
const erro = ref('');

onMounted(() => {
    metodoDetalhamentoPersonagem();
});


const metodoDetalhamentoPersonagem = async () => {
  try {
    const id = route.params.id as string;
    const resultado = await metodoBuscarPersonagemPorId(id);

    if (resultado) {
      personagem.value = resultado;
    } else {
      erro.value = 'Personagem não encontrado';
    }
  } catch (e) {
    erro.value = 'Detales não encontrado';
  } finally {
    carregando.value = false;
  }
}


</script>


<style scoped>
.detalhes-personagem {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.botao-voltar {
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #e40b0b;
}

.info-personagem {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

.info-personagem img {
  width: 100%;
  border-radius: 8px;
}

.info h1 {
  margin-top: 0;
}

.erro {
  color: #dc2626;
  text-align: center;
  padding: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px 0;
}
</style>