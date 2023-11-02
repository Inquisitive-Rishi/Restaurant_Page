import { content } from "./script";

export function showContactPage() {
    const section = document.createElement('section');
    section.style.padding = '20px'
    section.style.display = 'flex'
    section.style.flexDirection = 'column'
    section.style.gap = '20px'

    
    const contact1 = document.createElement('div')
    const contact2 = document.createElement('div')
    const contact3 = document.createElement('div')

    const boxes = [contact1,contact2,contact3]

    boxes.forEach(box => {
        box.style.display = 'flex'
        box.style.height = '150px';
        box.style.width = '350px';    
        box.style.border = '2px solid brown'
        section.appendChild(box)
    })

    content.appendChild(section);
}