/*
Javascript Functions

1. Javascript can be used to change html contents.
document.getElementById("ID").innerHTML = "content";
2. Javascript can change HTML attribute values
Example
document.getElementById('demo2').style.fontSize = '50px';
*/


function changeImage() {
    document.getElementById('image').src = 'images/pic_bulbon.gif';
}   


/* JAVASCRIPT DISPLAY POSSIBILITIES
Writing into an HTML element, using .innerHTML
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

//simple javascript function
function calculateAge(aa) {
    var d = new Date();
    var year = d.getFullYear();   
    return year - aa;
}



//using a function as a variable
function boss() {
document.getElementById('myage').innerHTML = "i am" + " " + calculateAge(1996);
}


/* 
+= OPERATOR ADDS VALUE TO A VARIABLE
-= USED TO SUBTRACT VALUE FROM A VARIABLE
/= USED TO DIVIDE A VARIABLE 
var ++ ADDS VALUE TO A NUMBER BY 1
var -- REDUCES VALE OF A NUMBER BY 1
*/

var a = 3;
a += 10;
var b = 11;
b--;

console.log(a);

/*JAVASCRIPT LOGICAL OPERATORS
  ! NOT 
  && AND 
  || OR
  
  TYPE OPERATORS
typeof - Returns the type of a variable
instanceof - Returns true if an object is an instance of an object type
*/


//CREATION OF JAVASCRIPT OBJECTS
var Brother = {name: "Inatimi",
           age: 40,
           gender: "Male",
           occupation:"real estate"};


//example of a functions used in objects and function as an object variable
var Self = {firstName: "Nengi",
             lastName: "Fenibo",
            age: calculateAge(1996),
            occupation: "Web developer"};

                         

/* STRINGS AND STRING MTHODS IN JAVASCRIPT
string.search()
string.indexOf()
string.length
string.substr()
string.slice()
string.replace()
string.toLowerCase()
string.toUpperCase()

Finding the position of string properties
Both methods accept a second parameter as the starting position for the search: 


meaning: if the second parameter is 15, the search starts at position 15, and 
searches to the beginning of the string.
*/


//String length (.length)
var n = "I am from Nigeria, where are you from?";
var lenght = n.length;

var position = n.indexOf("Nigeria",1);


var lastletter = n.lastIndexOf("Nigeria"); // lastIndexOf() DISPLAYS SHOWS THE LAST OCCURENCE.
var fbi = n.search('Nigeria');

//replace string method

n = n.replace ("Nigeria", "Canada");


//cutting  string using slice command
var statement = "My name is onengiyeofori Fenibo";


var name = statement.slice(11);
/* The difference is that
the second parameter specifies the length of the extracted part.*/
var name2 = statement.substr(11,13); 


/*USING THE REPLAC COMMAND TO REPLACE 
GENERAL AND ALSO AVOID CASE SENSITIVITY */

var bigstat = statement.replace(/onengiyeofori/g,"Tonye");
var bigstat2 = statement.replace(/onengiyeofori/i,"Tonye"); //Removes case sensitivity
console.log(bigstat);
//TRIM() METHOD REMOVES WHITE SPACES 

var trimmed = statement.trim();

// METHODS FOR EXTRACTING STRING POSITIONS

var mmm = statement.charAt(3);
var bbb = statement.indexOf("of"); // null values display -1


//CONVERTING STRING TO ARRAY
var shoutout = "Thanks for the follow";
var shoutarray = shoutout.split(" "); // .split(","); will split by commas. This command currently splits by spaces. 


var bac = shoutarray.join(" ");


// finding out the length of an array

//array.length


// Example of a boolean
var compa = (a != b);

console.log(compa);
//NUMBERS AND NUMBER METHODS

// .tofixed() returns a string with specified decimal places.
var x = 3.574;
var xRound = x.toFixed(1); // to fixed is perfecct for money.


console.log(xRound);

var xnumber = parseFloat(xRound,10); // changing a  string to number

console.log(xnumber);

//Checking the use of ParseInt
var illuminate = (xRound == xnumber)
console.log(illuminate);

var parsetest = 4.55;

var moe = parseInt(parsetest);

console.log(moe);
var typet = typeof parsetest;


//parseint can be use to change string to numbers,  parseFloat also returns decimals

//Number() funtion is used to transform variables to numbers variables that cannot be converted returns NaN


//ARRAYS AND ARRAY METHODS

var myArray = ["mercedes", "Volvo", "Nissan", "Honda"];
//adding eletments to an array 



// Array list display
var size = myArray.length;

text = "<ul class='list-group mt-5'>" ;
for ( i = 0; i < size; i++) {
    text += '<li class="list-group-item">' + myArray[i] + "</li>";
}

text += "</ul>";
document.getElementById("array").innerHTML = text;



// .toString command changes arrays to strings.

var example = ["ice Cream", "Water melon", "Bread"];
var exampleS = example.toString(" ");

// .join converts array to strings and lets you pick a seperator
var examplej = example.join(" * ")

//split method is used to convert a string to an array

var splitting = exampleS.split(",")
console.log(splitting)

// .pop is used to remove the last array in the list

console.log(exampleS);
console.log(typeof examplej);


//PERSONAL FUNCIONS SHOWING GOOD USE OF COMPARISON STATEMENT
function getAge() {    
    var birthDate = document.getElementById("birthDate").value;
    var collectDate = birthDate.substr(0,4)
    var d = new Date();
    var year = d.getFullYear();
    
//parseInt(,10) used to make string an integer
    var realDate = parseInt(collectDate, 10);
    var age = year - realDate;
    if (birthDate === "") {
       window.alert("Bastard")
    
    }/** else if (age < 1) {
         document.getElementById("mile").innerHTML = "Too Young";

    } else {
        
         document.getElementById("mile").innerHTML =  "You are" + " " + age + " " + "Years  old congrats!!"; 
    } **/
    //OR 
    
    else {
        var msg = (age < 1) ? "Tooo Young" : "You are" + " " + age + " " + "Years  old congrats!!"; 
        document.getElementById("mile").innerHTML =  msg;
    }
    
}


//FUNCTION TO ADD array
function addCars() {    
  
    var car = document.getElementById("carName").value;
    if (car === ""){
         window.alert("Space cannot be empty") 
    } else {
        myArray.push(car);
  
    var size2 = myArray.length;

text2 = "<ul class='list-group mt-5'>" ;
for ( i = 0; i < size2; i++) {
    text2 += '<li class="list-group-item">' + myArray[i] + "</li>";
}
text2 += "</ul>";
    document.getElementById("array").innerHTML = text2;
    
    document.getElementById("helpo").innerHTML = "YOU HAVE" + " " + size2 + " " + " ITEMS";
}
  }
//Function to remove Item
function removeArray () {
   myArray.pop(); //myArray.pop(); returns the array deleted
    
    var size3 = myArray.length;
    text3 = "<ul class='list-group mt-5'>" ;
    for ( i = 0; i < size3; i++) {
    text3 += '<li class ="list-group-item">' + myArray[i] + "</li>";

    }
    
    text3 += "</ul>"
    
    document.getElementById("array").innerHTML = text3;
    document.getElementById("helpo").innerHTML = "YOU HAVE" + " " + size3 + " " + " ITEMS";
}

//FUNCTION REMVOVE FROM TOP

function removeTop () {
    
   myArray.shift(); 
    
    //myArray[2] = "Genius"; -  code to change array elements
    // delete myArray[3]; -  code to delete arrays but leaves udefined holes
    var size4 = myArray.length;
    text4 = "<ul class='list-group mt-5'>" ;
    for ( i = 0; i < size4; i++) {
    text4 += '<li class ="list-group-item">' + myArray[i] + "</li>";

    }
    
    text4 += "</ul>";
    
    document.getElementById("array").innerHTML = text4;
    document.getElementById("helpo").innerHTML = "YOU HAVE" + " " + size4 + " " + " ITEMS";
}

//unshift commands adds a nw array at the beginning 
function addTop() {
    
    var car = document.getElementById('carName').value;
    myArray.unshift(car);
    
    var size5 = myArray.length;
    text5 = "<ul class='list-group mt-5'>";
    
    for (i = 0; i < size5; i++) {
        text5 += '<li class ="list-group-item">' + myArray[i] + '</li>';
    }
    
    text5 += "</ul>"
      document.getElementById("array").innerHTML = text5;
    document.getElementById("helpo").innerHTML = "YOU HAVE" + " " + size5 + " " + " ITEMS";
}

//Splicing arrays 

var fruits = ["mango", "orange", "watermelon", "bread", "milk"];


//splice is used to add elemtnts to an array

fruits.splice(2,0, "Peaches", "Avacado" );

/** The first parameter indiates where the new arrays are to be placed,
while the second indicates how many arrays are to be removed. **/

console.log(fruits);
//USING SPPLICE TO REMOVE ELEMENTS
//this slices out a piece of array into another, using the slic


var onylfruits = fruits.splice(5,2); // removes instructed elements. first parameter states the position of array to be removed while the second states how many arrays are to be removed from that position. Evevn after storing this command as a new variable it still affects the original array


//adding arrays together

var combineArray = myArray.concat(fruits);
 
//new array combination, merging more than 2 arrays
var newcombination = myArray.concat(onylfruits,fruits);
console.log(combineArray);

newcombination.sort(); // Arranges array alphabetically while. array.reverse() does the opposite.

// merging arrays with strings

var ArrayString = myArray.concat("Mike");

console.log(ArrayString);
console.log(onylfruits);
console.log (combineArray);
console.log(newcombination);

//JavaScript automaticaly outputs arrays as strings in HTML

// sorting numbers

var points = [30,50,239,46,100];

var findmin = Math.max.apply(null,points);
console.log(findmin);

points.sort(function(a,b) {return (b-a)}); //sort numbers in ascending order (b-a) will return in Descnding order

console.log(points[0]);
//sorting an arry in random order
//points.sort(function(a,b){return 0.5 - Math.random()});
console.log(points);


//FISHER YATES METHOD FOR RANDOM NUMBERS

var point = [40,83,6,82,93];

for (i = point.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
}

/**FINDNG MIN AND MAX NUMBERS IN AN ARRAY
Method 1: You can use sort() funtion and display min or max or you can use Math.max.apply(null,array);
**/

function FindMax (arr){
  return Math.max.apply(null, arr);
}

// Find min array

function FindMin (ar) {
    return Math.min.apply(null,ar);
}


//OBJECT ARRAYS 

var Carz = [{type: "Benz", year: 2005}, {type: "Volvo", year: 2019}, {type: "Toyota", year: 2018}, {type: "Lexus", year: 2020}];
txxt = "<ul>"
var p;

for (p in Carz) {
    txxt += "<li>" + Carz[p] + "</li>";
}
txxt += "</ul>"

document.getElementById("boygood").innerHTML = txxt;
Carz.sort(function (a,b) { return (b.year - a.year)});

console.log(Carz);

//FOR EACH ITERATIONS
/** 
array.for()
array.filter()
array.map()
array.reduce()
array.every()
array.some()
array.indexOf()
array.lastIndexOf()
array.find()
array.findIndex
**/

/**var txt = "<ul class='list-group mt-5'>";
point.forEach(ForStyle); 
document.getElementById('ForStyle').innerHTML = txt;

function ForStyle(value, index, array) {
    txt += '<li class ="list-group-item">' + value + "</li>";
} 
**/

sinzu = point.length;
var txt = "<ul class='list-group mt-5'>";
for (i = 0; i < sinzu; i++) {
    txt += '<li class ="list-group-item">' + point[i] + "</li>";
}
txt += "</ul>"

document.getElementById("ForStyle").innerHTML = txt;

function remove() {
    point.pop();
    size9 = point.length;
    
    txt2 = "<ul class='list-group mt-5'>";
    
    for (i = 0; i < size9; i++) {
        txt2 += '<li class ="list-group-item">' + point[i] + "</li>";
    }
    
    txt2 += "</ul>"
    
    document.getElementById('ForStyle').innerHTML = txt2;
}


function Random() {
    
    point.sort(function(a,b){return 0.5 - Math.random()});
    
    size10 = point.length;
    text10 = "<ul class='list-group mt-5'>";
    for (i = 0; i < size10; i++) {
        text10 += '<li class ="list-group-item">' + point[i] + "</li>";
    }
    text10 += "</ul>"
    
    document.getElementById('ForStyle').innerHTML = text10;
}

//ARRAY.MAP() create an array function and map it to an existing array to create another

function iter (value, index, array) {
    return value * 4;
}

iteratePoint = point.map(iter);

console.log(iteratePoint);
//ARRAY.FILTER() 

var point3 = [33,43,22,2,56,554,321,223,100];
point3.sort(function(a,b) {return (a-b)} );

var mado = Math.max.apply(null, point3);
console.log(mado);

function Above100 (value, index, array) {
    return value > 100;
} 

var point4 = point3.filter(Above100);
point4.sort(function (a,b) { return (a - b)});

console.log(point4);
console.log(point3);

// ADDING ARRAYS usng reduce function

function reduction (total, value, index, array) {
    return total + value;
}

var reduceit = point3.reduce(reduction);

console.log(point3);

/** .every() gives a true or false value.
 code t check if every
  number in point 3 is greater than 100 **/

var check = point3.every(Above100);

console.log(check);

/**Important Date methods
.getFullYear();
.getMonth();
.getDay();
**/

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var nice = day[d.getDay()];

var pls = d.getDay();
document.getElementById('date').innerHTML = nice;
console.log(pls);

// or 

var day1;
switch (d.getDay()) {
    case 0:
        day1 = "Sunday";
        break;
        
    case 1:
        day1 = "Monday";
        break;
        
    case 2: 
        day1 = "Tuesday";
        break;
        
    case 3:
        day1 = "Wednesday";
        break;
        
    case 4:
        day1 = "Thursday";
        break;
        
    case 5:
        day1 = "Friday";
        break;
        
    case 6:
        day1 = "Saturday";
        break;
}

document.getElementById("date2").innerHTML = day1;
/** 
METHOD TO SPECIFY DATE

d = new Date(2020-12-25);

**/

var mj = new Date("2020-12-25");
mj.setFullYear(2002);
console.log(mj);

/**MATH METHODS

Math.round(4.6); - returns value to rounded figure
Math.powz(8,2;) - (64) returns raised to power values
Math.sqrt(64); - (8) returns square root
Math.abs(-5); - (5) return positive value
Math.max(0,44,32,21); - returns the max value in the arguement.
Math.min() does the opposite of Math.max
Math.random() - returns random number
Math.floor(4.5) - (4) returns values to their nearest integer
**/

var randomnumber = Math.floor(Math.random() * 101); //returns random number from 1-100
console.log(randomnumber);
