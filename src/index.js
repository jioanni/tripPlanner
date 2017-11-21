console.log("LETS ALL DO THE PANTS DANCE");
const buildMarker = require('./marker.js')
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ5YW5oY2xhcmsiLCJhIjoiY2phOXVwbjd2MGJqNTM1bmM5MHBzZW1sOSJ9.H_RJuV2me9Kl_iERehRaxQ';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});




const marker = buildMarker('Restaurant', [-74.009151, 40.705086]);
marker.addTo(map);



// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

