import * as React from 'react'
import {Route as BrowserRoute} from 'react-router-dom'

import {IRoute} from './'

const RouteComponent = (props: IRoute, index: number) => (
  <BrowserRoute key={`r_${index}`} {...props} />
)

export default RouteComponent
