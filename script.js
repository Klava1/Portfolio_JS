let text = `I'm a web developer who loves turning ideas into reality with code. My tools are HTML, CSS, JavaScript, and a
bit of GSAP magic to make things on the web look cool and interactive. What gets me really excited isn't just
writing code, but the stories we can tell and the experiences we can create through our designs. But it's not
all about the code for me. I truly believe that we do our best work when we do it together. I love being part
of a team, where we can share ideas, help each other out, and face challenges as one. I'm always ready to
pitch in, share a good laugh, and work hard to get things done. I'm passionate about blending my coding skills
with my love for teamwork and deep dives into research. With a keen interest in web design and user
experience, my curiosity drives me to continuously learn and innovate. I'm eager to join a creative,
forward-thinking team where we can challenge the norm and craft beautiful, impactful web experiences. If my
approach to creating meaningful digital spaces resonates with you, I'd be thrilled to connect. You can find my
CV and contact details on my website for more information.`;

let i = 0;
let speed = 10;
let targetDiv = document.querySelector(".text");

function type() {
  if (i < text.length) {
    targetDiv.textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

type();

gsap.from(".logo", { opacity: 0, duration: 1, scaleX: 0, scaleY: 0 });

gsap.from(".nav-item", {
  opacity: 0,
  x: -1000,
  duration: 1,
  stagger: {
    each: 0.4,
    from: "left",
    grid: "auto",
    ease: "power2.inOut",
  },
});

gsap.from(".my_img", { opacity: 0, duration: 1, scaleX: 0, scaleY: 0 });

let containers = document.querySelectorAll(".stack_item");

containers.forEach((container) => {
  let tl = gsap.timeline({ paused: true, reversed: true }).to(container, 1, { rotation: 360 });

  container.addEventListener("click", function () {
    tl.reversed() ? tl.play() : tl.reverse();
  });
});

gsap.from(".stack_item", {
  duration: 4,
  ease: "elastic.inOut",
  x: -2000,
});

document.addEventListener("DOMContentLoaded", function () {
  let containers = document.querySelectorAll("h2");
  containers.forEach((container) => {
    let tl = gsap.timeline({ paused: true, reversed: true }).to(container, 1, { scale: 1.1, duration: 1.5 });

    container.addEventListener("mouseover", function () {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  });

  function addAnimation(element, properties) {
    let tl = gsap.timeline({ paused: true, reversed: true }).to(element, properties);

    element.addEventListener("mouseover", function () {
      tl.play();
    });

    element.addEventListener("mouseout", function () {
      tl.reverse();
    });
  }

  let cvContainer = document.getElementById("cv_container");
  addAnimation(cvContainer, { scale: 1.05, duration: 1 });

  let contactsForm = document.getElementById("contacts_form");
  addAnimation(contactsForm, { scale: 1.05, duration: 1 });
});
