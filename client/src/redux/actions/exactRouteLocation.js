import { EXACT_ROUTE_LOCATION, ROUTE_CHANGE } from "./types";

export const setRouteLocation = (location) => (dispatch) => {
  dispatch({
    type: EXACT_ROUTE_LOCATION,
    payload : location,
  })
}


export const checkRouteChange = (change) => (dispatch) => {
  dispatch({
    type: ROUTE_CHANGE,
    payload : change,
  })
}