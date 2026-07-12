document.documentElement.classList.remove("no-js");

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const syncHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > window.innerHeight * 0.2);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

const imageFrames = document.querySelectorAll(".image-frame");

imageFrames.forEach((frame) => {
  const image = frame.querySelector("img");

  if (!image) {
    return;
  }

  const showPlaceholder = () => {
    frame.classList.add("is-missing");
  };

  if (image.complete && (!image.naturalWidth || image.naturalWidth === 0)) {
    showPlaceholder();
  } else {
    image.addEventListener("error", showPlaceholder, { once: true });
  }
});

const heroImage = document.querySelector(".image-frame-hero img");

if (heroImage) {
  const heroFrames = [
    "assets/images/frame28.png",
    "assets/images/frame29.png",
    "assets/images/frame30.png",
    "assets/images/frame31.png",
    "assets/images/frame32.png",
    "assets/images/frame33.png",
  ];
  let heroFrameIndex = 0;

  heroFrames.forEach((src) => {
    const preloadImage = new Image();
    preloadImage.src = src;
  });

  window.setInterval(() => {
    heroFrameIndex = (heroFrameIndex + 1) % heroFrames.length;
    heroImage.src = heroFrames[heroFrameIndex];
  }, 7500);
}

const detailImages = document.querySelectorAll(".detail-grid .image-frame img");

if (detailImages.length === 3) {
  const detailFrames = Array.from({ length: 28 }, (_, index) => `assets/images/${index + 1}.png`);
  let detailStartIndex = 0;

  const syncDetailImages = () => {
    detailImages.forEach((image, slotIndex) => {
      const frameNumber = ((detailStartIndex + slotIndex) % detailFrames.length) + 1;
      image.src = detailFrames[(detailStartIndex + slotIndex) % detailFrames.length];
      image.alt = `Architectural detail ${frameNumber}`;
      image.dataset.placeholder = `Detail ${frameNumber}`;
    });
  };

  detailFrames.forEach((src) => {
    const preloadImage = new Image();
    preloadImage.src = src;
  });

  syncDetailImages();

  window.setInterval(() => {
    detailStartIndex = (detailStartIndex + 1) % detailFrames.length;
    syncDetailImages();
  }, 3000);
}

const fadeItems = document.querySelectorAll(".fade-in");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  fadeItems.forEach((item) => item.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeItems.forEach((item) => observer.observe(item));
} else {
  fadeItems.forEach((item) => item.classList.add("is-visible"));
}
