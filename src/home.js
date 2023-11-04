import homeImage from './bharat.jpg'; 
import { header,footer,content } from "./script";

export function showHomePage() {

    const homeImg = new Image()
    homeImg.src = homeImage;
    content.classList.remove('menu-bg')
    content.classList.remove('wood-bg')
    content.classList.add('home-bg')

    // content.style.alignItems = 'center'


    const section = document.createElement('section');
    const title = document.createElement('h1')
    const subtxt = document.createElement('p')
    const timeBtn = document.createElement('button');
    const timeAndLocation = document.createElement('div');
    const locationTitle = document.createElement('h3')
    const locationSubtitle = document.createElement('p')

    subtxt.style.fontSize = '1.5em'
    subtxt.style.fontFamily = 'Times New Roman'
    subtxt.style.fontWeight = 900;

    timeBtn.addEventListener('click', () => {
        dialog.showModal()
    })

    timeBtn.style.border = '2px solid white'
    timeBtn.style.backgroundColor = 'black'
    timeBtn.style.color = 'white'
    timeBtn.style.fontWeight = 900;
    
    title.textContent = 'TANDOORI TWIST';
    title.style.fontFamily = 'samarkan';
    title.style.fontSize = '70px'
    title.style.letterSpacing = '2px'
    subtxt.textContent = "Tandoori Twist invites you to experience the rich and fiery flavors of Indian cuisine. Our tandoor oven sizzles with mouthwatering kebabs and bread, while our chefs craft delectable curries and biryanis. Every dish is a testament to India's culinary heritage, and we're proud to bring it to your table."

    title.style.color = 'white'
    subtxt.style.color = 'white'

    timeAndLocation.style.display = 'flex'
    timeAndLocation.style.alignItems = 'center'

    subtxt.style.marginBottom = '30px'

    timeBtn.textContent = 'Our Timings';
    timeBtn.style.padding = '10px';
    timeBtn.style.fontSize = '1.3rem'


    timeAndLocation.appendChild(timeBtn)
    timeAndLocation.appendChild(locationTitle)
    timeAndLocation.appendChild(locationSubtitle)
    section.style.margin = '100px'


    const dialog = document.querySelector('dialog')
    const closeModalBtn = document.getElementById('close-modal-btn')
    dialog.style.margin = 'auto'
    dialog.style.padding = '30px'
    dialog.style.fontSize = '1.5em'
    dialog.style.borderRadius = '10px'
    dialog.style.backgroundColor = 'rgb(21, 20, 20)'
    dialog.style.color = 'white'
    dialog.style.fontFamily = 'sans-serif'

    closeModalBtn.style.marginTop = '10px'
    closeModalBtn.style.fontSize = '1em'
    closeModalBtn.style.padding = '5px'
    closeModalBtn.style.color = 'white'
    closeModalBtn.style.backgroundColor = 'rgb(21, 20, 20)'
    closeModalBtn.style.borderRadius = '25px'
    closeModalBtn.style.border = '2px solid white'
    closeModalBtn.style.paddingRight = '10px'
    closeModalBtn.style.paddingLeft = '10px'


    timeBtn.addEventListener('click', () => {
        dialog.showModal()
    })

    closeModalBtn.addEventListener('click', () => {
        dialog.close()
    })

    header.style.backgroundColor = 'black';

    section.style.display = 'flex'
    section.style.width = '50%'
    section.style.textAlign = 'center'
    section.style.flexDirection = 'column'
    section.style.alignItems = 'center'

    section.appendChild(title)
    section.appendChild(subtxt)
    section.appendChild(timeAndLocation)
    content.appendChild(section);
}