import homeImage from './bharat.jpg'; 
import { header,footer,content } from "./script";

export function showHomePage() {
    const homeImg = new Image()
    homeImg.src = homeImage;
    content.classList.remove('menu-bg')
    content.classList.remove('wood-bg')
    content.classList.add('home-bg')
    const section = document.createElement('section');
    const title = document.createElement('h1')
    const subtxt = document.createElement('p')
    const timeBtn = document.createElement('button');
    const timeAndLocation = document.createElement('div');

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

    timeBtn.style.marginRight = 'auto';

    timeAndLocation.appendChild(timeBtn)
    section.style.margin = '100px'

    header.style.backgroundColor = 'black';

    section.appendChild(title)
    section.appendChild(subtxt)
    section.appendChild(timeAndLocation)
    content.appendChild(section);
}