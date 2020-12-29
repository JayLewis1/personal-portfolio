const express = require("express");
const bodyParser = require('body-parser');

const path = require("path");
const cors = require("cors");
const { Console } = require("console");

const favicon = require('express-favicon');

const app = express();

const PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: 'http://localhost:5000',
  optionsSuccessStatus: 200 // For legacy browser support

}
app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json({ extended: false }));

// Use Favicon Icon
app.use(favicon(__dirname + '/build/favicon.ico'));


// app.get("/", (req, res) => res.send("API running"));

app.use("/api/nodemailer", require("./routes/api/nodemailer"));

// app.use(express.static(path.join(__dirname, './client/build')))

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build", "index.html"));
// });

app.use(express.static('./client/build'))

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});
// console.log(path.join(__dirname, "./client/build", "index.html"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));