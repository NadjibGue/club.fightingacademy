document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les données depuis localStorage
  var formData = JSON.parse(localStorage.getItem("formulaireData")) || {};
  console.log("FormData from localStorage:", formData);

  // Afficher les données générales dans votre page
  Object.keys(formData).forEach(function (key) {
    var element = document.getElementById(key);
    if (element) {
      if (element.tagName === "INPUT" || element.tagName === "SELECT") {
        element.value = formData[key];
      } else {
        element.textContent = formData[key];
      }
    }
  });

  // Vérifier le type d'inscription
  var typeInscription = formData.typeInscription;
  var autorisationParentaleSection = document.getElementById(
    "autorisationParental"
  );

  if (typeInscription === "mineur" && autorisationParentaleSection) {
    // Afficher les données spécifiques de l'autorisation parentale pour les mineurs
    document.getElementById("nomParental").textContent =
      formData.nomParental || "";
    document.getElementById("nomEnfant").textContent = formData.nomEnfant || "";
    document.getElementById("autorisationChoix").textContent =
      formData.autorisation || "";
    document.getElementById("lieu").textContent = formData.lieu || "";
    document.getElementById("date").textContent = formData.date || "";

    // Afficher la section "Autorisation Parentale"
    autorisationParentaleSection.style.display = "block";
  } else {
    // Masquer la section "Autorisation Parentale" pour les adultes
    if (autorisationParentaleSection) {
      autorisationParentaleSection.style.display = "none";
    }
  }

  // Imprimer automatiquement
  window.print();
});
