var mymap = L.map('mapid').setView([57.687788, 11.862902], 12.9);
  


// Maptype
var mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
detectRetina:true,
accessToken: 'pk.eyJ1IjoibWFyY3VzbGFyc3NvbiIsImEiOiJja2RyY2NuMHQwd3QzMnpvZG53M3Iwb3J5In0.CRP2By3gSeCNZpI_05eqcg'
});

var satellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var hybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var grayscale = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://wmflabs.org">wmflabs</a> contributors'
});




//Layertype
var railWay = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
detectRetina:true,
accessToken: 'pk.eyJ1IjoibWFyY3VzbGFyc3NvbiIsImEiOiJja2RyY2NuMHQwd3QzMnpvZG53M3Iwb3J5In0.CRP2By3gSeCNZpI_05eqcg'
});


/*var seaMap= L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
detectRetina:true,
layerType: 'overlay',
accessToken: 'pk.eyJ1IjoibWFyY3VzbGFyc3NvbiIsImEiOiJja2RyY2NuMHQwd3QzMnpvZG53M3Iwb3J5In0.CRP2By3gSeCNZpI_05eqcg'
}); */

var openstreetmap=L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');




/*var shipIcon = L.icon ({
  iconUrl: 'https://toppng.com/uploads/preview/home-home-sea-container-ship-icon-11563195830cq8dtw2n3l.png',
  iconSize: [38,95],
  iconAnchor: [22,94]
  popupAnchor: [12,-90] ?
}) */

var markerTest = L.marker([57.687788, 11.862902] /*, {icon:shipIcon} */
  , {
    title: "name"}); 

/*var myGeoJSON = {"type":"FeatureCollection","features":[{"type":"Feature","id":"1404d2a2-b5a4-4e7d-9185-f9df1c20f6e5","geometry":{"type":"LineString","coordinates":[[11.84567541,57.68849085],[11.84690348,57.69400361],[11.84758016,57.6971934],[11.84809308,57.69729869],[11.84852894,57.69739473],[11.84984859,57.69762406],[11.85143914,57.69790213],[11.85275476,57.69812716],[11.85360368,57.69827479],[11.85450592,57.69841616],[11.8549678,57.69845394],[11.8554226,57.69846527],[11.85634164,57.6984766],[11.8581232,57.69855859],[11.86031456,57.6986711],[11.86093147,57.69874563],[11.86141964,57.69884955],[11.86176296,57.69893984],[11.86193194,57.69900363],[11.86276074,57.69917275],[11.86280231,57.69918064],[11.86424132,57.69934188],[11.8669584,57.69963068],[11.8673956,57.69967798],[11.86796423,57.69972098],[11.86807151,57.69972313],[11.86813723,57.69279267],[11.86795216,57.69244074],[11.86799105,57.69234039],[11.86806883,57.69232821],[11.86812113,57.69234111],[11.8681493,57.69239845],[11.86823609,57.69238574],[11.8681968,57.69230416],[11.86823781,57.69228377],[11.86822038,57.69226298],[11.86816506,57.69225974],[11.86780993,57.69166446],[11.86756511,57.69170727],[11.86754697,57.69168788],[11.86785829,57.69137368],[11.86790967,57.69130341],[11.86792176,57.69124283],[11.86791571,57.69117256],[11.86785375,57.69106594],[11.86746386,57.69111881],[11.86679062,57.68995973],[11.86637354,57.69001277],[11.86630112,57.68986869],[11.86639768,57.68977909],[11.8665224,57.6896178],[11.86653715,57.68955687],[11.86650228,57.6894902],[11.86631855,57.68950669],[11.86633465,57.68953967],[11.86632258,57.68958626],[11.86629173,57.68962067],[11.86623675,57.68965221],[11.86616164,57.68966654],[11.86606911,57.68964002],[11.86599535,57.6896092],[11.86590952,57.68950669],[11.86583441,57.68938985],[11.86567885,57.68901853],[11.86564398,57.68881638],[11.86565068,57.68863717],[11.86596718,57.68858054],[11.86585319,57.6883963],[11.84567541,57.68848878]]},"properties":{"name":"Skandiahamnen"}}]}


L.geoJSON(myGeoJSON).addTo(mymap); */

mainLayer.addTo(mymap)

L.control.layers(
  {
    'Main': mainLayer,
    'Grayscale': grayscale,
    'Satellite': satellite,
    'Hybrid': hybrid,
  },
  {
    'Ships': markerTest, 
    'Railwaymap': railWay,
    'Openstreetmap': openstreetmap,
    /*'Seamap': seaMap,*/
  },
).addTo(mymap)


L.control.scale().addTo(mymap)

var Energihamnen1=L.polygon([[57.69224497784799,11.797127723693848],[57.689045149526976,11.7942523956298835],[57.69039851641834,11.791548728942871],[57.68789818886257,11.78781509399414],[57.68714117493704,11.792943477630613],[57.682260349472024,11.788737773895264],[57.68213416195419,11.789252758026123],[57.68696338907059,11.792943477630613],[57.685128129155096,11.795024871826172],[57.68269626660801,11.794434785842896],[57.68274788802692,11.79682731628418],[57.684307967333886,11.798329353332518],[57.68607444665514,11.798715591430664],[57.687519683876545,11.797471046447754],[57.68928600665421,11.794939041137695],[57.69221057259476,11.797235012054443],],{color:'white',fillColor:'#3690A8',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Energihamnen");
var Energihamnen2=L.polygon([[57.69868965231386,11.895489692687988],[57.69113252477638,11.89096212387085],[57.69057055096135,11.894266605377195],[57.691338961948,11.896347999572754],[57.69066230238362,11.896820068359375],[57.69112105601013,11.897978782653809],[57.69140777407718,11.896669864654541],[57.692680774894754,11.900103092193602],[57.69862085401469,11.895575523376465],],{color:'white',fillColor:'#3690A8',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Energihamnen");
var Energihamnen3=L.polygon([[57.6955362626794,11.871500015258789],[57.692715179701516,11.869697570800781],[57.69208441971996,11.872572898864746],[57.68872400420031,11.869633197784424],[57.6887928212956,11.871113777160645],[57.69194679790105,11.873130798339844],[57.690845804531236,11.878108978271484],[57.69671738258619,11.878538131713867],[57.695547730048055,11.871628761291504],],{color:'white',fillColor:'#3690A8',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Energihamnen");
var Energihamnen4=L.polygon([[57.69868965231386,11.895489692687988],[57.69113252477638,11.89096212387085],[57.69057055096135,11.894266605377195],[57.691338961948,11.896347999572754],[57.69066230238362,11.896820068359375],[57.69112105601013,11.897978782653809],[57.69140777407718,11.896669864654541],[57.692680774894754,11.900103092193602],[57.69862085401469,11.895575523376465],],{color:'white',fillColor:'#3690A8',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Energihamnen");

var Kajer1=L.polygon([[57.702037678288434,11.946816444396973],[57.70089112889463,11.936430931091309],[57.69891897903404,11.937503814697266],[57.70036370398543,11.951193809509277],[57.7020606089061,11.949691772460938],[57.70201474765624,11.947073936462402],],{color:'white',fillColor:'orange',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Övriga kajer och kryssningskajer");
var Kajer2=L.polygon([[57.694687667323734,11.816085577011107],[57.694779408320464,11.819508075714111],[57.69389065763855,11.81956171989441],[57.693856253948006,11.816128492355347],[57.69464753056459,11.816096305847168],],{color:'white',fillColor:'orange',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Övriga kajer och kryssningskajer");
var Kajer3=L.polygon([[57.700346505217794,11.929993629455566],[57.69944355844727,11.930084824562073],[57.70007419030837,11.932970881462097],[57.700435365429385,11.932777762413025],[57.70034363875571,11.930031180381775],],{color:'white',fillColor:'orange',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Övriga kajer och kryssningskajer");
var Kajer4=L.polygon([[57.69508903246936,11.912355422973631],[57.69771499755552,11.9196939468383791],[57.696476574856696,11.921453475952148],[57.693368864822496,11.913750171661375],[57.69500875979597,11.912505626678467],],{color:'white',fillColor:'orange',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Övriga kajer och kryssningskajer");

var Arendals1=L.polygon([[57.69332299256723,11.828584671020508],[57.691212806038436,11.827898025512695],[57.69034117138915,11.828327178955078],[57.69034117138915,11.828842163085938],[57.689561269982114,11.82901382446289],[57.689515392906024,11.82978630065918],[57.69047879930673,11.830558776855469],[57.69006591398577,11.841115951538084],[57.68974477770573,11.841287612915039],[57.6897906544914,11.842231750488281],[57.691671552695055,11.842231750488281],[57.69171742704124,11.84300422668457],[57.693460609158834,11.842918395996094],[57.693598225227724,11.843347549438477],[57.693368864822496,11.828927993774414],],{color:'white',fillColor:'green',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Arendals- och Älvsborgshamnen");
var Arendals2=L.polygon([[57.69131602454257,11.823070049285887],[57.693150971092614,11.823692321777344],[57.69393079523619,11.82276964187622],[57.69781819753603,11.8212890625],[57.698001663442064,11.827876567840576],[57.69350648123988,11.828413009643553],[57.69412574864942,11.82628870010376],[57.69305922597221,11.82403564453125],[57.69136189933892,11.823585033416748],[57.69125868096547,11.823134422302246],],{color:'white',fillColor:'green',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Arendals- och Älvsborgshamnen");

var Skandiahamnen=L.polygon([[57.6939881345842,11.846866607666],[57.6882537505511,11.8455362319946],[57.6882766898951,11.8466520309448],[57.6884831433375,11.8468236923217],[57.6884372648963,11.8657064437866],[57.6885749000454,11.8658351898193],[57.6886895956036,11.8655347824096],[57.6892401292295,11.8656635284423],[57.6896300854873,11.8660497665405],[57.6894695157718,11.8664360046386],[57.6896071470001,11.8665218353271],[57.689859469561,11.8663072586059],[57.6899970993082,11.8663501739501],[57.6899741610533,11.8667793273925],[57.6911210560101,11.8674230575561],[57.6910751809088,11.8678092956542],[57.6913733680289,11.8678092956542],[57.691671552695,11.8675518035888],[57.6922220410161,11.86776638031],[57.6927954574568,11.8681526184082],[57.6939193273556,11.8470382690429],],{color:'white',fillColor:'#f03',weight:2.3,fillOpacity:0.4}).addTo(mymap).bindPopup("Skandiahamnen");






 


/*L.circle([57.687788, 11.862902], 15.9, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.") */


/*L.polygon([
  [57.687788, 11.862902],
  [57.683788, 11.822902],
  [57.697788, 11.162902]
]).addTo(mymap).bindPopup("I am a polygon"); */




/*var featureGroup = L.featureGroup(markers).addto(mymap);

mymap.fitBounds(featureGroup.getBounds(), {
padding: [20,20]
});


var options = {units: 'kilometers'};
mymap.on('mousemove', function(e) {

var from = turf.point([e.latlng.lat, e.latlng.lng]);
markers.forEach(function(marker) {
var to = turf.point([marker.getLatLng().lat, marker.getLatLng().lng]);
var distance = turf.distance(from, to, options);
if(distance<100) {
  marker.setIcon(redIcon);
} else {
  marker.setIcon(blackIcon);
}
});
})

mymap.on('moveend', function(e) {
console.log(mymap.getCenter());
$('#current_center').val(mymap.getCenter.lat+','+mymap.getCenter().lng);
});


$(document).on('click','#toggleLayer', function(){
if(mymap.hasLayer(featureGroup)) {
mymap.removeLayer(featureGroup);
} else {
featureGroup.addTo(mymap)
}
}); */


/* mapMarkers1 = [];
mapMarkers2 = [];
mapMarkers3 = [];

var source = new EventSource('/topic/shipdata_topic1');
source.addEventListener('message', function(e){

    console.log('Message');
    obj = JSON.parse(e.data);
    console.log(obj);

        
    if(obj.shipline == '00001') {
        for (var i = 0; i < mapMarkers1.length; i++) {
        mymap.removeLayer(mapMarkers1[i]);
        }
        marker1 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
        mapMarkers1.push(marker1);
    }

    if(obj.shipline == '00002') {
        for (var i = 0; i < mapMarkers2.length; i++) {
        mymap.removeLayer(mapMarkers2[i]);
        }
        marker2 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
        mapMarkers2.push(marker2);
    }

    if(obj.shipline == '00003') {
        for (var i = 0; i < mapMarkers3.length; i++) {
        mymap.removeLayer(mapMarkers3[i]);
        }
        marker3 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
        mapMarkers3.push(marker3);
    }
}, false); */



// Zoom button javascript
//Skandiahamnen
/*var zoomToDataButton = document.querySelector('.zoom-to-skandiahamnen');
zoomToDataButton.addEventListener('click', function () {
mymap.setView([57.691728895618716, 11.856651306152344], 15.3)

// Remove
Energihamnen1.remove(mymap); Energihamnen2.remove(mymap); Energihamnen3.remove(mymap); Energihamnen4.remove(mymap);
Kajer1.remove(mymap); Kajer2.remove(mymap); Kajer3.remove(mymap); Kajer4.remove(mymap);
Arendals1.remove(mymap);Arendals2.remove(mymap);
Skandiahamnen.remove(mymap);

// Add
Skandiahamnen.addTo(mymap);
})

// Energihamnen
var zoomToDataButton1 = document.querySelector('.zoom-to-energihamnen');
zoomToDataButton1.addEventListener('click', function () {
mymap.setView([57.68966151114839, 11.84802604675293], 13.8)

// Remove
Energihamnen1.remove(mymap); Energihamnen2.remove(mymap); Energihamnen3.remove(mymap); Energihamnen4.remove(mymap);
Kajer1.remove(mymap); Kajer2.remove(mymap); Kajer3.remove(mymap); Kajer4.remove(mymap);
Arendals1.remove(mymap);Arendals2.remove(mymap);
Skandiahamnen.remove(mymap);

// Add
Energihamnen1.addTo(mymap);Energihamnen2.addTo(mymap);Energihamnen3.addTo(mymap);
})             


// Kajer
var zoomToDataButton1 = document.querySelector('.zoom-to-kajer');
zoomToDataButton1.addEventListener('click', function () {
mymap.setView([57.69566151114839, 11.88502604675293], 13.5)

// Remove
Energihamnen1.remove(mymap); Energihamnen2.remove(mymap); Energihamnen3.remove(mymap); Energihamnen4.remove(mymap);
Kajer1.remove(mymap); Kajer2.remove(mymap); Kajer3.remove(mymap); Kajer4.remove(mymap);
Arendals1.remove(mymap);Arendals2.remove(mymap);
Skandiahamnen.remove(mymap);

// Add
Kajer1.addTo(mymap);Kajer2.addTo(mymap);Kajer3.addTo(mymap);Kajer4.addTo(mymap);
})  


// Arnedals
var zoomToDataButton1 = document.querySelector('.zoom-to-arnedals');
zoomToDataButton1.addEventListener('click', function () {
mymap.setView([57.69266151114839, 11.84202604675293], 14.5)

// Remove
Energihamnen1.remove(mymap); Energihamnen2.remove(mymap); Energihamnen3.remove(mymap); Energihamnen4.remove(mymap);
Kajer1.remove(mymap); Kajer2.remove(mymap); Kajer3.remove(mymap); Kajer4.remove(mymap);
Arendals1.remove(mymap);Arendals2.remove(mymap);
Skandiahamnen.remove(mymap);

// Add
Arendals1.addTo(mymap);Arendals2.addTo(mymap);
})  */