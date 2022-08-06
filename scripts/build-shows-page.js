/**
* Adds a single item to the DOM
* 
* <div class="shows__card">
<h4 class="shows__card--title">DATE</h4>
<div class="shows__card--info">Mon Sept 06 2021 
</div>
<h4 class="shows__card--title">VENUE</h4>
<div class="shows__card--info">Ronald Lane
</div>
<h4 class="shows__card--title">LOCATION</h4>
<div class="shows__card--info">San Francisco, CA
</div>
<button class="shows__card--buy">BUY TICKETS</button>
</div>
*/
function addShowToDocument(show) {
    console.log(show)
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
}
/* 
*Generate the show list
*/

function generateShows(showList) {
    const showItem = document.querySelector(".showsList");
    showItem.innerText = '';
    showList.forEach(function(show){
        addShowToDocument(show);
    });
}


//the array for the dates, venues, and location
const showItems = [
    {date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Franciso, CA"},
    {date: "Tues Sept 21 2021", venue: "Pier 3 East", location: "San Franciso, CA"},
    {date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Franciso, CA"},
    {date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Franciso, CA"},
    {date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Franciso, CA"},
    {date: "Wed Dec 15 2021", venue: "Press Club", location: "San Franciso, CA"},
];
generateShows(showItems);

// this is for my button to buy ticket
    // const buyTicket = document.getElementsByClassName('.shows__card--buy');

    // buyTicket.addEventListener("click", (event) => {
    //     console.log('User wants to buy a ticket.');
    // });

