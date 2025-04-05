const menuLogo = document.getElementById("menuLogo");
const navigationDrawer = document.getElementById("navigationDrawer");
const rightArrow = document.getElementById("rightArrow");
const searchButton = document.getElementById("searchButton");

menuLogo.addEventListener("click", () => {
  navigationDrawer.style.width = "100%";
  searchButton.innerHTML = `<img src="/images/Search.svg" alt="Imagem de lupa da busca." /> Buscar
        Astro`;
  document.body.style.overflow = "hidden";
});

rightArrow.addEventListener("click", () => {
  navigationDrawer.style.width = "0";
  searchButton.innerText = "";
  document.body.style.overflow = "";
});
