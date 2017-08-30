//****Global Variables****

var enterButton = document.querySelector('.enter-button');
var mainContent = document.querySelector('.linked-list-tile-container');
var websiteTitleUserInput = document.querySelector('.website-title-input');
var websiteUrlUserInput = document.querySelector('.website-url-input');

//****Objects****

//****Event Listeners****

enterButton.addEventListener('click', userInputErrorMessage);

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

function clearInputsResetFocus() {
  $('.website-title-input').val('');
  $('.website-url-input').val('');
  $('.website-title-input').focus();
}

$(".linked-list-tile-container").on('click', '.delete', deleteLink);

$(".linked-list-tile-container").on('click', '.read', toggleMarkAsRead);

function deleteLink () {
  $(this).parent().parent().remove();
}

function toggleMarkAsRead() {
  $(this).closest('section').toggleClass('linked-list-box-read');
}
