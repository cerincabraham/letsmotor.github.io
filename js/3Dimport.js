//Car Seat Model loading
let carSeatMain;
let carSeat;
let calendar;
let popupBlockA;
let carLarge;
let carSmall;
let campervan;
let motorbike;
var objects = [];
let seatCount = 2;

const carSeatGroup = new THREE.Group();
const carSeatAnimationGroup = new THREE.Group();
carSeatAnimationGroup.position.x = -7.5;
carSeatAnimationGroup.position.y = -3;
carSeatGroup.rotation.x = (30 / 180) * Math.PI;

const loader = new THREE.GLTFLoader(loadingManager);
loader.load(
  "./model/Car_seat.gltf",
  (gltf) => {
    carSeatMain = gltf.scene.children[0];
    carSeatMain.position.x = 0;
    carSeatMain.position.Z = 0;
    carSeatMain.castShadow = true;
    carSeatMain.receiveShadow = true;
    carSeatMain.name = "carSeat";
    console.log("Car seat object >>>", calendar);
    carSeayMeshClone(0, 0);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

function carSeayMeshClone(x, z) {
  carSeat = carSeatMain.clone();
  carSeat.position.x = x;
  carSeat.position.z = z;
  carSeatGroup.add(carSeat);
  carSeatAnimationGroup.add(carSeatGroup);
  scene.add(carSeatAnimationGroup);
  objects.push(carSeat);
}

const calendarGroup = new THREE.Group();
calendarGroup.position.x = -8.5;
calendarGroup.position.y = -1;
calendarGroup.rotation.x = (5 / 180) * Math.PI;
loader.load(
  "./model/calendar-v2.gltf",
  (gltf) => {
    calendar = gltf.scene;
    calendar.rotation.y = (180 / 180) * Math.PI;
    calendar.scale.set(4, 4, 4);
    calendar.castShadow = true;
    calendar.receiveShadow = true;
    calendar.name = "calendar";
    console.log("Calendar object >>>", calendar);
    calendarGroup.add(calendar);
    calendarGroup.name = "calendar";
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let mixer;
let action;
loader.load(
  "./model/calendar-v2-block01.gltf",
  (gltf) => {
    popupBlockA = gltf.scene;
    popupBlockA.rotation.y = (180 / 180) * Math.PI;
    popupBlockA.position.x = -1;
    popupBlockA.position.z = 2;
    popupBlockA.position.y = -0.5;
    popupBlockA.scale.set(4, 4, 4);
    popupBlockA.castShadow = true;
    popupBlockA.receiveShadow = true;
    popupBlockA.name = "popupBlockA";
    console.log("popup block object >>>", popupBlockA);
    calendarGroup.add(popupBlockA);
    mixer = new THREE.AnimationMixer(popupBlockA);
    const clips = gltf.animations;
    const clip = THREE.AnimationClip.findByName(clips, "popup");
    action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopRepeat, 5);
    // action.play();
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

calendarGroup.rotation.y = (90 / 180) * Math.PI;
scene.add(calendarGroup);
console.log("calendar group >>", calendarGroup);

// vehicle loading
loader.load(
  "./model/motorbike.gltf",
  (gltf) => {
    motorbike = gltf.scene;
    motorbike.rotation.y = (90 / 180) * Math.PI;
    motorbike.rotation.x = (90 / 180) * Math.PI;
    motorbike.position.x = 1.8;
    motorbike.position.y = -20;
    motorbike.scale.set(1.5, 1.5, 1.5);
    motorbike.castShadow = true;
    motorbike.receiveShadow = true;
    motorbike.name = "motorbike";
    console.log("motorbike object >>>", motorbike);
    scene.add(motorbike);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "./model/smallCar.gltf",
  (gltf) => {
    carSmall = gltf.scene;
    carSmall.rotation.y = (180 / 180) * Math.PI;
    carSmall.rotation.x = (90 / 180) * Math.PI;
    carSmall.position.x = -2;
    carSmall.position.y = -20;
    carSmall.scale.set(0.5, 0.5, 0.5);
    carSmall.castShadow = true;
    carSmall.receiveShadow = true;
    carSmall.name = "carSmall";
    console.log("carSmall object >>>", carSmall);
    scene.add(carSmall);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "./model/largeCar.gltf",
  (gltf) => {
    carLarge = gltf.scene;
    carLarge.rotation.y = (0 / 180) * Math.PI;
    carLarge.rotation.x = (90 / 180) * Math.PI;
    carLarge.position.x = -2;
    carLarge.position.y = -24;
    carLarge.scale.set(0.85, 0.85, 0.85);
    carLarge.castShadow = true;
    carLarge.receiveShadow = true;
    carLarge.name = "carLarge";
    console.log("carLarge object >>>", carLarge);
    scene.add(carLarge);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "./model/campervan.gltf",
  (gltf) => {
    campervan = gltf.scene;
    campervan.rotation.y = (180 / 180) * Math.PI;
    campervan.rotation.x = (90 / 180) * Math.PI;
    campervan.position.x = 1.8;
    campervan.position.y = -25;
    campervan.scale.set(2.2, 2.2, 2.2);
    campervan.castShadow = true;
    campervan.receiveShadow = true;
    campervan.name = "campervan";
    console.log("campervan object >>>", campervan);
    scene.add(campervan);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);