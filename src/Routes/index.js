import RootRoutes from './RootRoutes'
import HealthCheckRoutes from './HealthCheckRoutes'


const Router = (req, res) => {
  return {
    root: (req, res) => RootRoutes(req, res),
    health: (req, res) => HealthCheckRoutes(req, res)
  }
}


export default Router
