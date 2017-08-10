export {default as Layout} from './LayoutComponent'
export {default as Link} from './LinkComponent'

import LayrouterModule from './LayrouterModule'
export default LayrouterModule

import {IRoute, Route} from './RouteModel'
export {
  IRoute,
  Route
}

export function RouteRegistrar({collection, record}: {collection: IRoute[], record: IRoute}){
  collection.push(record)
}
