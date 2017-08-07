import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { render } from 'react-dom'

const App = () => (<h1>React Typescript</h1>)

Meteor.startup(() => {
  render(<App />, document.getElementById('root'))
})
