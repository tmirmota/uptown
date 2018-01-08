import * as types from '../constants/ActionTypes'

const initialState = {
  style: 'styles/tmirmota/cjc2s1iic1pzm2sqvnkyjt06q',
  lat: 49.261069,
  lng: -123.1427207,
  zoom: 10,
  maxBounds: [
    [-123.29430051866589, 49.15593259948497],
    [-122.89152688587282, 49.34756088632997],
  ],
  bedrooms: 1
}

const map = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MAP:
      return {
        ...state,
        map: action.map,
        popup: action.popup,
      }

    case types.UPDATE_COORDINATES:
      const { lat, lng, zoom } = action
      return {
        ...state,
        lat,
        lng,
        zoom,
      }

    case types.UPDATE_METRIC:
      return {
        ...state,
        [action.name]: action.value,
      }

    default:
      return state
  }
}

export default map
