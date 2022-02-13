document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.main__share--btn');
  const toggleMenu = document.querySelector('.main__share--menu');
  const path = document.querySelector('.main__share--btn').childNodes;
  
  toggleBtn.addEventListener('click', function(e){
    show();
    // path.classList.add('active');
  })

  window.addEventListener('resize', () => {
    if(window.innerWidth > 1024) {
      off();
    }
  })
  
  function show() {
    toggleBtn.classList.add('active');
    toggleMenu.style.display = 'flex';
  }
  function off() {
    // toggleMenu.style.display = none;
    toggleBtn.classList.remove('active');
  }

})
