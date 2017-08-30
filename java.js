//****Global Variables****


// Enter button
var enterButton = document.querySelector('.enter-button');
// Main Content Container
var mainContent = document.querySelector('.linked-list-tile-container');
// Website title
var websiteTitleUserInput = document.querySelector('.website-title-input');
// Website URL
var websiteUrlUserInput = document.querySelector('.website-url-input');
// Clear Button


//****Objects****





//****Event Listeners****


// Delete Button Event Listener
// deleteButton.addEventListener('click', removeCard);
// Enter Button Event Listner
enterButton.addEventListener('click', userInputErrorMessage);
// Website URL Event Listener
// websiteTitleUserInput.addEventListener('keypress' enableEnterButton());
// Website Title Event Listener
// websiteUrlUserInput.addEventListener('keypress' enableEnterButton());



// Main Content Container Event Listener


//****Functions****

function userInputErrorMessage() {
  var titleInput = websiteTitleUserInput.value;
  var urlInput = websiteUrlUserInput.value;
  if (titleInput === "" || urlInput === "") {
    alert("Needs both Title and URL to generate Linked List Card")
  }
  else {
    generateCard(event)
      event.preventDefault();
  }
};

// Function that builds Linked List Boxes
function generateCard() {
  var websiteTitle = document.querySelector('.website-title-input').value;
  var websiteUrl = document.querySelector('.website-url-input').value;
  mainContent.insertAdjacentHTML('afterbegin', `<section class="linked-list-box">
      <h2 class="website-title-output">${websiteTitle}</h2>
      <a class="website-url-output" href="${websiteUrl}">${websiteUrl}</a>
      <span class="read-delete-links">
      <a class="read read-link">Read</a>
      <a class="delete delete-link">Delete</a>
      </span>
    </section>`);
  clearInputsResetFocus();
};




//Clear Input Fields And Reset Focus
function clearInputsResetFocus() {
  $('.website-title-input').val('');
  $('.website-url-input').val('');
  $('.website-title-input').focus();
}


// Clear Read Links

//Delete A Link Boxe

$(".linked-list-tile-container").on('click', '.delete', deleteLink);

$(".linked-list-tile-container").on('click', '.read', toggleMarkAsRead);

function deleteLink () {
  $(this).parent().parent().remove();
}

//Toggle Mark As Read
function toggleMarkAsRead() {
  $(this).closest('section').toggleClass('linked-list-box-read');
}

//On click of "read" toggle text color to red, and the container background-color to grey

// Total Number Of Link Boxes

// Validate URL

// Correct Format Of The Web Address

// Control The Error State

// Validate Form

// Website Box Links
