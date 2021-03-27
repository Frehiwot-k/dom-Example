/*
  **********************
          DOM 
  **********************
*/

// Selecting an individual element
//Using getElementById()
// var el = document.getElementById("two");
// console.log(el);
// el.className = "red";
//el.style.backgroundColor = "pink";

// Once you select the element, you can do a whole lot of things to the specific element. For now, lets change the class name using the className property
//el.className = "pink";
//console.log(el);
// Using querySelector()
// var el = document.querySelector("#one");
// var el = document.querySelector(".yellow");
// console.log(el);
// el.className = "pink";

// // Selecting multiple elements
// // Using getElementByClass()
// var el = document.getElementsByClassName("yellow");
// console.log(el);
//el[0].className = "pink";

// // Using getElementsByTagName()
// var el = document.getElementsByTagName("li");
// console.log(el);
// el[4].className = "pink";

// // Using querySelectorAll()
// var el = document.querySelectorAll(".yellow");
// console.log(el);
// // el[1].className = "pink";

// Selecting one element from a nodeList
// Using the item() method
// var el = document.querySelectorAll(".yellow");
// console.log(el);
// // If condition in action
// if (el.length >= 1) {
//   var firstElement = el.item(0);
//   var secondElement = el.item(1);
//   console.log(secondElement);
//   firstElement.className = "pink";
//   secondElement.className = "green";
// }

// // Using Array syntax
// var el = document.getElementsByClassName("red");
// console.log(el);
// // // If condition in action
// if (el.length >= 1) {
// var firstElement = el[0];
// console.log(firstElement);
// firstElement.className = "pink";
//}

// // Repeating action for all of nodeList items
// var el = document.getElementsByTagName("li");
// console.log(el);
// // For loop in action
// for (var i = 0; i < el.length; i = i + 1) {
//   var selectedItem = el[i];
//   selectedItem.className = "pink";
// }

// // DOM Implementation Inconsistency
// // Notice how treating HTMLCollection exactly like an array could sometimes lead to unexpected result

// Using getElementByClass()
// var el2 = document.getElementsByClassName("yellow");
// console.log(el2);
// el2[0].className = "pink";
//el2[1].className = "pink";

// Using getElementsByTagName()
// var el3 = document.getElementsByTagName("li");
// console.log(el3);
// el3[0].className = "pink";
// el3[1].className = "pink";

// Or using this for loop on the collection

var el = document.getElementsByClassName("yellow");
console.log(el);
for (var i = 0; i < el.length; i = i + 1) {
  var selectedItem = el[i];
  selectedItem.className = "pink"; //?????
}

// Using getElementsByTagName()
// var el3 = document.getElementsByTagName("li");
// for (var i = 0; i < el3.length; i = i + 1) {
//   console.log(el3[i]);
//   var selectedItem = el3[i];
//   selectedItem.className = "pink";
// }

// The solution, convert the collection to an Array first
// This inconsistency problem doesn't exist when you use React.js

// Using getElementsByClassName
// var el2 = document.getElementsByClassName("yellow");
// console.log(el2);
// var temp = [];
// for (var i = 0; i < el2.length; i = i + 1) {
//   temp.push(el2[i]);
// }
// console.log(temp);
// for (var i = 0; i < temp.length; i = i + 1) {
//   var selectedItem = temp[i];
//   selectedItem.className = "pink";
// }

//Traversing between multiple elements
// Using parentNode
// var el = document.getElementById("three");
// console.log(el);
// var parentElement = el.parentNode;
// console.log(parentElement);
// parentElement.className = "pink";
// //Using previousElementSibling
// var el = document.getElementById("three");
// console.log(el);
// var previousSiblingItem = el.previousElementSibling;
// console.log(previousSiblingItem);
// previousSiblingItem.className = "pink";

//Using nextElementSibling
// var el = document.getElementById("three");
// console.log(el);
// var nSib = el.nextElementSibling;
// console.log(nSib);
// nSib.className = "pink";

// Using firstElementChild
// var el = document.getElementById("listOfFruits");
// console.log(el);
// var fChild = el.firstElementChild;
// console.log(fChild);
// fChild.className = "pink";

// // // Using lastChild
// var el = document.getElementById("listOfFruits");
// console.log(el);
// var lChild = el.lastElementChild;
// console.log(lChild);
// lChild.className = "pink";

// Changing node value
// Using textContent
let el = document.getElementById("two");
console.log(el);
let nValue = el.textContent;
console.log(nValue);
el.className = "pink";
el.textContent = "Mango Ice cream";

// console.log(nValue);
// // el.className = "pink";
// // // Changing the value
// el.firstChild.nodeValue = "Some Fruit";

// // Creating an HTML element using JavaScript
// var someParagraph = document.createElement("p");
// console.log(someParagraph);
// someParagraph.textContent = "Some sample";
// // console.log(someParagraph);
// document.body.appendChild(someParagraph);
// document.body.removeChild(someParagraph);

// var someli = document.createElement("li");
// // console.log(someli);
// someli.textContent = "Banana";
// // console.log(someParagraph);
// var parent = document.getElementById("listOfFruits");
// parent.appendChild(someli).className = "pink";

// // Working with attributes
// var el = document.querySelector("ul");
// console.log(el);
// el.classList.add("abebe");
// el.className = "dedd";
// // console.log(el.classList);
// console.log(el.getAttribute("id"));

// var el = document.getElementById("three");
// el.className = "hamrawi";
// Inline styling
// var el = document.querySelector("h1");
// el.style.backgroundColor = "blue";
// el.style.color = "white";
// el.style.padding = "10px";
// el.style.borderBottom = "2px solid black";
// console.log(el);

// var liElem = document.createElement("li");
// var liElem2 = document.createElement("li");
// liElem.innerHTML = "Perry";
// liElem2.innerHTML = "Raspberry";
// var parent = document.getElementById("listOfFruits");

// parent.appendChild(liElem).className = "green";
// parent.prepend(liElem2);
// parent.insertBefore(
//   liElem2,
//   document.getElementById("one")
// ).style.backgroundColor = "blue";
