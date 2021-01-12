import { Router } from 'express'


import getMockData from './mock'
import State from './state'

export default (_ => { 
  
  const router = Router()
  State.start()
  
  const restart = (_, res) => {
    try{
      State.stop()
    }catch(e){
      console.log('Service already stopped. Starting it')
    }
    State.start()
    res.send('Restarted recording load statistics.')
  }

  const stop = (_, res) => {
    State.stop()
    res.send('Stopped recording load statistics.')
  }
  const clear = (_, res) => {  
    State.clear()
    res.send('Cleared recordings')
  }



  router.get('/mock', (_, res) => res.json(getMockData()))
  router.get('/current', (_, res) => res.json(State.current()))
  router.get('/list', (req, res) => res.json(State.list(req.query.start, req.query.end)))
  router.post('/stop',  stop)
  router.post('/restart',  restart)
  router.post('/clear', clear)  

  return router
})()

