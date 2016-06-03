// Accès au titre
var titreElt = document.querySelector("h1");
titreElt.textContent        = "Titre de mon formulaire"; // Ajout du titre
// Stylisation du titre
titreElt.style.color        = "#78AB4E";
titreElt.style.background   = "#404852"; 
titreElt.style.padding      = "10px";
titreElt.style.borderRadius = "10px";
titreElt.style.textAlign    = "center";

// Couleur sur les label
var labelElt = document.querySelectorAll("label");
for (i = 0; i < labelElt.length; i++){
    labelElt[i].style.color = "#78AB4E";
}

// Ajoute un placeholder
var nomUtilisateurElt = document.getElementById("nom_utilisateur");
nomUtilisateurElt.placeholder = "Ex: Jean";

// Ajout de la class input
var addClass = document.querySelectorAll("c_input");
for (i = 0; i < addClass.length; i++){
    addClass[i].classList.add("c_input");

}

document.getElementById("mot_de_passe").addEventListener("input", function (e){
    var mdp         = e.target.value;
    var longueurMdp = "faible";
    var couleurMsg  = "red";
    if(mdp.length >= 12){
        longueurMdp = "fort";
        couleurMsg  = "green";
    }else if (mdp.length <= 12 && mdp.length >= 8){
         longueurMdp = "correct";
         couleurMsg  = "orange";
    }else if (mdp.length == ""){
        longueurMdp = "";
    }
    var aideMdp = document.getElementById("aideMDP");
    aideMdp.textContent = "La longueur du mot de passe est " + longueurMdp;
    aideMdp.style.color = couleurMsg;
    
});


