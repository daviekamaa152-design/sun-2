document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("bookWithUsBtn");
  const bookingPopup = document.getElementById("bookingPopup");
  const closePopup = document.getElementById("closeBooking");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // === SHOW POPUP ===
  if (bookBtn && bookingPopup) {
    bookBtn.addEventListener("click", (e) => {
      e.preventDefault();
      bookingPopup.style.display = "flex";
      setTimeout(() => bookingPopup.classList.add("active"), 10);
      document.body.style.overflow = "hidden";
    });
  }

  // === CLOSE POPUP ===
  if (closePopup) {
    closePopup.addEventListener("click", () => {
      bookingPopup.classList.remove("active");
      setTimeout(() => {
        bookingPopup.style.display = "none";
        document.body.style.overflow = "auto";
      }, 300);
    });
  }

  // === TAB SWITCH ===
  if (tabBtns && tabContents) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabContents.forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(target).classList.add("active");
      });
    });
  }

  // === ESC or OUTSIDE CLICK CLOSE ===
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && bookingPopup.classList.contains("active")) {
      closePopup.click();
    }
  });

  if (bookingPopup) {
    bookingPopup.addEventListener("click", (e) => {
      if (e.target === bookingPopup) closePopup.click();
    });
  }

  // === PORTFOLIO VIDEO POPUP ===
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const videoPopup = document.getElementById("videoPopup");
  const closeVideoPopup = document.getElementById("closeVideoPopup");
  const portfolioVideo = document.getElementById("portfolioVideo");

  if (portfolioItems && videoPopup && portfolioVideo) {
    portfolioItems.forEach((item) => {
      item.addEventListener("click", () => {
        const videoSrc = item.getAttribute("data-video");
        if (videoSrc) {
          portfolioVideo.querySelector("source").src = videoSrc;
          portfolioVideo.load();
          videoPopup.style.display = "flex";
          document.body.style.overflow = "hidden";
          portfolioVideo.play();
        }
      });
    });
  }

  if (closeVideoPopup) {
    closeVideoPopup.addEventListener("click", () => {
      videoPopup.style.display = "none";
      document.body.style.overflow = "auto";
      portfolioVideo.pause();
    });
  }

  if (videoPopup) {
    videoPopup.addEventListener("click", (e) => {
      if (e.target === videoPopup) {
        videoPopup.style.display = "none";
        document.body.style.overflow = "auto";
        portfolioVideo.pause();
      }
    });
  }

  // === RESIZE FIX FOR MOBILE ===
  window.addEventListener("resize", () => {
    // When resizing back to desktop, ensure body scroll is re-enabled
    if (window.innerWidth > 1024) {
      document.body.style.overflow = "auto";
    }
  });
});
