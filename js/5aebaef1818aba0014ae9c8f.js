$(document).ready(function(){
    let url="https://cb-api-gdl.herokuapp.com/api/alumnos/5aebaef1818aba0014ae9c8f";

    $.getJSON(url,function(data){
         $('.name h4').text(data.nombre);
         $('.github h4').text(data.github);
         $('.photo img').attr('src',data.foto);
         $('.music h4').text(data.musica);
    });
});
