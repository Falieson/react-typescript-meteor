import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import ReducerMap from './register-reducers'

const RootReducer = combineReducers({
  ...ReducerMap,
  router: routerReducer
})

export default RootReducer
