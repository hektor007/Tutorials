var day;
var d = new Date();
console.log(d);

switch (d.getDay()) {
    case 0:
        day = "Today is Sunday, we are open";
        break;
        
    case 6:
        day = "Today is Saturday, we are Open";
        break;
        
    default:
        day = "Come back during the weekend";
}

document.getElementById("check").innerHTML = day;


var array = ["Perry", "Mike", "Best"];

var text ="<ul>";
size = array.length;

for ( i = 0; i < size; i++) {
    text += "<li>" + array[i] + "</li>";
}
text += "</ul>"
document.getElementById("test").innerHTML= text;


//FOR LOOP/IN

var Nigeria = {continent: "Africa", Population: "360 million", government: "Fucked"};

txt = "";
var i;
for (i in Nigeria) {
    txt += Nigeria[i] + "<br>";
}

document.getElementById("test2").innerHTML= txt;

console.log(Nigeria.continent);

//Easier way of displaying arrays
//txt1 = "<ul>";
//var x;
//for (x of array) {
//    txt1 +="<li>" + x + "</li>";
//}
//txt1 += "</ul>"; 

//USING WHILE LOOP TO DISPLAY ARRAYS
//

/** var x;
txt1 = "<ul>"
x = 0;
size = array.length;
while (x < size) {
    txt1 += "<li>" + array[x] + "</li>";
    x++;
}

txt1 += "</ul>"

**/

txt1 = "<ul>";
var x = 0;

do {
    txt1 += "<li>" + array[x] + "</li>"
    x++;
} while (x < array.length);

txt1 += "</ul>"
document.getElementById("test3").innerHTML = txt1



//For in Loop is used for Objects
//For of Loop is  used for arrays