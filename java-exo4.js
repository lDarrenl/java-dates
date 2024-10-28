function script1() {

    let nom = prompt("Entrez votre nom:");
    let prenom = prompt("Entrez votre prénom:");
    let age = prompt("Entrez votre âge:");
  
    let newUser = {
      nom: nom,
      prenom: prenom,
      age: age
    };
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    users.push(newUser);
  
    if (users.length > 2) {
      if (confirm("Le nombre maximal d'utilisateurs est atteint. Supprimer l'utilisateur le plus ancien ?")) {
        users.shift(); 
      }
    }

    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Utilisateur ajouté avec succès !");
  }
  
  function script2() {

    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.length > 0) {
      let latestUser = users[users.length - 1];
      alert(`Nom: ${latestUser.nom}\nPrénom: ${latestUser.prenom}\nÂge: ${latestUser.age}`);
    } else {
      alert("Aucun utilisateur trouvé.");
    }
  }

function script3() {

    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.length > 0) {
      users.forEach(user => {

        user.greet = function() {
          return `Yo, mon nom est ${this.nom} ${this.prenom}`;
        };
  
        alert(user.greet());
      });
    } else {
      alert("Aucun utilisateur enregistré.");
    }
  }
  
  function script4() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.length > 0) {
      users[users.length - 1].nom = "redacted";
      users[users.length - 1].age = 30;
  
      localStorage.setItem("users", JSON.stringify(users));
      alert("Le dernier utilisateur a été modifié.");
    } else {
      alert("Aucun utilisateur trouvé.");
    }
  }

  function script5() {
    const car = {
      brand: "Toyota",
      model: "Corolla",
      year: 2020,
      start: function() {
        alert("The car is starting");
      },
      info: function() {
        alert(`Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`);
      }
    };
  
    car.start();
    car.info();
  }

  function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
      alert("The car is starting");
    };
  }
  
  function script6() {
    const car1 = new Car("Toyota", "Corolla", 2020);
    const car2 = new Car("Honda", "Civic", 2019);
    const car3 = new Car("Ford", "Mustang", 2021);
  
    car1.start();
    car2.start();
    car3.start();
  }
  