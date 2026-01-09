"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import PokemonCard from "./components/pokemoncard";
import { Pokemon } from "./components/types/pokemon";

export default function Home() {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const pokemonCount = 150;

  const colors: Record<string, string> = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };

  const mainTypes = Object.keys(colors);

  useEffect(() => {
    const fetchPokemons = async () => {
      const list: Pokemon[] = [];

      for (let i = 1; i <= pokemonCount; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data: Pokemon = await res.json();
        list.push(data);
      }

      setAllPokemon(list);
    };

    fetchPokemons();
  }, []);

  const filtered = allPokemon.filter((p) => {
    const nameMatch = p.name.includes(search.toLowerCase());
    const typeMatch =
      filter === "all" || p.types.some((t) => t.type.name === filter);
    return nameMatch && typeMatch;
  });

  return (
    <main>
      <Navbar setSearch={setSearch} setFilter={setFilter} />

      <h1>Pokedex</h1>

      <div className="poke-container">
        {filtered.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            colors={colors}
            mainTypes={mainTypes}
          />
        ))}
      </div>
    </main>
  );
}
