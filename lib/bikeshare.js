/*
 * bikeshare
 * Bike Share Toronto API - Node.js Library
 * Author: Kashav Madan <kshvmdn@gmail.com> (http://kshvmdn.com)
 */

const get = require('./utils/get')

function stations (opts = {}, cb) {
  return new Promise((resolve, reject) => {
    get('/stations/stations.json', (err, res) => {
      if (err) {
        if (cb) cb(err)
        reject(err)
      }

      let stations = res.stationBeanList.map((station) => {
        for (let key in station) {
          if (station[key].length && station[key].trim() === '') station[key] = null
        }

        if (station.lastCommunicationTime) {
          station.lastCommunicationTime = new Date(station.lastCommunicationTime)
        }

        return station
      })

      let total = stations.length
      let active = stations.filter((station) => station.status === 'IN_SERVICE').length

      let updated = new Date(res.executionTime)

      let parsed = {
        meta: {
          updated,
          count: { active, total }
        },
        stations
      }

      if (cb) cb(null, parsed)
      resolve(parsed)
    })
  })
}

module.exports = {
  getStations: stations
}
