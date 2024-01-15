document.getElementById("nosSportsBtn").addEventListener("click", function () {
  toggleSportsList();
});

document
  .querySelector(".sports-list")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      showSportDetails(event.target.dataset.sport);
    }
  });

function toggleSportsList() {
  const sportsList = document.querySelector(".sports-list");
  sportsList.classList.toggle("active-sport");
}

function showSportDetails(sport) {
  const sportDetails = document.getElementById("sportDetails");
  // Mettez à jour les détails du sport en fonction du sport sélectionné
  switch (sport) {
    case "K1":
      sportDetails.innerHTML = `
          <center><h2 style="color: rgb(255, 0, 0);">K1</h2></center>
          <p>Le K-1 est une forme de kick-boxing japonais...</p>
          <span class="image main"><img src="./images/models/jaber.jpg" alt="" /></span>
        `;
      break;
    case "ANGLAISE":
      sportDetails.innerHTML = `
          <center><h2 style="color: rgb(239, 233, 56);">Boxe Anglaise</h2></center>
          <p>La boxe anglaise, est un sport de combat...</p>
          <span class="image main"><img src="./images/models/jaber.jpg" alt="" /></span>
        `;
      break;
    case "BABY":
      sportDetails.innerHTML = `
          <center><h2 style="color: rgb(240, 163, 91);">Baby Boxe</h2></center>
          <p>La Baby Boxe se pratique généralement par des enfants...</p>
          <span class="image main"><img src="./images/models/jaber.jpg" alt="" /></span>
        `;
      break;
    // Ajoutez d'autres cas selon les sports
    default:
      sportDetails.innerHTML = "";
  }
  toggleSportsList();
}
