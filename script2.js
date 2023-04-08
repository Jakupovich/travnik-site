let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.2287249, lng: 17.6390456   },
    zoom: 17,
  });
}

window.initMap = initMap;




        
