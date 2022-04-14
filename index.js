const express = require('express');
const app = express();
const fetch = require('node-fetch');
const Quote = require('inspirational-quotes');


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render("home", {"quote1": Quote.getRandomQuote()});
});
app.get('/monterey', (req,res)=>{
  res.render('monterey');

});
app.get('/murrieta', (req, res) => {
   res.render('murrieta');
});
app.get('/joshua', (req, res) => {
   res.render('joshua');
});
app.get('/scottsdale', (req, res) => {
   res.render('scottsdale');
});
app.get('/moab', (req, res) => {
   res.render('moab');
});
app.get('/vail', (req, res) => {
   res.render('vail');
});
app.get('/rocky', (req, res) => {
   res.render('rocky');
});
app.get('/estes', (req, res) => {
   res.render('estes');
});
app.get('/wichita', (req, res) => {
   res.render('wichita');
});

app.listen(3000, () => {
   console.log('server started');
});