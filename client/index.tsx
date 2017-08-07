import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { render } from 'react-dom'

import Counter from './CounterComponent'

const App = () => (<div>
  <h1>React Typescript</h1>
  <Counter defaultValue={100} />
</div>)

Meteor.startup(() => {
  render(<App />, document.getElementById('root'))
})
