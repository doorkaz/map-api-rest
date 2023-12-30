const POINTS_ENDPOINT_URL = 'http://127.0.0.1:8000/api/v1/point/';

function initMap() {
	// Creates the map centered on a specific lat and long.
	const center = { lat: -33.4904906, lng: -70.6215968} 
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: center,
	});

	// Fetch into the endpoint.
	const getPoints = async () =>{
		const res = await fetch(POINTS_ENDPOINT_URL);
		const data = await res.json();
		return data;
	}

	let points = getPoints();
	// Creates a marker for each point in the map.
	points.then(value => {
		value.forEach(item => {
			const myLatLng = { lat: item.lat, lng: item.long }
			new google.maps.Marker({
				position: myLatLng,
				map,
				title: item.tiempo,
			});
		});
	});
}

window.initMap = initMap;