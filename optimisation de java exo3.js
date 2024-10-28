let fruits = ["apple", "banana", "cherry"];
console.log(fruits[2]);  


let fruitss = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

function reverseWords(sentence) {
    let mots = sentence.split(" ");
    
    let motsInverses = mots.reverse();
    
    return motsInverses.join(" ");
}

let sentence = "I love programming";
console.log(reverseWords(sentence));  
