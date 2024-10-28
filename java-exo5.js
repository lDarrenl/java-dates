function script1() {
    let birthDateStr = prompt("Entrez votre date de naissance (format: YYYY-MM-DD) :");

    const birthDate = new Date(birthDateStr);
    const today = new Date();
    
    if (birthDateStr && !isNaN(birthDate) && birthDate <= today) {
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();
  
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
  
      alert(`Vous avez ${age} ans.`);
    } else {
      alert("La date entrée n'est pas valide. Veuillez entrer une date au format YYYY-MM-DD.");
    }
}
  
function script2() {
    let dateStr = prompt("Entrez une date (format: YYYY-MM-DD) :");
  
    const date = new Date(dateStr);
    
    if (dateStr && !isNaN(date)) {

      date.setDate(date.getDate() + 7);
  
      const newDateStr = date.toISOString().split('T')[0];
      alert(`La date avec une semaine ajoutée est : ${newDateStr}`);
    } else {
      alert("La date entrée n'est pas valide. Veuillez entrer une date au format YYYY-MM-DD.");
    }
}
  
function script3() {
    let futureDateStr = prompt("Entrez une date dans le futur (format: YYYY-MM-DD HH:MM:SS) :");
  
    const futureDate = new Date(futureDateStr);
    const now = new Date();
  
    if (futureDateStr && !isNaN(futureDate) && futureDate > now) {

      let timeDifference = futureDate - now;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      timeDifference %= 1000 * 60 * 60 * 24;
  
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      timeDifference %= 1000 * 60 * 60;
  
      const minutes = Math.floor(timeDifference / (1000 * 60));
      timeDifference %= 1000 * 60;
  
      const seconds = Math.floor(timeDifference / 1000);
  
      alert(`Temps restant : ${days} jours, ${hours} heures, ${minutes} minutes, et ${seconds} secondes.`);
    } else {
      alert("La date entrée n'est pas valide ou n'est pas dans le futur. Veuillez entrer une date future au format YYYY-MM-DD HH:MM:SS.");
    }
}
  
function formatDate(dateStr) {
  const date = new Date(dateStr);

  if (!isNaN(date)) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('fr-FR', options);
    alert(`Date formatée : ${formattedDate}`);
  } else {
    alert("La date entrée n'est pas valide. Veuillez entrer une date au format YYYY-MM-DD.");
  }
}

function script4() {
  const dateStr = prompt("Entrez une date (format: YYYY-MM-DD) :");
  formatDate(dateStr);
}
