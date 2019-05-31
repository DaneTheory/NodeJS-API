import { router, get } from 'micro-fork'

import InternalRoutes from '../InternalRoutes'
import Controllers from '../Controllers'


const HealthCheckRoutes = (req, res) => router()(
  get(InternalRoutes.health, Controllers.health(req, res))
)



export default HealthCheckRoutes
