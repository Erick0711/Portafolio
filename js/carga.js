window.onload = function carga(){
    $("#contenedor-carga").fadeOut();
    $("body").removeClass("hidden")
}

// CONTADOR DE PROGRESO
const lengHtml = document.querySelector(".html"),
 lengCss = document.querySelector(".css"),
 lengBootstrap = document.querySelector(".bootstrap"),
 lengJs = document.querySelector(".js"),
 lengPhp = document.querySelector(".carga-php"),
 lengLaravel = document.querySelector(".laravel");
// const numero2 = document.querySelector(".numero2");

let contador = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;

setInterval(()=>{
    if (contador === 85) {
        clearInterval();
    }else{
        contador += 1;
        lengHtml.textContent = contador + "%";
    }

    if(contador2 === 85){
      clearInterval();
    }else{
      contador2 += 1;
      lengCss.textContent = contador2 + "%";
    }

    if(contador3 === 70){
      clearInterval();
    }else{
      contador3 += 1;
      lengBootstrap.textContent = contador3 + "%";
    }

    if(contador4 === 40){
      clearInterval();
    }else{
      contador4 += 1;
      lengJs.textContent = contador4 + "%";
    }
    
    if(contador5 === 45){
      clearInterval();
    }else{
      contador5 += 1;
      lengPhp.textContent = contador5 + "%";
    }

    if(contador6 === 30){
      clearInterval();
    }else{
      contador6 += 1;
      lengLaravel.textContent = contador6 + "%";
    }
}, 90)



