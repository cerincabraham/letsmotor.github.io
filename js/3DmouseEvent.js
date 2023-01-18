// Mesh click event
var raycaster = new THREE.Raycaster();
var clickMouse = new THREE.Vector2();

const seatCountElement = document.querySelector(".seatcount h3");

window.addEventListener("click", (event) => {
  console.log("Clicked");
  clickMouse.x = (event.clientX / modelWidth) * 2 - 1;
  clickMouse.y = -(event.clientY / modelHeight) * 2 + 1;
  raycaster.setFromCamera(clickMouse, camera);
  const found = raycaster.intersectObjects(scene.children);
  // console.log("Tracking raycast event issue >>>", found[0]);
  if (
    found.length > 0 &&
    found[0].object.parent.name == "carSeat" &&
    !carSeatAnimateLeftToCenterCall &&
    !carSeatAnimateRighToCenterCall
  ) {
    if (seatCount == 2) {
      carSeayMeshClone(2.2, 0);
      carSeatGroup.position.x = -1;
    } else if (seatCount == 3) {
      carSeayMeshClone(0, -3);
      carSeatGroup.position.z = 1;
    } else if (seatCount == 4) {
      carSeayMeshClone(2.2, -3);
    } else if (seatCount == 5) {
      carSeayMeshClone(0, -6);
      carSeatGroup.position.z = 2;
    } else if (seatCount == 6) {
      carSeayMeshClone(2.2, -6);
      console.log(carSeat);
      console.log(carSeatGroup.children);
      console.log(carSeatGroup.children.length);
    } else {
      for (i = carSeatGroup.children.length - 1; i > 0; i--) {
        removeObjWithChildren(carSeatGroup.children[i]);
      }
      carSeatGroup.position.x = 0;
      carSeatGroup.position.z = 0;
      seatCount = 1;
    }
    if (seatCount == 1) {
      seatCountElement.textContent = `You selected ${seatCount} seat`;
    } else {
      seatCountElement.textContent = `You selected ${seatCount} seats`;
    }

    seatCount++;
  } else if (
    found.length > 0 &&
    found[0].object.parent.name == "calendar" &&
    !calendarAnimateIncall
  ) {
    console.log("calendar clicked");
  } else if (
    found.length > 0 &&
    found[0].object.parent.name == "motorbike001" &&
    !motorbikeAnimateDriveInCall
  ) {
    console.log("motorbike clicked");
    checkAvailableVehicles("motorbike");
  } else if (
    found.length > 0 &&
    found[0].object.parent.name == "smallcar003" &&
    !carSmallAnimateDriveInCall
  ) {
    console.log("smallCar clicked");
    checkAvailableVehicles("smallcar");
  } else if (
    found.length > 0 &&
    found[0].object.parent.name == "body00_f31_body_0" &&
    !carLargeAnimateDriveInCall
  ) {
    console.log("LargeCar clicked");
    checkAvailableVehicles("largecar");
  } else if (
    found.length > 0 &&
    found[0].object.parent.name == "campervan" &&
    !campervanAnimateDriveInCall
  ) {
    console.log("Campervan clicked");
    checkAvailableVehicles("campervan");
  }
});