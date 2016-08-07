const get = require('./../lib/utils/get')
const should = require('should')

describe('get', () => {
  it('errors out when no path is provided', (done) => {
    get(null, (err, res) => {
      should.exist(err)
      should.not.exist(res)
      done()
    })
  })

  it('responds with data when path is provided', (done) => {
    get('/stations/stations.json', (err, res) => {
      should.not.exist(err)
      should.exist(res)
      done()
    })
  })
})
