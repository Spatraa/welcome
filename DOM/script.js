///getelementbyId
//let heading=document.getElementById('head');
//console.log(heading);
//get element by tag name
//let heading=document.getElementsByTagName(h1);
//get element by class name
//let heading =document.getElementsByClassName('head');
//queryselector
//let a=document.querySelector('.head');
//console.log(a);



//Traverse Dom
//parent Node
/*let head=document.querySelector('.heading');
const parent=head.parentNode;
console.log(parent);*/


//children node
/*const head=document.querySelector('.parent');
console.log(head.childNodes);*/


//nextelement siblings

//const head=document.querySelector('heading');
//console.log(head.nextElementSibling);

//previous element
//const head=document.querySelector('h3');
//console.log(head.previousElementSibling);


//changing text css applying
/*let head=document.querySelector('.heading');
head.innerHTML="i am sankar";
head.style.color='red';*/

//create elements
const heading=document.createElement('h1');
heading.innerHTML="dom manipulation";
heading.classList.add('title');
const parent=document.querySelector('.parent');
parent.appendChild(heading);
const subHead=document.createElement('h3');
subHead.innerHTML="web devlopment is osm";
parent.appendChild(subHead);

console.log(heading);


