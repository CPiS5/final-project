let btnElement = document.getElementById("reg")

btnElement.addEventListener("click", function() {
    alert("Fill Out The Forms")
})

let navEl = document.getElementById("nav")
let burgerEl = document.getElementById("burger")

burgerEl.addEventListener("click", function() {
    navEl.classList.toggle("activeNav")
})