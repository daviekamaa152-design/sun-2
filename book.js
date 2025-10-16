document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("bookWithUsBtn");
  const bookingPopup = document.getElementById("bookingPopup");
  const closePopup = document.getElementById("closeBooking");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // --- SHOW POPUP ---
  bookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    bookingPopup.classList.add("active");
    setTimeout(() => bookingPopup.classList.add("visible"), 10);
    document.body.style.overflow = "hidden";
  });

  // --- CLOSE POPUP ---
  closePopup.addEventListener("click", () => {
    bookingPopup.classList.remove("visible");
    setTimeout(() => {
      bookingPopup.classList.remove("active");
      document.body.style.overflow = "auto";
    }, 300);
  });

  // --- TAB SWITCH ---
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // --- ESC or OUTSIDE CLICK CLOSE ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && bookingPopup.classList.contains("active")) {
      closePopup.click();
    }
  });

  bookingPopup.addEventListener("click", (e) => {
    if (e.target === bookingPopup) closePopup.click();
  });
});
// === PORTFOLIO VIDEO POPUP ===
const portfolioItems = document.querySelectorAll(".portfolio-item");
const videoPopup = document.getElementById("videoPopup");
const closeVideoPopup = document.getElementById("closeVideoPopup");
const portfolioVideo = document.getElementById("portfolioVideo");

portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    const videoSrc = item.getAttribute("data-video");
    if (videoSrc) {
      portfolioVideo.querySelector("source").src = videoSrc;
      portfolioVideo.load();
      videoPopup.classList.add("active");
      document.body.style.overflow = "hidden";
      portfolioVideo.play();
    }
  });
});

closeVideoPopup.addEventListener("click", () => {
  videoPopup.classList.remove("active");
  document.body.style.overflow = "auto";
  portfolioVideo.pause();
});

videoPopup.addEventListener("click", (e) => {
  if (e.target === videoPopup) {
    videoPopup.classList.remove("active");
    document.body.style.overflow = "auto";
    portfolioVideo.pause();
  }
});

