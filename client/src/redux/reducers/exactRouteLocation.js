import { EXACT_ROUTE_LOCATION, ROUTE_CHANGE } from "../actions/types";

const initialState = {
  location: "",
  change: "",
}

 const exactRouteLocation = (state = initialState, action)  => {
  const {type, payload} = action;

  switch(type) {
    case EXACT_ROUTE_LOCATION : 
      return {
        ...state,
        location: payload
      };
    case ROUTE_CHANGE : 
      return {
        ...state,
        location: payload
      };
      default : 
        return state;
  }
}

export default exactRouteLocation;