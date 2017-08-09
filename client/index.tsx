import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { render } from 'react-dom'

import {Counter, Tasks} from '../imports/ui/src/'
import {Layrouter} from '../imports/ui/lib/'

import routeMap from '../imports/startup/client/register-routes'

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
const App = () => (<div>
  <h2>React Typescript Loaded</h2>
  <section>
    <Contents2 />
  </section>
  <hr />
  <section>
    <Contents1 />
  </section>
</div>)

Meteor.startup(() => {
  render(<App />, document.getElementById('root'))
})
