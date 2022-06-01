window.onload = function carga(){
    $("#contenedor-carga").fadeOut();
    $("body").removeClass("hidden")
}
const numero = document.querySelector(".numero");
let contador = 0;

setInterval(()=>{
    if (contador === 80) {
        clearInterval();
    }else{
        contador += 1;
        numero.textContent = contador + "%";
    }
}, 80)



