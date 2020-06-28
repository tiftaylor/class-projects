function initMap() {
  
      var location = {
         lat: 40.8054491,
         lng: -73.9654415
       };

      var map = new
      google.maps.Map(document.getElementById('map'), {
       center: location,
       zoom: 12,
      });
    
      var marker = new
      google.maps.Marker({
      position: location,
      map: map,
      title: 'Location'
  	  });
    
}
