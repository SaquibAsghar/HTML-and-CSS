let map;
const loc = { lat: 28.613939, lng: 77.209023 };
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center:loc,
		zoom: 14,
	});
}

const marker = new google.maps.Marker( {
    position: loc,
    map: map
})
