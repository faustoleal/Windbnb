document.addEventListener("click", (e) => {
  if (e.target.matches("#location") || e.target.matches("#guests")) {
    document.querySelector(".navbar").classList.remove("none");
  }
  if (e.target.matches("#close")) {
    document.querySelector(".navbar").classList.add("none");
  }
});
