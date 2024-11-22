let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    // console.log(this);
    // console.log(this.innerHTML)
    // console.log(this.innerText)
    // console.log(btn)
    // console.dir(this)
    console.dir(this.baseURI)
    this.style.backgroundColor = "blue";
    // this.style.backgroundColor = "white";
    
})

