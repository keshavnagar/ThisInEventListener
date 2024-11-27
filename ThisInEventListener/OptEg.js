let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");

let ChangeColor = function(){

    this.style.backgroundColor = "blue";

}

btn.addEventListener("click",ChangeColor)
h1.addEventListener("click",ChangeColor)
h2.addEventListener("click",ChangeColor)
p.addEventListener("click",ChangeColor)