import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pokemonAC from '../actions-creators/pokemon.creator'

const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    {
      ...pokemonAC,
    },
    dispatch,
  )
}

export default useActions
