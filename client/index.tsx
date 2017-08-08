import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { render } from 'react-dom'

import Counter from './CounterComponent'

const Contents = () => (
  <div>
    <h3>Counter</h3>
    <Counter defaultValue={100} />
  </div>
)
const App = () => (<div>
  <h2>React Typescript Loaded</h2>
  <section>
    <Contents />
  </section>
</div>)

Meteor.startup(() => {
  render(<App />, document.getElementById('root'))
})
