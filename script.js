document.addEventListener("DOMContentLoaded", function () {
  // Video play button functionality
  const playButton = document.getElementById("play_button");
  const portfolioVideo = document.getElementById("portfolio_video");
  const videoWrapper = document.querySelector(".video_wrapper");

  if (playButton && portfolioVideo && videoWrapper) {
    playButton.addEventListener("click", function () {
      if (portfolioVideo.paused) {
        portfolioVideo.play();
        videoWrapper.classList.add("playing");
        playButton.style.display = "none";
      }
    });

    portfolioVideo.addEventListener("pause", function () {
      videoWrapper.classList.remove("playing");
      playButton.style.display = "flex";
    });

    portfolioVideo.addEventListener("ended", function () {
      videoWrapper.classList.remove("playing");
      playButton.style.display = "flex";
    });
  }

  // GSAP Animations
  gsap.from(".logo", { opacity: 0, duration: 1, scaleX: 0, scaleY: 0 });

  // About section animations
  gsap.from(".video_overlay_content", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from(".about_text", {
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: 0.3,
    delay: 1,
    ease: "power2.out",
  });

  // Video section animations
  gsap.from(".video_container h2", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from(".video_wrapper", {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    delay: 0.8,
    ease: "power2.out",
  });

  gsap.from(".stack_item", {
    duration: 4,
    ease: "elastic.inOut",
    x: -2000,
  });

  // Heading hover animations
  const headings = document.querySelectorAll("h2");
  headings.forEach((heading) => {
    const tl = gsap
      .timeline({ paused: true, reversed: true })
      .to(heading, 1, { scale: 1.1, duration: 1.5 });

    heading.addEventListener("mouseover", function () {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  });

  // Stack item click animations
  const stackItems = document.querySelectorAll(".stack_item");
  stackItems.forEach((item) => {
    const tl = gsap
      .timeline({ paused: true, reversed: true })
      .to(item, 1, { rotation: 360 });

    item.addEventListener("click", function () {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  });

  // Helper function for hover animations
  function addAnimation(element, properties) {
    if (!element) return;

    const tl = gsap
      .timeline({ paused: true, reversed: true })
      .to(element, properties);

    element.addEventListener("mouseover", function () {
      tl.play();
    });

    element.addEventListener("mouseout", function () {
      tl.reverse();
    });
  }

  // CV and contact form animations
  const cvContainer = document.getElementById("cv_container");
  addAnimation(cvContainer, { scale: 1.05, duration: 1 });

  const contactsForm = document.getElementById("contacts_form");
  addAnimation(contactsForm, { scale: 1.05, duration: 1 });
});
