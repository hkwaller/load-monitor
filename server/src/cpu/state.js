import OS from 'os'
import { reduce, map } from 'lodash'
export default (_ => {

  const recordings = []
  let interval = null
  
  let mock = 0
  setInterval(_ => (mock = Math.random()) , 10000)

  const readLoads = _ => {
    const timestamp = Date.now()
    const cores = OS.cpus()
    const usage = OS.loadavg()
    const normalized = usage.map(load => mock + load / cores.length)

    const cpus = cores.map(({ times }) => {
      const sum = reduce(times, (total, v) => total + v, 0)
      return map(times, val => val/sum)
    })

    return { normalized, timestamp, cpus }
  }  

  const recorder = _ => {
    if(recordings.length >= 60 * 60) recordings.shift()
    
    recordings.push(readLoads())
  }
  const byDate = (start, end) => ({ timestamp }) => (!start || start <= timestamp) && (!end || timestamp <= end)

  return {
    current: readLoads,
    list: (start, end) => recordings.filter(byDate(start, end)),
    clear: _ => recordings.splice(0),
    start: (period = 1000) => (interval = setInterval(recorder, period)),
    stop: _=> {
      if(!interval) throw new Error(`Nothing to clear. Recording hasn't started yet`)
      
      clearInterval(interval)
      interval = null
    }
  }
})()
