function soumet(){
j = 0 
  var checkvariable = document.getElementsByName("variable1");
  var messagevariable = "";
    for (var i=0; i < checkvariable.length; i++) {
        if (checkvariable[i].checked) {
        messagevariable += " " + checkvariable[i].value;
          j = j + 1 
          var q1 = ("Bonne réponse!")
var qu1 = document.getElementById("bon");
qu1.innerHTML = q1
              }

  
            }
  
  var checkvalise = document.getElementsByName("charAt1");
    var valisechoisi = "";
    for (var i = 0; i < checkvalise.length; i++) {
        if (checkvalise[i].checked) {
            valisechoisi = checkvalise[i].value;
          j = j + 1
          var q2 = ("Bonne réponse!");
          var qu2 = document.getElementById("bonne");
          qu2.innerHTML = q2
              }
      
            }
  
var optionvraifaux = document.getElementById("selvraioufaux").value;
        if (optionvraifaux == "vrai"){
         j = j + 1 
          var q3 = ("Bonne réponse!");
          var qu3 = document.getElementById("bonne1");
          qu3.innerHTML = q3
            }
  
 
var score = ("Votre resultat est" + " " + j  + " sur 3")
var score2 = document.getElementById("affichescore");
score2.innerHTML = score
}
  
  


