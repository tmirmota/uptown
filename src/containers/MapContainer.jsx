import React from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import { initMap, showRedoSearch, clearState } from '../actions/MapActions'
import { hoverProperty } from '../actions/PropertyActions'
import { hoverPolygon } from '../actions/PolygonActions'

const MapComponent = props => <Map {...props} />

const mapStateToProps = ({ mapFeatures }) => ({ mapFeatures })

export default connect(mapStateToProps, {
  initMap,
  hoverProperty,
  hoverPolygon,
  showRedoSearch,
  clearState,
})(MapComponent)
