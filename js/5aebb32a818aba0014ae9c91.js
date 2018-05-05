$(document).ready(function(){
    let url ='https://cb-api-gdl.herokuapp.com/api/alumnos/'
    let search = new URLSearchParams (window.location.search)
    if (search.has ('id'))
        url+=search.get('id')
    else
        url+='5aebb32a818aba0014ae9c91';
    $.getJSON(url, function (resp){
        $('.nombre').text(resp.nombre);
        $('.github').text(resp.github);
        $('.musica').text(resp.musica);
        $('.contenedor img').attr('src', resp.foto);
        $('.bio').text(resp.bio);
    });
});