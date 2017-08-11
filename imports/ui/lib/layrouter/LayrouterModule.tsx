import * as React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import {RouterHistory, Store} from '../../redux/'
import { IRoute, Layout } from './'

interface IProps {
  routes: IRoute[]
}

export default class LayrouterModule extends React.Component<IProps, {}> {
  public render() {
    return (
      <Provider store={Store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={RouterHistory}>
          <div className='react-router'>
            <Layout 
              routes={this.props.routes}
            />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
