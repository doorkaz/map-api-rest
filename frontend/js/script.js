function initMap() {
	const center = { lat: -33.4904906, lng: -70.6215968} // UTFSM LAT - LNG
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: center,
	});

	async function data(){
		const res = await fetch('http://127.0.0.1:8000/api/v1/point/')
		const data = await res.json();
		return data;
	}
	
	var data = data();
	data.then(value => {
		value.forEach(item => {
			console.log(item.id)
			const myLatLng = { lat: item.lat, lng: item.long }
			new google.maps.Marker({
				position: myLatLng,
				map,
				title: item.tiempo,
			});
		});
	});
}

window.initMap = initMap