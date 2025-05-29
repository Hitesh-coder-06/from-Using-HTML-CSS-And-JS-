const form = document.getElementById('uploadForm');
const messageBox = document.getElementById('messageBox');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  messageBox.textContent = "Form submission is disabled for now.";
});
