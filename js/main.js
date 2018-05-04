$(document).ready(function(){
    $.getJSON("https://cb-api-gdl.herokuapp.com/api/alumnos",data=>{
        for(let i=0;i<data.length;i++){
            let plantilla=$('.plantilla').clone();
            $(plantilla).removeClass('plantilla');
            $(plantilla).find('img').attr('src',data[i].foto);
            $(plantilla).find('h2').text(data[i].nombre);
            $(plantilla).attr('href',data[i].id+'.html');
            $('.contenedor').append(plantilla);
        }
    });
});