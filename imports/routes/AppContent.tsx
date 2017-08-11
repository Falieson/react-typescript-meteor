import * as React from 'react'
import { connect } from 'react-redux'

import {RouteMap} from '../startup/client/'
import {Layrouter} from '../ui/lib/'
import {Counter, Tasks} from '../ui/src/'

class Contents4 extends React.Component<{}, {}> {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    this.props.dispatch({type: 'CONNECT'})
  }
  
  render() {
    const {meta} = this.props
    return  (
      <div>
        <h3>Redux Connected: {meta.connected.toString()}</h3>
      </div>
    )
  }
}

const mapStoreToContents4 = store => {
  const {meta} = store

  return {
    meta
  }
}
export const ConnectedContents4 = connect(mapStoreToContents4)(Contents4)

export const Contents3 = props => (
  <div>
    <h3>Reactive Data from Meteor with React Komposer</h3>
    <p>Meteor Connected: {props.connection.connected? 'true': 'false'}</p>
    <p>Meteor userId: {props.userId}</p>
    <p>Meteor loggingIn? {props.loggingIn}</p>
  </div>
)

export const Contents2 = () => (
  <div>
    <h3>Routing</h3>
    <Layrouter routes={RouteMap} />
  </div>
)

export const Contents1 = () => (
  <div>
    <h3>Counter</h3>
    <Counter defaultValue={100} />
    <h3>Tasks</h3>
    <Tasks />
  </div>
)
