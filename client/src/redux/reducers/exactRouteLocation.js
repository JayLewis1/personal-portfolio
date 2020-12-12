import { EXACT_ROUTE_LOCATION } from "../actions/types";

const initialState = {
  location: ""
}

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case EXACT_ROUTE_LOCATION : 
      return {
        ...state,
        location: payload
      };
      default : 
        return state;
  }
}