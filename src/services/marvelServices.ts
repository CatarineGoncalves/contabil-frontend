import type { Personagem } from "@/types/interfaceMarvel";
import axios from "axios";

// Utilizei essa biblioteca para simular uma criptografia dos dados, mas não é tão segura quanto SHA-256
import md5 from "md5";

// Chaves de acesso para a API da Marvel
const PUBLIC_KEY = "789944b82f93a085b0a3a2223d05a064";
const PRIVATE_KEY = "79a1bc15f76a6a2a61b2376c16bb0477d9f1ffab";
const BASE_URL = "https://gateway.marvel.com/v1/public";

// Essa função que gera o hash necessário para autenticação
const geradorDeChaveHash = (timestamp: string) => {
  return md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
};


// Está função é para gerar os parâmetros de autenticação
export const obterParametroAuth = () => {
  const timestamp = new Date().getTime().toString();
  return {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: geradorDeChaveHash(timestamp),
  };
};

// Função para buscar uma lista de personagens da Marvel
export const metodoBuscarPersonagensNaAPI = async ( offset = 0, limit = 100, termo?: string) => {


  //para fazer a busca dos personagens foi usado o Record para que o params aceite qualqur chave adicional
  const params: Record<string, any> = {
    ...obterParametroAuth(),
    offset,
    limit,
  };


//  console.log(params);

  //esse aqui ira funcionar para buscar o personagem especifico.
  if (termo) {
    params.nameStartsWith = termo;
  }

  const response = await axios.get(`${BASE_URL}/characters`, { params });
  return response.data.data;
};

// Funão para o detalhamento do personagem, buscando pelo o id e desmotrando no btn saiba mais, Promise<Personagem | null> significa que ele tem uma promessa de resultado ou terá o resultado como nulo

export const metodoBuscarPersonagemPorId = async (id: string): Promise<Personagem | null> => {
  const params = obterParametroAuth();
  console.log(params)
  try {
    const response = await axios.get(`${BASE_URL}/characters/${id}`, { params });
    console.log(response)
    console.log(response.data.data)
    return response.data.data.results[0];
  } catch (error) {
    console.error("Erro ao obter personagem:", error);
    throw error;
  }
};

