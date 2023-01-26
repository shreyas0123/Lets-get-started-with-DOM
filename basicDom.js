
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

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000'; 

//var items = document.getElementsById('ADD');
//items.style.color = 'green';
//items.style.fontWeight='bold';

var additems = document.getElementById("ADD");
additems.style.color = 'green';
additems.style.fontWeight='bold';
