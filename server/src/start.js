
import express from 'express'
import cors from 'cors'
import loads from './cpu'

export default (config => {
  const app = express()

  app.use(express.json())
  app.use(cors())


  app.get('/', (_, res) => res.send('Health Check! yay!'))
  app.use('/loads', loads)

  app.listen(config.PORT, () => console.log(`Now listening on port ${config.PORT}`))

  return app
})({
  PORT: process.env.NODE_ENV === 'development' ? 9876 : 9999
})
