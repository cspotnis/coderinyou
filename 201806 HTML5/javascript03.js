
var fred = ['Fred', 'Flinstones', 'fred@gmail.com', 50];
var lbl = ['First Name : ', 'Last Name : ', 'Email : ', 'Age : '];
document.querySelector("title").innerText = "Document (" + new Date() + ")";
document.write("<table border='1'>")
for (i = 0; i < fred.length; i++) {
    document.writeln("<tr>");

    document.writeln("<td>");
    document.writeln(lbl[i]);
    document.writeln("</td>");
    document.writeln("<td>");
    document.writeln(fred[i] + "<br>");
    document.writeln("</td>");

    document.writeln("</tr>");
}
document.write("</table>")

document.querySelector("#section1").innerText = "Information (" + new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + ")";

var todoElem = document.body.querySelector("#todo")

document.body.querySelector("#addBtn")

function createBottle(imageName) {
    var imgElem = document.createElement('IMG');
    imgElem.setAttribute('src', imageName);
    imgElem.classList.add("small-photo");
    return imgElem;
}

for (var i = 0; i < 100; i++) {

    for (var j = i; j < 100-i; j++) {
        var imageName = 'IMG_1712.jpg';
        var bottle = createBottle(imageName);
        document.body.querySelector("#section2").appendChild(bottle);
    }
    document.writeln("<br>");
}