function initiales(){
  var prenom = document.getElementById("txtpnom").value
  var millieunom = document.getElementById("txtmnom").value
  var nomdefamille = document.getElementById("txtnom").value
 var affiche = ("Vos initiales sont " + prenom.charAt(0) +"." + millieunom.charAt(0) + "." +  nomdefamille.charAt(0) + ".")
  var afficheI = document.getElementById("afficheinitiales");
  afficheI.innerHTML = affiche
}

function nomcomplet(){
  var prenom = document.getElementById("txtpnom").value;
  var millieunom = document.getElementById("txtmnom").value;
  var nomdefamille = document.getElementById("txtnom").value;
  var affichenom = ("Votre nom complet est " + " "  + prenom + " " + millieunom + " " + nomdefamille);
  var affichen = document.getElementById("affichenomcomplet");
  affichen.innerHTML = affichenom
}

function nomutilisateur(){
  var prenom = document.getElementById("txtpnom").value;
  var millieunom = document.getElementById("txtmnom").value;
  var nomdefamille = document.getElementById("txtnom").value;
  var afficheutilisateur = ("Votre nom d'utilisateur est " + prenom.charAt(0) + millieunom.charAt(0) + nomdefamille) 
  var afficheu = document.getElementById("afficheu")
  afficheu.innerHTML = afficheutilisateur
}

