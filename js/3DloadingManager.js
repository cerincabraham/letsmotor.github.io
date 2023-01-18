//Loading manager
const progressBarElement = document.getElementById("progress-bar");
const progressBarWrapperElement = document.querySelector(
    ".progress-bar-wrapper"
);

const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = function (url, loaded, total) {
    progressBarElement.value = (loaded / total) * 100;
};

loadingManager.onLoad = function () {
    progressBarWrapperElement.style.display = "none";
};


