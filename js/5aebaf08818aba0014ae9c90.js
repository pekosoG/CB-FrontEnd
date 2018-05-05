$(document).ready(function() {

    let url = 'https://cb-api-gdl.herokuapp.com/api/alumnos/'
    let search = new URLSearchParams(window.location.search)

    if (search.has('id'))
        url += search.get('id')
    else
        url += '5aebaf08818aba0014ae9c90';

    $.getJSON(url, function(resp) {
        $('.name').text(resp, nombre);
        $('.github').text(resp, github);
        $('.musica').text(resp, musica);
        $('.bio').text(resp, bio);

    });
});