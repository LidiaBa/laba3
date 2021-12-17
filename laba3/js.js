function skrit(){
document.getElementById("fcenter").style.display = "none"
}
function otkrit(){
document.getElementById("dcenter").style.display = "block"
}
function zatkrit(){
document.getElementById("dcenter").style.display = "none"
}
function pokazat(){
document.getElementById("fcenter").style.display = "block"
}
for (let a of document.getElementsByClassName("otmenit")){
a.addEventListener("click", skrit)
}
for (let a of document.getElementsByClassName("delte")){
a.addEventListener("click", otkrit)
}
for (let a of document.getElementsByClassName("dobavit")){
a.addEventListener("click", pokazat)
}
for (let a of document.getElementsByClassName("net")){
a.addEventListener("click", zatkrit)
}