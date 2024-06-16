// Smooth scroll
document.addEventListener("DOMContentLoaded", function() {

  
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            if (this.hash !== "") {
                event.preventDefault();

                const hash = this.hash;

                document.querySelector("html").scrollTop = document.querySelector(hash).offsetTop;
                document.querySelector("body").scrollTop = document.querySelector(hash).offsetTop;

                window.location.hash = hash;
            }
        });
    });
});

// nav logo color change
lg = document.getElementById("logo");
list =  Array.prototype.slice.call(document.getElementsByClassName("link"));
nvbar =  Array.prototype.slice.call(document.getElementsByClassName("nvbar"));

window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;
  
    // Check if the scroll position is within the defined color change points
    if (scrollPosition >= 170 ) {
      lg.classList.add('lg');
      list.forEach(function (item) {
        item.classList.add("clr");
    });
      nvbar.forEach(function (item) {
        item.classList.add("nvbar-bg");
    });
      
    }else{
      lg.classList.remove('lg');
      list.forEach(function (item) {
        item.classList.remove("clr");
    });
    nvbar.forEach(function (item) {
        item.classList.remove("nvbar-bg");
    });
    }
  });

// Typing Effect

var i = 0;
var j = 0;
var txt = ["WEB DEVELOPER.","ANDROID DEVELOPER.","ML ENGINEER."];
var speed = 50;

function typeWriter() {
  if (i < txt[j].length) {
    document.getElementById("profession").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
    
    setTimeout(eraseText, 1000)
  }

}

function eraseText(){
  var ele = document.getElementById("profession").innerHTML;
  if(i>=0){
    document.getElementById("profession").innerHTML = txt[j].substring(0,i);
    i--;
    setTimeout(eraseText, 50);
  }
  else{
    j++;
    if(j==txt.length){
      j=0;
    }
    setTimeout(typeWriter,400)
  }
}

typeWriter();

function changeLogoText() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("logo").innerHTML = "KUNDAN";
  } else {
    document.getElementById("logo").innerHTML = "KUNDAN JANGALE";
  }
}

window.addEventListener("resize", changeLogoText);
