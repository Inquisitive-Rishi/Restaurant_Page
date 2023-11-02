import './style.css';

const body = document.querySelector('body')

const header = document.createElement('div')
const content = document.createElement('div')
const footer = document.createElement('div')

const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')

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
    el.style.backgroundColor = 'pink';
    el.style.height = '50px'
})

