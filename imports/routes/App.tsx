import { Meteor } from 'meteor/meteor'
import * as React from 'react'

declare module 'react-komposer' // FIXME
import { compose } from 'react-komposer'

import {Counter, Tasks} from '../ui/src/'
import {Layrouter} from '../ui/lib/'
import routeMap from '../startup/client/register-routes'

const Contents3 = (props) => (
  <div>
    <h3>Reactive Data from Meteor with React Komposer</h3>
    <p>Meteor Connected: {props.connection.connected? 'true': 'false'}</p>
    <p>Meteor userId: {props.userId}</p>
    <p>Meteor loggingIn? {props.loggingIn}</p>
  </div>
)

const Contents2 = () => (
  <div>
    <h3>Routing</h3>
    <Layrouter routes={routeMap} />
  </div>
)

const Contents1 = () => (
  <div>
    <h3>Counter</h3>
    <Counter defaultValue={100} />
    <h3>Tasks</h3>
    <Tasks />
  </div>
)
const App = (props) => (
  <div>
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

function reactiveMapper(props, onData) {
  const loggingIn = Meteor.loggingIn()
  const userId = Meteor.userId()
  const connection = Meteor.status()
  onData(null, {
    loggingIn,
    userId,
    connection,
    authenticated: !loggingIn && !!userId,
  });
}

const Container = compose(getTrackerLoader(reactiveMapper))(App);
export default Container
