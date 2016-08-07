/*
 * bikeshare
 * Bike Share Toronto API Library
 * Author: Kashav Madan (kshvmdn@gmail.com) <http://kshvmdn.com>
 */

const _ = require('lodash')
const https = require('https')

const HOST = 'feeds.bikesharetoronto.com'
const HEADERS = {
  'Accept': '*/*',
  'Connection': 'close',
  'User-Agent': 'node-bikeshare'
}

function get (path, cb) {
  let body, req

  body = []

  req = https.request({
    hostname: HOST,
    path,
    headers: HEADERS,
    method: 'GET'
  }, (res) => {
    res.on('data', (chunk) => {
      body += chunk
    })

    res.on('end', () => cb(null, JSON.parse(body)))
  })

  req.on('error', (error) => cb(error))

  req.end()
}

function stations (cb) {
  return new Promise((resolve, reject) => {
    get('/stations/stations.json', (err, res) => {
      if (err) {
        if (cb) cb(err)
        reject(err)
      }

      if (cb) cb(null, res)
      resolve(res)
    })
  })
}

module.exports = {
  getStations: stations
}
