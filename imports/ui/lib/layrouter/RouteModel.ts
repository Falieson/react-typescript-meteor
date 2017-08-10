/* Route Model
- path
- component
- exact
- navigations (appear in boolean & title)
  - sidebar: {appear: true, title: 'My Settings'}
  - header: {appear: true, title: 'Settings'}
*/


export interface IRoute {
  path: string,
  component: React.ReactNode,
  exact?: boolean,
}

export class Route {
  public path: string
  public component: React.ReactNode
  public exact?: boolean

  constructor({
    path,
    component,
    exact= false,
  }) {
    this.path = path
    this.component = component
    this.exact = exact
  }
}
