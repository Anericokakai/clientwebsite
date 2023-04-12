const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./model/userdetail");

const database_conn=require('./database/connection')

const login_route=require('./routes/login')
const signup=require('./routes/Signup_route')


// use body parser
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({
    name: ["james", "rico"],
  });
});


app.use(signup)
// use the login route
app.use(login_route)

app.listen(8000, () => {
  console.log(`app listening on port http://localhost:8000`);
});
