



class Article {

    constructor(nom , Marque , prix ,  date , Type , promotion   ){
this.nom = nom;
this.Marque = Marque;
this.prix = prix;
this.date = date;
this.Type = Type;
this.promotion = promotion;

    }

    details(){



alert( this.nom + "  " +  this.Marque + "  " +  this.prix + "  " +  this.date + "  " +  this.Type + "  " +  this.promotion )

    }

}








if(localStorage.Dataarray != null){

    var Dataarray = JSON.parse(localStorage.Dataarray) ;


} else {

    var Dataarray = [];

}


draw();



let validarray =[]

function validation(){
    validarray.length = 0 
    // la validation de nom

let RegexNom = /^[a-zA-Z-\s]+$/;

if(Nom.value.length === 0){
    document.getElementById("erorrNom").innerHTML = "ce champ obligatoir (superur a 2 caracteres)"
    document.getElementById("Nom").style =`border: 2px red solid;`
}else if(Nom.value.length === 1){
    document.getElementById("erorrNom").innerHTML = `C'est le nom (${Nom.value}) est plus petite que necessaire (superur a 2 caracteres)`
    document.getElementById("Nom").style =`border: 2px red solid;`
}else if(Nom.value.length >= 15){
    document.getElementById("erorrNom").innerHTML = `C'est le nom (${Nom.value.slice(0,15)}...) est tres grand (un nom entre 2 et 15 lettres est requis)  `
    document.getElementById("Nom").style =`border: 2px red solid;`
}else if(RegexNom.test(Nom.value) ===false){
    let getRegexNom =Nom.value.split("").filter((nn) => RegexNom.test(nn) === false).join(" ")
    document.getElementById("erorrNom").innerHTML = `il est interdit dutiliser les number et ca symboles comme ca(${getRegexNom}) dans le nom`
    document.getElementById("Nom").style =`border: 2px red solid;`
}else{
    document.getElementById("erorrNom").innerHTML = ""
    document.getElementById("Nom").style =`border: 2px green solid;`
    validarray.push(true)
}

// la validation de marque 

let validMrque = /^[a-zA-Z-\s]+$/;

if(Marque.value.length === 0){
    document.getElementById("erorrMarque").innerHTML = "ce champ obligatoir (superur a 2 caracteres)"
    document.getElementById("Marque").style =`border: 2px red solid;`
}else if(Marque.value.length === 1){
    document.getElementById("erorrMarque").innerHTML = `C'est le nom de Marque (${Marque.value}) est plus petite que necessaire (superur a 2 caracteres)`
    document.getElementById("Marque").style =`border: 2px red solid;`
}else if(Marque.value.length >= 15){
    document.getElementById("erorrMarque").innerHTML = `C'est le Marque (${Marque.value.slice(0,15)}...) est tres grand (un Marque entre 2 et 15 lettres est requis)`
    document.getElementById("Marque").style =`border: 2px red solid;`
}else if(validMrque.test(Marque.value) ===false){
    let getRegexMarque =Marque.value.split("").filter((nn) => validMrque.test(nn) === false).join(" ")
    document.getElementById("erorrMarque").innerHTML = `il est interdit dutiliser les number et ca symboles comme ca(${getRegexMarque}) dans le Marque`
    document.getElementById("Marque").style =`border: 2px red solid;`
}else{
    document.getElementById("erorrMarque").innerHTML = ""
    document.getElementById("Marque").style =`border: 2px green solid;`
    validarray.push(true)
}

// la validation de prix 

let validPrix = /^[0-9]+\$?\£?\.?[0-9]+\$?\£?$/;

if(Prix.value.length === 0){
    document.getElementById("erorrPrix").innerHTML = "ce champ obligatoir (superur a 2 caracteres)"
    document.getElementById("Prix").style =`border: 2px red solid;`
}else if(validPrix.test(Prix.value) === false){
    let getvalidPrix = Prix.value.split("").filter((ellm )=>isNaN(parseInt(ellm))).join(" ");

    document.getElementById("erorrPrix").innerHTML = `number (${getvalidPrix})`
    document.getElementById("Prix").style =`border: 2px red solid;`
}else {
    document.getElementById("erorrPrix").innerHTML = ""
    document.getElementById("Prix").style =`border: 2px green solid;`
    validarray.push(true)
}

// La validation de la date

if (Ladate.value.length === 0) {
    document.getElementById("erorrdate").innerHTML="ce champ obligatoir";
    document.getElementById("Ladate").style=`border: red 2px solid`;
}else {
    document.getElementById("erorrdate").innerHTML="";
    document.getElementById("Ladate").style=`border: green 2px solid`;
    validarray.push(true)
}

// La validation de la type

let Type = document.getElementById("Type").value

if(Type == "Choisissez dans la liste"){
    document.getElementById("erorrType").innerHTML="ce champ obligatoir";
    document.getElementById("Type").style=`border: red 2px solid`;
}else{
    document.getElementById("erorrType").innerHTML="";
    document.getElementById("Type").style=`border: green 2px solid`;
    validarray.push(true)
}

// La validation de la promotion

let promotion  = document.getElementsByClassName("Promotion");

if(promotion [0].checked === false && promotion [1].checked == false){
    document.getElementById("erorrPromotion").innerHTML="ce champ obligatoir";
}else{
    document.getElementById("erorrPromotion").innerHTML="";
    validarray.push(true)
}

console.log(validarray)


// push true dans un array

if(validarray.length == 6 ){
    return true 
} else {
    return false
}

}

// functin draw un table

function draw(){
    document.getElementById('tbody').innerHTML=""
for(i=0 ; i<Dataarray.length ; i++) {
    document.querySelector('tbody').innerHTML += 
    `<td>${Dataarray[i].nom}</td>
    <td>${Dataarray[i].Marque}</td>
    <td>${Dataarray[i].prix}</td>
    <td>${Dataarray[i].date}</td>
    <td>${Dataarray[i].Type}</td>
    <td>${Dataarray[i].promotion}</td>
    <td><button onclick='modifier(${i})' id="modifi_table">modifier</button></td>
    <td><button onclick='supprimer(${i})' id="supprimer_table">supprimer</button></td>
    `
}
}

function vide(){
    Nom.value ="";
    Marque.value ="";
    Prix.value ="";
    Ladate.value ="";
    document.getElementById('Type').value ="Choisissez dans la liste";
    document.querySelector('form').promotion [0].checked = false
    document.querySelector('form').promotion [1].checked = false
}

function border(){
    document.getElementById("Nom").style =`border: none;`
    document.getElementById("Marque").style =`border: none;`
    document.getElementById("Prix").style =`border: none;`
    document.getElementById("Ladate").style=`border: none`;
    document.getElementById("Type").style=`border: none`;
}

// Ajouter

Ajouter.onclick =function(){
    if(validation()){

        let newdata = new Article(Nom.value , Marque.value , Prix.value ,  Ladate.value , document.getElementById('Type').value , document.querySelector('form').promotion.value )

        newdata.details();

        Dataarray.push(newdata )
        draw()
        vide()
        border()
        console.log(Dataarray)




        localStorage.setItem('Dataarray', JSON.stringify(Dataarray) );

}
}




function supprimer(){

    document.getElementById('pup').style='display:inline-block'
    document.getElementById("contenu").style.filter="blur(5px)"







}

function modifier(index){
    document.getElementById('Modifier').style='display:block',
    document.getElementById('Ajouter').style='display:none',
    console.log(Dataarray[index].nom)
    Nom.value  = Dataarray[index].nom 
    Marque.value = Dataarray[index].Marque 
    Prix.value = Dataarray[index].prix
    Ladate.value = Dataarray[index].date 
    document.getElementById('Type').value = Dataarray[index].Type 
    document.querySelector('form').promotion.value = Dataarray[index].promotion 
    document.getElementById("Modifier").setAttribute("onclick",`submitModifier(${index})`) 




}



function submitModifier(index){
    document.getElementById('Modifier').style='display:none'
    document.getElementById('Ajouter').style='display:block'
    Dataarray[index].nom = Nom.value 
    Dataarray[index].Marque = Marque.value 
    Dataarray[index].prix = Prix.value 
    Dataarray[index].date = Ladate.value
    Dataarray[index].Type = document.getElementById('Type').value 
    Dataarray[index].promotion = document.querySelector('form').promotion.value
    draw()
    vide()

    localStorage.setItem('Dataarray', JSON.stringify(Dataarray) );


}


// button supprimier
function submitsupprimerr(index) {

    Dataarray.splice(index , 1)
    draw()
    document.getElementById('pup').style=' display: none';
    document.getElementById("contenu").style.filter="blur(0)"


    localStorage.setItem('Dataarray', JSON.stringify(Dataarray) );



}

// button anuule

function annule() {
    document.getElementById('pup').style=' display: none';
    document.getElementById("contenu").style.filter="blur(0)"
}


