<template>
  <div class="card-personagem">
    <img
      :src="personagem.thumbnail?.path + '.' + personagem.thumbnail?.extension"
      style="height: 200px; width: 200px; border-radius: 10px"
      :alt="personagem.name"
    />
    <p>{{ personagem.name }}</p>
    <button @click="irParaDetalhes(personagem.id)">Saiba Mais</button>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

import type { Personagem } from "@/types/interfaceMarvel";

defineProps<{
  personagem: Personagem
}>();

const irParaDetalhes = (id: number) => {
  console.log(id)
  router.push({ name: 'personagem', params: { id } });
};


</script>

<style scoped>
.card-personagem {
  height: 300px;
  width: 230px;
  background-color: #fff;
  margin: 10px;
  display: flex;
  color: #000;
  font-weight: 600;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
}

button  {
  width: 180px;
  height: 40px;
  cursor: pointer;
  background:  #e91b1b;
  border-radius: 10px;
  font-weight: 500;
  border: none;
  font-size: 1.5rem;
  padding: 5px;
  color: aliceblue;
}

button:hover {
  background-color: black;
  color: #fff;
}
</style>