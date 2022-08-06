/*
* Comment form
*/
//Need this for Event Listener
const commentForm = document.querySelector('.form');
//create a const for the journal entries to be added
const commentEntries = document.querySelector('.comment__added');
/*
* Journal Form Submit Event and Handler
*
******Use as outline for creating form data*******
*/


//add previous comments to div
function addCommentToDocument(input) {
    //exterior comment wrapper
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comment__wrapper');
    
    //img div
    const userImgSection = document.createElement('div');
    userImgSection.classList.add('comment__user-image');
    
    //unknown circle user image greyed
    const userImg = document.createElement('div');
    userImg.classList.add('comment__unknown-user');
    
    //comment area
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment__area');
    
    //comment user goes to comment area
    const commentUserDiv = document.createElement('div');
    commentUserDiv.classList.add('comment__user');
    
    //name added to div
    const nameElem = document.createElement('h4');
    nameElem.classList.add('comment__name');
    nameElem.innerText = input.name;
    
    //add time stamp
    const timeStamp = document.createElement('p');
    timeStamp.classList.add('comment__timeStamp');
    timeStamp.innerText = input.date;
    
    //comment added to div
    const commentElem = document.createElement('p');
    commentElem.classList.add('comment__comment');
    commentElem.innerText = input.comment;
    
    commentEntries.prepend(commentWrapper); // adds to the top
    commentWrapper.appendChild(userImgSection);
    userImgSection.appendChild(userImg);
    commentWrapper.appendChild(commentDiv);
    commentDiv.appendChild(commentUserDiv);
    commentUserDiv.appendChild(nameElem);
    commentUserDiv.appendChild(timeStamp);
    commentDiv.appendChild(commentElem);
}
/* 
*Generate the comment list
*/
function displayComments(list) {
    const commentItem = commentEntries;
    commentItem.innerText = '';
    list.forEach(function(comment){
        addCommentToDocument(comment);
    });
}

function clearComments() {
    //target the name and comment box to clear
    const clear = document.querySelector('.form__input');
    const clear2 = document.querySelector('.form__input--comment');
    console.log(clear.value);
    clear.value = ' ';
    clear2.value= ' ';
}

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    const date = new Date().toLocaleDateString();
    commentItems.push({name: name, date: date, comment: comment});
    
    //generate comments down below
    displayComments(commentItems);
    //let a setTimeout run before clearing comments
    setTimeout(() => {clearComments();}, "1000")
})

//
//add a click button to clear the comments
//

//the array for the dates, venues, and location
const commentItems = [
    {name: "Connor Walton", date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Miles Acosta", date: "12/20/2020", comment: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."},
];

displayComments(commentItems);
