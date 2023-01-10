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
   website.addEventListener('mouseout', () => {
      website.innerHTML = websiteText
   })

   email.addEventListener('mouseover', () => {
      email.innerHTML = 'copy my email?'
   })
   email.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText).then(
         () => {
            email.innerHTML = 'email copied!'
         },
         () => {
            email.innerHTML = 'error, copy it yourself'
         }
      )
   })
   email.addEventListener('mouseout', () => {
      email.innerHTML = emailText
   })

   tel.addEventListener('mouseover', () => {
      tel.innerHTML = 'come on! call me'
   })
   tel.addEventListener('mouseout', () => {
      tel.innerHTML = telText
   })
}

textAction()
