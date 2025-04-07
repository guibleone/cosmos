const menuLogo = document.getElementById("menuLogo");
const navigationDrawer = document.getElementById("navigationDrawer");
const rightArrow = document.getElementById("rightArrow");
const searchButton = document.getElementById("searchButton");

menuLogo.addEventListener("click", () => {
  navigationDrawer.style.width = "100%";
  document.body.style.overflow = "hidden";
});

rightArrow.addEventListener("click", () => {
  navigationDrawer.style.width = "0";
  document.body.style.overflow = "";
});

//======= Search Dialog =========
const searchDialog = document.getElementById("searchDialog");

function openDialog() {
  document.body.classList.add("modal-open");
  searchDialog.showModal();
}

// Fecha com ESC automaticamente (já funciona por padrão)
// Fecha ao clicar fora:
searchDialog.addEventListener("click", (event) => {
  const rect = searchDialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) {
    document.body.classList.remove("modal-open");
    searchDialog.close();
  }
});
