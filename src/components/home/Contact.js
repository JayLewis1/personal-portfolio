import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Get in Contact</h3>
      <div className="icon-container"> 
        <a href="/"><img src="/assets/icons/contact/phone.svg" alt="Phone Number"/></a>
        <a href="/"><img src="/assets/icons/contact/email.svg" alt="Email Address"/></a>
        <a href="/"><img src="/assets/icons/contact/linkedin.svg" alt="LinkedIn link"/></a>
      </div>
      <div className="form-container">
        <form action="">
          <span>
            <span className="label-flex">
              <label htmlFor="name">Name</label>
              <p>*</p>
            </span>
            <input className="success" type="text" id="name" placeholder="John Smith"/>
          </span>
          <span>
           <span className="label-flex">
              <label htmlFor="email">Email</label>
              <p>*</p>
            </span>
            <input className="error" type="text" id="email" placeholder="Johnsmith@email.com"/>
            <p className="error-msg">
              Enter Name
            </p>
          </span>
          <span>
             <span className="label-flex">
              <label htmlFor="company">Company</label>
            </span>
            <input type="text" id="company" placeholder="JohnSmithLtd"/>
          </span>
          <span>
            <span className="label-flex">
             <label htmlFor="message">Message</label>
             <p>*</p>
            </span>
            <textarea type="text" id="message" placeholder="Hi Jay, just wanted to get in contact with you ..."/>
          </span>
          <input type="submit" value="Send Message" id="submit"/>
        </form>
      </div>
    </div>
  )
}
export default Contact;
