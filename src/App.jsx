import { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import "./App.css";
import axios from "axios";
import CharactersGrid from "./components/characters/CharactersGrid";
import Search from "./components/ui/Search";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const cors = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchCharacters = async () => {
      const results = await axios.get(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setCharacters(results.data);
      setIsLoading(false);
      console.log(results.data);
    };

    fetchCharacters();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
