var map = L.map('map', {
    center: [54, -114],
    zoom: 6,
    attributionControl: false // We define our own attribution
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: ' &copy;  <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',
    id: 'mapbox.streets'
}).addTo(map);

// Set Custom Attribution
L.control.attribution().addAttribution("<a target='_blank' href='https://www.albertageomaticsgroup.ca/'>Alberta Geomatics Group</a>").addTo(map)