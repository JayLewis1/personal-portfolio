import { combineReducers } from "redux";

import exactRouteLocation from "./exactRouteLocation"
import contactForm from "./contactForm"

export default combineReducers({
  exactRouteLocation: exactRouteLocation,
  formData : contactForm
})