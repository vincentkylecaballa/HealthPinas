function centerTracker() {
    var mymap = L.map('mapid').setView([14.604294, 120.994715], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaXRzdmluY2VudGNhYnMiLCJhIjoiY2tvZHU3NjE4MDUyZjJwbzVoZzlyM3B6cSJ9.alItYu2SjSuQ_ylaf2lwJw'
    }).addTo(mymap);


    var mapOptions = {
        center: [17.385044, 78.486671],
        zoom: 10
    }

    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    map.addLayer(layer);

    map.addControl(new L.Control.Search({
        container: 'input-group',
        layer: markersLayer,
        initial: false,
        collapsed: false
    }));

    for (i in data) {
        var title = data[i].title, //value searched
            loc = data[i].loc, //position found
            marker = new L.Marker(new L.latLng(loc), {
                title: title
            }); //se property searched
        marker.bindPopup('title: ' + title);
        markersLayer.addLayer(marker);
    }

    var icon = new L.Icon.Default();
    icon.options.shadowSize = [0, 0];
    var marker = new L.Marker(map.getCenter(), {
        icon: icon
    }).addTo(map);


}