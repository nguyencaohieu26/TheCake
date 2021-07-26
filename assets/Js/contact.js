// Contact page javascript
// Marker Map option
function initMap(){
  // map options
  var options = {
    zoom: 6,
    center: {lat:40.367474, lng:-82.996216}
  }

  // new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Columbus, OH, USA
  addMarker({lat:39.983334, lng:-82.983330});
  // Cleveland, OH, USA
  addMarker({lat:41.505493, lng:-81.681290});
  // Cincinnati, OH, USA
  addMarker({lat:39.103119, lng:-84.512016});
  // Toledo, OH, USA
  addMarker({lat:41.651031, lng:-83.541939});
  // Akron, OH, USA
  addMarker({lat:41.081757, lng:-81.511452});
  // Lima, OH, USA
  addMarker({lat:40.742551, lng:-84.1052256});
  // Findlay, OH, USA
  addMarker({lat:41.042778, lng:-83.642220});
  // Marion, OH, USA
  addMarker({lat:40.589138, lng:-83.128265});

 //add marker function
 function addMarker(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: map,
  });
 }
}
