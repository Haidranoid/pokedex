import axios from "axios";
import { Dispatch } from 'redux'
import PokemonActionsTypes from '../actions-types/pokemon.types'
import PokemonActions from '../actions/pokemon.actions'

export const fetchPokemons = () => async (dispatch: Dispatch<PokemonActions>) => {
  dispatch({
    type: PokemonActionsTypes.FETCH_POKEMONS_DATA,
  })
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")

    dispatch({
      type: PokemonActionsTypes.FETCH_POKEMONS_DATA_SUCCESS,
      payload: data.results,
    })

  } catch (error) {
    if (error instanceof Error) {
      dispatch({
        type: PokemonActionsTypes.FETCH_POKEMONS_DATA_ERROR,
        payload: error.message,
      })
    }
  }
}

export const fetchSinglePokemon = (pokemonName: string) => async (dispatch: Dispatch<PokemonActions>) => {
  dispatch({
    type: PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA,
  })
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    dispatch({
      type: PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA_SUCCESS,
      payload: data,
    })

  } catch (error) {
    if (error instanceof Error) {
      dispatch({
        type: PokemonActionsTypes.FETCH_SINGLE_POKEMON_DATA_ERROR,
        payload: error.message,
      })
    }
  }
}
