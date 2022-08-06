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

<div class="comment__user-image"> - -goes on comment entries
<div class="comment__unknown-user"></div> - goes in user image
</div>
<div class="comment__area"> -- goes on comment entries
<div class="comment__user"> -- goes in comment area
<h4 class="comment__name">Connor Walton</h4>-- goes in comment area
<p class="comment__timeStamp">02/17/2021</p>-- goes in comment area
</div>
<p class="comment__comment">This is art. This is inexplicable magic -- goes on comment entries
expressed in the purest way, everything 
that makes up this majestic work 
deserves reverence. Let us appreciate 
this for what it is and what it contains.</p>
</div>
</div>


</div>
</div>
*/
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    
    //exterior comment wrapper
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comment__previous');
    
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
    nameElem.innerText = name;
    
    //add time stamp
    const timeStamp = document.createElement('p');
    timeStamp.classList.add('comment__timeStamp');
    timeStamp.innerText = new Date().toLocaleDateString();
    
    //comment added to div
    const commentElem = document.createElement('p');
    commentElem.classList.add('comment__comment');
    commentElem.innerText = comment;
    
    commentEntries.prepend(commentWrapper); // adds to the top
    commentWrapper.appendChild(userImgSection);
    userImgSection.appendChild(userImg);
    commentWrapper.appendChild(commentDiv);
    commentDiv.appendChild(commentUserDiv);
    commentUserDiv.appendChild(nameElem);
    commentUserDiv.appendChild(timeStamp);
    commentDiv.appendChild(commentElem);
      
    //I need to clear for another entry
    //I need to figure out how to get the new comments to got to the top
});