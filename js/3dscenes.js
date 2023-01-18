
let modelWidth = 414,
  modelHeight = 896;

// Scene setup
var scene = new THREE.Scene();
scene.position.set(0, 4, 0);
console.log("Secen >>", scene);


// Camera setup
var camera = new THREE.PerspectiveCamera(
  35,
  modelWidth / modelHeight,
  0.1,
  1000
);
camera.position.z = 30.206;



//Render setup
var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.shadowMap.enabled = true;
// renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;
setRenderSize();
console.log(renderer);
window.addEventListener("resize", setRenderSize);

function setRenderSize() {
  renderer.setPixelRatio(devicePixelRatio);
  renderer.setSize(modelWidth, modelHeight);
  camera.aspect = modelWidth / modelHeight;
}
var container = document.querySelector(".mesh-wrapper");
container.appendChild(renderer.domElement);



//Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.dampingFactor = 0.02;
controls.autoRotate = false;
controls.screenSpacePanning = false;
controls.rotationSpeed = 0.2;
controls.panSpeed = 0.5;
orbitControlHigh();
console.log(controls);

function orbitControlLow() {
  controls.minAzimuthAngle = (-5 / 180) * Math.PI;
  controls.maxAzimuthAngle = (5 / 180) * Math.PI;
  controls.minPolarAngle = (85 / 180) * Math.PI;
  controls.maxPolarAngle = (95 / 180) * Math.PI;
}

function orbitControlHigh() {
  controls.minAzimuthAngle = (-10 / 180) * Math.PI;
  controls.maxAzimuthAngle = (10 / 180) * Math.PI;
  controls.minPolarAngle = (80 / 180) * Math.PI;
  controls.maxPolarAngle = (100 / 180) * Math.PI;
}



// //Light Setup
hemiLight = new THREE.HemisphereLight(0xfff8f1, 0x080820, 1.5);
scene.add(hemiLight);

spotLight = new THREE.SpotLight(0xfff8f1, 2);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
spotLight.position.set(0, 100, 50);
scene.add(spotLight);

portalLight1 = new THREE.PointLight(0xffd16f, 2.05, 300, 1.7);
portalLight1.position.set(9, 12, -18);
scene.add(portalLight1);
console.log(portalLight1);

portalLight2 = new THREE.PointLight(0xffd16f, 0.4, 400, 1.7);
portalLight2.position.set(-42, 26, -47);
scene.add(portalLight2);
console.log(portalLight2);





//Delete object withits children
function removeObjWithChildren(obj) {
  for (var x = obj.children.length - 1; x >= 0; x--) {
    if (obj.children[x].isMesh) {
      obj.children[x].geometry.dispose();
      obj.children[x].material.dispose();
    }
  }
  if (obj.parent) {
    obj.parent.remove(obj);
  }
}


this.render = function () {
  if (mixer) {
    mixer.update(clock.getDelta());
  }
  if (controls) {
    controls.update();
  }
  renderer.render(scene, camera);
};


