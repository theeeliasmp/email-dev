window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

const hamburger = document.querySelector(".hamburger");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNavMenu.classList.toggle("active");
})

window.onclick = function(event) {
  if (!event.target.matches('.hamburger')) {
    hamburger.classList.remove("active");
    mobileNavMenu.classList.remove("active");
  }
    
}
