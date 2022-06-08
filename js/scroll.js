// SCROLL

let animado = document.querySelectorAll(".animado");
  

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;

    for(let i = 0; i < animado.length; i++){

        let alturaAnimado = animado[i].offsetTop;

        if(alturaAnimado - 450 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarElemento");
        }
    }
}

window.addEventListener("scroll", mostrarScroll);

$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}
