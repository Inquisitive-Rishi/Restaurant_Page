import { content } from "./script";

export function showMenuPage() {
    const section = document.createElement('section');

    const bevrageBox = document.createElement('div')
    const starterBox = document.createElement('div')
    const mainCourseBox = document.createElement('div')
    
    const boxes = [bevrageBox,starterBox,mainCourseBox] 

    const bevTitle = document.createElement('h2');
    const startTitle = document.createElement('h2');
    const mainCourseTitle = document.createElement('h2');

    bevTitle.textContent = 'Bevrages';
    startTitle.textContent = 'Starter';
    mainCourseTitle.textContent = 'Main-Courses';

    bevrageBox.appendChild(bevTitle)
    starterBox.appendChild(startTitle)
    mainCourseBox.appendChild(mainCourseTitle)

    const titles = [bevTitle,startTitle,mainCourseTitle];


    titles.forEach(title => {
        title.style.marginLeft = 'auto'
        title.style.marginRight = 'auto'
        title.style.marginTop = '10px'    
    })

    boxes.forEach(box => {
        box.style.display = 'flex'
        box.style.borderRadius = '30px'
        box.style.height = '500px';
        box.style.width = '800px';    
        box.style.border = '2px solid brown'
        box.style.marginBottom = '20px'
    })


    section.style.display = 'grid'
    section.style.margin = '30px'

    section.appendChild(bevrageBox)
    section.appendChild(starterBox)
    section.appendChild(mainCourseBox)
    content.appendChild(section);
}