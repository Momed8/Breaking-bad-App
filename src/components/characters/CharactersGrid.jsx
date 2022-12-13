import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharactersGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {characters.map(character => (
        <CharacterItem key={character.char_id} character={character} />
      ))}
    </section>
  );
};

export default CharactersGrid;
