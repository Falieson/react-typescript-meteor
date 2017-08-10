import {IRoute, Route, RouteRegistrar} from '../../ui/lib/layrouter/'
import About from './about/'
import Home from './home/'

const routesCollection: IRoute[] = []

RouteRegistrar({
  collection: routesCollection,
  record: new Route({
    path: '/',
    component: Home,
    exact: true
  })
})
RouteRegistrar({
  collection: routesCollection,
  record: new Route({
    path: '/about',
    component: About,
  })
})


export default routesCollection
