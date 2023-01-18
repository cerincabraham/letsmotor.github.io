
//Next button event
nextBtnElement.addEventListener("click", function () {
    console.log("Forward clicked");
    navigationDirection = "forward";
    // document.querySelector(".mesh-wrapper").style.zIndex="30";
    if (progressCount == 1) {
        backBtnElement.classList.remove("disable");
        propertyPanel.classList.remove("property-slide-out-two");
        propertyPanel.classList.remove("property-slide-in-one");
        propertyPanel.classList.add("property-slide-in-two");
        seatingPanelElement.classList.remove("panel-slide-in");
        seatingPanelElement.classList.add("panel-slide-out");
        carSeatAnimateCenterToRightCall = true;
        datePanelElement.classList.remove("panel-slide-out");
        datePanelElement.classList.add("panel-slide-in");
        threeDScreenElement.scrollIntoView({ behavior: "smooth" });
        history.p;
    } else if (progressCount == 2) {
        if (totalDates > 0) {
            if (validateVehicle()) {
                datePanelElement.classList.remove("panel-slide-in");
                datePanelElement.classList.add("panel-slide-out");
                calendarAnimateCenterToRightCall = true;
                // calendarAnimateOutcall = true;

                infoBtnElement.classList.add("icon-disable");
                distancePanelElement.classList.remove("panel-slide-out");
                distancePanelElement.classList.add("panel-slide-in");
                document.querySelector(".map-container").style.zIndex = "50";
                distanceScreenElement.scrollIntoView({ behavior: "smooth" });
                history.p;
                infoBtnElement.classList.add("icon-disable");

            } else {
                totalDates = 0;
                picker.clearSelection();
                document.getElementById("start-date").value = "";
                document.getElementById("end-date").value = "";
                document.querySelector(
                    ".date-count.count h3"
                ).textContent = `You picked 0 days`;
                return;
            }
        } else {
            warningMsg(
                "You have to select start and end date",
                "Tap calendar icon to set date"
            );
            return;
        }
    } else if (progressCount == 3) {
        if (totalDistance > 0) {
            distancePanelElement.classList.remove("panel-slide-in");
            distancePanelElement.classList.add("panel-slide-out");

            // propertyPanel.classList.remove("property-slide-in-two");
            // propertyPanel.classList.add("property-slide-out-two");

            threeDtwoScreenElement.scrollIntoView({ behavior: "smooth" });
            history.p;
            infoBtnElement.classList.remove("icon-disable");

            vehicleSelectionPanel.classList.remove("panel-slide-out");
            vehicleSelectionPanel.classList.add("panel-slide-in");
            vehicleIconElement.forEach((e) => {
                e.classList.add("icon-disable");
            });
            // checkDetails();
            nextBtnElement.classList.add("disable");
        } else {
            warningMsg(
                "You have to plan the journey locations",
                "Tap location icon to set locations"
            );
            return;
        }
    }
    dotsElements[progressCount - 1].classList.remove("dot-fill");
    dotsElements[progressCount].classList.add("dot-fill");
    progressCount++;
    console.log(progressCount);
});

//Back button event
backBtnElement.addEventListener("click", function () {
    console.log("Backward clicked");
    navigationDirection = "backward"
    progressCount--;
    if (progressCount == 1) {
        backBtnElement.classList.add("disable");
        propertyPanel.classList.remove("property-slide-in-two");
        propertyPanel.classList.add("property-slide-out-two");

        calendarAnimateCenterToLeftCall = true;
        datePanelElement.classList.remove("panel-slide-in");
        datePanelElement.classList.add("panel-slide-out");
        seatingPanelElement.classList.remove("panel-slide-out");
        seatingPanelElement.classList.add("panel-slide-in");
        threeDScreenElement.scrollIntoView({ behavior: "smooth" });
        history.p;

    } else if (progressCount == 2) {
        distancePanelElement.classList.remove("panel-slide-in");
        distancePanelElement.classList.add("panel-slide-out");
        datePanelElement.classList.remove("panel-slide-out");
        datePanelElement.classList.add("panel-slide-in");
        threeDScreenElement.scrollIntoView({ behavior: "smooth" });
        history.p;

    } else if (progressCount == 3) {
        nextBtnElement.classList.remove("disable");
        vehicleDriveOutAnimaction();
        vehicleSelectionPanel.classList.remove("panel-slide-in");
        vehicleSelectionPanel.classList.add("panel-slide-out");

        distancePanelElement.classList.remove("panel-slide-out");
        distancePanelElement.classList.add("panel-slide-in");

        distanceScreenElement.scrollIntoView({ behavior: "smooth" });
        history.p;
    }
    dotsElements[progressCount].classList.remove("dot-fill");
    dotsElements[progressCount - 1].classList.add("dot-fill");
    console.log(progressCount);
});
console.log();

