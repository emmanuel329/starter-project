var first = document.getElementById("first-value");
var secound = document.getElementById("secound-value");
var output = document.querySelector("h1");


document.getElementById("add-btn").addEventListener("click", function(){
    const result = parseInt(first.value) + parseInt(secound.value);
    output.innerHTML = result
    
})
