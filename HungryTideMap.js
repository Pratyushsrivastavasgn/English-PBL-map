document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map', {
        center: [21.9497, 89.1833],
        zoom: 7,
        maxBounds: [[21.5, 88.0], [22.5, 90.0]],
        maxBoundsViscosity: 1.0
    });
    
    L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=d8b28e8cfc094c8184c2259d9629506a', {
        attribution: '&copy; OpenStreetMap contributors & Thunderforest'
    }).addTo(map);
    
    var locations = [
        { name: "Lusibari", coords: [21.8800, 89.2750], desc: "A fictional island in the Sundarbans, Lusibari is the home of Nilima and her Badabon Trust...", img: "lusibari.jpg" },
        { name: "Garjontola", coords: [21.9333, 89.1500], desc: "A remote and largely undisturbed part of the Sundarbans where Piya, with Fokir’s help, observes the elusive Irrawaddy dolphins...", img: "garjontola.jpg" },
        { name: "Canning", coords: [22.3200, 88.6600], desc: "A real town on the fringes of the Sundarbans, serving as the main gateway to the tide country...", img: "canning.jpg" },
        { name: "Gosaba", coords: [22.1650, 88.8000], desc: "A significant settlement in the Sundarbans, historically founded by Sir Daniel Hamilton...", img: "gosaba.jpg" },
        { name: "Morichjhãpi", coords: [21.8500, 88.6000], desc: "A real island with a tragic history, Morichjhãpi was the site of a violent eviction of refugees in 1979...", img: "morichjhapi.jpg" },
        { name: "Emilybari", coords: [21.9000, 89.2000], desc: "One of the minor locations mentioned along the journey to Lusibari...", img: "emilybari.jpg" },
        { name: "Raimangal River", coords: [21.7000, 89.0000], desc: "A vast and powerful river that flows through the Sundarbans, known for its strong tides and treacherous waters...", img: "raimangal.jpg" },
        { name: "Satjelia", coords: [22.1000, 88.8500], desc: "A real island in the Sundarbans and the home of Fokir and his family...", img: "satjelia.jpg" },
        { name: "Megha River", coords: [22.3000, 89.5000], desc: "One of the many waterways crisscrossing the Sundarbans, the Megha River is where Piya and Fokir track the movement of the Irrawaddy dolphins...", img: "megha.jpg" },
        { name: "Mohona (Estuary)", coords: [21.7500, 89.2500], desc: "The meeting point of multiple river channels where the freshwater and seawater mix...", img: "mohona.jpg" },
        { name: "Gerafitola", coords: [21.8000, 89.1000], desc: "A secluded and mysterious location where Fokir anchors the boat during one of his trips with Piya...", img: "gerafitola.jpg" },
        { name: "Champahati", coords: [22.2500, 88.7500], desc: "A train station on the way to Canning, marking the transition from the urban sprawl of Kolkata to the rural and watery landscape of the Sundarbans...", img: "champahati.jpg" },
        { name: "Matla River", coords: [22.1000, 88.7000], desc: "Another major river in the Sundarbans, playing a crucial role in local trade and travel...", img: "matla.jpg" },
        { name: "Annpur and Jamespur", coords: [22.0500, 88.6000], desc: "Small settlements mentioned in the journey to Lusibari, these places represent the scattered human presence in the Sundarbans...", img: "annpur_jamespur.jpg" }
    ];
    
    locations.forEach(location => {
        var marker = L.marker(location.coords).addTo(map);
        marker.bindPopup(`<div class="popup-content">
            <strong>${location.name}</strong><br>${location.desc}
            <br><img src="assets/images/${location.img}" alt="${location.name}" 
            style="width:100%; border-radius:10px; margin-top:10px;"></div>`);
        
    });
});