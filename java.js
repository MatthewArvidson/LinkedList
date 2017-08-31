//****Global Variables****
var enterButton = document.querySelector('.enter-button');
var listenForClicks = document.querySelectorAll('.read')
var mainContent = document.querySelector('.linked-list-tile-container');
var websiteTitleUserInput = document.querySelector('.website-title-input');
var websiteUrlUserInput = document.querySelector('.website-url-input');
//****Event Listeners****
enterButton.addEventListener('click', validateUrlInput);
websiteTitleUserInput.addEventListener('keyup', userInputErrorMessage);
websiteUrlUserInput.addEventListener('keyup', userInputErrorMessage);
// listenForClicks.addEventListener('click', readLinkCounter);
//****Functions****
// function readLinkCounter() {
//   var linkListArray = document.querySelectorAll('.linked-list-box');
//   var readLinksArray = document.querySelectorAll('.read');
//
//   var totalNumberLinks = document.querySelectorAll(".linked-list-box");
//   currentNumberOfLinks.innerText = linkListArray.length;
//
//   var currentReadLinks = document.querySelector(".read");
//   currentNumberOfReadLinks.innerText = readLinksArray.length;
//
//   var currentUnreadLinks = document.querySelector(".read");
//   currentNumberOfUnreadLinks.innerText = linkListArray.length - readLinksArray.length;
// }
function userInputErrorMessage() {
  var titleInput = websiteTitleUserInput.value;
  var urlInput = websiteUrlUserInput.value;
  if (titleInput === "" || urlInput === "") {
    enterButton.disabled = true;
  }
  else {
    enterButton.disabled = false;
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
  enterButton.disabled = true;
}
$(".linked-list-tile-container").on('click', '.delete', deleteLink);
$(".linked-list-tile-container").on('click', '.read', toggleMarkAsRead);
function deleteLink () {
  $(this).parent().parent().remove();
}
function toggleMarkAsRead() {
  $(this).closest('section').toggleClass('linked-list-box-read');
}
function validateUrlInput () {
  var regEx1 = /^(ftp|http|https):\/\/[^ "]+$/;
  var regEx2 = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|io|COM|ORG|NET|MIL|EDU|IO)$/;
  if (regEx1.test(websiteUrlUserInput.value)) {
    generateCard();
  }else if (regEx2.test(websiteUrlUserInput.value)){
    websiteUrlUserInput.value = 'http://' + websiteUrlUserInput.value;
    generateCard();
  }
  else{
    alert('Please add a valid Title and URL.')
  }
}
