import { content } from "./script";
import woodImg from './images/wood.avif';
import man from './images/man.png'
import man2 from './images/man2.png'
import girl from './images/girl.png'

export function showContactPage() {
    const woodBg = new Image()
    woodBg.src = woodImg;
    content.classList.remove('home-bg')
    content.classList.remove('menu-bg')
    content.classList.add('wood-bg')

    content.style.alignItems = 'center'
    const section = document.createElement('section');
    section.style.padding = '20px'
    section.style.display = 'flex'
    section.style.flexDirection = 'column'
    section.style.gap = '20px'

    const p1DetailBox = document.createElement('div')
    const p2DetailBox = document.createElement('div')
    const p3DetailBox = document.createElement('div')

    const p1Name = document.createElement('h4')
    const p2Name = document.createElement('h4')
    const p3Name = document.createElement('h4')

    const p1Number = document.createElement('p')
    const p2Number = document.createElement('p')
    const p3Number = document.createElement('p')

    const box1 = document.createElement('div')
    const box2 = document.createElement('div')
    const box3 = document.createElement('div')

    p1Name.textContent = 'our head chef - Mr Turtle'
    p2Name.textContent = 'our waiter - Mr Cauliflower'
    p3Name.textContent = 'our manager - Ms Jasmine'

    p1Number.textContent = 'Contact - 232-232-3593'
    p2Number.textContent = 'Contact - 454-234-1223'
    p3Number.textContent = 'Contact - 932-232-1232'

    p1DetailBox.appendChild(p1Name)
    p1DetailBox.appendChild(p1Number)
    p2DetailBox.appendChild(p2Name)
    p2DetailBox.appendChild(p2Number)
    p3DetailBox.appendChild(p3Name)
    p3DetailBox.appendChild(p3Number)

    const boxes = [box1,box2,box3]

    boxes.forEach(box => {
        box.style.display = 'flex';
        box.style.justifyContent = 'space-between';
        box.style.backgroundColor = 'white'
        box.style.alignItems = 'center'
        box.style.padding = '20px';
        box.style.height = '150px';
        box.style.width = '350px';    
        box.style.border = '2px solid brown'
        section.appendChild(box)
    })

    const circle1 = document.createElement('div')
    const circle2 = document.createElement('div')
    const circle3 = document.createElement('div')

    const circles = [circle1, circle2, circle3]

 
    box1.appendChild(p1DetailBox)
    box2.appendChild(p2DetailBox)
    box3.appendChild(p3DetailBox)

    circles.forEach(circle => {
        circle.style.height = '80px';
        circle.style.borderRadius = '50%'
        circle.style.aspectRatio = 1;
        circle.style.border = '2px solid brown'    
        circle.style.display = 'flex';
        circle.style.backgroundSize = 'cover'
        circle.style.flexDirection = 'column';
    })

    const manImg = new Image()
    manImg.src = man;
    circle1.classList.add('man-img')

    const man2Img = new Image()
    man2Img.src = man2;
    circle2.classList.add('man2-img')
    
    const girlImg = new Image()
    girlImg.src = girl;
    circle3.classList.add('girl-img')


    box1.appendChild(circle1)
    box2.appendChild(circle2)
    box3.appendChild(circle3)
    content.appendChild(section);
}