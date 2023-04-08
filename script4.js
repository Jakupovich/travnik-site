let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.2980365, lng: 17.5956094   },
    zoom: 15,
  });
}

window.initMap = initMap;