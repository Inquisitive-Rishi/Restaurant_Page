import { content } from "./script";

export function showHomePage() {
    const section = document.createElement('section');
    const title = document.createElement('h1')
    const subtxt = document.createElement('p')
    const timeBtn = document.createElement('button');
    const timeAndLocation = document.createElement('div');
    const locationTitle = document.createElement('h3')
    const locationSubtitle = document.createElement('p')
    
    title.textContent = 'TANDOORI TWIST';
    title.style.fontFamily = 'samarkan';
    title.style.fontSize = '70px'
    title.style.letterSpacing = '2px'
    subtxt.textContent = "Tandoori Twist invites you to experience the rich and fiery flavors of Indian cuisine. Our tandoor oven sizzles with mouthwatering kebabs and bread, while our chefs craft delectable curries and biryanis. Every dish is a testament to India's culinary heritage, and we're proud to bring it to your table."

    timeAndLocation.style.display = 'flex'
    timeAndLocation.style.alignItems = 'center'

    subtxt.style.marginBottom = '30px'

    timeBtn.textContent = 'Our Timings';
    timeBtn.style.padding = '10px';
    timeBtn.style.fontSize = '1.3rem'

    locationTitle.textContent = 'Location'
    locationSubtitle.textContent = 'Near Govardhan Fort, Wakanda - 220232'
    timeBtn.style.marginRight = 'auto';

    timeAndLocation.appendChild(timeBtn)
    timeAndLocation.appendChild(locationTitle)
    timeAndLocation.appendChild(locationSubtitle)
    section.style.margin = '100px'

    section.appendChild(title)
    section.appendChild(subtxt)
    section.appendChild(timeAndLocation)
    content.appendChild(section);
}