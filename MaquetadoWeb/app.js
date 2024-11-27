import '/js/jquery.js'
import '/js/foundation.min.js'



$(document).ready(function(){


    /*if ($(this).val().length > 0) {
            $('#miBoton').prop('disabled', false);
        } else {
            $('#miBoton').prop('disabled', true);
        }*/


    //Validacion de los inputs

   
    /* $('#divs-container div.panel').change(function(e) {
        if($( 'input[type="text"]').val().length>0){
            console.log("Hola")
        }
  
    } );*/

    
    $("#enviar").click(function(e){
        e.preventDefault();
        $('input').each(function() {
            if($(this).val()===''){
                alert("Hay campos en blanco")

                return false;
            }else{
                alert("Información enviada correctamente")
                return false;
            }
  
    });
    });

    //Limpiar variables al cerrar el modal
    $(".close-button").click(function(){
        $('input[type="text"]').val('');
        window.location.reload()    //No supe como recolocar al primer div del modal, porque se bugeaba
    })


    //FUNCION PARA LAS OPCIONES DEL SELECT
    $('#paqueteria-opciones').change(function() {
        var opcion = $(this).val();
        let numeroAleatorio = generarNumeroAleatorio(1000, 30000);
        
        
        switch(opcion){
            case 'fedex':
                $('#tarifa').val('$'+numeroAleatorio);
                break;
            case 'estafeta':
                $('#tarifa').val('$'+numeroAleatorio);
                break;
            case 'dhl':
                $('#tarifa').val('$'+numeroAleatorio);
                break;
            case 'paquetexpress':
                $('#tarifa').val('$'+numeroAleatorio);
                break;
            case 'redpack':
                $('#tarifa').val('$'+numeroAleatorio);
                break;
            case 'ivoy':
                $('#tarifa').val('$'+numeroAleatorio);
                break;
            case 'noventaynueveminutos':
                $('#tarifa').val('$'+numeroAleatorio);
                break;
            
        }
    });

    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //FUNCIONES PARA CAMBIAR DE DIVS - ANTERIOR/SIGUIENTE
    $("#divs-container div.panel").each(function(e) {
        if (e != 0)
            $(this).hide();
  
    } );
  
    $("#siguiente").click(function(){
        if ($("#divs-container div.panel:visible").next().length != 0)
            $("#divs-container div.panel:visible").next().show().prev().hide();
        
        return false;
    });
  
    $("#anterior").click(function(){
        if ($("#divs-container div.panel:visible").prev().length != 0)
            $("#divs-container div.panel:visible").prev().show().next().hide();
        
        return false;
    });
  });
