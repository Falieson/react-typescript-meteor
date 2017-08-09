import * as React from 'react';
import { Switch } from 'react-router'

import { IRoute } from './'
import Route from './RouteComponent'
import Link from './LinkComponent'

interface IProps {
  routes: IRoute[]
}

export default class LayoutComponent extends React.Component<IProps, {}> {
  render() {
    const Navigation = () => (
      <ul>
        <li><Link to='/' label="Home" /></li>
        <li><Link to='/about' label="About" /></li>
      </ul>
    )

    return (
    <div className='react-layout'>
      <Navigation />
      <Switch>
        {this.props.routes.map((r: IRoute, i: number) => Route(r, i))}
      </Switch>
    </div>
    )
  }
}