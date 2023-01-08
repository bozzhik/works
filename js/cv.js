const boot = document.getElementById('boot')
const entryScreen = document.getElementById('entry')

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
