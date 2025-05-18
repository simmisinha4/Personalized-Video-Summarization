// ✅ Navigation to Output Page (Flask route)
function handleGenerate() {
    window.location.href = "/output";
}

// ✅ Tab Switch Logic
const uploadTab = document.getElementById("uploadTab");
const linkTab = document.getElementById("linkTab");
const uploadArea = document.getElementById("uploadArea");
const youtubeArea = document.getElementById("youtubeArea");

if (uploadTab && linkTab && uploadArea && youtubeArea) {
  uploadTab.addEventListener("click", () => {
    uploadTab.classList.add("active");
    linkTab.classList.remove("active");
    uploadArea.style.display = "block";
    youtubeArea.style.display = "none";
  });

  linkTab.addEventListener("click", () => {
    linkTab.classList.add("active");
    uploadTab.classList.remove("active");
    youtubeArea.style.display = "block";
    uploadArea.style.display = "none";
  });
}

// ✅ Drag and Drop Upload + Video Preview
const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const videoPreview = document.getElementById("videoPreview");

if (dropArea && fileInput && videoPreview) {
  ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
      e.preventDefault();
      e.stopPropagation();

      if (eventName === "dragover") {
        dropArea.classList.add("dragover");
      } else {
        dropArea.classList.remove("dragover");
      }
    });
  });

  // Click on drop area opens file input
  dropArea.addEventListener("click", () => fileInput.click());

  // Handle file input change
  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      previewVideo(fileInput.files[0]);
    }
  });

  // Handle file dropped
  dropArea.addEventListener("drop", e => {
    const file = e.dataTransfer.files[0];
    if (file) {
      previewVideo(file);
    }
  });

  function previewVideo(file) {
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      videoPreview.src = url;
      videoPreview.style.display = "block";
    }
  }
}
