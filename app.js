window.addEventListener('scroll', () =>{
const header = document.querySelector('nav');
header.classList.toggle('scroled', window.scrollY > 0);
})