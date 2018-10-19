console.log("script map");

function initMap() {
    var el = document.getElementById("dataMap").textContent;
    console.log(JSON.parse(el));
    el = JSON.parse(el);

    var myElem = document.getElementById("myDataMap").textContent;
    console.log(JSON.parse(myElem));
    myElem = JSON.parse(myElem)

    var locations = [
            ["Position actuelle proximative", myElem.latitude, myElem.longitude, 1],
            [myElem.name, myElem.latitude, myElem.longitude, 2]
        ];

    console.log("locations", locations);

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: new google.maps.LatLng(locations[locations.length - 1][1], locations[locations.length - 1][2]),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    const infowindow = new google.maps.InfoWindow();

    for (i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: i == locations.length - 1 ? "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });
        google.maps.event.addListener(marker, "click", (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}