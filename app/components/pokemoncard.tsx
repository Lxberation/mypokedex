import { Pokemon } from "./types/pokemon";

interface CardProps {
  pokemon: Pokemon;
  colors: Record<string, string>;
  mainTypes: string[];
}

export default function PokemonCard({ pokemon, colors, mainTypes }: CardProps) {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  const pokeTypes = pokemon.types.map((t) => t.type.name);
  const type = mainTypes.find((t) => pokeTypes.includes(t)) || "normal";
  const color = colors[type];

  return (
    <div className="pokemon" style={{ backgroundColor: color }}>
      <div className="img-container">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={name}
        />
      </div>

      <div className="info">
        <span className="number">#{id}</span>
        <h3 className="name">{name}</h3>
        <small className="type">
          Type: <span>{type}</span>
        </small>
      </div>
    </div>
  );
}
