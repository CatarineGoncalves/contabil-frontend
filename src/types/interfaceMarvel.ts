export interface Personagem {
  id: number; 
  name: string; 
  description: string; 
 
 
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: {
      name: string; 
    }[];
  };
}

export interface RespostaAPI {
  data: {
    results: Personagem[];
  };
}
