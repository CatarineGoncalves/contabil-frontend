<template>
  <div class="busca-container">
    <input  v-model="termoBusca"  type="text"  placeholder="Buscar personagem..."  @keyup.enter="emitBusca"  class="input" 
    />
    <button @click="emitBusca" class="botao-busca">
      Buscar
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const termoBusca = ref("");

const emitBusca = () => {
  emit('buscar', termoBusca.value);
};

const emit = defineEmits<{
  (e: 'buscar', termo: string): void
}>();
</script>

<style scoped>
.busca-container {
  margin-top: 100px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.input {
  padding: 10px;
  width: 50%;
  border-radius: 10px;
  border: 1px #ed1d24 solid;
  font-size: 1.2rem;
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
  margin-left: 10px;
}

button:hover {
  background-color: black;
  color: #fff;
}
</style>