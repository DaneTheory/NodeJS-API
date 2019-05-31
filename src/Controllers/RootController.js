import { send } from 'micro'


const RootController = (req, res) => {
  send(
    res,
    200,
    `Root Controller`
  )
}


export default RootController
