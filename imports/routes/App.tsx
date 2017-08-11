import { Meteor } from 'meteor/meteor'
import * as React from 'react'
import { compose } from 'react-komposer'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import {
  ConnectedContents4, Contents1, Contents2, Contents3
} from './AppContent'

const meta = (state = {
  connected: false,
  store: 'disconnected',
}, action) => {
  switch (action.type) {
    case 'CONNECT':
      return {
        connected: true,
        store: 'connected',
      }
    default:
      return state
  }
}
const rootReducer = combineReducers({
  meta
})
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = props => (
  <div>
    <ConnectedContents4 />
    <hr />
    <Contents3 {...props} />
    <hr />
    <h2>React Typescript Loaded</h2>
    <section>
      <Contents2 />
    </section>
    <hr />
    <section>
      <Contents1 />
    </section>
  </div>
)
const ReduxApp = props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
)

function getTrackerLoader(reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if(typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
}

function AppData(props, onData) {
  const loggingIn = Meteor.loggingIn()
  const userId = Meteor.userId()
  const connection = Meteor.status()
  onData(null, {
    authenticated: !loggingIn && !!userId,
    connection,
    loggingIn,
    userId,
  });
}

const Container = compose(getTrackerLoader(AppData))(ReduxApp);
export default Container
