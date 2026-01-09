export interface PokemonType {
  type: { name: string };
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
}
