document.addEventListener("DOMContentLoaded", () => {
  const img1 = document.getElementById("img1");

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => {
      toggleFullScreen(img);
      console.log("Clicked!");
    });
  });
});

function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    element.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
