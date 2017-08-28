//****Global Variables****


// Enter button
var enterButton = document.querySelector('.enter-button');
// Main Content Container
// Website title
// Website URL
// Clear Button


//****Objects****


// Function that builds Idea Boxes


//****Event Listeners****


// Clear Button Event Listener

// Enter Button Event Listner
enterButton.addEventListener('click', generateCard);
// Website URL Event Listener

// Website Title Event Listener

// Main Content Container Event Listener


//****Functions****

function generateCard(event) {
  event.preventDefault();
  var websiteTitle = document.querySelector('.website-title-input').value;
  var websiteUrl = document.querySelector('.website-url-input').value;
  var mainContent = document.querySelector('.linked-list-tile-container');
  mainContent.insertAdjacentHTML('afterbegin', `<section class="linked-list-box">
    <article class="website-title-output"><h2>${websiteTitle}</h2></article>
    <article class="website-url-output">${websiteUrl}</article>
    <span class="read-delete-links"><article class="read-link"><h3 class="read"><a>Read</a></h3></article>
    <article class="delete-link"><h3 class="delete"><a>Delete</a></h3></article></span>
  </section>`);
};


// Clear Read Links

// Total Number Of Link Boxes

// Validate URL

// Correct Format Of The Web Address

// Control The Error State

// Validate Form

// Website Box Links
