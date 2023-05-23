// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.querySelectorAll(".modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners for button click and close button click
btns.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

span.addEventListener("click", closeModal);

// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
