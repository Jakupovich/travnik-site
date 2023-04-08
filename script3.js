let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.2264158, lng: 17.6630655   },
    zoom: 17,
  });
}

window.initMap = initMap;
