import React, {FC} from "react";
import {PokemonRecord} from "../../state/interfaces/pokemon";
import {ButtonStyled} from "./Button.styled";

interface ButtonProps {
  pokemon: PokemonRecord

  handleOnClick(e: React.MouseEvent<HTMLButtonElement>, pokemonName: string): void
}

const Button: FC<ButtonProps> = (props) => {
  const {pokemon, handleOnClick} = props

  return <ButtonStyled
    onClick={e => handleOnClick(e, pokemon.name)}
  >
    {pokemon.name}
  </ButtonStyled>
}


export default Button
