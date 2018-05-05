function obtenerDatos(){
        
    
        $.getJSON("https://cb-api-gdl.herokuapp.com/api/alumnos/5aebaa66818aba0014ae9c89", function(resp){
            
            $('.foto img').attr('src',resp.foto);
            $('.nombre').text(resp.nombre);
            $('.git').text(resp.github);
            /*$('.social').text(resp.social);*/
            $('.biog').text(resp.bio);
        });
    
}