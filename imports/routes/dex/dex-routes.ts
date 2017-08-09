import {RouteRegistrar, Route, IRoute} from '../../ui/lib/layrouter/'
import Home from './home/'
import About from './about/'

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
