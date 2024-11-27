let btns = document.querySelectorAll("button");
function sayHello(){
    alert("hello");
}
function sayName(){
    alert("your name is k");
}
function sayHieght(){
    alert("7 inch");
    console.log('you double clicked me ');
}
for(btn of btns )
{
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",sayHieght);
}
