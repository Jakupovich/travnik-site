let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.2254214, lng: 17.645272   },
    zoom: 17,
  });
}

window.initMap = initMap;