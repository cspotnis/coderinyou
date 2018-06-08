document.querySelector("#section1").innerText = "Information (" + new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + ")";

var todoElem = document.body.querySelector("#todo")

document.body.querySelector("#addBtn")

function createBottle(imageName) {
    var imgElem = document.createElement('IMG');
    imgElem.setAttribute('src', imageName);
    imgElem.classList.add("small-photo");
    return imgElem;
}

function getNumberToWords (num) {
    var unit = ['one', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var tens = ['Ten', 'Twenty', 'Thity', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eigthy', 'Ninety'];
    var dbls = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var words;
    var quotient;
    var reminder;
    if (num < 9) {
        word = unit[num];
    }
    else if ((num > 9 ) && (num < 19)) {
        quotient = Math.floor (num / 10);
        word = dbls[quotient];
    }
    else {
        quotient = Math.floor(num / 10);
        reminder = num % 10;
        if (reminder > 0) {
            word = tens[quotient-1] + " " + unit[reminder-1];
        }
        else {
            word = tens[quotient-1];
        }
    }
    return word;
}

function createText(line) {
    var divElem = document.createElement('div');
    divElem.textContent = line;
    return(divElem);
}

for (var i=99; i > 0; i--) {

    var pElem = document.createElement('p');
    var word = getNumberToWords(i-1);
    var text = createText(`${i} Bottles of Beer on the wall, ${i} bottles of beer`);
    pElem.appendChild(text);
    text = createText(`Take one down and pass it around, ${word} bottles of beer on the wall.`);
    pElem.appendChild(text);
//    document.writeln("<p>" + i + " Bottles of Beer on the wall, " + i + " bottles of beer <br>" + "Take one  down and pass it aroud , " + word + " bottles of beer on the wall... </p>");

    document.body.querySelector("#bottleSong").appendChild(pElem);
    for (var j = i; j > 0; j--) {
        var imageName = 'greenbottle.jpg';
        var bottle = createBottle(imageName);
        pElem.appendChild(bottle);

    }
    document.body.querySelector("#bottleImg").appendChild(pElem);
}