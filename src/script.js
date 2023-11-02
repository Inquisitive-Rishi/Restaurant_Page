
const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')

homeBtn.setAttribute('id','header-btn')
menuBtn.setAttribute('id','content-btn')
contactBtn.setAttribute('id','footer-btn')

homeBtn.textContent = "HOME"
menuBtn.textContent = "MENU"
contactBtn.textContent = "CONTACT"

const btns = [homeBtn,menuBtn,contactBtn]

btns.forEach(btn => {
    document.body.appendChild(btn)
})