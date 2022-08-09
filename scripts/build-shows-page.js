/*
*I need to add the other elements to the DOM
*/
/*
*Add show in main section
*
*/
function fillShowSection(info) {
    //parentElement that finds main and creates the section beneath it
    const parentElement = document.querySelector("main");
    const showsSection = document.createElement("section");
    showsSection.classList.add("shows");
    
    //add shows header
    const showsHeader = document.createElement("h2");
    showsHeader.classList.add("shows__title");
    showsHeader.innerText = "Shows";
    
    //shows showsList
    const showListDiv  = document.createElement("div");
    showListDiv.classList.add("showsList");
    
    //add div wrapper
    const showsWrapper = document.createElement("div");
    showsWrapper.classList.add("shows__wrapper");
    
    //shows topTitle
    const topTitleWrapper  = document.createElement("div");
    topTitleWrapper.classList.add("shows__topTitle");
    
    // for loop for adding info for labels
    function loopTitles(array){
        let newHeader = ' ';
        for(let i =0; i < array.length; i++) {
            const topTitle  = document.createElement("div");
            topTitle.classList.add("shows__topTitle--title"); 
            topTitleWrapper.appendChild(topTitle);
            
            const topTitleHeader = document.createElement("h4");
            topTitle.classList.add("shows__topTitle--style");
            topTitleHeader.innerText = array[i];
            topTitle.appendChild(topTitleHeader);
            
            newHeader = topTitle;
            
        } return(newHeader);
    } 
    // console.log(loopTitles(info));
    loopTitles(info);
    
    parentElement.appendChild(showsSection);
    showsSection.appendChild(showsHeader);
    showsSection.appendChild(showsWrapper);
    showsWrapper.appendChild(topTitleWrapper);
    showsWrapper.appendChild(showListDiv);  
}

/*
*array for labels
*/
const tableLabels = ["DATE", "VENUE", "LOCATION", ""];
/* 
*Call the generateShows array with the array of objects showItems
*/
fillShowSection(tableLabels);
/*
* Adds a single item to the DOM
* For each of the shows in the array
* Add the API to hear since the information will be going in here
*/
const showsURL = "https://project-1-api.herokuapp.com/showdates?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";


axios.get(showsURL).then(response => {
    
    
    //call an array of the data
    const myShowsArray = response.data;
    // console.log(myShowsArray);
    
    //go through a forEach to put the data where it belongs
    myShowsArray.forEach(myArray => {
        //get all the divs and titles to start
        //make each card
        const list = document.querySelector(".showsList");
        const card = document.createElement("div");
        card.classList.add("shows__card");
        list.appendChild(card);
        
        //add DATE title
        const itemTitleDate = document.createElement("h4");
        itemTitleDate.classList.add("shows__card--title");
        itemTitleDate.innerText = "DATE";
        card.appendChild(itemTitleDate);
        
        //add date from list
        const itemDate = document.createElement("div");
        itemDate.classList.add("shows__card--info-dark");
        itemDate.innerText = new Date(myArray.date).toDateString();
        card.appendChild(itemDate);
        
        //add VENUE title
        const itemTitleVenue = document.createElement("h4");
        itemTitleVenue.classList.add("shows__card--title");
        itemTitleVenue.innerText = "VENUE";
        card.appendChild(itemTitleVenue);
        
        //add venue from list
        const itemVenue = document.createElement("div");
        itemVenue.classList.add("shows__card--info");
        itemVenue.innerText = myArray.place;
        card.appendChild(itemVenue);
        
        //add LOCATION title
        const itemTitleLocation = document.createElement("h4");
        itemTitleLocation.classList.add("shows__card--title");
        itemTitleLocation.innerText = "LOCATION";
        card.appendChild(itemTitleLocation);
        
        //add location from list
        const itemLocation = document.createElement("div");
        itemLocation.classList.add("shows__card--info");
        itemLocation.innerText = myArray.location;
        card.appendChild(itemLocation);
        
        //add button
        const itemButton = document.createElement("button");
        itemButton.classList.add("shows__card--buy");
        itemButton.innerText = "BUY TICKETS";
        card.appendChild(itemButton);
        
        console.log(list.appendChild(card));
        
    })
    
    /* 
    *event listener for clicking on a show div
    * there is still an issue with selected will select either the entire card or the titles??
    */
    card.addEventListener('click', (event) => {
        //if an element has a .style-selected class, remove it
        //if child element is selected add styling
        //if another card is selected change styling
        const selectedElement = document.querySelector('.shows__card--selected');
        // console.log(event.currentTarget);
        if (selectedElement !== null) {
            selectedElement.classList.remove('shows__card--selected');
        }
        //just the card can be selected
        card.classList.add('shows__card--selected')
    });
    list.appendChild(card);
    
}).catch((err) => {
    console.error(err);
});












