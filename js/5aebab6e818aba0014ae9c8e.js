$(document).ready(function(){
    let url="https://cb-api-gdl.herokuapp.com/api/alumnos/"
    let search= new URLSearchParams(window.location.search)
    if(search.has("id"))
        url+=search.get("id")
    else
        url+="5aebab6e818aba0014ae9c8e";
$.getJSON(url,function(resp){
        $("#nombre").text(resp.nombre);
        $("#Github").text(resp.github);
        $("#musica").text(resp.musica);
        $("#contenedor img").text("src",resp.foto);
        $("#bio").text(resp.bio);
    });
});