// let btn = document.querySelector("button");
let btns = document.querySelectorAll("button");
// console.dir(btn);
// btn.onclick = function() {
//     // console.log("button was clicked");
//     alert("button was clicked");
// }


function sayHello(){
   alert(" YOU");
   
}
function sayHello(){
   alert("tum aye tha na yaha pe")
    
 }


for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = sayHello;
}

