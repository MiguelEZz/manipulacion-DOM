const h1 = document.querySelector("h1")
const input = document.querySelector("input")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.getElementById("pid")

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "patito  "
console.log(h1.getAttribute("class"))
h1.setAttribute("class","elppe")

h1.classList.add("rojo")
h1.classList.remove("verde")

const img = document.createElement("img");
img.setAttribute("src", "https://static.platzi.com/static/images/conf/logo_black@2x.png") 
pid.append(img);