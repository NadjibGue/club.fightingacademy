// image en arriere Plan du site

document.addEventListener("DOMContentLoaded", function () {
  // Liste des classes d'images
  const imageClasses = ["image1", "image2", "image3"];

  let currentIndex = 0;

  // Fonction pour changer la classe toutes les 5 secondes (5000 ms)
  function changeImage() {
    document.getElementById("bg").className = imageClasses[currentIndex];
    currentIndex = (currentIndex + 1) % imageClasses.length;
    setTimeout(changeImage, 3000); // Appel récursif toutes les 5 secondes
  }

  // Démarrer la fonction de changement d'image
  changeImage();
});

//--------------------galerie-----------//

// Sélection des éléments du DOM pour les boutons et les sections
var photosBtn = document.getElementById("photosBtn");
var videoBtn = document.getElementById("videoBtn");
var familysBtn = document.getElementById("familysBtn");
var photosCarousel = document.querySelector(".carousel");
var videoCarousel = document.querySelector(".carouselV");
var familySections = document.getElementById("familySections");

// Ajout d'un écouteur d'événements sur le bouton "Nos Photos"
photosBtn.addEventListener("click", function () {
  // Fermer la section "Fighting Family" si elle est ouverte
  if (familySections.style.display === "block") {
    familySections.style.display = "none";
  }

  // Vérifier si le carrousel de photos est actuellement visible
  var isVisible = photosCarousel.style.display === "block";

  // Masquer ou afficher le carrousel de photos en fonction de son état actuel
  photosCarousel.style.display = isVisible ? "none" : "block";

  // Fermer le carrousel vidéo s'il est actuellement visible
  if (videoCarousel.style.display === "block") {
    videoCarousel.style.display = "none";
  }
});

// Ajout d'un écouteur d'événements sur le bouton "Nos VIDEO"
videoBtn.addEventListener("click", function () {
  // Fermer la section "Fighting Family" si elle est ouverte
  if (familySections.style.display === "block") {
    familySections.style.display = "none";
  }

  // Fermer le carrousel de photos s'il est actuellement visible
  if (photosCarousel.style.display === "block") {
    photosCarousel.style.display = "none";
  }

  // Vérifier si le carrousel de vidéos est actuellement visible
  var isVisible = videoCarousel.style.display === "block";

  // Masquer ou afficher le carrousel de vidéos en fonction de son état actuel
  videoCarousel.style.display = isVisible ? "none" : "block";
});

// Ajout d'un écouteur d'événements sur le bouton "Fighting Family"
familysBtn.addEventListener("click", function () {
  // Fermer le carrousel de photos s'il est actuellement visible
  if (photosCarousel.style.display === "block") {
    photosCarousel.style.display = "none";
  }

  // Fermer le carrousel vidéo s'il est actuellement visible
  if (videoCarousel.style.display === "block") {
    videoCarousel.style.display = "none";
  }

  // Toggle la visibilité de la section "Fighting Family"
  familySections.style.display =
    familySections.style.display === "none" ? "block" : "none";
});

// --------------footer-------------//

// JavaScript pour basculer la visibilité du footer au clic sur l'icône
var footer = document.getElementById("footer");
var toggleFooter = document.getElementById("toggleFooter");
var infoFooter = document.getElementById("infoFooter");

toggleFooter.addEventListener("click", function (event) {
  event.stopPropagation(); // Empêche la propagation du clic pour éviter la fermeture immédiate

  // Basculer la visibilité du footer
  footer.style.display = footer.style.display === "none" ? "block" : "none";

  // Si le footer est visible, afficher la liste d'informations
  if (footer.style.display === "block") {
    infoFooter.style.display = "block";
  } else {
    // Sinon, cachez la liste d'informations
    infoFooter.style.display = "none";
  }
});

// Gestionnaire d'événements pour fermer le footer et la liste d'informations si l'utilisateur clique en dehors
document.addEventListener("click", function (event) {
  if (event.target !== toggleFooter && !footer.contains(event.target)) {
    footer.style.display = "none";
    infoFooter.style.display = "none";
  }
});

// ---------------dicipline---------//

var toggleActivities = document.getElementById("toggleActivities");
var togglePlanning = document.getElementById("togglePlanning");

var activitiesList = document.querySelector(".sports-list");
var planningSection = document.querySelector(".planning-section");
var activitySections = document.querySelectorAll(".activity-section");

toggleActivities.addEventListener("click", function () {
  activitiesList.style.display =
    activitiesList.style.display === "none" ||
    activitiesList.style.display === ""
      ? "block"
      : "none";

  planningSection.style.display = "none";

  // Masquer toutes les sections d'activités
  activitySections.forEach(function (section) {
    section.style.display = "none";
  });
});

togglePlanning.addEventListener("click", function () {
  planningSection.style.display =
    planningSection.style.display === "none" ||
    planningSection.style.display === ""
      ? "block"
      : "none";

  activitiesList.style.display = "none";

  // Masquer toutes les sections d'activités
  activitySections.forEach(function (section) {
    section.style.display = "none";
  });
});

var sportsLinks = document.querySelectorAll(".sports-list a");
sportsLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionId = link.getAttribute("href").substring(1);
    var targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      // Masquer toutes les sections d'activités sauf la cible
      activitySections.forEach(function (section) {
        section.style.display =
          section.id === targetSectionId ? "block" : "none";
      });
    }
  });
});

//  LOGO
document.querySelector("#logo").addEventListener("click", function (event) {
  event.preventDefault();
  window.open(this.parentElement.href, "_blank");
});

//------------------------compt a rebours K1 ------------------

// Fonction pour obtenir la date de la prochaine séance de K1 (lundi, mercredi, vendredi à 19h30)
function getNextSessionDate() {
  var now = new Date();
  var nextSessionDate = new Date(now);

  // Calculer les jours restants jusqu'au prochain lundi, mercredi ou vendredi
  var daysUntilNextSession = (8 - now.getDay() + 1) % 7;
  nextSessionDate.setDate(now.getDate() + daysUntilNextSession);

  // Fixer l'heure à 19h30
  nextSessionDate.setHours(19, 30, 0, 0);

  // Vérifier si la séance est encore le même jour
  if (now.getHours() >= 19 && now.getHours() < 21) {
    // La séance est encore en cours aujourd'hui, passer à la prochaine séance
    nextSessionDate.setDate(nextSessionDate.getDate() + 3);
  }

  return nextSessionDate;
}

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
  var now = new Date();
  var nextSessionDate = getNextSessionDate();
  var timeDifference = nextSessionDate - now;

  if (timeDifference > 0) {
    var hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Afficher le compte à rebours
    document.getElementById("countdown-timer").textContent =
      hours + "h " + minutes + "m " + seconds + "s";
  } else {
    // La séance est déjà en cours (ou déjà passée)
    document.getElementById("countdown").textContent = "La séance est en cours";
  }
}

// Appeler la fonction pour mettre à jour le compte à rebours chaque seconde
setInterval(updateCountdown, 1000);

// Appeler la fonction une fois au chargement de la page pour éviter un délai initial
updateCountdown();
