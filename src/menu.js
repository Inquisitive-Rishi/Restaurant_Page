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

    bevrageBox.style.display = 'flex'
    bevrageBox.style.flexWrap = 'wrap';
    bevrageBox.style.borderRadius = '30px'
    bevrageBox.style.height = '500px';
    bevrageBox.style.width = '800px';    
    bevrageBox.style.border = '2px solid brown'
    bevrageBox.style.marginBottom = '20px'

    starterBox.style.display = 'flex'
    starterBox.style.flexWrap = 'wrap';
    starterBox.style.borderRadius = '30px'
    starterBox.style.height = '500px';
    starterBox.style.width = '800px';    
    starterBox.style.border = '2px solid brown'
    starterBox.style.marginBottom = '20px'
    
    mainCourseBox.style.display = 'flex'
    mainCourseBox.style.flexWrap = 'wrap';
    mainCourseBox.style.borderRadius = '30px'
    mainCourseBox.style.height = '500px';
    mainCourseBox.style.width = '800px';    
    mainCourseBox.style.border = '2px solid brown'
    mainCourseBox.style.marginBottom = '20px'


    for (let i = 0; i < 6; i++) {
        const card = document.createElement('div');
        card.classList.add('card')
        bevrageBox.appendChild(card)
    }


    section.style.display = 'grid'
    section.style.margin = '30px'

    section.appendChild(bevrageBox)
    section.appendChild(starterBox)
    section.appendChild(mainCourseBox)
    content.appendChild(section);
}