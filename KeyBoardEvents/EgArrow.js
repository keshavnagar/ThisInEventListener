let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
    console.log("code = "+event.code )
    if (event.code == "KeyU") {
        console.log("character move forward");
    }
    else if (event.code == "KeyD") {
        console.log("character move down");
    }
    else if (event.code == "KeyR") {
        console.log("character move right");
    }
    else if(event.code == "KeyL")
    {
        console.log("character move left");
    }
})