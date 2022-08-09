/*
* Comment form
*/
/*
* Journal Form Submit Event and Handler
*
******Use as outline for creating form data*******
*/
//Need this for Event Listener
const commentForm = document.querySelector('.form');
//create a const for the journal entries to be added
const commentEntries = document.querySelector('.comment__added');

//APIs with keys for post and stored comments
const commentsURL = "https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";


function displayComments() {
    //get the API comments
    axios.get(commentsURL).then(response => {  
        //call an array of the data
        const myCommentArray = response.data;
        // console.log(myCommentArray);
        
        //go through a forEach to put the data where it belongs
        myCommentArray.forEach(myArray => {
            //add previous comments to div
            //exterior comment wrapper
            const commentWrapper = document.createElement('div');
            commentWrapper.classList.add('comment__wrapper');
            commentEntries.prepend(commentWrapper);
            
            //img div
            const userImgSection = document.createElement('div');
            userImgSection.classList.add('comment__user-image');
            commentWrapper.appendChild(userImgSection);
            
            //unknown circle user image greyed
            const userImg = document.createElement('div');
            userImg.classList.add('comment__unknown-user');
            userImgSection.appendChild(userImg);
            
            //comment area
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment__area');
            commentWrapper.appendChild(commentDiv);
            
            //comment user goes to comment area
            const commentUserDiv = document.createElement('div');
            commentUserDiv.classList.add('comment__user');
            commentDiv.appendChild(commentUserDiv);
            
            //name added to div
            const nameElem = document.createElement('h4');
            nameElem.classList.add('comment__name');
            nameElem.innerText = myArray.name;
            commentUserDiv.appendChild(nameElem);
            
            //comment added to div
            const commentElem = document.createElement('p');
            commentElem.classList.add('comment__comment');
            commentElem.innerText = myArray.comment;
            commentDiv.appendChild(commentElem);
        });
    }).catch((err) => {
        console.error(err);
    });
}
/* 
*clear comments after the user has submitted a comment
*/
function clearComments() {
    //target the name and comment box to clear
    const clear = document.querySelector('.form__input');
    const clear2 = document.querySelector('.form__input--comment');
    // console.log(clear.value);
    clear.value = ' ';
    clear2.value= ' ';
}
/* 
*event listener which pushes to the online API
*/


commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    axios.get(commentsURL).then(response => {  
        //create const for response
        const newPost = response.data;
        // console.log(newPost);
        const newComment = {name: event.target.name.value, comment: event.target.comment.value};
        console.log(newComment);
        
        newPost.push(newComment);
        console.log(newPost);
        
        //generate comments down below
        //let a setTimeout run before clearing comments
        setTimeout(() => {clearComments();}, "1000")
        
    }).catch((err) => {
        console.error(err);
    });
})

//call function
displayComments();
