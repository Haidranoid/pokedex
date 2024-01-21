import {thunk} from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import rootReducer from '../reducers'

// @ts-ignore
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
