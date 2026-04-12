document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".sticky-head");

  function updateStickyState() {
    if (window.scrollY > 10) {
      header.classList.add("stuck");
    } else {
      header.classList.remove("stuck");
    }
  }

  updateStickyState();
  window.addEventListener("scroll", updateStickyState, { passive: true });
});
