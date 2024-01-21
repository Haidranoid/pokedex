import { combineReducers } from 'redux'
import pokemonReducer from './pokemon.reducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
