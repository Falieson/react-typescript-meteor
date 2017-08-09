import * as React from 'react';
import {BrowserRouter} from 'react-router-dom'

import {
  IRoute,
  Layout
} from './'

interface IProps {
  routes: IRoute[]
}

export default class Layrouter extends React.Component<IProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <div className='react-router'>
          <Layout 
            routes={this.props.routes}
          />
        </div>
      </BrowserRouter>
    )
  }
}