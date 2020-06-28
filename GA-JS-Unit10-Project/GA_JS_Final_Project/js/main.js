var reservationData = {};

// Firebase
var config = {
    apiKey: "AIzaSyA82F6gEXWfMXHEHg8s60Uvjagxdv0_HdQ",
    authDomain: "reservation-site-424ed.firebaseapp.com",
    databaseURL: "https://reservation-site-424ed.firebaseio.com",
    storageBucket: "reservation-site-424ed.appspot.com",
  };
  firebase.initializeApp(config);
  var database = firebase.database();

// define day
$('.reservation-day li').click(function() {

    reservationData.day = $(this).text();

});


// when submit, define name and push to database
$('.reservations').on('submit', function(event) {
    event.preventDefault();

    reservationData.name = $('.reservation-name').val();

    database.ref('reservations').push(reservationData);
  });

// when db changes grab current db data and showing an updated table
database.ref('reservations').on('child_added', function(snapshot) {
    var reservationList = $('.reservation-list');
    var reservations = snapshot.val();

    var source = $("#reservation-template").html();
    var template = Handlebars.compile(source);
    var reservationTemplate = template(reservations);
    reservationList.append(reservationTemplate);
  });

// initialize Map function
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 12,
    scrollwheel: false,
    styles: 
      [
        {"elementType": "geometry","stylers": [{"color": "#f5f5f5"}]},
        {"elementType": "labels.icon","stylers": [{"visibility": "off"}]},
        {"elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
        {"elementType": "labels.text.stroke","stylers": [{"color": "#f5f5f5"}]},
        {"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#bdbdbd"}]},
        {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
        {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
        {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
        {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{ "color": "#9e9e9e"}]},
        {"featureType": "road","elementType": "geometry","stylers": [{"color": "#ffffff"}]},
        {"featureType": "road.arterial","elementType": "labels","stylers": [{"visibility": "off"}]},
        {"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
        {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#dadada"}]},
        {"featureType": "road.highway","elementType": "labels","stylers": [{"visibility": "off"}]},
        {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
        {"featureType": "road.local","stylers": [{"visibility": "off"}]},
        {"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
        {"featureType": "transit.line","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
        {"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
        {"featureType": "water","elementType": "geometry","stylers": [{"color": "#c9c9c9"}]},
        {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]}
      ]
  });

  // map marker
  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
}