import micro from 'micro'

import InternalRoutes from './InternalRoutes'
import Router from './Routes'


const Handlers = (req, res) => {
  if (req.url === InternalRoutes.root) Router(req, res).root(req, res)
  if (req.url === InternalRoutes.health) Router(req, res).health(req, res)
}

// export default micro(Handlers)
export default Handlers
