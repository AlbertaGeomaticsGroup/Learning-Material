var map = L.map('map').setView([54, -114], 6);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: ' &copy;  <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',
    id: 'mapbox.streets'
}).addTo(map);
