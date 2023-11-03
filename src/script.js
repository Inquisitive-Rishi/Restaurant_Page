import { showContactPage } from './contact';
import { showHomePage } from './home';
import { showMenuPage } from './menu';
import './style.css';

const body = document.querySelector('body')

export const header = document.createElement('div')
export const footer = document.createElement('div')
export const content = document.createElement('div')

const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')

body.style.display = 'flex';
body.style.flexDirection = 'column';
content.style.display = 'flex';
content.style.flex = 1;
content.style.justifyContent = 'center';
content.style.minHeight = '100vh';

homeBtn.textContent = 'HOME';
menuBtn.textContent = 'MENU';
contactBtn.textContent = 'CONTACT';

const btns = [homeBtn,menuBtn,contactBtn];
const contents = [header,content,footer]
const headerFooter = [header,footer];


// append buttons to header
btns.forEach(btn => {
    header.appendChild(btn)
    btn.style.padding = '10px';
    btn.style.borderRadius = '25px'
    btn.style.paddingRight = '20px'
    btn.style.paddingLeft = '20px'
    btn.style.fontSize = '1.05em'
    btn.style.fontWeight = 900;
    btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = 'rgb(21, 20, 20)'
        btn.style.color = 'white';
        btn.style.border = '2px solid white'
    })

    btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = "white";
        btn.style.color = 'black';
    })
});

// append header content footer to body
contents.forEach(content => body.appendChild(content));

    header.style.height = '70px'
    header.style.gap = '20px'
    footer.style.height = '50px'
    footer.style.backgroundColor = 'rgb(21, 20, 20)'
    footer.textContent = 'Copyright © Rishi Raj'
    footer.style.color = 'white'

// add same style to header and footer
headerFooter.forEach(el => {
    el.style.display = 'flex';
    el.style.justifyContent = 'center'
    el.style.alignItems = 'center'
})

function removeFirstChild() {
    if (content.firstChild) {
        content.firstChild.remove()
    }
}


defaultPageView()

function defaultPageView() {
    removeFirstChild();
    showHomePage();
}

homeBtn.addEventListener('click', () => {
    removeFirstChild()
    showHomePage()
});

menuBtn.addEventListener('click', () => {
    removeFirstChild()
    showMenuPage();
});

contactBtn.addEventListener('click', () => {
    removeFirstChild()
    showContactPage()
});

