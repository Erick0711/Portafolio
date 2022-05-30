let cohete = document.getElementById("cohete")
let logCohete = document.getElementById("logo")
let cohetePagina = document.getElementById("cohete-pagina")

cohete.addEventListener("click", function(){
    cohete.classList.toggle("movimiento");
    cohetePagina.classList.toggle("movimiento");
})

