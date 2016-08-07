/*
 * bikeshare
 * Bike Share Toronto API - Node.js Library
 * Author: Kashav Madan <kshvmdn@gmail.com> (http://kshvmdn.com)
 */

const get = require('./utils/get')

function getStations (cb) {
  return new Promise((resolve, reject) => {
    get('/stations/stations.json', (err, res) => {
      if (err) {
        if (cb) cb(err)
        return reject(err)
      }

      try {
        let stations = res.stationBeanList.map((station) => {
          for (let k in station) {
            let v = station[k]

            if (typeof(v) === 'string' && (v.trim() === '' || v.trim() === 'null')) {
              v = null
            }

            station[k] = v
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
        return resolve(parsed)
      } catch (e) {
        if (cb) cb(e)
        reject(e)
      }
    })
  })
}

module.exports = { getStations }
