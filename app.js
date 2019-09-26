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

//home route
app.get('/', (req, res) => {
    res.render('home', {
        layout: 'default',
    });
})





app.listen(PORT, (err) => {
    if (err) throw err; 
    console.log(`app listening on port ${PORT}`); 
}); 