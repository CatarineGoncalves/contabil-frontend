<template>
  <div class="carregamento">
    <img :src="marvelLogo" alt="Marvel Logo" class="marvel-logo" />
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">
import marvelLogo from "../assets/img/images.png"; // Importando a imagem
</script>

<style scoped>
.carregamento {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
}

.marvel-logo {
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in-out;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #da2626;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
