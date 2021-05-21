const sketchField = document.querySelector('.sketchField');


//Initiating the default grid layout
let insertCollumnsRows = 32;
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


//Logic is the same based as the one on the slider event listener
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener("click", changeSize);
resetButton.addEventListener("click", updateDivs);


//changing lyout size based on the slides change
let rangeInput = document.getElementById("myRange");
rangeInput.addEventListener("change", changeSize);
rangeInput.addEventListener("change", updateDivs); //the problem with this is it insers new does each time, needs to be replaced rather

function changeSize() {
    console.log(rangeInput.value);
    //Need to declare new variables, overwriting "insertCollumnsRows" dows not work right, I'm too lazy to figuout why atm
    newCollumns = rangeInput.value;
    newRows = rangeInput.value;
}

function updateDivs() {
    removeAllChildNodes();
    sketchField.style.setProperty('grid-template-columns', 'repeat(' + newCollumns + ', auto)');
    sketchField.style.setProperty('grid-template-rows', 'repeat(' + newRows + ', auto)');
    
    for (i = 0; i < newCollumns * newRows; i++) {
        div = document.createElement('div');
        div.classList.add('divItem');
        sketchField.append(div)
    }
}

function removeAllChildNodes() {
    sketchField.innerHTML = '';
}


// https://stackoverflow.com/questions/9449218/cancel-function-on-mouse-up
// http://jsfiddle.net/Marcel/dATCA/
sketchField.addEventListener('mouseup', mouseFin, false);
sketchField.addEventListener('mousedown', inBetween, false);

function inBetween() {
    sketchField.addEventListener('mouseover', changeBackground, false)
}

function changeBackground(e) {

    if (e.target !== e.currentTarget) { // this is the same as e.currentTarget
        console.log("mouse is over child")
        console.log(e);
        // e.target.style.background = "black"; //changing color direcly
        // e.target.className = 'divItemChanged'; //changing it via class
        const colors = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.background = "#" + colors;

    }   else  { 
        console.log("mouse is over parent")
        }
}

function mouseFin() {
    sketchField.removeEventListener('mouseover', changeBackground, false);
}



//Displaying Grid size on the screen
let slider = document.getElementById("myRange");
let output = document.getElementById("gridSize");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;

}


insertDivs();


//TODO
    // toggle lightener /shadower button option
    //custom color picker button

 

//DONE
    //Add slider or user prompt
    //clear button that resets canvas
    //Color switch from black to RGB
    //make it so it draws onfy if mouse is pushed down function that fires changBackground() many times fas when dolding a mouse button down
