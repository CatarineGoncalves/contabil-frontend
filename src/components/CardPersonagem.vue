<template>
  <div class="card-personagem">
    <img
      :src="personagem.thumbnail?.path + '.' + personagem.thumbnail?.extension"
      style="height: 200px; width: 200px; border-radius: 10px"
      :alt="personagem.name"
    />
    <p>{{ personagem.name }}</p>
    
    <!-- Envolva o botão dentro do router-link -->
    <router-link :to="{ name: 'personagem-detalhes', params: { id: personagem.id.toString() } }">
      <button>Saiba Mais</button>
    </router-link>

  </div>
</template>

<script setup lang="ts">
import type { Personagem } from "@/types/interfaceMarvel";

defineProps<{
  personagem: Personagem;
}>();
</script>


<style scope>
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
  text-align: -webkit-center;
}

p {
  font-family: "Bebas Neue", sans-serif;  
  font-weight: 600 ;
  text-transform: uppercase;
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