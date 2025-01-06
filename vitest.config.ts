import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Configura o ambiente de teste para simular o navegador
    globals: true,         // Permite o uso das funções globais como `describe`, `it`, etc.
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configuração do alias para o diretório `src`
    },
  },
})
