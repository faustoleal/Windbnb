document.addEventListener("click", (e) => {
  if (e.target.matches("#Helsinki") || e.target.matches(`${"#Helsinki"} *`)) {
    document.getElementById("lugar").value = "Helsinki, Finland";
    document.getElementById("location").value = "Helsinki, Finland";
  }

  if (e.target.matches("#Turku") || e.target.matches(`${"#Turku"} *`)) {
    document.getElementById("lugar").value = "Turku, Finland";
    document.getElementById("location").value = "Turku, Finland";
  }

  if (e.target.matches("#Vaasa") || e.target.matches(`${"#Vaasa"} *`)) {
    document.getElementById("lugar").value = "Vaasa, Finland";
    document.getElementById("location").value = "Vaasa, Finland";
  }

  if (e.target.matches("#Oulu") || e.target.matches(`${"#Oulu"} *`)) {
    document.getElementById("lugar").value = "Oulu, Finland";
    document.getElementById("location").value = "Oulu, Finland";
  }
});
