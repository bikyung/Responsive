const btn = document.querySelector(".btn");
const btn2 = document.querySelectorAll(".contentList button");
const content = document.querySelector(".content p");


btn.addEventListener('click', () => {
  content.classList.toggle('active');
})