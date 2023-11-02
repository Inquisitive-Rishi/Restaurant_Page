import { content } from "./script";

export function showHomePage() {
    const section = document.createElement('section');
    const txt = document.createElement('h1')
    txt.textContent = 'Homepage';    
    section.appendChild(txt)
    content.appendChild(section);
}