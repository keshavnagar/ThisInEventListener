let btns = document.querySelectorAll("button");
function sayHello(){
    alert("hello");
}

function sayName(){
    alert("your name is k");
}

for(btn of btns )
{
    btn.onclick = sayHello;
    // btn.onclick = sayName;
}