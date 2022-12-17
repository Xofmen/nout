let btnContainer = document.querySelector(".myDIV");
let btns = btnContainer.querySelectorAll(".botton");
let white_h3 = document.querySelector(".white_h3");
let img = document.querySelector("img");
let btn = document.querySelector(".btn");
let btns2 = btn.querySelectorAll(".btn_fotter");
let dolar = document.querySelector(".dolar");
let togle = document.getElementById("toggle-button");
let black = document.querySelectorAll(".black");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.classList.add("active");
  });
  btns[0].onclick = () => {
    img.src = "img/Silver.png";
    white_h3.innerText = "White";
  };
  btns[1].onclick = () => {
    img.src = "img/White.png";
    white_h3.innerText = "Space Grey";
  };
}

for (let i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.classList.add("active2");
  });
  btns2[0].onclick = () => {
    dolar.innerText = "$1,999";
  };
  btns2[1].onclick = () => {
    dolar.innerText = "$2,199";
  };
  btns2[2].onclick = () => {
    dolar.innerText = "$2,599";
  };
  btns2[3].onclick = () => {
    dolar.innerText = "$3,199";
  };
}
