const express = require("express")
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

mongoose.connect("//admin:admin1234@cluster0.6jhd5sp.mongodb.net/test");

app.use(require("express-session")({
secret:"Any normal Word",//decode or encode session
    resave: false,          
    saveUninitialized:false    
}));






app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
