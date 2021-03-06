import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Reducers
import rent from './rent'
import rents from './rents'
import legend from './legend'
import filters from './filters'
import property from './property'
import properties from './properties'
import mapFeatures from './mapFeatures'
import selectedProperty from './selectedProperty'

const rootReducer = combineReducers({
  rent,
  rents,
  legend,
  filters,
  property,
  properties,
  mapFeatures,
  selectedProperty,
  router: routerReducer
})

export default rootReducer
