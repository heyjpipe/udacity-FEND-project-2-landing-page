/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById("navbar__list");
const containerCount = document.getElementsByClassName("landing__container").length;

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// build the navigation menu

for (let i = 0; i < containerCount; i++) {

    const targetSection = document.querySelectorAll("section")[i]; //variable holds sections
    const listTitle = targetSection.dataset.nav; //variable name of list
    const makeList = document.createElement("ul"); //create new list
    const listText = document.createTextNode(listTitle); //create text node for nav bar
    const listThing = "section" + i; //items in list
    makeList.setAttribute("id", listThing); //set new #id
    makeList.setAttribute("class", "menu__link"); //set new .class
    makeList.appendChild(listText); //add #id to new ul element
    navbarList.appendChild(makeList); //add .class to new ul element

// Scroll to page section when button clicked

    const clickTo = document.getElementById(listThing); //get #id from each item in nav bar list
    clickTo.addEventListener("click", function () {
        targetSection.scrollIntoView ({ //scrolls to target section smoothly
            behavior: "smooth",
            block: "start",
            inline: "start"
        })
    })
}

// Add class 'active' to section when near top of viewport

function isInViewport(elem) { //check if section is in viewport
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top +150 >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) +150 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', sectionActive);

function sectionActive() {
    const anySection = document.querySelectorAll('section');
    for (i = 0; i < anySection.length; i++) {
        if(!isInViewport(anySection[i])){
            anySection[i].classList.remove('active');
        } else {
            anySection[i].classList.add('active');
        }
    }
}

/**
 * End Main Functions
*/
