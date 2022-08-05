// let array = [1, 2, 3, 4];
// if(array.length === 0) {
//     console.log('is an empty array');
// }

// let sum = 0;
// for(let i = 0; i < array.length; i++) {
// 	sum += array[i];
// }
// return sum;

/*
* Comment form
*/
const commentForm = document.querySelector('.form');

//create a const for the journal entries to be added
const journalEntries = document.getElementById('.comment__previous');
/*
* Journal Form Submit Event and Handler
I want to create a similar comment entry like this
            <div class="comment__wrapper">
                <div class="comment__user-image">
                    <div class="comment__unknown-user"></div>
                </div>
                <div class="comment__area">
                    <div class="comment__user">
                        <h4 class="comment__name">Connor Walton</h4>
                        <p class="comment__timeStamp">02/17/2021</p>
                    </div>
                    <p class="comment__comment">This is art. This is inexplicable magic 
                        expressed in the purest way, everything 
                        that makes up this majestic work 
                        deserves reverence. Let us appreciate 
                        this for what it is and what it contains.</p>
                    </div>
            </div>
*/
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const comment = event.target.comment.value;
  
  console.log(name);
  console.log(comment);
  console.log(event);
  
  const listItem = document.createElement('div');
  listItem.classList.add('comment__class');
  //img div
  const userImg = document.createElement('div');
  userImg.classList.add('comment__user-image');
  //greyed circle - it didn't work??
  const userImgCircle = document.createElement('div');
  userImgCircle.classList.add('comment__unknown-user');
  const nameElem = document.createElement('h4');
  nameElem.innerText = name;
  
  const commentElem = document.createElement('p');
  commentElem.innerText = comment;
  
  listItem.appendChild(nameElem);
  listItem.appendChild(commentElem);
  listItem.appendChild(userImg);
  listItem.appendChild(userImgCircle);
  commentForm.appendChild(listItem);
});
