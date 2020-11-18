var voorNaam = prompt("Vul je naam in")
var achterNaam = prompt("Vul je achternaam in")
var eMail = prompt("Vul je email in")
var leefTijd = prompt("Vul je leeftijd in")
var woonPlaats = prompt("Vul je woonplaats in")

if(leefTijd == 16){
    document.body.style.backgroundColor = "orange"
}

if(leefTijd == 17){
    document.body.style.backgroundColor = "blue"
}

if(leefTijd == 18){
    document.body.style.backgroundColor = "gold"
}

if(leefTijd == 19){
    document.body.style.backgroundColor = "green"
}

document.getElementById("voorNaam").innerHTML = voorNaam
document.getElementById("achterNaam").innerHTML = achterNaam
document.getElementById("eMail").innerHTML = eMail
document.getElementById("leefTijd").innerHTML = leefTijd
document.getElementById("woonPlaats").innerHTML = woonPlaats