import './style.css'

const body = document.querySelector('body')

const header = document.createElement('div')
const content = document.createElement('div')
const footer = document.createElement('div')

const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')

header.style.display = 'flex';
header.style.justifyContent = 'center'
header.style.alignItems = 'center'
header.style.gap = '10px';
header.style.backgroundColor = 'pink';
header.style.height = '50px'

homeBtn.textContent = 'HOME';
menuBtn.textContent = 'MENU';
contactBtn.textContent = 'CONTACT';

const btns = [homeBtn,menuBtn,contactBtn]

btns.forEach(btn => {
    header.appendChild(btn)
    btn.style.padding = '5px'
});

body.appendChild(header)



