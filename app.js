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


//Core app fucntion of changing div color
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
//also this https://simplernerd.com/js-click-parent/ 
sketchField.addEventListener('mouseover', changeBackground);

function changeBackground(e) {
    if (e.target !== e.currentTarget) { // this is the same as e.currentTarget
        console.log("child clicked")
        e.target.style.background = "black"; //changing color direcly
        // e.target.className = 'divItemChanged'; //changing it via class
    }   else  { 
        console.log("parent clicked")
        }
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
    //clear button that resets canvas
    //Color switch from black to RGB
    //make it so it draws onfy if mouse is pushed down function that fires changBackground() many times fas when dolding a mouse button down

//DONE
    //Add slider or user prompt
