$(document).ready(function(){
    
    /*
    // al hacer clic sobre el div que tiene este ID...
    $("#irInicio").click(function(){
        // guardar en una variable la posicion de un elemento
        var posicionInicio = $("#seccionInicio").offset().top;
        // y bajar el body hasta esa posicion, tardando 1 segundo
        $("html, body").animate({scrollTop:posicionInicio+"px"},1000);
    });
    */

    // al hacer clic sobre el enlace que tiene este ID...
    $("#imprimir").click(function(){
        // ejecutar esta funcion
        MostrarDialogoImprimir();
    });

});

// ------------------------------------------------------------------

// se declara la funcion
function MostrarDialogoImprimir() {
    window.print();
}
