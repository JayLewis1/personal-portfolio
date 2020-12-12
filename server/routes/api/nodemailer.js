const express = require("express");
const router = express.Router();

// Nodemailer api
const nodemailer = require("nodemailer");

// @route   POST api/nodemailer
// @desc    Posting form data using nodemailer
// @access  Public
router.post("/" , (req,res) => {
  const { name, email, company, message } = req.body;

  console.log(name);
  console.log(email);
  console.log(company);
  console.log(message);


  res.send("Data recieved");
  


  const main = async () => {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    var transport = {
      host: "smtp-mail.outlook.com", // Don’t forget to replace with the SMTP host of your provider
      port: 587,
      auth: {
        user: "query-logictrades@outlook.com",
        pass: "adminvtqf21",
      },
      tls: {
        rejectUnauthorized: false
    }
    };

    var transporter = nodemailer.createTransport(transport); 

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  var mail = {
    from: "query-logictrades@outlook.com",
    to: "jr_lewis@outlook.com", // Change to email address that you want to receive messages on
    subject: "Portfolio - Message from contact form",
    html: `<div>
              <p>name: <b>${name}</b></p> 
              <p>email:  <b>${email}</b></p>  
              <p>company:  <b>${company}</b></p> </br>
              <p>message</p>
              <p>${message}</p> `
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent from : ' + email);
});
    res.send("Message Sent");
 }
 main().catch(console.error) 

})

module.exports = router;