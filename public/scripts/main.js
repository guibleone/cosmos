const menuLogo = document.getElementById("menuLogo");
const navigationDrawer = document.getElementById("navigationDrawer");
const rightArrow = document.getElementById("rightArrow");
const searchButton = document.getElementById("searchButton");

menuLogo.addEventListener("click", () => {
  navigationDrawer.style.width = "100%";
  searchButton.innerHTML = `<img src="/images/Search.png" alt="Imagem de lupa da busca." /> Buscar
        Astro`;
});

rightArrow.addEventListener("click", () => {
  navigationDrawer.style.width = "0";
  searchButton.innerText = "";
});
