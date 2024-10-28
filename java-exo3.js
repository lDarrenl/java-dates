function script1() {
    let nombre1 = parseInt(prompt("Entrez le premier nombre :"));
    let nombre2 = parseInt(prompt("Entrez le deuxième nombre :"));
    let nombre3 = parseInt(prompt("Entrez le troisième nombre :"));
    
    let tableau = [nombre1, nombre2, nombre3];
    
    let tableauDouble = tableau.map(function(nombre) {
        return nombre * 2;
    });
    
    alert("Tableau multiplié par deux : " + tableauDouble.join(", "));
}

function script2() {
    let tableau = [];
    for (let i = 0; i < 6; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i+1) + " :"));
        tableau.push(nombre);
    }

    function reverseArray(arr) {
        return arr.reverse();  
    }

    let tableauInverse = reverseArray(tableau);

    alert("Tableau inversé : " + tableauInverse.join(", "));
}

function script3() {
    let tableau = [];
    for (let i = 0; i < 6; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i + 1) + " :"));
        tableau.push(nombre);
    }

    function countOccurrences(arr, value) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                count++;
            }
        }
        return count;
    }

    let valeurRecherchee = parseInt(prompt("Entrez la valeur que vous souhaitez compter dans le tableau :"));

    let occurrences = countOccurrences(tableau, valeurRecherchee);

    alert("La valeur " + valeurRecherchee + " apparaît " + occurrences + " fois dans le tableau.");
}

function script4() {
    let tableau = [];
    for (let i = 0; i < 6; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i + 1) + " :"));
        tableau.push(nombre);
    }

    function mostFrequent(arr) {
        let occurrences = {};
        let maxCount = 0;
        let mostFrequentElement = null;

        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if (occurrences[el] === undefined) {
                occurrences[el] = 1;
            } else {
                occurrences[el]++;
            }

            if (occurrences[el] > maxCount) {
                maxCount = occurrences[el];
                mostFrequentElement = el;
            }
        }

        return mostFrequentElement;
    }

    let elementFrequent = mostFrequent(tableau);

    alert("L'élément le plus fréquent dans le tableau est : " + elementFrequent);
}

function script5() {
    let tableau = [];
    for (let i = 0; i < 6; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i + 1) + " :"));
        tableau.push(nombre);
    }

    function filterEven(arr) {
        return arr.filter(function(nombre) {
            return nombre % 2 === 0; 
        });
    }

    let nombresPairs = filterEven(tableau);

    alert("Les nombres pairs du tableau sont : " + nombresPairs.join(", "));
}

function script6() {
    let tableau1 = [];
    for (let i = 0; i < 3; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i + 1) + " pour le premier tableau :"));
        tableau1.push(nombre);
    }

    let tableau2 = [];
    for (let i = 0; i < 3; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i + 1) + " pour le deuxième tableau :"));
        tableau2.push(nombre);
    }

    function mergeArrays(arr1, arr2) {
        let mergedArray = [];

        for (let i = 0; i < arr1.length; i++) {
            mergedArray.push(arr1[i]);
        }

        for (let i = 0; i < arr2.length; i++) {
            mergedArray.push(arr2[i]);
        }

        return mergedArray;
    }

    let tableauFusionne = mergeArrays(tableau1, tableau2);

    alert("Le tableau fusionné est : " + tableauFusionne.join(", "));
}

function script7() {
    let tableau = [];
    for (let i = 0; i < 6; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i + 1) + " :"));
        tableau.push(nombre);
    }

    function removeDuplicates(arr) {
        let uniqueArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (!uniqueArray.includes(arr[i])) {
                uniqueArray.push(arr[i]); 
            }
        }
        return uniqueArray;
    }

    let tableauSansDoublons = removeDuplicates(tableau);

    alert("Le tableau sans doublons est : " + tableauSansDoublons.join(", "));
}

function script8() {
    let tableau = [];
    for (let i = 0; i < 6; i++) {
        let nombre = parseInt(prompt("Entrez le nombre " + (i + 1) + " :"));
        tableau.push(nombre);
    }

    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;  
            }
        }
        return true;  
    }

    let estTrie = isSorted(tableau);

    if (estTrie) {
        alert("Le tableau est trié dans l'ordre croissant.");
    } else {
        alert("Le tableau n'est pas trié dans l'ordre croissant.");
    }
}

function script9() {
    let phrase = prompt("Entrez une phrase :");

    function capitalizeWords(str) {
        let mots = str.split(" ");

        let motsCapitalises = mots.map(function(mot) {
            return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
        });

        return motsCapitalises.join(" ");
    }

    let phraseCapitalisee = capitalizeWords(phrase);

    alert("Phrase avec majuscule à chaque mot : " + phraseCapitalisee);
}

function script10() {
    let chaine = prompt("Entrez une chaîne de caractères :");

    let longueurMax = parseInt(prompt("Entrez la longueur maximale de la chaîne :"));

    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + "....";  
        } else {
            return str; 
        }
    }

    let chaineTronquee = truncateString(chaine, longueurMax);

    alert("Chaîne tronquée : " + chaineTronquee);
}
