let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("submitted");
    console.log("submitted")
    
})