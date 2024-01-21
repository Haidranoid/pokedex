import PokemonActionsTypes from '../actions-types/pokemon.types'
import {PokemonRecord, PokemonStats} from "../interfaces/pokemon";

interface FetchPokemonsDataAction {
  type: PokemonActionsTypes.FETCH_POKEMONS_DATA
}

interface FetchPokemonsDataSuccessAction {
  type: PokemonActionsTypes.FETCH_POKEMONS_DATA_SUCCESS
  payload: Array<PokemonRecord>
}

interface FetchPokemonsDataErrorAction {
  type: PokemonActionsTypes.FETCH_POKEMONS_DATA_ERROR
  payload: string
}

interface FetchSinglePokemonDataAction {
  type: PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA
}

interface FetchSinglePokemonDataSuccessAction {
  type: PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA_SUCCESS
  payload: PokemonStats
}

interface FetchSinglePokemonDataErrorAction {
  type: PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA_ERROR
  payload: string
}

type PokemonActions =
  | FetchPokemonsDataAction
  | FetchPokemonsDataSuccessAction
  | FetchPokemonsDataErrorAction
  | FetchSinglePokemonDataAction
  | FetchSinglePokemonDataSuccessAction
  | FetchSinglePokemonDataErrorAction

export default PokemonActions
