var directionsService;
var myMap;
var mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];
var mapStyleB = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

var startLocation = "Auckland, New Zealand";
var endLocation = "Hamilton, New Zealand";

let formExpand = 0;
var totalDistance = 0;

let options = {
  componentRestrictions: { country: "NZ" },
  types: ["(cities)"],
};

const startLocationField = document.querySelector(".start-location");
const waypointInputField = document.querySelector(".waypoint-input-field");

var additionalDestination = document.querySelector(".add-stop");
if (additionalDestination) {
  additionalDestination.addEventListener("click", function (event) {
    var allDivArray = document.querySelectorAll(".waypoint_input_group");
    var lastDivElement = allDivArray[0];
    var newDivElement = lastDivElement.cloneNode(true);
    lastDivElement.insertAdjacentElement("beforebegin", newDivElement);
    var newInputElement = newDivElement.querySelector("input");
    newInputElement.value = "";
    new google.maps.places.Autocomplete(newInputElement, options);
    if (formExpand < 2) {
      var locationInputForm = document.querySelector(".location-form");
      locationInputForm.style.height = "135px";
      if (formExpand == 1) {
        locationInputForm.style.height = "155px";
      }
      formExpand++;
    }
  });
}

function initMap() {
  listenFordistanceClicked();

  myMap = new google.maps.Map(document.querySelector(".map-container"), {
    center: {
      lat: -36.85100241197027,
      lng: 174.76128362520697,
    },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mapStyle,
    avoidFerries: true,
  });

  directionsService = new google.maps.DirectionsService();

  // add autocomplete functions to the location input boxes
  new google.maps.places.Autocomplete(startLocationField, options);
  new google.maps.places.Autocomplete(waypointInputField, options);
}

function listenFordistanceClicked() {
  const distanceFindBtn = document.querySelector(".distance-btn");
  if (distanceFindBtn) {
    distanceFindBtn.addEventListener("click", onGetDistance);
  }
}

function onGetDistance(event) {
  // need to isolate start and end destination and all user-chosen destinations in-between
  // event.preventDefault();

  var waypointsArray = [];
  var allDestinationArray = document.querySelectorAll(".waypoint-input-field");
  allDestinationArray.forEach(function (elem, i) {
    waypointsArray.push({
      location: elem.value,
      stopover: true,
    });
  });

  var finalDest = waypointsArray[waypointsArray.length - 1].location;
  // we don't want the last one any more, so remove from array
  waypointsArray.pop();

  console.log("origin = ", document.querySelector(".start-location").value);
  console.log("finalDest = ", finalDest);
  if (
    document.querySelector(".start-location").value != "" &&
    finalDest != ""
  ) {
    directionsService
      .route({
        origin: document.querySelector(".start-location").value,
        destination: finalDest,
        waypoints: waypointsArray,
        optimizeWaypoints: false,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidTolls: false,
        avoidFerries: true,
        travelMode: google.maps.TravelMode.DRIVING,
        // add NZ bias
        region: "NZ",
      })
      .then((response) => {
        startLocation = response.request.origin.query;
        endLocation = response.request.destination.query;
        var wayPointArray = response.request.waypoints;

        var legsArray = response.routes[0].legs;
        var distAsNumber = 0;
        legsArray.forEach(function (item, index) {
          // final location is repeated so check start and end
          if (item.start_address !== item.end_address) {
            console.log("start address = ", item.start_address);
            console.log("end address = ", item.end_address);
            distAsNumber += item.distance.value;
            console.log("distance = ", distAsNumber);
          }
        });

        // update map directly with the routes response
        new google.maps.DirectionsRenderer({
          suppressMarkers: false,
          directions: response,
          map: myMap,
        });

        updateDistanceUI(distAsNumber);
      });
  } else {
    warningMsg("Journey locations not picked", "Enter places for the journey ");
  }
}

function updateDistanceUI(n) {
  var dist = (n / 1000).toFixed(1);
  totalDistance = dist;
  document.querySelector(".total-distance.count h3").innerHTML = `${dist} km`;
}
