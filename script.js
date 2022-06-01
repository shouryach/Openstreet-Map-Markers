var waingMaw = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([97.4320373,25.3440388]))
      });

      var mandalay = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([96.0057831,21.9405043]))
      });

      var taunggyi = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([97.0337,20.7888]))
      });


      var yangon = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([96.0118912,16.9101877]))
      });

      var hsiPaw = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([97.2906196,22.6239215]))
      });


      var vectorSource = new ol.source.Vector({
        features: [waingMaw, mandalay, taunggyi, yangon, hsiPaw]
      });



var mandalay = ol.proj.fromLonLat([96.0891,21.9588]);
var view = new ol.View({
  center: mandalay,
  zoom: 6// 5
});

var vectorSource = new ol.source.Vector({});
var places = [
  [97.4320373,25.3440388,'http://maps.google.com/mapfiles/ms/micons/blue.png'],[96.0057831,21.9405043,'http://maps.google.com/mapfiles/ms/micons/blue.png'],  
[97.0337,20.7888,'http://maps.google.com/mapfiles/ms/micons/blue.png'],
[96.0118912,16.9101877,'http://maps.google.com/mapfiles/ms/micons/blue.png',/* [113, 140, 0]*/],
[97.2906196,22.6239215,'http://maps.google.com/mapfiles/ms/micons/blue.png'],
];

var features = [];
for (var i = 0; i < places.length; i++) {
  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([places[i][0], places[i][1]], 'EPSG:4326', 'EPSG:3857')),
  });

      
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
      src: places[i][2],
      color: places[i][3],
      crossOrigin: 'anonymous',
    })
  });
  iconFeature.setStyle(iconStyle);
  vectorSource.addFeature(iconFeature);
}



var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  updateWhileAnimating: true,
  updateWhileInteracting: true
});

var map = new ol.Map({
  target: 'map',
  view: view,
  layers: [
    new ol.layer.Tile({
      preload: 3,
      source: new ol.source.OSM(),
    }),
    vectorLayer,
  ],
  loadTilesWhileAnimating: true,
});