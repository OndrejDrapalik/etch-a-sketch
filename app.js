const sketchField = document.querySelector('.sketchField');


//Change add input for the user
//possibly add slider that is connected to some kind of listener to this func 
let insertCollumnsRows = 20;
let multiplied = insertCollumnsRows * insertCollumnsRows;

function insertDivs() {
    //StckOvrflw https://stackoverflow.com/questions/52563263/using-the-css-grid-repeat-declaration-in-javascript
    sketchField.style.setProperty('grid-template-columns', 'repeat(' + insertCollumnsRows + ', auto)');
    sketchField.style.setProperty('grid-template-rows', 'repeat(' + insertCollumnsRows + ', auto)');
    
    for (i = 0; i < multiplied; i++) {
        div = document.createElement('div');
        div.classList.add('divItem');
        sketchField.appendChild(div)
    }
    
}

console.log("test1")

//hmm, for some reason selecting individual items does not work at all
    // let item = document.querySelectorAll('.divItem');
    // item.forEach(element => {
    //     element.addEventListener('mouseenter', changeBackground);
    //   });
    // function changeBackground(e) {
    //         e.target.style.background = "black"; 
    // }


// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
//also this https://simplernerd.com/js-click-parent/ 
sketchField.addEventListener('mouseover', changeBackground);

function changeBackground(e) {

    if (e.target !== e.currentTarget) { // this is the same as e.currentTarget
        console.log("child clicked")
        // e.target.style.background = "black"; //changing color direcly
        e.target.className = 'divItemChanged'; //changing it via class
    }   else  { 
        console.log("parent clicked")
        }
    // console.log("ass")
    // e.target.style.background = "black"; 
    //problem when you haver over ther actual sketchField - it covers it in black too, the problem is event bubbles
}

console.log("test2")


//function that changes background of the div based on the mouse over - it switches
//class to background: black after mouseover or mouse click down

//button that resets it

//maybe change layout input of button 


insertDivs();