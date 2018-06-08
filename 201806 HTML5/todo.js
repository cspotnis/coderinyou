
/* Creation of Input Text for getting Animals */
function createText() {
    var inputText = document.createElement('input');
    inputText.name = "todo-text";
    inputText.id = "todo-item";
    inputText.placeholder = "Enter Animal Here";

    return (inputText);
}

/* Creation of Button for adding Animlas to List */
function createButton() {
    var inputButton = document.createElement('button');
    inputButton.name = "todo-button";
    inputButton.id = "todo-btn";
    inputButton.textContent = "Add Animals"

    return (inputButton);
}

/* Event Listener Function for Animal Button */
function clickAnimalHandler() {
    var atask = anmText.value;

    console.log('> Button Clicked' + anmBtn.value);

    if (atask == "")
        return;

    var aliElem = document.createElement('li');
    aliElem.textContent = atask;
    aliElem.addEventListener('click', liAnimalHandler);
    aulElem.appendChild(aliElem);

    anmText.value = "";

}

function liAnimalHandler(eventObject) {
    console.log('li cliked', eventObject.target);
    eventObject.target.remove();
}

/* Snippet for Input Text Animals / Animal Button / Animal List */
var pElem = document.createElement('div');
var aulElem = document.querySelector("#my-animals");
var anmText = createText();
var anmBtn = createButton();

pElem.appendChild(anmText);
pElem.appendChild(anmBtn);
document.body.querySelector("#frm-elem").appendChild(pElem);
anmBtn.addEventListener('click', clickAnimalHandler);


/* Snippet for Fruits Button / Text / List */

function liFruitsHandler(eventObject) {
    console.log('li cliked', eventObject.target);
    eventObject.target.remove();
}

function clickFruitsHandler() {
    console.log('> Button Clicked' + finputElem.value);
    var task = finputElem.value;

    if (task == "")
        return;

    var fliElem = document.createElement('li');
    fliElem.textContent = task;
    fliElem.addEventListener('click', liFruitsHandler);
    fulElem.appendChild(fliElem);

    finputElem.value = "";

}

var fulElem = document.querySelector("#my-fruits");
var finputElem = document.body.querySelector("#item");
var faddBtnElem = document.body.querySelector('#addBtn');
faddBtnElem.addEventListener('click', clickFruitsHandler);


//function mouseHandler() {
//    console.log('> mouse Entered' + new Date());
//}
//addBtnElem.addEventListener('mouseenter', mouseHandler);
