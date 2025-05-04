const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});

const navItems = document.querySelectorAll('.nav-item a');

navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.color = '#ccc';
  });

  item.addEventListener('mouseout', () => {
    item.style.color = '#fff';
  });
});