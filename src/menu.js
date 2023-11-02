import { content } from "./script";

export function showMenuPage() {
    const section = document.createElement('section');
    const txt = document.createElement('h1')
    txt.textContent = 'Menu';    

    section.appendChild(txt)
    content.appendChild(section);
}