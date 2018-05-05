$(document).ready(function(){
    let url="https://cb-api-gdl.herokuapp.com/api/alumnos/"
  let search = new URLSearchParams(window.location.serach)
  if(search.has("id"))
  url+=search.get("id")
  else
  url+="5aebaad2818aba0014ae9c8d";
  $getJSON(url,function(resp){
      $(".nombre").text(resp.nombre);
      $(".github").text(resp.github);
      $(".musica").text(resp.musica);
      $(".contenedor").attr("src",resp.foto);
      $(".Bio").text(resp.bio);
  })

});

