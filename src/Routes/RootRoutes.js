import { router, get } from 'micro-fork'

import InternalRoutes from '../InternalRoutes'
import Controllers from '../Controllers'


const RootRoutes = (req, res) => router()(
  get(InternalRoutes.root, Controllers.root(req, res))
)


export default RootRoutes
