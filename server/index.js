const express = require("express")
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('SUNY', 'MY SUNY');
  res.setHeader('Acess-Control-Allow-Origin', '*');
  res.setHeader('Acess-Control-Allow-Methods', 'GET,POST, PATCH, DELETE');
  res.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

const productsController = require('./controller/workouts');

app.use('/', express.static('./client/dist'));

app
.get('/', (req, res) => {
  res.status(200).send('Happy Sweet New Year');
})
.get('/error', (req, res) => {
  sss.PORT();
})
.use('/api/v1/workouts', productsController)
/*
app.get('*', (req, res) => {
  
  res.sendFile('index.html', {root: './client/dist'});
})*/

app.use((err, req, res, next) => {
  console.log(err);
  res.status( err.httpCode ?? 500).send({
      message: err.message ?? 'Something went wrong',
      status: err.httpCode ?? 500
  });

})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});