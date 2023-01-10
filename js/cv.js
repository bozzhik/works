const email = document.getElementById('email')
const website = document.getElementById('website')
const tel = document.getElementById('tel')

const emailText = email.innerHTML
const websiteText = website.innerHTML
const telText = tel.innerHTML

function textAction() {
   website.addEventListener('mouseover', () => {
      website.innerHTML = 'my portfolio'
   })
   website.addEventListener('click', () => {
      website.innerHTML = 'website copied'
   })
   website.addEventListener('mouseout', () => {
      website.innerHTML = websiteText
   })

   email.addEventListener('mouseover', () => {
      email.innerHTML = 'copy my email?'
   })
   email.addEventListener('click', () => {
      email.innerHTML = 'email copied'
   })
   email.addEventListener('mouseout', () => {
      email.innerHTML = emailText
   })

   tel.addEventListener('mouseover', () => {
      tel.innerHTML = 'come on! call me'
   })
   tel.addEventListener('click', () => {
      tel.innerHTML = 'tel copied'
   })
   tel.addEventListener('mouseout', () => {
      tel.innerHTML = emailText
   })
}

textAction()
