import { content } from "./script";

export function showMenuPage() {
    const section = document.createElement('section');

    const bevrageBox = document.createElement('div')
    const starterBox = document.createElement('div')
    const mainCourseBox = document.createElement('div')
    
    const boxes = [bevrageBox,starterBox,mainCourseBox] 

    const bevTitle = document.createElement('button');
    const startTitle = document.createElement('button');
    const mainCourseTitle = document.createElement('button');

    bevTitle.textContent = 'Bevrages';
    startTitle.textContent = 'Starter';
    mainCourseTitle.textContent = 'Main-Courses';

    bevrageBox.appendChild(bevTitle)
    starterBox.appendChild(startTitle)
    mainCourseBox.appendChild(mainCourseTitle)


    const titles = [bevTitle,startTitle,mainCourseTitle];
    

    titles.forEach(title => {
        title.style.position = 'absolute'
        title.style.top = 0;
        title.style.left = 0;
        title.style.padding = '10px'
        title.style.fontWeight = 900;
        title.style.fontSize = '1.2em'
    })

    bevrageBox.style.display = 'flex'
    bevrageBox.style.position = 'relative'
    bevrageBox.style.flexDirection = 'column'
    bevrageBox.style.flexWrap = 'wrap';
    bevrageBox.style.padding = '30px'
    bevrageBox.style.height = '500px';
    bevrageBox.style.width = '800px';    
    bevrageBox.style.border = '2px solid brown'
    bevrageBox.style.marginBottom = '20px'

    starterBox.style.display = 'flex'
    starterBox.style.position = 'relative'
    starterBox.style.flexWrap = 'wrap';
    starterBox.style.flexDirection = 'column'
    starterBox.style.padding = '30px'
    starterBox.style.height = '500px';
    starterBox.style.width = '800px';    
    starterBox.style.border = '2px solid brown'
    starterBox.style.marginBottom = '20px'
    
    mainCourseBox.style.display = 'flex'
    mainCourseBox.style.position = 'relative'
    mainCourseBox.style.flexWrap = 'wrap';
    mainCourseBox.style.flexDirection = 'column'
    mainCourseBox.style.padding = '30px'
    mainCourseBox.style.height = '500px';
    mainCourseBox.style.width = '800px';    
    mainCourseBox.style.border = '2px solid brown'
    mainCourseBox.style.marginBottom = '20px'
    

    

    section.style.display = 'grid'
    section.style.margin = '30px'

    section.appendChild(bevrageBox)
    section.appendChild(starterBox)
    section.appendChild(mainCourseBox)
    content.appendChild(section);
}