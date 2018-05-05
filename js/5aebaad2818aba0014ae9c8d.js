$(document).ready(function(){
    let url="https://cb-api-gdl.herokuapp.com/api/alumnos/"
  let search = new URLSearchParams(window.location.serach)
  if(search.has("id"))
  url+=search.get("id")
  else
  url+="5aebaad2818aba0014ae9c8d";
  $.getJSON(url,function(resp){
      $(".nombre").text(resp.nombre);
      $(".github p").text(resp.github);
      $(".github a").attr("href","http://github.com/"+resp.github);
      $(".facebook h4").attr("href","https://www.facebook.com/"+resp.facebook);
      $(".musica").text(resp.musica);
      $(".fotoperf").attr("src",resp.foto);
      $(".Bio").text(resp.bio);
  });

});

