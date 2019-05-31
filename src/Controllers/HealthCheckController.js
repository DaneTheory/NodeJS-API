import { send } from 'micro'


const HealthCheckController = (req, res) => {
  send(
    res,
    200,
    `Health Check Controller`
  )
}


export default HealthCheckController
