$(document).ready(function(){
    let url= 'https://cb-api-gdl.herokuapp.com/api/alumnos/5aebaa67818aba0014ae9c8a'


    $.getJSON(url, function(resp){
       
           $('.nombre').text(resp.nombre);
           $('.git').text(resp.github);
           $('.musica').text(resp.musica);
           $('.bio').text(resp.bio);
           $('.bio').text(resp.bio);
           $('.foto').attr('src',resp.foto);
           

    });
});


