import {IRoute, Route, RouteRegistrar} from '../../ui/lib/layrouter/'
import About from './about/'
import Home from './home/'

const routesCollection: IRoute[] = []

RouteRegistrar({
  collection: routesCollection,
  record: new Route({
    component: Home,
    exact: true,
    path: '/',
  })
})
RouteRegistrar({
  collection: routesCollection,
  record: new Route({
    component: About,
    path: '/about',
  })
})


export default routesCollection
