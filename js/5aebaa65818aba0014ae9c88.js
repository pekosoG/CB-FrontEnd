$(document).ready(function(){
    let url='https://cb-api-gdl.herokuapp.com/api/alumnos/'
    let search = new URLSearchParams(window.location.search)
    if(search.has('id'))
        url+=search.get('id')
    else
        url+='5aebaa65818aba0014ae9c88';

    $.getJSON(url,resp=>{
        $('.nombre').text(resp.nombre);
        $('.github').text(resp.github);
        $('.musica').text(resp.musica);
        $('.contenedor img').attr('src',resp.foto);
    });
});