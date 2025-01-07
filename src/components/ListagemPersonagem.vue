<template>
  <div class="cards-container">
    <CardPersonagem 
      v-for="personagem in personagens" 
      :key="personagem.id"
      :personagem="personagem"
    />
  </div>
</template>

<script setup lang="ts">
import CardPersonagem from './CardPersonagem.vue';
import type { Personagem } from '@/types/interfaceMarvel';



defineProps<{
  personagens: Personagem[];
}>();
</script>

<style scoped>


.cards-container {
  font-family: 'Marvel', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
</style>