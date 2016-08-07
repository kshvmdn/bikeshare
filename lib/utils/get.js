const https = require('https')

const HOST = 'feeds.bikesharetoronto.com'
const HEADERS = {
  'Accept': '*/*',
  'Connection': 'close',
  'User-Agent': 'node-bikeshare'
}

function get (path = '', cb) {
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

    res.on('end', () => {
      try {
        return cb(null, JSON.parse(body))
      } catch (e) {
        return cb(e, null)
      }
    })
  })

  req.on('error', (error) => cb(error))

  req.end()
}

module.exports = exports = get

