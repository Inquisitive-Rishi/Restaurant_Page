import { content } from "./script";

export function showContactPage() {
    const section = document.createElement('section');
    const txt = document.createElement('h1')
    txt.textContent = 'Contact';    
    section.appendChild(txt)
    content.appendChild(section);
}