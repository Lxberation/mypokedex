interface NavbarProps {
  setSearch: (value: string) => void;
  setFilter: (value: string) => void;
}

export default function Navbar({ setSearch, setFilter }: NavbarProps) {
  return (
    <nav className="navbar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Types</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="rock">Rock</option>
        <option value="ground">Ground</option>
        <option value="psychic">Psychic</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="bug">Bug</option>
        <option value="dragon">Dragon</option>
        <option value="fairy">Fairy</option>
        <option value="normal">Normal</option>
      </select>
    </nav>
  );
}
