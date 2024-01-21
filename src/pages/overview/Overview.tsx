import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import Stat from "../../components/stat/Stat";
import StatBar from "../../components/stat-bar/StatBar";
import useActions from "../../state/hooks/useActions";
import useTypedSelector from "../../state/hooks/useTypedSelector";
import Section from "../../components/section/Section";
import useSprite from "../../hooks/use-sprite/useSprite";
import {
  OverviewSpriteContainerStyled,
  OverviewStyled
} from "./Overview.styled";

interface ParamsI {
  pokemonName: string
}

const Overview: FC = () => {
  const params = useParams<ParamsI>()
  const {fetchSinglePokemon} = useActions()
  const {pokemonSelected} = useTypedSelector(state => state.pokemon)
  const {currentSprite} = useSprite(pokemonSelected)

  useEffect(() => {
    fetchSinglePokemon(params.pokemonName)
  }, [])

  return <OverviewStyled>
    <OverviewSpriteContainerStyled>
      <img
        src={currentSprite || "https://cdn2.vectorstock.com/i/1000x1000/73/91/pokemon-logo-icon-template-vector-23237391.jpg"}
        alt="pokemon_sprite"
        width="200px"
        height="200px"/>
    </OverviewSpriteContainerStyled>
    <div>
      <div>Height: {pokemonSelected?.height}</div>
      <div>Experience: {pokemonSelected?.base_experience}</div>
      <hr/>
      <Section title="Type">
        <Stat>{pokemonSelected?.types[0].type.name}</Stat>
      </Section>
      <Section title="Abilities">
        {pokemonSelected?.abilities.map(ability => (
          <Stat>{ability.ability.name}</Stat>
        ))}
      </Section>
      <Section title="Stats">
        {pokemonSelected?.stats.map(stat => (
          <StatBar statAmount={stat.base_stat} statName={stat.stat.name}/>
        ))}
      </Section>
    </div>
  </OverviewStyled>
}

export default Overview;
