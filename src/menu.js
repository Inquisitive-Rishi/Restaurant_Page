import { header,footer,content } from "./script";
import menuBg from './images/menuBg.jpeg';
import chai from './chai.jpg';
import lassi from './images/bevrages/lassi.avif';
import lemonade from './images/bevrages/lemonade.avif';
import sattu from './images/bevrages/sattu.avif';
import sugarcane from './images/bevrages/sugarcane-juice.avif';
import thandai from './images/bevrages/thandai.avif';
import chickenT from './images/starter/chicken-tikka.avif';
import dahiP from './images/starter/dahi-puri.avif'
import keemaP from './images/starter/keema-pav.avif'
import muttonK from './images/starter/mutton-kebab.avif'
import paneerT from './images/starter/paneer-tikka.avif'
import samosa from './images/starter/samosa.avif'

import dosa from './images/main_course/dosa.avif'
import chickenB from './images/main_course/chicken-biryani.avif'
import idli from './images/main_course/idli.avif'
import thali from './images/main_course/indian-thali.jpg'
import palakPaneer from './images/main_course/palak-paneer.jpg'
import vegB from './images/main_course/veg-biryani.jpg'

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

    // image add
    const chaiImg = new Image()
    chaiImg.src = chai;
    card1.classList.add('chai-img')

    const lassiImg = new Image()
    lassiImg.src = lassi;
    card2.classList.add('lassi-img')

    const lemonadeImg = new Image()
    lemonadeImg.src = lemonade;
    card3.classList.add('lemonade-img')

    const sattuImg = new Image()
    sattuImg.src = sattu;
    card4.classList.add('sattu-img')

    const sugarcaneImg = new Image()
    sugarcaneImg.src = sugarcane;
    card5.classList.add('sugarcane-img')

    const thandaiImg = new Image()
    thandaiImg.src = thandai;
    card6.classList.add('thandai-img')

    const chickenTImg = new Image()
    chickenTImg.src = chickenT;
    card7.classList.add('chickenT-img')

    const dahipImg = new Image()
    dahipImg.src = dahiP;
    card8.classList.add('dahiP-img')

    const keemaPImg = new Image()
    keemaPImg.src = keemaP;
    card9.classList.add('keemaP-img')

    const muttonKImg = new Image()
    muttonKImg.src = muttonK;
    card10.classList.add('muttonK-img')

    const paneerTImg = new Image()
    paneerTImg.src = paneerT;
    card11.classList.add('paneerT-img')

    const samosaImg = new Image()
    samosaImg.src = thandai;
    card12.classList.add('samosa-img')

    const dosaImg = new Image()
    dosaImg.src = dosa;
    card13.classList.add('dosa-img')

    const chickenBImg = new Image()
    chickenBImg.src = chickenB;
    card14.classList.add('chickenB-img')

    const idliImg = new Image()
    idliImg.src = idli;
    card15.classList.add('idli-img')

    const thaliImg = new Image()
    thaliImg.src = thali;
    card16.classList.add('thali-img')

    const pPaneer = new Image()
    pPaneer.src = palakPaneer;
    card17.classList.add('pPaneer-img')

    const vegBImg = new Image()
    vegBImg.src = vegB;
    card18.classList.add('vegB-img')


    header.style.backgroundColor = 'rgb(21, 20, 20)';

    section.style.display = 'grid'
    section.style.margin = '30px'

    section.appendChild(bevrageBox)
    section.appendChild(starterBox)
    section.appendChild(mainCourseBox)
    content.appendChild(section);
}