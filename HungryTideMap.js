var map = L.map('map', {
    center: [21.9497, 89.1833],
    zoom: 7,
    maxBounds: [[21.5, 88.0], [22.5, 90.0]], // Restrict movement within Sundarbans
    maxBoundsViscosity: 1.0
});

L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=d8b28e8cfc094c8184c2259d9629506a', {
    attribution: '&copy; OpenStreetMap contributors & Thunderforest'
}).addTo(map);

var locations = [
    { name: "Sundarbans", coords: [21.9497, 89.1833], desc: "The vast mangrove delta that serves as the novel’s primary setting, where tides shape life and survival is uncertain." },
    { name: "Garjontola", coords: [21.9333, 89.1500], desc: "A perilous spot where Fokir's ancestors fell to tiger attacks, emphasizing the novel’s theme of human vs. nature." },
    { name: "Lusibari", coords: [21.8800, 89.2750], desc: "A fictional island in the Sundarbans, Lusibari is the home of Nilima and her Badabon Trust. It serves as a hub of social work, with a hospital and a school aimed at improving the lives of the island’s inhabitants. It is the farthest inhabited island, surrounded by rivers and facing challenges posed by the tides" },
    { name: "Canning", coords: [22.3200, 88.6600], desc: "The gateway to the Sundarbans, marking the transition from urban life to the unpredictable tides of the delta." },
    { name: "Sagar Island", coords: [21.6500, 88.0500], desc: "A pilgrimage site where tides dictate faith, reinforcing the novel’s connection between nature and spirituality." },
    { name: "Moyna Dwip", coords: [22.1000, 88.9000], desc: "An island affected by displacement, mirroring the struggles of settlers and conservationists in the Sundarbans." },
    { name: "Bhola Island", coords: [22.3000, 90.8500], desc: "Where Kusum’s family once lived before being forced out by tides, highlighting the environmental refugee crisis." },
    { name: "Morichjhapi", coords: [21.8500, 88.6000], desc: "Site of a tragic massacre of refugees, a dark historical event interwoven with the novel’s themes of justice and survival." }
];

locations.forEach(location => {
    var marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(`<div class="popup-content"><strong>${location.name}</strong><br>${location.desc}</div>`);
});