const cheerio = require('cheerio');
const axios = require('axios');

const homeScrape = {

    //constructor for article object
    Story: function (title, link, summary) {
        this.title = title;
        this.link = link;
        this.summary = summary;
    },
    //gets title and link of story 
    titleAndLink: async (response) => {
        return new Promise((resolve, reject) => {
            const $ = cheerio.load(response.data);
            const news = [];
            $('div h1').each(function (i, elem) {
                let story = {};
                let title = $(this).children('a.black-ln').text().trim();
                let link = $(this).children('a.black-ln').attr('href');
                if (title.length > 1 && link !== 'javascript:void(0);') {
                    story.title = title;
                    story.link = link;
                    news.push(story);
                }
            })
            resolve(news)
        })
    },

    //gets summaries using link from ^
    summaries: async (item, title, i) => { 
        let summaryGrab = new Promise((resolve, reject) => {
            axios
                .get(item)
                .then(response => {
                    const $ = cheerio.load(response.data);
                    aSummary = $('div .article-copy').children('p:first-child').text().trim();
                    resolve(aSummary); 
            }).catch(err => console.log(err)); 
        }); 
        summaryGrab.then(result => {
            if (title && item && result) {
                let newStory = new homeScrape.Story(title, item, result)
                console.log(newStory)
            }
        }); 
    },

    //main function to scrape for home page
    firstScrape: async () => {
        const url = 'https://abcnews.go.com/'; 
        const stories = []; 
        //axios call 
        let firstScrapeObj = new Promise((resolve, reject) => {
            axios
                .get(url)
                //scrapes cheerio and makes object with title and link 
                .then(response => {
                let tal = homeScrape.titleAndLink(response); 
                resolve(tal); 
                }); 
        })
        firstScrapeObj.then((result) => {
            for (var i =0; i < result.length; i++) {
                homeScrape.summaries(result[i].link, result[i].title, i); 
            }
                
            
        })
        .catch(err => console.log(err)); 
    }
}; 
module.exports = homeScrape;