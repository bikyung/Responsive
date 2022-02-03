const bugger = document.querySelector(".btn");
const navi = document.querySelector(".navi");
const sidebar = document.querySelector(".sidebar");

bugger.addEventListener('click', () => {
  navi.classList.toggle('active')
  sidebar.classList.toggle('active')
});