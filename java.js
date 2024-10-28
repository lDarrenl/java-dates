function script1() {
    let numbers = "";
    for (let i = 1; i <= 10; i++) {
        numbers += i + "\n"; 
    }
    alert(numbers);
}

function script2() {
    let numbersList = [];
    for (let i = 1; i <= 10; i++) {
        numbersList.push(i); 
    }
    console.log(numbersList); 
    alert("La liste de 1 à 10 a été affichée dans la console.");
}

function script3() {
    let largeur = prompt("Veuillez entrer la largeur de votre jardin :");
    let hauteur = prompt("Veuillez entrer la hauteur de votre jardin :");

    largeur = parseFloat(largeur);
    hauteur = parseFloat(hauteur);

    if (isNaN(largeur) || isNaN(hauteur)) {
        alert("Veuillez entrer des valeurs valides pour la largeur et la hauteur.");
    } else {
        let perimetre = 2 * (largeur + hauteur);
        alert("Le périmètre de votre jardin est : " + perimetre);
    }
}

function script4() {
    let chiffre = prompt("Veuillez entrer un chiffre :");

    chiffre = parseInt(chiffre);

    if (isNaN(chiffre)) {
        alert("nn mes serieux un chiffre ou un nombre soit pas débile");
    } else {
        if (chiffre % 3 === 0 || chiffre % 5 === 0) {
            alert("Gagné ! 10 miliard de point");
        } else {
            alert("nul");
        }
    }
}

function script5() {
    let score1 = prompt("Entrez le score de l'équipe 1 :");
    let score2 = prompt("Entrez le score de l'équipe 2 :");
    let score3 = prompt("Entrez le score de l'équipe 3 :");

    score1 = parseFloat(score1);
    score2 = parseFloat(score2);
    score3 = parseFloat(score3);

    if (isNaN(score1) || isNaN(score2) || isNaN(score3)) {
        alert("nul");
    } else {
        if (score1 > score2 && score1 > score3) {
            alert("L'équipe 1 a le score le plus élevé !");
        } else if (score2 > score1 && score2 > score3) {
            alert("L'équipe 2 a le score le plus élevé !");
        } else if (score3 > score1 && score3 > score2) {
            alert("L'équipe 3 a le score le plus élevé !");
        } else {
            alert("Il y a une égalité entre les équipes.");
        }
    }
}

function script6() {
    let nombre = prompt("Veuillez entrer un chiffre :");

    nombre = parseInt(nombre);

    if (isNaN(nombre) || nombre <= 1) {
        alert("Veuillez entrer un nombre valide supérieur à 1.");
    } else {
        let estPremier = true;

        for (let i = 2; i <= Math.sqrt(nombre); i++) {
            if (nombre % i === 0) {
                estPremier = false;
                break;
            }
        }

        if (estPremier) {
            alert(nombre + " est un nombre premier.");
        } else {
            alert(nombre + " n'est pas un nombre premier.");
        }
    }
}

function script7() {
    let compteur = 3;
    let resultats = "";

    while (compteur <= 30) {
        resultats += compteur + "\n"; 
        compteur += 3; 
    }

    alert(resultats); 
}

function script8() {
    let nombre = prompt("Veuillez entrer un nombre :");

    if (isNaN(nombre)) {
        alert("Veuillez entrer un nombre valide.");
    } else {
        let nombreStr = nombre.toString();

        if (nombreStr[0] === '-') {
            nombreStr = nombreStr.slice(1);
        }

        alert("Le nombre " + nombre + " contient " + nombreStr.length + " chiffres.");
    }
}

function script9() {
    let nombre = prompt("Veuillez entrer un nombre :");

    if (isNaN(nombre)) {
        alert("Veuillez entrer un nombre valide.");
    } else {
        let somme = 0;
        let nombreStr = nombre.toString();

        if (nombreStr[0] === '-') {
            nombreStr = nombreStr.slice(1);
        }

        for (let i = 0; i < nombreStr.length; i++) {
            somme += parseInt(nombreStr[i]);
        }

        alert("La somme des chiffres du nombre " + nombre + " est : " + somme);
    }
}

function script10() {
    let secondes = prompt("Veuillez entrer un nombre en secondes :");

    if (isNaN(secondes) || secondes < 0) {
        alert("Veuillez entrer un nombre de secondes valide.");
    } else {
        let minutes = Math.floor(secondes / 60); 
        let resteSecondes = secondes % 60; 

        alert(secondes + " secondes équivalent à " + minutes + " minute(s) et " + resteSecondes + " seconde(s).");
    }
}

function script11() {
    let nombre = prompt("Veuillez entrer un nombre avec plus de 2 chiffres :");

    if (isNaN(nombre) || nombre.length <= 2) {
        alert("Veuillez entrer un nombre valide avec plus de 2 chiffres.");
    } else {
        let nombreInverse = nombre.split('').reverse().join('');

        alert("Le nombre inversé est : " + nombreInverse);
    }
}
