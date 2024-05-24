var a= document.getElementById("bt");
var b= document.getElementById("btt");
var c= document.getElementById("login");
var d= document.getElementById("signup");
a.onclick=  function (){
    c.style.display="none";
    d.style.display="block";
}

b.onclick= function(){
    c.style.display="block";
    d.style.display="none";
}