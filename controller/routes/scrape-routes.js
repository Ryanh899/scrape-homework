const homeScrape = require('../../public/js/home-scrape'); 
const express = require('express'); 
const router = express.Router()
const __ = require('lodash');
const Articles = require('../../model/article-model'); 

router.post('/scrape', (req, res) => {
    homeScrape.firstScrape(); 
    // Articles.find().then(response => {
    //     // console.log(response)
    //     let articlesArr = response.slice(Math.max(response.length - 25, 1))
    //     // console.log(articlesArr)
    //     res.render('partials/articles', {
    //         layout : false,
    //         articlesArr
    //     }); 
    // }); 
   res.send('hello')
}); 

router.get('/articles', (req, res) => {
    Articles.find().then(response => {
        // console.log(response)
        let articlesArr = response.slice(Math.max(response.length - 25, 1))
        // console.log(articlesArr)
        res.render('partials/articles', {
            layout : false,
            articlesArr
        }); 
    }); 
}); 

router.get('/modal/:id', (req, res) => {
    let id = req.params.id; 
    Articles.findById(id, function (err, articles) {
        console.log(articles)
        res.send(articles)
    });
}); 

router.post('/comment', (req, res) => {
    console.log(req.body);  
    Articles.updateOne({ _id: req.body.id }, { comments: req.body.comment }, (err, articles) => {
        console.log(articles)
    })
    res.send('hello')
}); 

module.exports = router; 

