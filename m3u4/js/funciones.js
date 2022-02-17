var btn1 = document.getElementById("c1");
var btn2 = document.getElementById("c2");
var btn3 = document.getElementById('c3');

btn1.addEventListener("click", function(){
    document.querySelector("body").style.setProperty("background-color","blue");
})

btn2.addEventListener("click", function(){
    document.querySelector("body").style.setProperty("background-color","yellow");
})

btn3.addEventListener("click", function(){
    document.querySelector("body").style.setProperty("background-color","red");
})

