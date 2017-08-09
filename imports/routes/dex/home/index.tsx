import * as React from 'react'

import {Link} from '../../../ui/lib/layrouter'

const Home = ()=> (
  <div>
    This is the home page <Link href="/about">go to the about page...</Link>
  </div>
)

export default Home
