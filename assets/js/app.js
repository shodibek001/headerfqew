const menuEL = document.querySelector(".bi-list");
const sidebarEL = document.querySelector(".sidebar");
const closeEL = document.querySelector(".bi-x-lg");


menuEL.addEventListener("click", () => {
    sidebarEL.style.marginLeft = "0";
})


close.addEventListener("click", () => {
sidebarEL.style.marginLeft = "-50%";
})
