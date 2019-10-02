const express = require('express'); 
const app = express(); 
const hbs = require('express-handlebars'); 

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

//home-scrape javascript 
const homeScrape = require('./public/js/home-scrape'); 

//home route
app.get('/', (req, res) => {
    homeScrape.firstScrape(); 
    res.render('home', {
        layout: 'default',
    });
})





app.listen(PORT, (err) => {
    if (err) throw err; 
    console.log(`app listening on port ${PORT}`); 
}); 