import { header,footer,content } from "./script";
import menuBg from './images/menuBg.jpeg';
import chai from './chai.jpg';
import lassi from './images/bevrages/lassi.avif';

export function showMenuPage() {

    const menuImg = new Image()
    menuImg.src = menuBg;
    content.classList.remove('home-bg')
    content.classList.remove('wood-bg')
    content.classList.add('menu-bg')
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
    bevrageBox.style.padding = '20px'
    bevrageBox.style.height = '500px';
    bevrageBox.style.width = '800px';    
    bevrageBox.style.marginBottom = '20px'

    starterBox.style.display = 'flex'
    starterBox.style.position = 'relative'
    starterBox.style.flexDirection = 'column'
    starterBox.style.padding = '20px'
    starterBox.style.height = '500px';
    starterBox.style.width = '800px';    
    starterBox.style.marginBottom = '20px'
    
    mainCourseBox.style.display = 'flex'
    mainCourseBox.style.position = 'relative'
    mainCourseBox.style.flexDirection = 'column'
    mainCourseBox.style.padding = '20px'
    mainCourseBox.style.height = '500px';
    mainCourseBox.style.width = '800px';    
    mainCourseBox.style.marginBottom = '20px'
    
    const cardContainer1 = document.createElement('div')
    const cardContainer2 = document.createElement('div')
    const cardContainer3 = document.createElement('div')
    const card1 = document.createElement('div')
    const card2 = document.createElement('div')
    const card3 = document.createElement('div')
    const card4 = document.createElement('div')
    const card5 = document.createElement('div')
    const card6 = document.createElement('div')
    const card7 = document.createElement('div')
    const card8 = document.createElement('div')
    const card9 = document.createElement('div')
    const card10 = document.createElement('div')
    const card11 = document.createElement('div')
    const card12 = document.createElement('div')
    const card13 = document.createElement('div')
    const card14 = document.createElement('div')
    const card15 = document.createElement('div')
    const card16 = document.createElement('div')
    const card17 = document.createElement('div')
    const card18 = document.createElement('div')

    bevrageBox.appendChild(cardContainer1)
    starterBox.appendChild(cardContainer2)
    mainCourseBox.appendChild(cardContainer3)

    const cardContainers = [cardContainer1,cardContainer2,cardContainer3]
    const cards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16,card17,card18]

    cardContainers.forEach(cc => {
        cc.style.marginTop = '35px'
        cc.style.display = 'flex'
        cc.style.flexWrap = 'wrap';
        cc.style.justifyContent = 'space-between'
        cc.style.alignItems = 'space-between'
        cc.style.aspectRatio = 1;
    })

    cards.forEach(card => {
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.setAttribute('class','card')
        card.style.borderRadius = '10px'
        card.style.backgroundColor = 'white'
        card.style.height = '45%'
        card.style.width = '30%'
        card.style.border = '2px solid white'
        card.style.backgroundSize = 'cover'
    })
    

    cardContainer1.appendChild(card1)
    cardContainer1.appendChild(card2)
    cardContainer1.appendChild(card3)
    cardContainer1.appendChild(card4)
    cardContainer1.appendChild(card5)
    cardContainer1.appendChild(card6)

    cardContainer2.appendChild(card7)
    cardContainer2.appendChild(card8)
    cardContainer2.appendChild(card9)
    cardContainer2.appendChild(card10)
    cardContainer2.appendChild(card11)
    cardContainer2.appendChild(card12)

    cardContainer3.appendChild(card13)
    cardContainer3.appendChild(card14)
    cardContainer3.appendChild(card15)
    cardContainer3.appendChild(card16)
    cardContainer3.appendChild(card17)
    cardContainer3.appendChild(card18)


    const chaiImg = new Image()
    chaiImg.src = chai;
    card1.classList.add('chai-img')

    const lassiImg = new Image()
    lassiImg.src = lassi;
    lassiImg.style.maxWidth = '100%'
    lassiImg.style.maxHeight = '100%'
    card2.classList.add('lassi-img')


    header.style.backgroundColor = 'rgb(21, 20, 20)';

    section.style.display = 'grid'
    section.style.margin = '30px'

    section.appendChild(bevrageBox)
    section.appendChild(starterBox)
    section.appendChild(mainCourseBox)
    content.appendChild(section);
}