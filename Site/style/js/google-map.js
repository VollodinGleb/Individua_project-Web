function initMap() {
    // Create a map object and specify the initial coordinates
    var map = new google.maps.Map(document.getElementById('contact-map'), {
      center: { lat: 37.7749, lng: -122.4194 }, // Set the initial coordinates
      zoom: 12 // Set the initial zoom level
    });
  }		
  
window.onload = function() {
    initMap();
};