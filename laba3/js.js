function skrit(){
document.getElementById("centerforma").style.display = "none"
}
function otkrit(){
document.getElementById("centerp").style.display = "block"
}
function zatkrit(){
document.getElementById("centerp").style.display = "none"
}
function pokazat(){
document.getElementById("centerforma").style.display = "block"
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
