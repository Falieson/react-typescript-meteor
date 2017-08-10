import * as React from 'react';
import {BrowserRouter} from 'react-router-dom'

import {
  IRoute,
  Layout
} from './'

interface IProps {
  routes: IRoute[]
}

export default class LayrouterModule extends React.Component<IProps, {}> {
  public render() {
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
