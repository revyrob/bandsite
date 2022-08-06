/*
*Add show after hero section
*
*/
function fillShowSection(info) {
    const parentElement = document.querySelector("main");
    const showsSection = document.createElement("section");
    showsSection.classList.add("shows");
    
    //add shows header
    const showsHeader = document.createElement("h2");
    showsHeader.classList.add("shows__title");
    showsHeader.innerText = "Shows";
    
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
            topTitleHeader.innerText = array[i];
            topTitle.appendChild(topTitleHeader);
            
            newHeader = topTitle;
            
        } return(newHeader);
    } 
    console.log(loopTitles(info));
    // loopTitles(info);
    parentElement.appendChild(showsSection);
    showsSection.appendChild(showsHeader);
    showsSection.appendChild(showsWrapper);
    showsWrapper.appendChild(topTitleWrapper);
    
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
* 
*/
setTimeout(() => {
function addShowToDocument(show) {
    const list = document.querySelector(".showsList");
    const card = document.createElement("div");
    card.classList.add("shows__card");
    
    //add DATE title
    const itemTitleDate = document.createElement("h4");
    itemTitleDate.classList.add("shows__card--title");
    itemTitleDate.innerText = "DATE";
    
    
    //add date from list
    const itemDate = document.createElement("div");
    itemDate.classList.add("shows__card--info");
    itemDate.innerText = show.date;
    
    //add VENUE title
    const itemTitleVenue = document.createElement("h4");
    itemTitleVenue.classList.add("shows__card--title");
    itemTitleVenue.innerText = "VENUE";
    
    
    //add venue from list
    const itemVenue = document.createElement("div");
    itemVenue.classList.add("shows__card--info");
    itemVenue.innerText = show.venue;
    
    //add LOCATION title
    const itemTitleLocation = document.createElement("h4");
    itemTitleLocation.classList.add("shows__card--title");
    itemTitleLocation.innerText = "LOCATION";
    
    
    //add location from list
    const itemLocation = document.createElement("div");
    itemLocation.classList.add("shows__card--info");
    itemLocation.innerText = show.location;
    
    //add button
    const itemButton = document.createElement("button");
    itemButton.classList.add("shows__card--buy");
    itemButton.innerText = "BUY TICKETS";
    
    list.appendChild(card);
    card.appendChild(itemTitleDate);
    card.appendChild(itemDate);
    card.appendChild(itemTitleVenue);
    card.appendChild(itemVenue);
    card.appendChild(itemTitleLocation);
    card.appendChild(itemLocation);
    card.appendChild(itemButton);
    
    /* 
    *event listener for clicking on a show div
    * there is still an issue with selected will select either the entire card or the titles??
    */
    card.addEventListener('click', (event) => {
        //if an element has a .style-selected class, remove it
        //if child element is selected add styling
        //if another card is selected change styling
        const selectedElement = document.querySelector('.shows__card--selected');
        console.log(event.currentTarget);
        if (selectedElement !== null) {
            selectedElement.classList.remove('shows__card--selected');
        }
        event.target.classList.add('shows__card--selected')
    });
    list.appendChild(card);
    
}
/* 
*Generate the show list
Calls the addShowToDocument to loop throug the array
*/
function generateShows(showList) {
    const showItem = document.querySelector(".showsList");
    showItem.innerText = '';
    showList.forEach(function(show){
        addShowToDocument(show);
    });
}

/* 
*
the array for the dates, venues, and location
*/
const showItems = [
    {date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Franciso, CA"},
    {date: "Tues Sept 21 2021", venue: "Pier 3 East", location: "San Franciso, CA"},
    {date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Franciso, CA"},
    {date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Franciso, CA"},
    {date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Franciso, CA"},
    {date: "Wed Dec 15 2021", venue: "Press Club", location: "San Franciso, CA"},
];
/*
/* 
*Call the generateShows array with the array of objects showItems
*/
generateShows(showItems);

}, "500")










