const d = document,
  $main = d.getElementById("main"),
  $lugar = d.getElementById("lugar"),
  $template = d.getElementById("stays-template").content,
  $stay = $template.querySelector(".stays"),
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("stays.json"),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    /* console.log(json); */
    json.forEach((el) => {
      $stay.style.display = "block";
      d.querySelector(".total-stays").innerHTML = `${json.length}+ stays`;
      $stay.setAttribute("data-place", `${el.city}`);
      $stay.setAttribute("data-guests", `${el.maxGuests}`);
      $template.querySelector(".stay-image").src = el.photo;
      $template.querySelector(".host").content = superHost();

      function superHost() {
        if (el.superHost === true) {
          $template.querySelector(".host").style.display = "block";
          $template.querySelector(".host").innerHTML = "SUPER HOST";
        } else {
          $template.querySelector(".host").style.display = "none";
        }
      }

      $template.querySelector(".type").innerHTML = el.type;
      $template.querySelector(".beds").content = stayBeds();

      function stayBeds() {
        if (el.beds != null) {
          $template.querySelector(".beds").style.display = "block";
          $template.querySelector(".beds").innerHTML = `.${el.beds} beds`;
        } else {
          $template.querySelector(".beds").style.display = "none";
        }
      }
      $template.querySelector(".rating").innerHTML = el.rating;
      $template.querySelector(".stay-title").innerHTML = el.title;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $main.appendChild($fragment);

    var atr = d.querySelectorAll(".stays");
    var atrArr = Array.prototype.slice.call(atr);

    /* atrArr.forEach((el) => console.log(el.getAttribute("data-guests"))); */

    let Helsinki = atrArr.filter(
      (el) => el.getAttribute("data-place") === "Helsinki"
    );
    let Turku = atrArr.filter(
      (el) => el.getAttribute("data-place") === "Turku"
    );
    let Vaasa = atrArr.filter(
      (el) => el.getAttribute("data-place") === "Vaasa"
    );
    let Oulu = atrArr.filter((el) => el.getAttribute("data-place") === "Oulu");
    d.addEventListener("click", (e) => {
      if (
        e.target.matches("#btn-search") ||
        (e.target.matches(`${"#btn-search"} *`) &&
          $lugar.value === "Helsinki, Finland")
      ) {
        d.querySelector(".total-stays").innerHTML = `${Helsinki.length}+ stays`;
        atrArr.forEach((el) => {
          el.style.display = "none";
        });
        Helsinki.forEach((el) => {
          el.style.display = "block";
        });
        document.querySelector(".navbar").classList.add("none");
      }
      if (
        e.target.matches("#btn-search") ||
        (e.target.matches(`${"#btn-search"} *`) &&
          $lugar.value === "Turku, Finland")
      ) {
        d.querySelector(".total-stays").innerHTML = `${Turku.length}+ stays`;
        atrArr.forEach((el) => {
          el.style.display = "none";
        });
        Turku.forEach((el) => {
          el.style.display = "block";
        });
        document.querySelector(".navbar").classList.add("none");
      }
      if (
        e.target.matches("#btn-search") ||
        (e.target.matches(`${"#btn-search"} *`) &&
          $lugar.value === "Vaasa, Finland")
      ) {
        d.querySelector(".total-stays").innerHTML = `${Vaasa.length}+ stays`;
        atrArr.forEach((el) => {
          el.style.display = "none";
        });
        Vaasa.forEach((el) => {
          el.style.display = "block";
        });
        document.querySelector(".navbar").classList.add("none");
      }
      if (
        e.target.matches("#btn-search") ||
        (e.target.matches(`${"#btn-search"} *`) &&
          $lugar.value === "Oulu, Finland")
      ) {
        d.querySelector(".total-stays").innerHTML = `${Oulu.length}+ stays`;
        atrArr.forEach((el) => {
          el.style.display = "none";
        });
        Oulu.forEach((el) => {
          el.style.display = "block";
        });
        document.querySelector(".navbar").classList.add("none");
      }
    });
  } catch (err) {
    return console.error(err);
  }
};

d.addEventListener("DOMContentLoaded", getAll);
