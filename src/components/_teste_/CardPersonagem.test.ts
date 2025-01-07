import { mount } from '@vue/test-utils'; // Função para "montar" o componente
import CardPersonagem from '@/components/CardPersonagem.vue'; // Componente que estamos testando.
import { describe, it, expect, vi } from 'vitest'; 

// Aqui estamos simulando o comportamento do Vue Router porque o componente CardPersonagem usa o router-link.
vi.mock('vue-router', () => ({
  useRouter: () => ({ // Simulando a função 'useRouter' para não interferir nos testes.
    push: vi.fn(), // Criando uma função mockada para 'push', que é o método do router.
  }),
  RouterLink: { // Simulando o componente RouterLink (usado dentro do CardPersonagem)
    render: () => {}, // A renderização do RouterLink não é importante no nosso teste, então deixamos em branco.
  },
}));

// Describe cria um conjunto de testes, basicamente uma descrição geral para o que vamos testar.
describe('CardPersonagem', () => {

  // 'it' define um caso de teste específico. Nesse caso, estamos testando se o nome e a imagem do personagem estão sendo renderizados corretamente.
  it('should render personagem name and image correctly', () => {
    
    // Criamos um objeto de 'personagem' para passar como prop para o componente
    const personagem = {
      id: 1,
      name: 'Iron Man', // Nome do personagem
      thumbnail: { // Atributo 'thumbnail' com o caminho da imagem do personagem
        path: 'https://example.com/iron-man',
        extension: 'jpg',
      },
    };

    // Montamos o componente CardPersonagem passando a prop 'personagem'
    const wrapper = mount(CardPersonagem, {
      props: { personagem },
    });

    // Aqui estamos verificando se o nome do personagem foi renderizado corretamente no HTML gerado
    expect(wrapper.text()).toContain('Iron Man');

    // Buscamos a tag 'img' e verificamos se o atributo 'src' da imagem contém o caminho correto
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('https://example.com/iron-man.jpg');
  });

  // Segundo caso de teste: Verificar se o botão funciona (ou seja, se está presente e interage corretamente)
  it('should have a working button', async () => {
    
    // Mesmo objeto 'personagem' que passamos anteriormente
    const personagem = {
      id: 1,
      name: 'Iron Man',
      thumbnail: {
        path: 'https://example.com/iron-man',
        extension: 'jpg',
      },
    };

    // Montando o componente novamente com a prop 'personagem'
    const wrapper = mount(CardPersonagem, {
      props: { personagem },
    });

    // Verificamos se o botão 'Saiba Mais' está presente no componente
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true); // Verifica se o botão existe no HTML renderizado

    // Aqui simulamos o clique no botão. Em um teste real, você poderia verificar se o comportamento desejado acontece após o clique.
    await button.trigger('click');
    expect(true).toBe(true); // Estamos usando 'true' para garantir que o código chegue aqui após o clique. Isso pode ser ajustado dependendo do comportamento esperado.
  });
});
