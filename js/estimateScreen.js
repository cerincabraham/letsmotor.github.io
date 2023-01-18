const vehicleTitle = document.querySelector(".vehicle-title");
const totalCost = document.querySelector(".total-cost");
const pickupDate = document.querySelector(".pickup-month");
const pickUpDayYear = document.querySelector(".pickup-day-year");
const dropoffDate = document.querySelector(".dropoff-month");
const dropOffDayYear = document.querySelector(".dropoff-day-year");
const startLocationDetails = document.querySelector(".start-location-details");
const endLocationDetails = document.querySelector(".end-location-details");
const totalDistanceDetails = document.querySelector(".total-distance-details");
const totalDaysDetails = document.querySelector(".total-days-details");
const estimateMileage = document.querySelector(".mileage-details");
const fuelUsageDetails = document.querySelector(".fuel-usage-details");
const daysDetails = document.querySelector(".total-cost-sub");
const rentalPrice = document.querySelector(".rental-price");
const insurancePrice = document.querySelector(".insurance-price");
const fuelPrice = document.querySelector(".fuel-price");
const totalCostSub = document.querySelector(".total-price");
const vehicleIconBig = document.querySelector(".vehicle-icon-big img");

let month = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

let fuelNinetyOne = 2.46;
let fuelNinetyFive = 2.66;
let fuelDiesel = 2.38;
let fuelType = "1";
let fuelSelected;
let insurancePriceHolder = 0;
var totalJourneyCost = 0;
let vehicleDetails;
let vehicleDetailsArray = [
  { type: "motorbike", insurance: "5", mileage: "3.7", rent: "109" },
  { type: "smallcar", insurance: "8", mileage: "8.5", rent: "129" },
  { type: "largecar", insurance: "10", mileage: "9.7", rent: "144" },
  { type: "campervan", insurance: "15", mileage: "17", rent: "200" },
];

function loadEstimateScreenElement() {
  infoBtnElement.classList.add("icon-disable");;
  propertyPanel.classList.remove("property-slide-in-two");
  propertyPanel.classList.add("property-slide-out-all");

  vehicleSelectionPanel.classList.remove("panel-slide-in");
  vehicleSelectionPanel.classList.add("panel-slide-out");

  lowerdotMenuEelement.classList.remove("lower-menu-in");
  lowerdotMenuEelement.classList.add("lower-menu-out");

  calculatePanelElement.classList.remove("panel-slide-out");
  calculatePanelElement.classList.add("panel-slide-in");

  vehicleDetailsPanel.style.bottom = "0";
  vehicleIconBigElement.style.top = "-34%";
  calculationDetailsPanel.style.bottom = "0";

  estimateScreenElement.scrollIntoView({ behavior: "smooth" });
  history.p;
  calculateScreenUiUpdate();
}

function calculateScreenUiUpdate() {
  vehicleDetails = vehicleDetailsArray.find(
    (vehicle) => vehicle.type === selectedVehicle
  );
  console.log("vehicle details", vehicleDetails);
  vehicleIconBig.src = "./images/icons/" + selectedVehicle + ".png";
  vehicleTitle.innerHTML = selectedVehicle.charAt(0).toUpperCase() + selectedVehicle.slice(1);
  startLocationDetails.innerHTML = startLocation.split(/[,]/, 1);
  endLocationDetails.innerHTML = endLocation.split(/[,]/, 1);
  pickupDate.innerHTML = month[pickUpDate.getMonth()];
  pickUpDayYear.innerHTML =
    pickUpDate.getDate() + "-" + pickUpDate.getFullYear();
  dropOffDayYear.innerHTML =
    dropOffDate.getDate() + "-" + dropOffDate.getFullYear();
  dropoffDate.innerHTML = month[dropOffDate.getMonth()];
  totalDistanceDetails.innerHTML = totalDistance + " km";
  totalDaysDetails.innerHTML = totalDates + " days";
  estimateMileage.innerHTML = vehicleDetails.mileage + " L/100km";
  daysDetails.innerHTML = "Total cost(for " + totalDates + "days)";
  rentalPrice.innerHTML = "$" + vehicleDetails.rent + " /day";

  fuelPriceUpade();
  totalCostUpadte();
  var insuranceRadioCtrl = document.querySelectorAll(".insurance-select");
  insuranceRadioCtrl.forEach((elements) => {
    elements.addEventListener("click", function (item) {
      console.log(item.target.id);
      if (item.target.id == "on") {
        insurancePriceHolder = vehicleDetails.insurance;
      } else {
        insurancePriceHolder = "0";
      }
      insurancePrice.innerHTML = "$" + insurancePriceHolder + " /day";
      totalCostUpadte();
    });
  });

  // totalSeatCount;
  var fuelRadioCtrl = document.querySelectorAll(".fuel-select");
  fuelRadioCtrl.forEach((elements) => {
    elements.addEventListener("click", function (item) {
      console.log(item.target.value);
      fuelType = item.target.value;
      fuelPriceUpade();
      totalCostUpadte();
    });
  });
}

function fuelPriceUpade() {
  if (fuelType == 1) {
    fuelSelected = fuelNinetyOne;
  } else if (fuelType == 2) {
    fuelSelected = fuelNinetyFive;
  } else if (fuelType == 3) {
    fuelSelected = fuelDiesel;
  }
  fuelPrice.innerHTML = "$" + fuelSelected + " /L";
}

function totalCostUpadte() {
  var fuelNeed = ((vehicleDetails.mileage / 100) * totalDistance).toFixed(2);
  var fuelCostFinal = (fuelNeed * Number(fuelSelected)).toFixed(2);
  console.log("Fuel need >>", fuelNeed);
  console.log("fuel coast >>", fuelCostFinal);
  totalJourneyCost = ((Number(vehicleDetails.rent) + Number(insurancePriceHolder)) * Number(totalDates)) + Number(fuelCostFinal);
  totalJourneyCost = totalJourneyCost.toFixed(2);
  console.log("total cost...", totalJourneyCost);
  fuelUsageDetails.innerHTML = fuelNeed + " L";
  totalCostSub.innerHTML = "$" + totalJourneyCost;
  totalCost.innerHTML = "$" + totalJourneyCost;

}

// Calculate again btn event
calculateAgainBtnElement.addEventListener("click", () => {
  calculatePanelElement.classList.remove("panel-slide-in");
  calculatePanelElement.classList.add("panel-slide-out");
  propertyPanel.classList.remove("property-slide-out-all");
  propertyPanel.classList.add("property-slide-in-one");

  seatingPanelElement.classList.remove("panel-slide-out");
  lowerdotMenuEelement.classList.remove("lower-menu-out");
  navigationDirection = "forward";
  resetAniamtionPosotion();
  panelLoading();
  progressCount = 1;
  dotsElements[3].classList.remove("dot-fill");
  dotsElements[progressCount - 1].classList.add("dot-fill");
  backBtnElement.classList.add("disable");
  nextBtnElement.classList.remove("disable");
});
