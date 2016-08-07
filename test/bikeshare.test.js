const bikeshare = require('./../lib/bikeshare')
const should = require('should')

describe('get response', () => {
  it('responds with error-first cb', (done) => {
    bikeshare.getStations((err, res) => {
      should.not.exist(err)
      should.exist(res)
      should(res).have.property('meta')
      should(res).have.property('stations')
      res.meta.should.not.be.empty
      res.stations.should.not.be.empty
      done()
    })
  })

  it('responds with promise', (done) => {
    const response = bikeshare.getStations()
    response.should.be.Promise()

    response.then((res) => {
      should.exist(res)
      should(res).have.property('meta')
      should(res).have.property('stations')
      res.meta.should.not.be.empty
      res.stations.should.not.be.empty
      done()
    })
  })
})

describe('have correct attributes', () => {
  let data

  beforeEach(() => bikeshare.getStations((err, res) => {
    data = res
  }))

  describe('data.meta.count.total', () => {
    it('has correct total count', (done) => {
      should.equal(data.meta.count.total, data.stations.length)
      done()
    })
  })

  describe('data.meta.count.active', () => {
    it('has correct active count', (done) => {
      should.equal(data.meta.count.total, data.stations.filter((station) => station.status === 'IN_SERVICE').length)
      done()
    })
  })
})
