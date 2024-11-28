let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // let user = document.querySelector("#user")
    // console.log(user.value);
    // let pass = document.querySelector("#pass")
    // console.log(pass.value);
    // alert(`privacy gayi ek taraf  , ${user.value} your password is ${pass.value}`);

    // one more thing for do this thing 

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
    alert(`privacy gayi ek taraf  , ${user.value} your password is ${pass.value}`);
})