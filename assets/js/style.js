
// make anmations when you scroll to section

let section = document.querySelector('.QUESTION') ;
let spans = document.querySelectorAll('.QUESTION .aria-progress .box-progress .progress span');
window.onscroll = () =>{
    if(window.scrollY > section.offsetTop + 100){
     spans.forEach(e=>{
      
        e.style.width = e.dataset.porgress
     })
    }
}

let sectionService = document.querySelector('.service')
let counts = document.querySelectorAll('.service .box .Achievements .counter');
let started = false
// fucntion counter ++ 
counts.forEach(e=>{startCounting(e)})
function startCounting(el){
 let data = el.dataset.num;
let interval = setInterval(()=>{
     el.textContent  ++
     if(el.textContent == data){
        clearInterval(interval)
     }
},200/data)
}

window.addEventListener('scroll',()=>{
    if(window.scrollY > sectionService.offsetTop + 300){
        if(!started){
            counts.forEach(e=>{startCounting(e)})
        }
       started = true;
    }
})
// slide start 
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 0,
    loop:true,
    centerslide:'true',
    fade:'true',
    interval : 4000,
    pause: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'fraction',
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    // .querySelector('.prepend-2-slides')
    // .addEventListener('click', function (e) {
    //   e.preventDefault();
    //   swiper.prependSlide([
    //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    //   ]);
    // });
  document
    // .querySelector('.prepend-slide')
    // .addEventListener('click', function (e) {
    //   e.preventDefault();
    //   swiper.prependSlide(
    //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    //   );
    // });
  document
    // .querySelector('.append-slide')
    // .addEventListener('click', function (e) {
    //   e.preventDefault();
    //   swiper.appendSlide(
    //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    //   );
    // });
  document
    // .querySelector('.append-2-slides')
    // .addEventListener('click', function (e) {
    //   e.preventDefault();
    //   swiper.appendSlide([
    //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    //   ]);
    // });
// slide ends
// add toggle class to nav or header 
let menuToggle = document.querySelector('header nav .navbar .navbar-toggler');
let nav_one = document.querySelector('header nav .navbar .navbar-toggler span:first-child');
let nav_two = document.querySelector('header nav .navbar .navbar-toggler span:nth-child(2)');
let nav_three = document.querySelector('header nav .navbar .navbar-toggler span:last-child');
menuToggle.onclick = ()=>{
nav_one.classList.toggle('nav_one');
nav_two.classList.toggle("nav_tow");
nav_three.classList.toggle('nav_three')
}

// add toggle class to nav or header 
let header = document.querySelector('header nav .navbar')
 window.addEventListener('scroll',()=>{
  if(window.scrollY > 200 ){
      header.classList.add('sticky') 
  }else{
    header.classList.remove('sticky') 
  }
 })

// make switch to links in header 

$(function(){
  'use strict';
 $('header nav .navbar .nav-item').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
 })
})