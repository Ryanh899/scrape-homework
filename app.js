const express = require('express'); 
const app = express(); 
const hbs = require('express-handlebars'); 
const mongoose = require('mongoose'); 

const PORT = process.env.PORT || 3000; 

//handlebars middleware
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use public folder for javascript and styling
app.use(express.static("./public"));

//home route
app.get('/', (req, res) => {
    res.render('home', {
        layout: 'default',
    });
})

//scrape routes
const scrapeRoute = require('./controller/routes/scrape-routes'); 
app.use(scrapeRoute); 




app.listen(PORT, (err) => {
    if (err) throw err; 
    console.log(`app listening on port ${PORT}`); 
}); 