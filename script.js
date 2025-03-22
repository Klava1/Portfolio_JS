document.addEventListener("DOMContentLoaded", function () {
  const targetDiv = document.querySelector(".text");
  if (targetDiv) {
    const text = targetDiv.getAttribute("data-content");
    if (text) {
      const linkText = `<a href="https://globalchic.club" target="_blank" style="color:#00ffc3; text-decoration: none;">GLOBAL CHIC CLUB.</a>`;
      const processedText = text.replace("GLOBAL CHIC CLUB.", "");

      let i = 0;
      const speed = 10;

      targetDiv.innerHTML = "";

      function type() {
        if (i < processedText.length) {
          targetDiv.innerHTML += processedText.charAt(i);
          i++;
          setTimeout(type, speed);
        } else if (i === processedText.length) {
          targetDiv.innerHTML += linkText;
        }
      }

      type();
    }
  }

  gsap.from(".logo", { opacity: 0, duration: 1, scaleX: 0, scaleY: 0 });
  gsap.from(".nav-item", {
    opacity: 0,
    x: -50,
    duration: 1,
    onStart: function () {
      console.log("Opacity + x animation started");
    },
  });
  gsap.from(".my_img", { opacity: 0, duration: 1, scaleX: 0, scaleY: 0 });
  gsap.from(".stack_item", {
    duration: 4,
    ease: "elastic.inOut",
    x: -2000,
  });

  const headings = document.querySelectorAll("h2");
  headings.forEach((heading) => {
    const tl = gsap
      .timeline({ paused: true, reversed: true })
      .to(heading, 1, { scale: 1.1, duration: 1.5 });

    heading.addEventListener("mouseover", function () {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  });

  const stackItems = document.querySelectorAll(".stack_item");
  stackItems.forEach((item) => {
    const tl = gsap
      .timeline({ paused: true, reversed: true })
      .to(item, 1, { rotation: 360 });

    item.addEventListener("click", function () {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  });

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

  const cvContainer = document.getElementById("cv_container");
  addAnimation(cvContainer, { scale: 1.05, duration: 1 });

  const contactsForm = document.getElementById("contacts_form");
  addAnimation(contactsForm, { scale: 1.05, duration: 1 });
});
