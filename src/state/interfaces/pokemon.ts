import {State} from './index'

interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface PokemonStats {
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
  spritesAsArray: Array<string>
  height: number
  base_experience: number
  types: Array<Type>
  abilities: Array<Ability>
  stats: Array<Stat>
}

export interface PokemonRecord {
  name: string
  url: string
}

export interface PokemonState extends State {
  pokemons: Array<PokemonRecord> | []
  pokemonSelected: PokemonStats | null
}
