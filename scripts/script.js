// dynamic copyright
const copyRightYear = document.getElementById('copyright');
const year = document.createTextNode(new Date().getFullYear());
copyRightYear.appendChild(year);

// toggle navbar
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    navigation.classList.toggle("active")
})