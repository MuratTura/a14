var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    musicicon = document.querySelector('.music_box'),
    menuicon = document.querySelector('.menu_icon_box'),
    navvv = document.querySelector('.navvv'),
    icerik = document.querySelector('.icerik'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 6000


musicicon.onclick = function(){
    musicicon.classList.toggle("active");
}

menuicon.onclick = function(){
    menuicon.classList.toggle("active");
    navvv.classList.toggle("active");
    musicicon.classList.remove("active");
}

icerik.onclick = function(){
    menuicon.classList.remove("active");
    navvv.classList.remove("active");
    musicicon.classList.remove("active");
}
list.onclick = function(){
    musicicon.classList.remove("active");
}

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 5s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

var eleman1 = document.querySelector('#eleman1'),
    hizmet1 = document.querySelector('.hizmet1'),
    hizmet2 = document.querySelector('.hizmet2'),
    hizmet3 = document.querySelector('.hizmet3'),
    hizmet4 = document.querySelector('.hizmet4'),
    hizmet5 = document.querySelector('.hizmet5'),
    hizmet6 = document.querySelector('.hizmet6'),
    hizmet7 = document.querySelector('.hizmet7'),
    hizmet8 = document.querySelector('.hizmet8'),
    hizmet9 = document.querySelector('.hizmet9'),
    hizmet10 = document.querySelector('.hizmet10'),
    hizmet11 = document.querySelector('.hizmet11'),
    hizmet12 = document.querySelector('.hizmet12')


eleman1.onclick= function(){
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet1.classList.toggle("active")
}

eleman2.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet2.classList.toggle("active")
}
eleman3.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet3.classList.toggle("active")
}

eleman4.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet4.classList.toggle("active")
}

eleman5.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet5.classList.toggle("active")
}

eleman6.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet6.classList.toggle("active")
}

eleman7.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet7.classList.toggle("active")
}

eleman8.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet8.classList.toggle("active")
}

eleman9.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet9.classList.toggle("active")
}

eleman10.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet10.classList.toggle("active")
}

eleman11.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet12.classList.remove("active")
    hizmet11.classList.toggle("active")
}

eleman12.onclick= function(){
    hizmet1.classList.remove("active")
    hizmet2.classList.remove("active")
    hizmet3.classList.remove("active")
    hizmet4.classList.remove("active")
    hizmet5.classList.remove("active")
    hizmet6.classList.remove("active")
    hizmet7.classList.remove("active")
    hizmet8.classList.remove("active")
    hizmet9.classList.remove("active")
    hizmet10.classList.remove("active")
    hizmet11.classList.remove("active")
    hizmet12.classList.toggle("active")
}