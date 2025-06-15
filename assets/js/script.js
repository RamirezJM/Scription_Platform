const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:{
    delay: 4000
  }
})

/* const tabs = document.querySelectorAll('#tabs > ul>li>a')
for(let i=0; i>tabs.length; i++){
  tabs[i].addEventListener('click', selectTab)
}
function selectTab(even){
  even.preventDefault()

  for(let i=0; i > tabs.length; i++){
    tabs[i].removeAttribute('class')
  }
  even.target.className = 'active'

const thisTab = even.target.getAttribute('href')
const thisContent = document.querySelector(thisTab)
const oldTabContent = document.querySelector('.visible')
oldTabContent.className = 'visuallyhidden'
} */



const tabs = document.querySelectorAll('#tabs > ul > li > a');
tabs.forEach( tab => { tab.addEventListener('click', selectTab); });

function selectTab(event){
event.preventDefault();
tabs.forEach( tab => { tab.removeAttribute('class'); });
event.target.classList.add('active')


const thisTab = event.target.getAttribute('href');
const thisContent = document.querySelector(thisTab);
const oldTabContent = document.querySelector('.visible');


oldTabContent.classList.replace('visible','visuallyhidden');
oldTabContent.addEventListener('transitionend', () => {
oldTabContent.className = 'hidden';
thisContent.className = 'visible visuallyhidden';
setTimeout( () => {
thisContent.classList.remove('visuallyhidden');
}, 20);
}, { capture: false, once: true, passive: false });  
}
