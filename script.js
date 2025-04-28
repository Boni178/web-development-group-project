//this code helps to make the navbar transparent when you scroll past the home section 

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('.home'); 
  
    window.addEventListener('scroll', () => {
      const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
  
      if (window.scrollY < homeBottom) {
        navbar.classList.add('fixed');
        navbar.classList.remove('hidden');
      } else {
        navbar.classList.remove('fixed');
        navbar.classList.add('hidden'); 
      }
    });
  });