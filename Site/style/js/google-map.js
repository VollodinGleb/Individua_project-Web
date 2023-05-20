function initMap() {
    var position = { lat: 49.4063843, lng: 32.0555585 }

    var map = new google.maps.Map(document.getElementById('contact-map'), {
      center: position, 
      zoom: 15
    });

    var marker = new google.maps.Marker({
      position: position, 
      map: map, 
      title: 'Main Gachi club'
    });
  }		
  
window.onload = function() {
    initMap();
};