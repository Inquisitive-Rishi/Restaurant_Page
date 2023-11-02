import { content } from "./script";

export function showHomePage() {
    const section = document.createElement('section');
    const title = document.createElement('h1')
    const subtxt = document.createElement('p')
    title.textContent = 'TANDOORI TWIST';
    title.style.fontFamily = 'samarkan';
    title.style.fontSize = '70px'
    title.style.letterSpacing = '2px'
    subtxt.textContent = "Tandoori Twist invites you to experience the rich and fiery flavors of North Indian cuisine. Our tandoor oven sizzles with mouthwatering kebabs and bread, while our chefs craft delectable curries and biryanis. Every dish is a testament to India's culinary heritage, and we're proud to bring it to your table."
   
    section.style.margin = '100px'
    section.appendChild(title)
    section.appendChild(subtxt)
    content.appendChild(section);
}