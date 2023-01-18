
//Car Seat Animation
let carSeatAnimateLeftToCenterCall = false;
let carSeatAnimateCenterToRightCall = false;
let carSeatAnimateRighToCenterCall = false;

let calendarAnimateLeftToCenterCall = false;
let calendarAnimateCenterToRightCall = false;
let calendarAnimateRighToCenterCall = false;
let calendarAnimateCenterToLeftCall = false;

let carLargeAnimateDriveInCall = false;
let carLargeAnimateDriveOutCall = false;
let carSmallAnimateDriveInCall = false;
let carSmallAnimateDriveOutCall = false;
let campervanAnimateDriveInCall = false;
let campervanAnimateDriveOutCall = false;
let motorbikeAnimateDriveInCall = false;
let motorbikeAnimateDriveOutCall = false;


function resetAniamtionPosotion() {
  carSeatAnimationGroup.position.x = -7.5;
  calendarGroup.position.x = -8.5;
  motorbike.position.y = -20;
  carSmall.position.y = -20;
  carLarge.position.y = -24;
  campervan.position.y = -25;
}

const meshWrapper = document.querySelector(".mesh-wrapper");
function carSeatAnimateLeftToCenter() {
  if (carSeatAnimationGroup.position.x < 0) {
    carSeatAnimationGroup.position.x = carSeatAnimationGroup.position.x + 0.35;
  } else {
    carSeatAnimateLeftToCenterCall = false;
  }
}

function carSeatAnimateCenterToRight() {
  if (carSeatAnimationGroup.position.x < 15) {
    carSeatAnimationGroup.position.x = carSeatAnimationGroup.position.x + 0.35;
  } else {
    carSeatAnimateCenterToRightCall = false;
  }
}

function carSeatAnimateRighToCenter() {
  console.log("animation call back");
  if (carSeatAnimationGroup.position.x > 0) {
    carSeatAnimationGroup.position.x = carSeatAnimationGroup.position.x - 0.35;
  } else {
    carSeatAnimateRighToCenterCall = false;
  }
}

function calendarAnimateLeftToCenter() {
  console.log("calendar animation call");
  if (calendarGroup.position.x < 0) {
    calendarGroup.position.x = calendarGroup.position.x + 0.35;
  } else {
    calendarAnimateLeftToCenterCall = false;
    action.play();
  }
}

function calendarAnimateCenterToRight() {
  console.log("calendar animation call");
  if (calendarGroup.position.x < 15) {
    calendarGroup.position.x = calendarGroup.position.x + 0.35;
  } else {
    calendarAnimateCenterToRightCall = false;
    action.stop();
  }
}

function calendarAnimateRighToCenter() {
  console.log("calendar animation call");
  if (calendarGroup.position.x > 0) {
    calendarGroup.position.x = calendarGroup.position.x - 0.35;
  } else {
    calendarAnimateRighToCenterCall = false;
    action.play();
  }
}

function calendarAnimateCenterToLeft() {
  console.log("calendar animation call");
  if (calendarGroup.position.x > -8.5) {
    calendarGroup.position.x = calendarGroup.position.x - 0.35;
  } else {
    calendarAnimateCenterToLeftCall = false;
    action.stop();
  }
}

function motorbikeAnimateDriveIn() {
  if (motorbike.position.y < 2.5) {
    motorbike.position.y = motorbike.position.y + 0.35;
  } else {
    motorbikeAnimateDriveInCall = false;
  }
}

function motorbikeAnimateDriveOut() {
  if (motorbike.position.y < 15) {
    motorbike.position.y = motorbike.position.y + 0.35;
  } else {
    motorbikeAnimateDriveOutCall = false;
    motorbike.position.y = -20;

    // motorbike.position.y = -20;
  }
}

function carSmallAnimateDriveIn() {
  if (carSmall.position.y < 2) {
    carSmall.position.y = carSmall.position.y + 0.35;
  } else {
    carSmallAnimateDriveInCall = false;
  }
}

function carSmallAnimateDriveOut() {
  if (carSmall.position.y < 9) {
    carSmall.position.y = carSmall.position.y + 0.35;
  } else {
    carSmallAnimateDriveOutCall = false;
    carSmall.position.y = -20;
  }
}

function carLargeAnimateDriveIn() {
  if (carLarge.position.y < -2.8) {
    carLarge.position.y = carLarge.position.y + 0.35;
  } else {
    carLargeAnimateDriveInCall = false;
  }
}

function carLargeAnimateDriveOut() {
  if (carLarge.position.y < 9) {
    carLarge.position.y = carLarge.position.y + 0.35;
  } else {
    carLargeAnimateDriveOutCall = false;
    carLarge.position.y = -24;
  }
}

function campervanAnimateDriveIn() {
  if (campervan.position.y < -2.7) {
    campervan.position.y = campervan.position.y + 0.35;
  } else {
    campervanAnimateDriveInCall = false;
  }
}

function campervanAnimateDriveOut() {
  if (campervan.position.y < 15) {
    campervan.position.y = campervan.position.y + 0.35;
  } else {
    campervanAnimateDriveOutCall = false;
    campervan.position.y = -25;
  }
}

const clock = new THREE.Clock();
var animate = function () {
  requestAnimationFrame(animate);

  if (carSeatAnimateLeftToCenterCall) {
    meshWrapper.style.zIndex = "10";
    carSeatAnimateLeftToCenter();
  } else if (carSeatAnimateCenterToRightCall) {
    carSeatAnimateCenterToRight();
  } else if (carSeatAnimateRighToCenterCall) {
    carSeatAnimateRighToCenter();
    meshWrapper.style.zIndex = "10";
  }

  if (calendarAnimateLeftToCenterCall) {
    calendarAnimateLeftToCenter();
    meshWrapper.style.zIndex = "10";
  } else if (calendarAnimateCenterToRightCall) {
    calendarAnimateCenterToRight();
  } else if (calendarAnimateRighToCenterCall) {
    calendarAnimateRighToCenter();
  } else if (calendarAnimateCenterToLeftCall) {
    calendarAnimateCenterToLeft();
  }

  if (motorbikeAnimateDriveInCall) {
    meshWrapper.style.zIndex = "10";
    motorbikeAnimateDriveIn();
  } else if (motorbikeAnimateDriveOutCall) {
    motorbikeAnimateDriveOut();
  }

  if (carSmallAnimateDriveInCall) {
    carSmallAnimateDriveIn();
  } else if (carSmallAnimateDriveOutCall) {
    carSmallAnimateDriveOut();
  }

  if (carLargeAnimateDriveInCall) {
    carLargeAnimateDriveIn();
  } else if (carLargeAnimateDriveOutCall) {
    carLargeAnimateDriveOut();
  }

  if (campervanAnimateDriveInCall) {
    campervanAnimateDriveIn();
  } else if (campervanAnimateDriveOutCall) {
    campervanAnimateDriveOut();
  }

  if (!motorbikeAnimateDriveOutCall && !carSmallAnimateDriveOutCall && !carLargeAnimateDriveOutCall && !campervanAnimateDriveInCall) {
    if (loadingAnimation.style.display != "none") {
      loadingAnimation.style.display = "none";
    }
    if (loadCalculateHandler) {
      console.log("Load calcualte handler triggered");
      loadCalculateHandler = false;
      loadEstimateScreenElement();
    }
  }
  render();
};

animate();