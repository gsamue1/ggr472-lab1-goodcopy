function clicked() {
    console.log("You Clicked Me!")
}

//Event listener function 
var button = document.getElementById("my-btn")

button.addEventListener("click", function() {
    alert("You Clicked Me!");
});