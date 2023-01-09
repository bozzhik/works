const boot = document.getElementById('boot')
const entryScreen = document.getElementById('entry')
const whoScreen = document.getElementById('who')
const aboutScreen = document.getElementById('about')
const textGradient = document.getElementById('colorized')

function changeGradientPosition() {
   textGradient.addEventListener('mousemove', (event) => {
      const x = event.offsetX
      const y = event.offsetY

      const percentX = x / textGradient.offsetWidth
      const percentY = y / textGradient.offsetHeight

      textGradient.style.animation = 'none'
      textGradient.style.transition = 'all 0.25s ease'
      textGradient.style.backgroundPosition = `${percentX * 100}% ${percentY * 100}%`
   })

   textGradient.addEventListener('mouseleave', () => {
      textGradient.style.animation = 'animatedgradient 5s ease alternate infinite'
      textGradient.style.transition = 'all 0.25s ease'
   })
}

changeGradientPosition()

function textOnBoot() {
   setTimeout(() => {
      boot.style.animationPlayState = 'running'
   }, 1000)
   setTimeout(() => {
      boot.innerHTML = `LOOK AT MY AWESOME RESUME`
   }, 2000)
   setTimeout(() => {
      boot.style.display = 'none'
   }, 3000)
}

textOnBoot()

setTimeout(() => {
   entryScreen.style.display = 'block'
   entryScreen.style.animationPlayState = 'running'
}, 3500)

const works = document.getElementById('works')
const github = document.getElementById('github')
const find = document.getElementById('find')
const resume = document.getElementById('resume')
const titleWorks = document.getElementById('title-works')
const titleGithub = document.getElementById('title-github')
const titleFind = document.getElementById('title-find')
const titleResume = document.getElementById('title-resume')

function showTitleCards() {
   works.addEventListener('mouseenter', function () {
      titleWorks.style.opacity = 1
      titleWorks.animationPlayState = 'running'
   })
   github.addEventListener('mouseenter', function () {
      titleGithub.style.opacity = 1
   })
   find.addEventListener('mouseenter', function () {
      titleFind.style.opacity = 1
   })
   resume.addEventListener('mouseenter', function () {
      titleResume.style.opacity = 1
   })
   works.addEventListener('mouseleave', function () {
      titleWorks.style.opacity = 0
   })
   github.addEventListener('mouseleave', function () {
      titleGithub.style.opacity = 0
   })
   find.addEventListener('mouseleave', function () {
      titleFind.style.opacity = 0
   })
   resume.addEventListener('mouseleave', function () {
      titleResume.style.opacity = 0
   })
}

showTitleCards()

setTimeout(() => {
   whoScreen.style.display = 'block'
   whoScreen.style.animationPlayState = 'running'
}, 3500)

setTimeout(() => {
   aboutScreen.style.display = 'block'
   aboutScreen.style.animationPlayState = 'running'
}, 3500)
