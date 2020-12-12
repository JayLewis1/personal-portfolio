import { FORM_DATA, INPUT_ERROR }from "../actions/types";

const initialState = {
    data : {},
    error: "",
    isValid: false,
}

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case FORM_DATA : 
        return {
          ...state,
          data: payload,
          error: "",
          isValid : true,
        }
    case INPUT_ERROR : 
        return {
          ...state,
          data: {},
          error: payload,
          isValid : false
        }
      default:
            return state;
  }

}
