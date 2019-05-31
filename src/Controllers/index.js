import RootController from './RootController'
import HealthCheckController from './HealthCheckController'


const Controllers = {
  root(req, res) {
    RootController(req, res)
  },
  health(req, res) {
    HealthCheckController(req, res)
  }
}


export default Controllers
