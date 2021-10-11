// MAPA 2


const mapId = 'map';
const initialCoordinates = [40.4169473, -3.7057172]; // Plaza Sol en Madrid [lat, lng]
const map = L.map(mapId).setView(initialCoordinates, 13);

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

const ATTRIBUTION =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const ACCESS_TOKEN =
  'pk.eyJ1Ijoic2FyYTcxMCIsImEiOiJja3Vtamt4M2QxcWprMnJvenZyMjlmZjhkIn0.4F0rxJO1bFIPPnO8-fswmA';

// Lanzar la función de Leaflet para cargar todos los tiles de Mapbox del mapa:

L.tileLayer(MAPBOX_API, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
}).addTo(map);  

//Extraer localización actual

let localizacion = {}

const miLocalizacion = ()=>{

    let datos = map.locate({setView: true})

    let latitud = datos._lastCenter.lat

    let longitud = datos._lastCenter.lng

    localizacion = {latitud, longitud}
        
    return localizacion

}

miLocalizacion()

const miLocalizacionActual = [localizacion.latitud, localizacion.longitud];
L.marker(miLocalizacionActual).bindPopup("<b>Mi ubicación actual</b>").addTo(map);


// fetch('https://api.metro.net/agencies/lametro/routes/')
//             .then(res=>res.json())
//             .then(data=>{
//                 let arrData = data.items
//                 let name = arrData.map((item)=>{
//                     return (item.display_name)
//                 })

//                 console.log(name)

//                 let identificador = arrData.map((item)=>{
//                     return (item.id)
//                 })

//                 console.log(identificador)
                
//             })