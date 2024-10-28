  function script1() {
    let num1 = prompt("Entrez le premier nombre :");
    let num2 = prompt("Entrez le second nombre :");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Veuillez entrer des nombres valides.");
    } else {
      let result = multiply(num1, num2);
      alert("Le résultat de la multiplication est : " + result);
    }
  }

  function multiply(a, b) {
    return a * b;
  }

  function script2() {
    let num = prompt("Entrez un nombre :");

    num = parseInt(num);

    if (isNaN(num) || num <= 0) {
      alert("Veuillez entrer un nombre valide supérieur à 0.");
    } else {
      let result = sumUpTo(num);
      alert("La somme des nombres de 1 à " + num + " est : " + result);
    }
  }

  function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
