import { FORM_DATA, INPUT_ERROR } from "./types";

import axios from "axios";

export const handleFormDataWithNodemailer = (formData) => (dispatch) => {  

  const { name, email, message } = formData;
 
  var errors = {
    name : "",
    email : "",
    message: "",
  };

  // If fields are empty, assign the error to the appropriate field in the errors object
  if(!name) {
    errors.name = "Name field must not be left blank";
  }
  if(!email) {
    errors.email = "Email field must not be left blank"
  }
  if(!message) {
    errors.message = "Message field must not be left blank"
  }
  // If fields don't contain the correct amount of characters, assign the error to the appropriate field in the errors object
  if(name) {
    if(name.length < 3) {
      errors.name = "Name should be longer than 2 characters";
    }
  } 
  if(email) {
    if(email.length <= 8) {
      errors.email = "Email should be longer than 8 characters";
    }
  }
  if(message) {
    if(message.length <= 10) {
      errors.message = "Message should be longer than 10 characters";
    }
  }

  if(errors.name === "" && errors.email === "" && errors.message === "") {
    dispatch({
      type: FORM_DATA,
      payload: formData
    })
    axios.post('/api/nodemailer', formData)
    .then(function (res) {
      // console.log(res);
    })
    .catch(function (err) {
      // console.log(err);
    });
  } else {
    dispatch({
      type: INPUT_ERROR,
      payload: errors
    })
  }
}