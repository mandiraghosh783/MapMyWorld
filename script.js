mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZGlyYWdob3NoNzgzIiwiYSI6ImNreTg3N2EyeTE4NGUydnMxN2VuZzU2enMifQ.-UoZFg2qLvOPtMNCNBrdaQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{ enableHighAccuracy: true})

function successLocation(position)
{console.log(position)

setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation()
{
setupMap([88.3639,22.5726])
}
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [88.3639,22.5726], // starting position
        zoom: 15 // starting zoom
        
        });
        // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  
  
  
  map.addControl(directions, 'top-left');
        
      
}
  