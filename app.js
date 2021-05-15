const sketchField = document.querySelector('.sketchField');

//Change add input for the user
//possibly add slider that is connected to some kind of listener to this func 
let insertCollumns = [4];
let insertRows = [4];

function insertDivs() {
    //StckOvrflw https://stackoverflow.com/questions/52563263/using-the-css-grid-repeat-declaration-in-javascript
    sketchField.style.setProperty('grid-template-columns', 'repeat(' + insertCollumns + ', 20px)');
    sketchField.style.setProperty('grid-template-rows', 'repeat(' + insertRows + ', 20px)');
    div = document.createElement('div');
    div.classList.add('something');
    sketchField.appendChild(div)
}

insertDivs();