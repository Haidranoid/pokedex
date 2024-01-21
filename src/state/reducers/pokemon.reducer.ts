import {produce} from 'immer'
import {PokemonState} from '../interfaces/pokemon'
import PokemonActionsTypes from '../actions-types/pokemon.types'
import PokemonActions from '../actions/pokemon.actions'

const initialState: PokemonState = {
  loading: false,
  error: null,
  pokemons: [],
  pokemonSelected: null
}

const pokemonReducer = produce((state: PokemonState, action: PokemonActions) => {
  switch (action.type) {

    case PokemonActionsTypes.FETCH_POKEMONS_DATA:
      state.loading = true
      state.error = null
      break

    case PokemonActionsTypes.FETCH_POKEMONS_DATA_SUCCESS:
      state.loading = false
      state.error = null
      state.pokemons = action.payload
      break

    case PokemonActionsTypes.FETCH_POKEMONS_DATA_ERROR:
      state.loading = false
      state.error = action.payload
      break


    case PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA:
      state.loading = true
      state.error = null
      break

    case PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA_SUCCESS:
      const spritesValues = Object.values(action.payload.sprites)
      const spritesAsArray: Array<string> = []

      spritesValues.forEach(sprite => typeof sprite === 'string' && spritesAsArray.push(sprite))

      state.loading = false
      state.error = null
      state.pokemonSelected = {
        ...action.payload,
        spritesAsArray
      }

      break

    case PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA_ERROR:
      state.loading = false
      state.error = action.payload
      break

  }
}, initialState)

export default pokemonReducer
