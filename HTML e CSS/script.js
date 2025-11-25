let map = L.map('map').setView([-30.0243475, -51.2082336], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([-30.0243475, -51.2082336]).addTo(map);

let circle = L.circle([-30.0243475, -51.2082336], {
    color: 'blue',
    fillColor: '#1278DE',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// let polygon = L.polygon([
//     [-30.0243475, -51.2082336],
//     [-30.0243475, -51.2082336],
//     [-30.0243475, -51.2082336]
// ]).addTo(map);

marker.bindPopup("<b>Sua localização!</b><br>Você está aqui!").openPopup();
circle.bindPopup("Etá sem água nessa área.");
polygon.bindPopup("I am a polygon.");

let popup = L.popup()
    .setLatLng([-30.0243475, -51.2082336])
    .setContent("I am a standalone popup.")
    .openOn(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);

// let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);