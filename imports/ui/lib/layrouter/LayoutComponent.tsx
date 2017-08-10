import * as React from 'react';
import { Switch } from 'react-router'

import { IRoute } from './'
import Link from './LinkComponent'
import Route from './RouteComponent'

interface IProps {
  routes: IRoute[]
}

export default class LayoutComponent extends React.Component<IProps, {}> {
  public render() {
    const Navigation = () => (
      <ul>
        <li><Link to='/' label='Home' /></li>
        <li><Link to='/about' label='About' /></li>
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
