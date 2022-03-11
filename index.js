const server = require('./server')

const PORT = 3000

server.listen(PORT, () => {
  console.log('Server is listening')
})

server.get('/home', (req, res) => {
  res.send('Hello world')
})


{
  window: 'closed'
}