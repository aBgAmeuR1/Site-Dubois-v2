const iconNav = document.querySelector(".icon");
const selectorNav = document.querySelector(".selector");

iconNav.addEventListener("click", () => {

  iconNav.classList.toggle("cross");
    selectorNav.classList.toggle("translation");

});
