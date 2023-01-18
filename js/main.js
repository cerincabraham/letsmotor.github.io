//All screens, panels & elements

const splashScreenElement = document.querySelector(".splash");
const threeDScreenElement = document.querySelector(".threeD");
const threeDtwoScreenElement = document.querySelector(".threeDtwo");
const distanceScreenElement = document.querySelector(".distance");
const estimateScreenElement = document.querySelector(".calculate");

const propertyPanel = document.querySelector(".property-panel");
const splashPanelEelement = document.querySelector(".splash-panel");
const loginPanelElement = document.querySelector(".login-panel");
const seatingPanelElement = document.querySelector(".seating-panel");
const datePanelElement = document.querySelector(".date-panel");
const distancePanelElement = document.querySelector(".distance-panel");
const vehicleSelectionPanel = document.querySelector(".vehicle-panel");
const calculatePanelElement = document.querySelector(".calculate-panel");

const vehicleDetailsPanel = document.querySelector(".vehicle-details-panel");

const lowerdotMenuEelement = document.querySelector(".lower-split");

const nextBtnElement = document.querySelector(".next-btn");
const backBtnElement = document.querySelector(".back-btn");
const dotsElements = document.querySelectorAll(".dots");
const addstopBtnElement = document.querySelector(".add-stop");
const infoBtnElement = document.querySelector(".info-btn");

const vehicleIconElement = document.querySelectorAll(".vehicle-icon");

const vehicleIconBigElement = document.querySelector(".vehicle-icon-big");
const calculationDetailsPanel = document.querySelector(".calculation-details-panel");
const calculateBtnElement = document.getElementById("calculate");
const calculateAgainBtnElement = document.getElementById("calculate-again");

const warningBox = document.querySelector(".warning-msg-box");
const infoBox = document.querySelector(".information-box");

const loadingAnimation = document.querySelector(".loading-animation");

let backBtn = false;
let progressCount = 1;
let pickUpDate, dropOffDate;
var totalDates = 0;
var selectedVehicle = "none";
var loadCalculateHandler = false;
var navigationDirection = "forward";
let motorBikeAvailable = false;
let smallCarAvailable = false;
let largeCarAvailable = false;
let motorHomeAvailable = false;
let totalSeatCount = 0;


splashScreenElement.scrollIntoView({ behavior: "smooth" });
history.p;

function panelLoading() {
  threeDScreenElement.scrollIntoView({ behavior: "smooth" });
  history.p;
  seatingPanelElement.classList.add("panel-slide-in");
  lowerdotMenuEelement.classList.add("lower-menu-in");
}

// Signin event
document.querySelector(".signin-btn-clicked").onclick = function () {
  console.log("sign in clicked");
  propertyPanel.classList.add("property-slide-in-one");
  loginPanelElement.classList.add("panel-slide-in");
  splashPanelEelement.classList.add("panel-slide-out");
  resetAniamtionPosotion();
};



function oneTimeTipLoader() {
  infomsg("");
  infoBtnElement.classList.remove("icon-disable");
}


function warningMsg(wmsg, tmsg) {
  document.body.classList.add("active-popup");
  warningBox.classList.add("active-popup");
  warningBox.firstElementChild.nextElementSibling.nextElementSibling.innerHTML =
    wmsg;
  warningBox.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML =
    tmsg;
}

function infomsg(tmsg1) {
  document.body.classList.add("active-popup");
  infoBox.classList.add("active-popup");
  infoBox.querySelectorAll("h3")[0].innerHTML = tmsg1;
}

function msgClose() {
  document.body.classList.remove("active-popup");
  warningBox.classList.remove("active-popup");
  infoBox.classList.remove("active-popup");
}

// vehicle validate handler
function checkAvailableVehicles(vehicletype) {
  let select = false;
  if (validateVehicle()) {
    selectedVehicle = "none";
    vehicleIconElement.forEach((e) => {
      e.classList.add("icon-disable");
    });
    if (vehicletype == "motorbike") {
      if (motorBikeAvailable) {
        vehicleIconElement[0].classList.remove("icon-disable");
        selectedVehicle = vehicletype;
      } else {
        warningMsg(
          `Motorbike is not available for the ${totalDates} days & ${(totalSeatCount)} passengers`,
          "Please select other vehicle"
        );
      }
    } else if (vehicletype == "smallcar") {
      if (smallCarAvailable) {
        vehicleIconElement[1].classList.remove("icon-disable");
        selectedVehicle = vehicletype;
      } else {
        warningMsg(
          `Small car is not available for the ${totalDates} days & ${(totalSeatCount)} passengers`,
          "Please select other vehicle"
        );
      }
    } else if (vehicletype == "largecar") {
      if (largeCarAvailable) {
        vehicleIconElement[2].classList.remove("icon-disable");
        selectedVehicle = vehicletype;
      } else {
        warningMsg(
          `Large car is not available for the ${totalDates} days & ${(totalSeatCount)} passengers`,
          "Please select other vehicle"
        );
      }
    } else if (vehicletype == "campervan") {
      if (motorHomeAvailable) {
        vehicleIconElement[3].classList.remove("icon-disable");
        selectedVehicle = vehicletype;
      } else {
        warningMsg(
          `Campervan is not available for the ${totalDates} days & ${(totalSeatCount)} passengers`,
          "Please select other vehicle"
        );
      }
    }
  }
}

function validateVehicle() {
  let returnValue;
  totalSeatCount = seatCount - 1;
  console.log("totalSeatCount >>", totalSeatCount);
  console.log("totalDates >>", totalDates);

  if (totalSeatCount <= 1 && totalDates > 0 && totalDates <= 5) {
    motorBikeAvailable = true;
  }
  if (totalSeatCount <= 2 && totalDates > 0 && totalDates <= 10) {
    smallCarAvailable = true;
  }
  if (totalSeatCount <= 5 && totalDates >= 3 && totalDates <= 10) {
    largeCarAvailable = true;
  }
  if (
    totalSeatCount >= 2 &&
    totalSeatCount <= 6 &&
    totalDates >= 2 &&
    totalDates <= 15
  ) {
    motorHomeAvailable = true;
  }

  if (
    !motorBikeAvailable &&
    !smallCarAvailable &&
    !largeCarAvailable &&
    !motorHomeAvailable
  ) {
    infomsg("No vehicles are Available");
    returnValue = false;
  } else {
    returnValue = true;
  }
  return returnValue;
}

// Load calculate btn event
calculateBtnElement.addEventListener("click", loadCalculate);
function loadCalculate() {
  if (selectedVehicle != "none") {
    navigationDirection = "none";
    vehicleDriveOutAnimaction();
    loadCalculateHandler = true;
  } else {
    warningMsg("No vehicle selected ", "Tap any vehicle for yor journey");
    return;
  }
}

//All animation event listener
// Code for Chrome, Safari and Opera
seatingPanelElement.addEventListener("webkitAnimationEnd", carSeatAniamtion);
datePanelElement.addEventListener("webkitAnimationEnd", calendarAniamtion);
vehicleSelectionPanel.addEventListener("webkitAnimationEnd", vehicleAniamtion);

// Standard syntax
seatingPanelElement.addEventListener("animationend", carSeatAniamtion);
datePanelElement.addEventListener("animationend", calendarAniamtion);
vehicleSelectionPanel.addEventListener("animationend", vehicleAniamtion);

function carSeatAniamtion() {
  console.log("page loading done");
  orbitControlHigh();
  if (navigationDirection == "forward") {
    carSeatAnimateLeftToCenterCall = true;
  } else {
    carSeatAnimateRighToCenterCall = true;;
  }
}

function calendarAniamtion() {
  console.log("page loading done");
  orbitControlHigh();
  if (navigationDirection == "forward") {
    calendarAnimateLeftToCenterCall = true;
  } else {
    calendarAnimateRighToCenterCall = true;
  }
}

function vehicleAniamtion() {
  console.log("page loading done");
  if (navigationDirection == "forward") {
    orbitControlLow();
    loadingAnimation.style.display = "flex";
    motorbikeAnimateDriveInCall = true;
    carSmallAnimateDriveInCall = true;
    carLargeAnimateDriveInCall = true;
    campervanAnimateDriveInCall = true;
  }
}

function vehicleDriveOutAnimaction() {
  motorbikeAnimateDriveOutCall = true;
  carSmallAnimateDriveOutCall = true;
  carLargeAnimateDriveOutCall = true;
  campervanAnimateDriveOutCall = true;
}