import * as React from 'react';

import { IRoute } from './'
import Route from './RouteComponent'
import Link from './LinkComponent'

interface IProps {
  routes: IRoute[]
}

export default class Layrouter extends React.Component<IProps, {}> {
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
      {this.props.routes.map((r: IRoute, i: number) => Route(r, i))}
    </div>
    )
  }
}