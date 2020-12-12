import { EXACT_ROUTE_LOCATION } from "./types";

export const setRouteLocation = (location) => (dispatch) => {
  dispatch({
    type: EXACT_ROUTE_LOCATION,
    payload : location,
  })
}