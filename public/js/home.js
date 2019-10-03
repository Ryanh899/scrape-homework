//get new articles on scrape button click
$(document).on('click', '#scrape-button', function (e) {
    let route = '/scrape'
    $.ajax(route, {
        type: 'POST', 
    }).then(function (response) {
        console.log('added: ' + response); 
    }).catch(function (err) { console.log(err) }); 
});

$(document).on('click', '#show-button', function (e) {
    $('#append-articles').empty();  
    const route = '/articles'
    $.ajax(route, {
        type: 'GET', 
    }).then(function (response) {
        $('#append-articles').append(response); 
    }).catch(function (err) { console.log(err) }); 
});

