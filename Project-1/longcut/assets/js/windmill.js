"use strict";
// calls google api and generates map to empty div in html // 
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 50,
    center: {
      // riverside starting point if not route selected. // 
      lat: 33.9737,
      lng: -117.328
    } //California
  });
  //variables to call directions from google API and Renders Route //
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map,
    // Generates directions to right panel in reading mode //
    panel: document.getElementById("right-panel")
  });
  // draggable pin to alter directions for user to change //
  directionsRenderer.addListener("directions_changed", () => {
    computeTotalDistance(directionsRenderer.getDirections());
  });
  // this displays routes A & B if no waypoint is selected. // 
  displayRoute(
    "W8F4+V4 Whitewater, California",
    "QFJ8+X5 Palm Springs, California",
  
    directionsService,
    directionsRenderer
  );
}
// waypoint function from google API //
function displayRoute(origin, destination, service, display) {
  service.route(
    {
      origin: origin,
      destination: destination,
       // Waypoints B & D when for than one route is selected to allow a return to start.//
        // waypoints: [
        // {
        //   location: "7R43+X6 Glendale, California"
        // },
        // {
        //   location: "CA-2, Palmdale, CA 93550, USA"
        // }
       
        // selected travel mode to driving on driving trails //
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true
    },
    // calls status of waypoint if moved to incorrect route will give warning message//
    (result, status) => {
      if (status === "OK") {
        display.setDirections(result);
      } else {
        alert("Could not display directions due to: " + status);
      }
    }
  );
}
// function for total distance of routes, that changes if user changes the pins //
function computeTotalDistance(result) {
  let total = 0;
  const myroute = result.routes[0];
 // loop for distance //
  for (let i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
// total distance in mile (can be changed to Km if user needed)//
  total = total / 1000;
  document.getElementById("total").innerHTML = total + " miles";
}