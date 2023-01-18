
//Calendar handler
var picker = new Litepicker({
    element: document.getElementById("start-date"),
    elementEnd: document.getElementById("end-date"),

    singleMode: false,
    allowRepick: true,

    format: "DD-MMM-YYYY",
    minDate: Date.now(),

    inlineMode: false,

    autoApply: true,

    tooltipText: {
        one: "night",
        other: "nights",
    },
    position: "left:10px",
});

picker.on("selected", (date1, date2) => {
    pickUpDate = date1;
    dropOffDate = date2;

    var theRangeInMillseconds = date2.dateInstance - date1.dateInstance;
    var numberOfMillsecondsInDay = 86400000;
    totalDates = theRangeInMillseconds / numberOfMillsecondsInDay + 1;
});

picker.on("hide", function () {
    if (totalDates > 15) {
        totalDates = 0;
        warningMsg("You have selected above 16 days", "Set date range below 16");
        document.getElementById("start-date").value = "";
        document.getElementById("end-date").value = "";
        console.log("Set date range below 16");
        picker.clearSelection();
    }
    document.querySelector(
        ".date-count.count h3"
    ).textContent = `You selected ${totalDates} days`;
});

picker.on("tooltip", (tooltip, day) => {
    console.log(">>> ", tooltip.innerText);
});
