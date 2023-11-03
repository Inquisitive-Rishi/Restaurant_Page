import { content } from "./script";

export function showContactPage() {
    const section = document.createElement('section');
    section.style.padding = '20px'
    section.style.display = 'flex'
    section.style.flexDirection = 'column'
    section.style.gap = '20px'

    
    const box1 = document.createElement('div')
    const box2 = document.createElement('div')
    const box3 = document.createElement('div')

    const boxes = [box1,box2,box3]



    boxes.forEach(box => {
        box.style.display = 'flex'
        box.style.padding = '20px';
        box.style.height = '150px';
        box.style.width = '350px';    
        box.style.border = '2px solid brown'
        section.appendChild(box)
    })

    content.appendChild(section);
}