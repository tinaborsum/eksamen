const nav = document.querySelector("#nav");

mapboxgl.accessToken = 'pk.eyJ1IjoidGlib29oIiwiYSI6ImNrNTNsdjlwcDA0azAza3FoNG1sYjczZHoifQ.NQR1PS5TSTOP7Hwrh4mioQ';
const map = new mapboxgl.Map({
container: 'kartet',
style: 'mapbox://styles/mapbox/streets-v9',
});

nav.onclick = (evt) => {
    
    const lng = Number(evt.target.dataset.lng);
    const lat = Number(evt.target.dataset.lat);
    
    const point = [lng, lat];
    
    map.flyTo({
        center: point,
        zoom: 15
    });

    const marker = new mapboxgl.Marker( { draggable: true } );
  marker.setLngLat([ evt.target.dataset.lng, evt.target.dataset.lat ]);
  marker.addTo(map);
       
}
 