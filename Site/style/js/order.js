// Get elements:
var modal = document.getElementById("OrderModal");

function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

var btn = document.querySelectorAll(".button");
btn.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

var span = document.getElementsByClassName("close")[0];

// Function to open the modal
span.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target == btn) {
    closeModal(); 
  }
});
