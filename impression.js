// impression.js
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les données depuis localStorage
  var formData = JSON.parse(localStorage.getItem("formulaireData")) || {};

  // Afficher les données dans votre page
  Object.keys(formData).forEach(function (key) {
    document.getElementById(key).textContent = formData[key];
  });

  // Imprimer automatiquement
  window.print();
});
