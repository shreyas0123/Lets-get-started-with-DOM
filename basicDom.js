
//examine the document object
//console.dir(document);
//console.log(document.title);
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.forms[0]);


//getelementbyid
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'GoodBye';
//headerTitle.innerHTML ='<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

//getelementbyclassname
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';



//console.dir(document)
//Make the title have a black border
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000'; 

//Now make ADD ITEM bold and chage the font color to greeen
var additems = document.getElementById("ADD");//"ADD" in order to get ADD ITEM bold we need to give id ,let say id = "ADD"
additems.style.color = 'green';
additems.style.fontWeight='bold'; 

//getelementsbyclassname
//Make the 3 rd element in the list have green background color
//Make all the elements in the list have bold color font
var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello 2';
//items.style.fontWeight = 'bold'; it shows error we need to use for loop if we want entire items to be in same colour ,if we want entire items to be in bold case etc. single items can get diff colour,bold letterhere no need of use for loop.
items[2].style.backgroundColor = 'green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}    */

//Add a new li element without the same class Name in html file
//And try editing it with getelementbytagname
/*var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = 'gray'; //by using tagName we changed background color of all the items, item 5 color is also changed.
} */

//Add a new li element without the same class Name in html file
//And try editing it with getelementsbyclassname
/*var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello 2';
//items.style.fontWeight = 'bold'; it shows error we need to use for loop if we want entire items to be in same colour ,if we want entire items to be in bold case etc. single items can get diff colour,bold letterhere no need of use for loop.
/*items[2].style.backgroundColor = 'green';
for(var i=0;i<items.length;i++){
    console.log(items[1])
    items[i].style.backgroundColor = 'gray'; //by using classname eventhough we canged background color of all the items then also item 5 color is not changed
}*/

//querySelector
/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px gray';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type = "submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem= document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; */

//Make the 2nd item have green background color
//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'green';

//Make the 3rd item invisible
/*var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

//Choose all the odd elements and make their background green using QuerySelectorALL
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}  */

/*var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<even.length;i++){
    even[i].style.backgroundColor = 'green';
}*/

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
/*var li = document.querySelectorAll('li');
li[1].style.color = 'green'; */



//----------------------------------------------------


//Traversing DOM





var itemList = document.querySelector('#items');


//parent node property
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'gray';
//console.log(itemList.parentNode.parentNode);
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement property
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'gray';
//console.log(itemList.parentElement.parentElement);
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes property
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[0]);
//itemList.children[0].style.backgroundColor = 'yellow';

//firstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);

//lastElementChild
//console.log(itemList.lastElementChild);

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling 
//console.log(itemList.previousElementSibling);


//createElement
//create a div
var newDev = document.createElement('div');
//add className
newDev.className = 'hello';
//add id
newDev.id = 'hello1';
//add attribute
newDev.setAttribute('title','Hello Div');

//-----------------------------
//Now go head and add HEllo word before Item Lister
//create text node
var newDivText = document.createTextNode("Hello world");
//add text to div
newDev.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDev.style.fontSize = '30px';
container.insertBefore(newDev, h1);

//--------------------------

//Now go head and add HEllo word before Item 1
// Create a "li" element:
const newNode = document.createElement('li');

// Create a text node:
const textNode = document.createTextNode("Hello World");

// Append text node to "li" element:
newNode.appendChild(textNode);

// Insert before existing child:
const list = document.getElementById('items');
list.insertBefore(newNode, list.children[0]);











