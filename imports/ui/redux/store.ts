/* redux store
-- react-router-redux
-- TODO: kea (deps: redux-saga)
*/
import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, createStore} from 'redux'


import {RootReducer, RouterHistory} from './'

// Create a history of your choosing (we're using a browser history in this case)

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(RouterHistory)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const Store = createStore(
  RootReducer,
  applyMiddleware(middleware)
)

export default Store
