function soumet(){
j = 0 
  var checkvariable = document.getElementsByName("variable");
  var messagevariable = "";
     
        if (checkvariable[0].checked) {
        messagevariable += " " + checkvariable[0].value;
          j = j + 1 
          var q1 = ("Bonne réponse!")
var qu1 = document.getElementById("bon");
qu1.innerHTML = q1
              }
  else {
    rep1 = ("La bonne reponse est ParseInt :(")
    var repo = document.getElementById("mauvais");
    repo.innerHTML = rep1
  }

  
          
  
  var checkvalise = document.getElementsByName("charAt");
    var valisechoisi = "";
        if (checkvalise[0].checked && !checkvalise[1].checked) {
            valisechoisi = checkvalise[0].value;
          j = j + 1
          var q2 = ("Bonne réponse!");
          var qu2 = document.getElementById("bonne");
          qu2.innerHTML = q2
              }
  else {
    rep2 = ("La bonne reponse est charAt :(")
    var repo2 = document.getElementById("mauvais2");
    repo2.innerHTML = rep2
  }
      
          
  
var optionvraifaux = document.getElementById("selvraioufaux").value;
        if (optionvraifaux == "vrai"){
         j = j + 1 
          var q3 = ("Bonne réponse!");
          var qu3 = document.getElementById("bonne1");
          qu3.innerHTML = q3
            }
  else{
    rep3 = ("La bonne reponse est vrai :(")
    var repo3 = document.getElementById("mauvais3");
    repo3.innerHTML = rep3
  }
  
 
var score = ("Votre resultat est" + " " + j  + " sur 3")
var score2 = document.getElementById("affichescore");
score2.innerHTML = score
}
  
  


