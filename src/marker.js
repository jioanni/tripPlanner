const mapboxgl = require("mapbox-gl");



function buildMarker(type, coordsArray) {
    console.log('working');
    let newMarkEl = document.createElement('div');
    newMarkEl.style.width = "32px";
    newMarkEl.style.height = "39px";
    let imageUrl;
    if (type === 'Activity') imageUrl = 'url(http://i.imgur.com/WbMOfMl.png)'
    else if (type === 'Hotel') imageUrl = 'url(http://i.imgur.com/D9574Cu.png)'
    else if (type === 'Restaurant') imageUrl = 'url(http://i.imgur.com/cqR6pUI.png)'
    newMarkEl.style.backgroundImage = imageUrl;
    let newMark = new mapboxgl.Marker(newMarkEl).setLngLat(coordsArray);
    return newMark;
}



module.exports = buildMarker;
