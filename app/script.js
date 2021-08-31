const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animado'

function animeScroll() {

    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

if(target.length) {
    window.addEventListener('scroll', function() {
        animeScroll()
    })
}

const faceDetails = document.getElementById('face')
const bodyDetails = document.getElementById('body')
const setaFace = document.getElementById('setaFace')
const setaBody = document.getElementById('setaBody')

function showFace() {

    faceDetails.classList.toggle('myClass')
    setaFace.classList.toggle('seta')

}

function showBody() {

    bodyDetails.classList.toggle('myClass')
    setaBody.classList.toggle('seta')

}

