console.log("script map");

function googleApi() {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAALkKv3-jjc88zn9dD6hGheGkZ21xW_9o&callback=initMap");
}

function initMap() {
    var el = document.getElementById("dataMap").textContent;
    console.log(JSON.parse(el));
    el = JSON.parse(el);

    var myElem = document.getElementById("myDataMap").textContent;
    console.log(JSON.parse(myElem));
    myElem = JSON.parse(myElem)

    var locations = [
            ["Position actuelle proximative", myElem.latitude, myElem.longitude, 1],
            [el.name, el.latitude, el.longitude, 2]
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

function loadScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
}