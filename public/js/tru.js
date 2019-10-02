axios
    .get(item.link)
    .then((response) => {
        const $ = cheerio.load(response.data);
        summary = $('div .article-copy').children('p:first-child').text().trim();
    })
    .catch(err => console.log(err))