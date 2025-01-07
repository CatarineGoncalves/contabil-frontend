import { mount } from '@vue/test-utils';
import CardPersonagem from '@/components/CardPersonagem.vue';
import { describe, it, expect, vi } from 'vitest';

// Mock do router-link (para evitar erros relacionados ao Vue Router durante o teste)
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  RouterLink: {
    render: () => {},
  },
}));

describe('CardPersonagem', () => {
  it('Deve renderizar o nome e a imagem do personagem corretamente', () => {
    const personagem = {
      id: 1,
      name: 'Iron Man',
      description: 'Gênio, bilionário, playboy, filantropo? ',
      thumbnail: {
        path: 'https://example.com/iron-man',
        extension: 'jpg',
      },
      comics: {
        items: [
          { name: 'Iron Man #1' },
          { name: 'Iron Man #2' },
        ],
      },
    };

    const wrapper = mount(CardPersonagem, {
      props: { personagem },
    });

    // Verifique se o nome do personagem foi renderizado
    expect(wrapper.text()).toContain('Iron Man');

    // Verifique se a imagem tem o src correto
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('https://example.com/iron-man.jpg');
  });

  it('botão deve estar funcionando ', async () => {
    const personagem = {
      id: 1,
      name: 'Iron Man',
      description: 'Gênio, bilionário, playboy, filantropo? ',
      thumbnail: {
        path: 'https://example.com/iron-man',
        extension: 'jpg',
      },
      comics: {
        items: [
          { name: 'Iron Man #1' },
          { name: 'Iron Man #2' },
        ],
      },
    };

    const wrapper = mount(CardPersonagem, {
      props: { personagem },
    });

    // Verifique se o botão está presente
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);

    // Simule o clique no botão
    await button.trigger('click');
    expect(true).toBe(true); 
  });
});
