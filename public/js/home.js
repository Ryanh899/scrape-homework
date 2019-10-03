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
    let route = '/articles'
    $.ajax(route, {
        type: 'GET', 
    }).then(function (response) {
        $('#append-articles').append(response); 
    }).catch(function (err) { console.log(err) }); 
});

$(document).on('click', '.add-comment', function (e) {
    let id = e.target.id; 
    console.log(id)
    let route = `/modal/${id}`
    $.ajax(route, {
        type: 'GET', 
    }).then(function (response) {
        $('.submit-button').attr('id', response._id);
    }).catch(function (err) { console.log(err) });  
});

$(document).on('click', '.submit-button', function (e) {
    let comment = $('#new-comment').val(); 
    let route = '/comment'
    console.log(e.target)
    let id = e.target.id
    $.ajax(route, {
        type: 'POST', 
        data: {
            id: id, 
            comment: comment
        }
    }).then(function (response) {
        $('#new-comment').val(' ')
        $('.form-group').append('<p style="color: blue;" >Comment added</p>');
    }).catch(function (err) { console.log(err) });  
});


