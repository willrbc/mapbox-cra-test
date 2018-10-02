//@flow
import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl'

const MAPBOX_TOKEN = 'pk.eyJ1IjoidXJiYW4tbWFya2V0cyIsImEiOiJjam1yY21qMHEwcDVxM3FsODF4OXYxbWF5In0.h-s3N1ujvj3VtO_2jrrSPw'

class MapWrapper extends Component<
  {
    coordinates: Array<number>,
    children?: any,
  },
  {},
> {
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