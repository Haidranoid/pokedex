import React, {FC} from 'react'
import {
  PokemonImageContainerStyled,
  PokemonLogoContainerStyled,
  PokemonViewerStyled
} from "./PokemonViewer.styled";

interface PokemonViewerProps {
  src?: string
}

const PokemonViewer: FC<PokemonViewerProps> = ({src}) => {
  return <PokemonViewerStyled>
    <PokemonLogoContainerStyled>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
        alt="pokemon-logo"
        width="100%"
        height="100%"
      />
    </PokemonLogoContainerStyled>
    <PokemonImageContainerStyled>
      <img
        src={src || "https://cdn2.vectorstock.com/i/1000x1000/73/91/pokemon-logo-icon-template-vector-23237391.jpg"}
        alt="pokemon-image"
        width="100%"
        height="100%"
      />
    </PokemonImageContainerStyled>
  </PokemonViewerStyled>
}

export default PokemonViewer
