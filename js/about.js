const boot = document.getElementById('boot')
const entryScreen = document.getElementById('entry')
const whoScreen = document.getElementById('who')
const skillsScreen = document.getElementById('skills')
const aboutScreen = document.getElementById('about')
const textGradient = document.getElementById('colorized')
const buttons = document.getElementById('buttons')

const works = document.getElementById('works')
const github = document.getElementById('github')
const find = document.getElementById('find')
const resume = document.getElementById('resume')
const titleWorks = document.getElementById('title-works')
const titleGithub = document.getElementById('title-github')
const titleFind = document.getElementById('title-find')
const titleResume = document.getElementById('title-resume')

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
   whoScreen.style.display = 'block'
   whoScreen.style.animationPlayState = 'running'
   skillsScreen.style.display = 'block'
   skillsScreen.style.animationPlayState = 'running'
   aboutScreen.style.display = 'block'
   aboutScreen.style.animationPlayState = 'running'
   buttons.style.display = 'block'
   buttons.style.animationPlayState = 'running'
}, 3500)

function changeGradientPosition() {
   textGradient.addEventListener('mousemove', (event) => {
      const x = event.offsetX
      const y = event.offsetY

      const percentX = Math.max(0.2, Math.min(1.5, x / textGradient.offsetWidth))
      const percentY = Math.max(0.2, Math.min(0.8, y / textGradient.offsetHeight))

      textGradient.style.animation = 'none'
      textGradient.style.transition = 'all 0.5s ease'
      textGradient.style.backgroundPosition = `${percentX * 100}% ${percentY * 100}%`
   })

   textGradient.addEventListener('mouseleave', () => {
      textGradient.style.animation = 'animatedgradient 5s ease alternate infinite'
      textGradient.style.transition = 'all 0.25s ease'
   })
}

changeGradientPosition()

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
