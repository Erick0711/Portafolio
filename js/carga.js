window.onload = function carga(){
    $("#contenedor-carga").fadeOut();
    $("body").removeClass("hidden")
}
// const numero = document.querySelector(".numero");
// let contador = 0;

// setInterval(()=>{
//     if (contador === 80) {
//         clearInterval();
//     }else{
//         contador += 1;
//         numero.textContent = contador + "%";
//     }
// }, 80)


// CONTADOR DE PROGRESO MAS AGREGACION DE ESTILOS
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 80;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #fc490b ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);


let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");

let progressValue2 = 0;
let progressEndValue2 = 80;
let speed2 = 50;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      #2196f3 ${progressValue2 * 3.6}deg,
      #cadcff ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);


let progressBar3= document.querySelector(".circular-progress3");
let valueContainer3 = document.querySelector(".value-container3");

let progressValue3 = 0;
let progressEndValue3 = 70;
let speed3 = 50;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}%`;
  progressBar3.style.background = `conic-gradient(
      #5e3b7f ${progressValue3 * 3.6}deg,
      #cadcff ${progressValue3 * 3.6}deg
  )`;
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);

let progressBar4= document.querySelector(".circular-progress4");
let valueContainer4 = document.querySelector(".value-container4");

let progressValue4 = 0;
let progressEndValue4 = 30;
let speed4 = 50;

let progress4 = setInterval(() => {
  progressValue4++;
  valueContainer4.textContent = `${progressValue4}%`;
  progressBar4.style.background = `conic-gradient(
      #ffdf00 ${progressValue4 * 3.6}deg,
      #cadcff ${progressValue4 * 3.6}deg
  )`;
  if (progressValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);


let progressBar5= document.querySelector(".circular-progress5");
let valueContainer5 = document.querySelector(".value-container5");

let progressValue5 = 0;
let progressEndValue5 = 40;
let speed5 = 50;

let progress5 = setInterval(() => {
  progressValue5++;
  valueContainer5.textContent = `${progressValue5}%`;
  progressBar5.style.background = `conic-gradient(
      #000 ${progressValue5 * 3.6}deg,
      #cadcff ${progressValue5 * 3.6}deg
  )`;
  if (progressValue5 == progressEndValue5) {
    clearInterval(progress5);
  }
}, speed5);



