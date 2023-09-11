let buttons = document.querySelectorAll("button");
let resultat = "";

function choisirOrdi(tab){
    let rand = Math.random()*tab.length | 0;
    let val = buttons[rand].textContent;
    return val;
}
for(let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        const choixUtilisateur = buttons[i].textContent;
        const choixOrdi = choisirOrdi(buttons);

        if(choixOrdi === choixUtilisateur ){
            resultat = "Egalité";
        }
        else if ((choixUtilisateur ==="Pierre" && choixOrdi=== "Ciseaux")||(choixUtilisateur === "Ciseaux" && choixOrdi === "Feuilles") ||   (choixUtilisateur === "Feuilles" && choixOrdi === "Pierre")){
            resultat = "Gagné";
        }
        else{
            resultat = "Perdu";
        }
    
        document.querySelector(".resultat").innerHTML = "Joueur : " + choixUtilisateur + "\n Robot : " + choixOrdi +"\n Résultat : " + resultat;
    })
  
}
