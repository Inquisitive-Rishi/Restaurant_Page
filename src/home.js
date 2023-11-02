import { content } from "./script";



export function showHomePage() {
    const txt = document.createElement('h1')
    txt.textContent = 'Homepage';    
    content.appendChild(txt);
}