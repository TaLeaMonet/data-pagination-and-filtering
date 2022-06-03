/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * data.length) - data.length; 
   const endIndex = page * data.length;
   const studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = ``;

   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
       //Create elements for each student's information  
       const li = document.createElement('li'); 
       const studentDetailsDiv = document.createElement('div');
       const img = document.createElement('img');
       const h3 = document.createElement('h3');
       const emailSpan = document.createElement('span');
       const joinedDetailsDiv = document.createElement('div');
       const dateSpan = document.createElement('span');
         
      //Implement attributes on elements and append to body of page
       li.className = "student-item cf";
       studentDetailsDiv.className = "student-details";
       img.className = "avatar";
       img.src = data[i].picture.thumbnail; 
       img.alt = "Profile Picture";
       h3.innerHTML = `${data[i].name.first} ${data[i].name.last}`;
       emailSpan.className = "email";
       emailSpan.innerHTML = data[i].email; 
       joinedDetailsDiv.className = "joined-details";
       dateSpan.className = "date";
       dateSpan.innerHTML = `Joined ${data[i].registered.date}`;
       studentList.append(li);
       li.appendChild(studentDetailsDiv);
       studentDetailsDiv.append(img, h3, emailSpan);
       li.appendChild(joinedDetailsDiv);
       joinedDetailsDiv.append(dateSpan); 
      }
   }
  
}
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const paginationButtons = Math.ceil(list.length / 9); 
   const linkList = document.getElementsByClassName("link-list")[0];
   linkList.innerHTML = '';
 //Create elements for pagination buttons and interate over number of buttons needed to be displayed
   for(i = 0; i < paginationButtons; i++) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = `${i+1}`
      li.append(button);
      linkList.append(li);
   }
}
addPagination(data);

// Call functions
