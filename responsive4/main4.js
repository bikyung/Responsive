document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.main__share--btn');
  const toggleMenu = document.querySelector('.main__share--menu');
  const image = document.querySelector('.main__image');
  const name = document.querySelector('.main__name');
  const path = document.querySelector('.main__share--btn > svg').childNodes;
  
  toggleBtn.addEventListener('click', function(){
    toggleElements();
  })
  
  function toggleElements() {
    toggleBtn.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    path[0].classList.toggle('active');
    image.classList.toggle('active');
    name.classList.toggle('active');
  }

  window.addEventListener('resize', function(){
    if(window.innerWidth > 768) {
      offElements();
    } 
  })

  function offElements() {
    toggleBtn.classList.remove('active');
    toggleMenu.classList.remove('active');
    path[0].classList.remove('active');
    
  }
  
})
