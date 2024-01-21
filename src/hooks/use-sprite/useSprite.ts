import {useEffect, useState} from "react";
import {PokemonStats} from "../../state/interfaces/pokemon";

const useSprite = (pokemon: PokemonStats | null) => {
  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0)
  const [currentSpriteElement, setCurrentSpriteElement] = useState("")

  // allows to change sprite every 1 seg
  useEffect(() => {
    let interval: NodeJS.Timer;

    if (pokemon) {
      interval = setInterval(() => {
        setCurrentSpriteIndex(prevState => prevState + 1)
      }, 1000)
    }

    return () => {
      if (interval)
        clearInterval(interval)
    }
  }, [pokemon])

  useEffect(() => {
    if (pokemon) {
      setCurrentSpriteElement(pokemon.spritesAsArray[currentSpriteIndex % pokemon.spritesAsArray.length])
    }
  }, [currentSpriteIndex])

  return {
    currentSprite: currentSpriteElement
  }
}

export default useSprite
