export default (_ => {

  const ts = Date.now()
  
  const y = x => Math.sin(x * Math.PI / 50) 
  * Math.sin(x * Math.PI / 75) 
  * Math.sin(x * Math.PI / 125) 
  / 2 
  + 1

  const cpu = _ => {
    const vals = [ Math.random() +1, Math.random() + 2,  Math.random(), Math.random() + 3, Math.random() + 4 ]
    const sum = vals.reduce((total, v) => total + v, 0)

    return vals.map(v => v/sum)
  }
  
  const mockData = new Array(60 * 30).fill(0).map((_, i, arr) => ({
    timestamp: ts - (arr.length - i) * 1000,
    normalized: [ y(i) ],
    cpus: [ cpu(), cpu(), cpu(), cpu() ]
  }))
  
  let counter = 0
  setInterval(_ => {
    mockData.shift()
    mockData.push({ 
      timestamp: ts + counter * 1000,
      normalized: [ y(mockData.length + counter) ],
      cpus: [ cpu(), cpu(), cpu(), cpu() ]
    })
    ++counter
  }, 100)

  return _ => mockData
})()
  

