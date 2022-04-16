//Variables
const openNav = document.querySelector('.open img'),
     closeNav = document.querySelector('.close img'),
     navigation = document.querySelector('nav'),
     logoNav = document.querySelector('.logo-and-nav'),
     container = document.querySelector('.container'),
     body = document.querySelector('body'),
     next = document.querySelector('.next'),
     prev = document.querySelector('.prev'),
     slider = document.querySelector('.slider'),
     images = document.querySelector('.images'),
     img = document.querySelectorAll('.img-container picture img')


let idx = 0
console.log(img);

//EventListeners
openNav.addEventListener('click', () =>  {
    navigation.classList.add('show')
    container.classList.add('show-nav')
    // logoNav.style.transform = 'translate(-300%)'
})

closeNav.addEventListener('click', () =>  {
    navigation.classList.remove('show')
})

next.addEventListener('click', () => {
   idx ++

   changeImg()
})

prev.addEventListener('click', () => {
    idx --
 
    changeImg()
})

function changeImg() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    

    let x = window.matchMedia("(min-width: 600px)")
    if (x.matches) {
        images.style.transform = `translateX(${-idx * 87.5}rem)`
    }else{
        images.style.transform = `translateX(${-idx * 37.5}rem)`
    }

}

window.addEventListener('scroll', () => {
    if(document.body.getBoundingClientRect().top <= -100){
        document.querySelector('.main-head').classList.add('scroll-effect')
    } else{
        document.querySelector('.main-head').classList.remove('scroll-effect')
    }
})