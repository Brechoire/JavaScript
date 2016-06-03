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