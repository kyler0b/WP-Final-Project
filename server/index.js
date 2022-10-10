const express = require("express")
const app = express()
const passport = require('passport')
const session = require('express-session')

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/login' }));