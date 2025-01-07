
# Marvel Vue Project

Este é um projeto desenvolvido com Vue.js para consumir a API da Marvel e exibir informações sobre os personagens, incluindo nome, descrição, quadrinhos e uma imagem. O projeto usa o Vue Router para navegação entre páginas e o Vitest para testes.

## Estrutura de Diretórios

- **src**  
  Contém os arquivos principais da aplicação.
  - **assets**  
    Contém a imagem do logo da Marvel.
  - **components**  
    Componentes reutilizáveis da aplicação.
      - **Carregamento.vue**  
        Exibe um spinner de carregamento enquanto os dados estão sendo carregados.
      - **CardPersonagem.vue**  
        Exibe um cartão com as informações do personagem.
      - **BuscaPersonagem.vue**  
        Componente de input para buscar personagens.
      - **ListagemPersonagem.vue**  
        Exibe a lista de personagens.
  - **config**  
    Contém a configuração da API da Marvel.
      - **marvelConfig.ts**  
        Contém as chaves da API e a URL base.
  - **pages**  
    Contém a página principal e outras páginas da aplicação.
      - **MarvelPage.vue**  
        Página principal da aplicação que exibe a lista de personagens e busca.
  - **routes**  
    Contém as rotas da aplicação.
      - **index.ts**  
        Configuração das rotas usando o Vue Router.

- **tests**  
  Contém os testes da aplicação.
  - **CardPersonagem.test.ts**  
    Teste unitário do componente `CardPersonagem`.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto:
   ```bash
   npm run dev
   ```

4. O projeto estará rodando em `http://localhost:3000`.

## Como Testar

1. Para rodar os testes, execute o seguinte comando:
   ```bash
   npm run test
   ```

## Configurações da API da Marvel

A configuração da API Marvel está armazenada em `src/config/marvelConfig.ts`. As chaves de acesso são as seguintes:

```ts
export const Marvel_Config = {
  PUBLIC_KEY: '789944b82f93a085b0a3a2223d05a064',
  PRIVATE_KEY: '79a1bc15f76a6a2a61b2376c16bb0477d9f1ffa',
  BASE_URL: 'https://gateway.marvel.com/v1/public'
};
```

## Tecnologias Utilizadas

- Vue 3
- Vue Router
- Vitest (Testes)
- Axios (Requisições HTTP)
- CSS Vanilla
- API Marvel

## Componente de Personagem

### CardPersonagem.vue

Este componente exibe as informações de um personagem, incluindo a imagem, nome e um botão que redireciona para a página de detalhes.

```vue
<template>
  <div class="card-personagem">
    <img
      :src="personagem.thumbnail?.path + '.' + personagem.thumbnail?.extension"
      style="height: 200px; width: 200px; border-radius: 10px"
      :alt="personagem.name"
    />
    <p>{{ personagem.name }}</p>
    <router-link :to="{ name: 'personagem-detalhes', params: { id: personagem.id.toString() } }">
      <button>Saiba Mais</button>
    </router-link>
  </div>
</template>
```

---

## Testes

Os testes estão localizados na pasta `tests` e utilizam o Vitest.

Exemplo de teste para o componente `CardPersonagem`:

```ts
import { mount } from '@vue/test-utils';
import CardPersonagem from '@/components/CardPersonagem.vue';
import { describe, it, expect, vi } from 'vitest';

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  RouterLink: {
    render: () => {},
  },
}));

describe('CardPersonagem', () => {
  it('should render personagem name and image correctly', () => {
    const personagem = {
      id: 1,
      name: 'Iron Man',
      thumbnail: {
        path: 'https://example.com/iron-man',
        extension: 'jpg',
      },
    };

    const wrapper = mount(CardPersonagem, {
      props: { personagem },
    });

    expect(wrapper.text()).toContain('Iron Man');
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('https://example.com/iron-man.jpg');
  });
});
```

---

## Estilos

Os estilos utilizados são baseados em **CSS Vanilla**. Para a personalização da aparência, você pode ajustar os estilos diretamente nos arquivos `.vue` ou em arquivos CSS globais.

```css
/* Global */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4 {
  color: #333;
  font-weight: 600;
  margin-bottom: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #e91b1b;
}

h2 {
  margin-top: 20px;
  font-size: 1.8rem;
  color: #444;
}

h3 {
  font-size: 1.5rem;
  color: #555;
}

code {
  font-family: 'Courier New', Courier, monospace;
}
```

---

Espero que este arquivo ajude a documentar o seu projeto de forma clara e eficaz! Com isso, você tem uma visão geral das funcionalidades e estrutura do seu código.

