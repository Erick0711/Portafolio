const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});


const vitae = document.getElementById("cv")


// vitae.addEventListener("click", ()=>{
//     vitae.style.backgroundImage = "url('../icon/folder.png')";
//     vitae.style.width = "50px";
//     vitae.style.height = "50px";
//     vitae.style.backgroundSize = "cover";
//     vitae.style.border = "none";
//     vitae.innerHTML = ""
// })

vitae.addEventListener("click", (e)=>{
  if (e.detail.value) {
    vitae.classList.remove("login-button")
  } else{
    vitae.classList.add("cv_descargar")
  }
})




