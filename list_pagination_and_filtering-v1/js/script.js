/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const itemsPerPage = 10;
const studentList = document.querySelectorAll('.student-item');

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage (list, page) {
  let startIndex = (page * itemsPerPage ) - itemsPerPage
  let endIndex = (page * itemsPerPage) 
  for (let i=0; i<list.length ; i++ ) {
     if (i >= startIndex && i< endIndex) {
       list[i].style.display = 'block';
     } else {
       list[i].style.display = 'none';
     }
  } 
};

//Calls Initial first 10 names when site first loads up
showPage(studentList, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
  const totalPages = Math.ceil((list.length / itemsPerPage)); //the amount of pages needed 
 
  const div = document.createElement('div');
  div.className = 'pagination'; //adds pagination class to div
  document.querySelector('.page').appendChild(div); //appends the 'pagination' div with the divs with .page classes
  let ul = document.createElement('ul');
  div.appendChild(ul);

//loops through list and creates li and a tags.
for (let i = 0; i<totalPages; i+=1) {
const li = document.createElement('li');
const a = document.createElement('a');
a.href = '#';
a.textContent = i + 1;
ul.appendChild(li);
li.appendChild(a);
}

// variables for the eventListeners
let liLinks = document.querySelector('li');
let activeLinks = document.querySelectorAll('a');
//removes active class when 'a' elements are clicked
function removeClass() {
   for (var i = 0; i <activeLinks.length; i++) {
     activeLinks[i].classList.remove('active');
     if (event.target){
        event.target = 'active';
     }
   }
}

//Changes page and shows corresponding names when you click on page buttons.
ul.addEventListener('click', (e) => {
  showPage(list, event.target.textContent);
    removeClass();
     });
   }
   
  

//
showPage(studentList, 1);
appendPageLinks(studentList);
// Remember to delete the comments that came with this file, and replace them with your own code comments
