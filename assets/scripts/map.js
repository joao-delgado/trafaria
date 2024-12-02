// Initialize the map and set its view to the desired location
var map = L.map("map", {
  zoomControl: false // Remove the zoom control buttons
}).setView([38.66957, -9.23353], 15) // Change this to your region's coordinates

// Define the max bounds area
var bounds = L.latLngBounds(
  [38.643181675835265, -9.195818851244677], // Southwest corner
  [38.68522264906858, -9.278961309025428] // Northeast corner
)
map.setMaxBounds(bounds)

// Add the tile layer (from OpenStreetMap)
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
  maxZoom: 19,
  minZoom: 15,
}).addTo(map)

// Load the Trafaria boundary from GeoJSON file
var trafariaBoundary = new L.GeoJSON.AJAX("https://joao-delgado.github.io/trafaria/assets/map/trafaria.geojson", {
  style: {
    color: "#ff7800", // Outline color
    weight: 2, // Border thickness
    fill: false, // Remove fill
  },
  interactive: false, // Make the layer non-clickable
}).addTo(map)

// Define an area with a polygon (you can define multiple areas)
var area1 = L.polygon([
  [38.66749857698441, -9.247353499803928],
  [38.668433639335476, -9.243209956758372],
  [38.66674125465417, -9.242708484561879],
  [38.6658648584267, -9.246585187877619],
]).addTo(map)

// Bind a popup with a video to the polygon
area1.bindPopup(`
     <div class="pop-up-video"><iframe src="https://player.vimeo.com/video/238573128?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="NATURE"></iframe></div>
   `)
