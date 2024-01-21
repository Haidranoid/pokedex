import React, {FC, useEffect} from "react";
import {useHistory} from "react-router-dom";
import useActions from "../../state/hooks/useActions";
import useTypedSelector from "../../state/hooks/useTypedSelector";
import Button from "../../components/button/Button";
import PokemonViewer from "../../components/pokemon-viewer/PokemonViewer";
import Pagination from "../../components/pagination/Pagination";
import {PokemonRecord} from "../../state/interfaces/pokemon";
import {
  HomeLeftContainerStyled,
  HomeRightContainerStyled,
  HomeStyled
} from "./Home.styled";

const Home: FC = () => {
  const history = useHistory()
  const {fetchPokemons, fetchSinglePokemon} = useActions()
  const {pokemons, pokemonSelected} = useTypedSelector(state => state.pokemon)

  useEffect(() => {
    fetchPokemons()
  }, [])

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>, pokemonName: string) => {
    switch (e.detail) {
      case 1:
        fetchSinglePokemon(pokemonName)
        break;

      case 2:
        history.push(`/overview/${pokemonName}`)
        break;
    }
  }

  return <HomeStyled>
    <HomeLeftContainerStyled>
      <PokemonViewer src={pokemonSelected?.sprites.front_default}/>
    </HomeLeftContainerStyled>
    <HomeRightContainerStyled>
      <Pagination
        items={pokemons}
        pageLimit={20}
      >
        {(itemsPerPage: Array<PokemonRecord>) => itemsPerPage.map(pokemon => (
          <Button
            pokemon={pokemon}
            handleOnClick={handleOnClick}/>
        ))}
      </Pagination>
    </HomeRightContainerStyled>
  </HomeStyled>
}

export default Home;
