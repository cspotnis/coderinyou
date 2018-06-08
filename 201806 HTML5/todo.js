
function createText() {
    var inputText = document.createElement('input');
    inputText.name = "todo-text";
    inputText.id = "todo-item";
    
    return(inputText);
}

function clickAnimalHandler(inputButton) {
    console.log('> Button Clicked' + inputButton.value);
}

function createButton() {
    var inputButton = document.createElement('button');
    inputButton.name = "todo-button";
    inputButton.id = "todo-btn";
    inputButton.textContent ="Add Animals"
    inputButton.addEventListener('click', clickAnimalHandler(inputButton));

    return (inputButton);
}

var pElem = document.createElement('div');
pElem.appendChild(createText());
pElem.appendChild(createButton());
document.body.querySelector("#frm-elem").appendChild(pElem);


function liHandler(eventObject) {
    console.log('li cliked', eventObject.target);
    eventObject.target.remove();
}

function clickFruitsHandler() {
    console.log('> Button Clicked' + inputElem.value);
    var task = inputElem.value;

    if (task == "") 
        return;

    var liElem = document.createElement('li');
    liElem.textContent = task;
    liElem.addEventListener('click', liHandler);
    ulElem.appendChild(liElem);

    inputElem.value="";

}
function mouseHandler() {
    console.log('> mouse Entered' + new Date());
}

var ulElem = document.querySelector("#my-fruits");
var inputElem = document.body.querySelector("#item");
var addBtnElem = document.body.querySelector('#addBtn');
addBtnElem.addEventListener('click', clickFruitsHandler);
//addBtnElem.addEventListener('mouseenter', mouseHandler);
