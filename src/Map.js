import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl'

const MAPBOX_TOKEN = 'REPLACE_WITH_TOKEN'

class MapWrapper extends Component {
  componentDidMount() {
    mapboxgl.accessToken = MAPBOX_TOKEN
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
    })
  }

  render() {
    return <div id="map" style={{ width: '400px', height: '300px;' }} />
  }
}

export default MapWrapper
