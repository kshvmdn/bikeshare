## bikeshare [![npm version](https://badge.fury.io/js/bikeshare.svg)](https://badge.fury.io/js/bikeshare) [![Build Status](https://travis-ci.org/kshvmdn/bikeshare.svg?branch=master)](https://travis-ci.org/kshvmdn/bikeshare)

A Node.js wrapper for the [Bike Share Toronto API](https://feeds.bikesharetoronto.com/stations/stations.json) ([Open Data Toronto](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=ad3cb6b6ae92b310VgnVCM10000071d60f89RCRD&vgnextchannel=1a66e03bb8d1e310VgnVCM10000071d60f89RCRD)).

### Installation

- Install via [npm](https://npmjs.com/kshvmdn/bikeshare).

  ```sh
  npm i -S bikeshare
  ```

- _Or_ install directly from [source](https://github.com/kshvmdn/bikeshare/archive/master.zip).

  ```
  git clone https://github.com/kshvmdn/bikeshare.git
  ```


### Usage

#### API

__`bikeshare.getStations`__

- Retrieve list of all stations.
- Supports both Promises and error-first callbacks, use whichever you prefer. :smile:

  ```js
  const bikeshare = require('bikeshare');

  bikeshare.getStations((err, res) => {
    if (err) throw err
    console.log(res)
  })

  const request = bikeshare.getStations()
  request
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  ```

- Sample response

  ```js
  {
    "meta": {
      "updated": "2016-08-07T23:11:42.000Z",
      "count": {
        "active": 200,
        "total": 200
      }
    },
    "stations": [
      {
        "id": 7000,
        "stationName": "Ft. York / Capreol Crt.",
        "availableDocks": 12,
        "totalDocks": 31,
        "latitude": 43.639832,
        "longitude": -79.395954,
        "statusValue": "In Service",
        "statusKey": 1,
        "status": "IN_SERVICE",
        "availableBikes": 18,
        "stAddress1": "Ft. York / Capreol Crt.",
        "stAddress2": null,
        "city": "Toronto",
        "postalCode": null,
        "location": null,
        "altitude": null,
        "testStation": false,
        "lastCommunicationTime": "2016-08-07T23:09:38.000Z",
        "landMark": null,
        "is_renting": true
      },
      ...
    ]
  }
  ```

### Contribute

The project is completely open source. Feel free to [open an issue](https://github.com/kshvmdn/bikeshare/issues) or submit a [PR](https://github.com/kshvmdn/bikeshare/pulls).






