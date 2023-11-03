import { showContactPage } from './contact';
import { showHomePage } from './home';
import { showMenuPage } from './menu';
import './style.css';

const body = document.querySelector('body')

const header = document.createElement('div')
const footer = document.createElement('div')
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
    btn.style.padding = '5px'
});

// append header content footer to body
contents.forEach(content => body.appendChild(content));

// add same style to header and footer
headerFooter.forEach(el => {
    el.style.display = 'flex';
    el.style.justifyContent = 'center'
    el.style.alignItems = 'center'
    el.style.gap = '10px';
    el.style.height = '50px'
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

