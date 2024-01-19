// impression.js
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les données depuis localStorage
  var formData = JSON.parse(localStorage.getItem("formulaireData")) || {};

  // Afficher les données dans votre page
  Object.keys(formData).forEach(function (key) {
    // Vérifier si l'élément existe avant de le mettre à jour
    var element = document.getElementById(key);
    if (element) {
      // Mettre à jour le texte ou la valeur de l'élément
      if (element.tagName === "INPUT" || element.tagName === "SELECT") {
        element.value = formData[key];
      } else {
        element.textContent = formData[key];
      }
    }
  });

  // Ligne récupérer le type d'inscription
  document.getElementById("typeInscription").textContent = formData.typeInscription || '';

  // Imprimer automatiquement
  window.print();
});

