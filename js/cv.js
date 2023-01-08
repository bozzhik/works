const boot = document.getElementById('boot')

function textOnBoot() {
   setTimeout(() => {
      boot.style.animationPlayState = 'running'
      boot.innerHTML = 'Привет, мир!'
   }, 1000)
   setTimeout(() => {
      boot.innerHTML = 'Hello World!'
   }, 2250)
}

textOnBoot()
