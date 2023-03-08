
let navBar1 = document.getElementById('nav1');
let navBar2 = document.getElementById('nav2');
let cross = document.getElementById('cross');
let ham = document.getElementById('ham');
let overlay = document.getElementById('overlay');


ham.addEventListener('click', () => {
  // navBar2.style.display = 'block';
  navBar2.classList.add('showbar');
  navBar2.classList.remove('closebar');
  ham.style.display = 'none';
  cross.style.display = 'block';
  overlay.style.display = 'block';
} )

cross.addEventListener('click', () => {
  // navBar2.style.display = 'none';
  navBar2.classList.add('closebar');
  navBar2.classList.remove('showbar');
  cross.style.display = 'none';
  ham.style.display = 'inline-block';
  overlay.style.display = 'none';
} )



  function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


