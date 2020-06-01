const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// JS Script for the work section 
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
portfolioItem.addEventListener('mouseover', () => {
  console.log(portfolioItem.childNodes[1].classList)
  portfolioItem.childNodes[1].classList.add('image-blur');
});

portfolioItem.addEventListener('mouseout', () => {
  console.log(portfolioItem.childNodes[1].classList)
  portfolioItem.childNodes[1].classList.remove('image-blur');
});
});

