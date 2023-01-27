
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
var headerTitle = document.getElementById('header-title');
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
}