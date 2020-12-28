import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";

// Redux 
import { connect } from "react-redux";
import { handleFormDataWithNodemailer } from "../../redux/actions/contactForm";

const Contact = ( { handleFormDataWithNodemailer, handledFormData } ) => {
  const [copiedType, setCopiedType] = useState();
  const [formData, setFormData] = useState([]);
  const [timer, setTimer] = useState(false);

  const copyText =  (x) => { 
    setCopiedType(x);
    var textToBeCopied = document.createElement("textarea");
    
    switch(x) {
        case 0 :
          textToBeCopied.value = "07592832146";
          break;
        case 1: 
          textToBeCopied.value = "jr_lewis@outlook.com";
          break;
        default :
            break;
    }
      
      document.body.appendChild(textToBeCopied);
 
      textToBeCopied.select();
      document.execCommand("copy");
      document.body.removeChild(textToBeCopied);

      }

    
      const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    
       }
      const onSubmit = async (e) => {
        e.preventDefault();
        handleFormDataWithNodemailer(formData);
      }

      // Form Validation : assign error fields to the appropriate variable to access clearer in the form input className 
      var nameErrors = handledFormData.formData.error.name;
      var emailErrors = handledFormData.formData.error.email;
      var messageErrors = handledFormData.formData.error.message;
      var isValid = handledFormData.formData.isValid;

       const resetFormInputs = () => {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var companyInput = document.getElementById("company");
        var messageInput = document.getElementById("message");

        nameInput.value = "";
        emailInput.value = "";
        companyInput.value = "";
        messageInput.value = "";
       }

      useEffect(() => {
        if(isValid === true ) {
          console.log("Changed")
          setFormData([])
          resetFormInputs();
          setTimer(true);
          setTimeout(function(){
            setTimer(false);
          },5000);
        }
      }, [isValid])

  return (
    <div className="contact-container" id="contact">
      <h3>Get in Contact</h3>
      <div className="contact-details">
        <ul>
          <li className="number">
            <div>
              <img src="/assets/icons/contact/phone.svg" alt="Phone Number"/>
              <p>07592832146</p>
              <button onClick={() => copyText(0)}>
                <img src="/assets/icons/copy.svg" alt="copy"/>
              </button>
              </div>
              <span className={(
              copiedType === 0 ? "showCopied" : null
            )}>
              <p>👍</p> 
              <p className="copied-text">Copied!</p> 
            </span>
          </li>
          <li className="email">
           <div>
              <img src="/assets/icons/contact/email.svg" alt="Email Address"/>
              <p>Jr_lewis@outlook.com</p>
              <button onClick={() => copyText(1)}>
                <img src="/assets/icons/copy.svg" alt="copy"/>
              </button>
            </div>
            <span className={(
              copiedType === 1 ? "showCopied" : null
            )}>
              <p>👍</p> 
              <p className="copied-text">Copied!</p> 
            </span>
          </li>
          <li className="LinkedIn">
           <div>
              <img src="/assets/icons/contact/linkedin.svg" alt="LinkedIn"/>
              <p>jaylewis98</p>
              <a href="https://www.linkedin.com/in/jaylewis98/"  target="_blank" rel="noreferrer"> 
              <img src="/assets/icons/blue-arrow.svg" alt="Go to linkedIn"/>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="form-container">
        <form onSubmit={(e) => onSubmit(e)}>
          <span>
            <span className="label-flex">
              <label htmlFor="name">Name</label>
              <p>*</p>
            </span>
            <input 
              type="text"
               id="name" 
               placeholder="John Smith" 
               name="name"
               className={nameErrors ? "error" : formData.name ? "success" : null }
               onChange={(e) => onChange(e)}/>
                {
                nameErrors && <p className="error-msg"> {nameErrors} </p>
              }
          </span>
          <span>
           <span className="label-flex">
              <label htmlFor="email">Email</label>
              <p>*</p>
            </span>
            <input 
              type="text" 
              id="email" 
              placeholder="Johnsmith@email.com"
              name="email"
              className={emailErrors ? "error" : formData.email ? "success" : null }
              onChange={(e) => onChange(e)}/>
              {
                emailErrors && <p className="error-msg"> {emailErrors} </p>
              }
            {/* <p className="error-msg">
              Enter Name
            </p> */}
          </span>
          <span>
             <span className="label-flex">
              <label htmlFor="company">Company</label>
            </span>
            <input 
              type="text" 
              id="company" 
              placeholder="JohnSmithLtd"
              name="company"
              className={formData.company ? "success" : null }
              onChange={(e) => onChange(e)}/>
          </span>
          <span>
            <span className="label-flex">
             <label htmlFor="message">Message</label>
             <p>*</p>
            </span>
            <textarea 
              type="text" 
              id="message" 
              placeholder="Hi Jay, just wanted to get in contact with you ..."
              name="message"
              className={messageErrors ? "error" : formData.message ? "success" : null }
              onChange={(e) => onChange(e)}/>
              
               {
                messageErrors && <p className="error-msg"> {messageErrors} </p>
              }
          </span>
          <input type="submit" value="Send Message" id="submit"/>
           
              {
               (isValid === true) && (timer === true) ? <p className="succes-msg">Message Sent!</p> : null
              }
        </form>
      </div>
    </div>
  )
}

Contact.propTypes = {
  handleFormDataWithNodemailer : PropTypes.func.isRequired,
  handledFormData : PropTypes.object.isRequired
}

const mapStateToProps = (formData) =>  ({
  handledFormData : formData
})

export default connect(mapStateToProps , {handleFormDataWithNodemailer})(Contact);
