function handleCreate() {
    window.location.href = "/highlights";
}



const uploadTab = document.getElementById("uploadTab");
const linkTab = document.getElementById("linkTab");

const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const videoContainer = document.getElementById("videoContainer");
const videoPreview = document.getElementById("videoPreview");

["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

dropArea.addEventListener("dragover", () => dropArea.classList.add("dragover"));
dropArea.addEventListener("dragleave", () => dropArea.classList.remove("dragover"));
dropArea.addEventListener("drop", handleDrop);
dropArea.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => {
  if (uploadTab.classList.contains("active")) {
    previewVideo(fileInput.files[0]);
  }
});

function handleDrop(e) {
  dropArea.classList.remove("dragover");
  const dt = e.dataTransfer;
  const file = dt.files[0];
  if (uploadTab.classList.contains("active")) {
    previewVideo(file);
  }
}

function previewVideo(file) {
  if (file && file.type.startsWith("video/")) {
    const url = URL.createObjectURL(file);
    videoPreview.src = url;
    videoContainer.style.display = "block";
  }
}


uploadTab.addEventListener("click", () => {
  uploadTab.classList.add("active");
  linkTab.classList.remove("active");
  // Here you can toggle visibility if you add YouTube link input later
});

linkTab.addEventListener("click", () => {
  linkTab.classList.add("active");
  uploadTab.classList.remove("active");
  // Same as above
});

document.addEventListener("DOMContentLoaded", function () {
  const videoInput = document.getElementById("videoInput");
  const videoPreview = document.getElementById("videoPreview");

  if (videoInput) {
    videoInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file && file.type.startsWith("video/")) {
        const videoURL = URL.createObjectURL(file);
        videoPreview.src = videoURL;
        videoPreview.style.display = "block";
      }
    });
  }
});
