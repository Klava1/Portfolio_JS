gsap.from("li", {
  x: -100,
  delay: 1,
  duration: 3,
  stagger: 0.5,
  ease: "elastic.out",
  opacity: 0.1,
});

gsap.from("h1", { opacity: 0, duration: 4, ease: "slow" });

gsap.from("#description", {
  y: -1000,
  duration: 5,
  ease: "elastic.out",
  opacity: 0.1,
});

gsap.from("#container_pic_1", {
  y: 1000,
  duration: 5,
  ease: "elastic.out",
  opacity: 0.1,
});

let container = document.querySelector("#logo");

let tl = new TimelineMax({ paused: true, reversed: true });
let tl1 = new TimelineMax({ paused: true, reversed: true });
let tl2 = new TimelineMax({ paused: true, reversed: true });

tl.to(container, 1, { rotation: 360 });

container.addEventListener("click", animate);

function animate() {
  tl.reversed() ? tl.play() : tl.reverse();
}

gsap.from("#pic_menu", {
  duration: 8,
  ease: "power1.inOut",
  x: -100,
});

let container_chef = document.querySelector("#pic_chef");

tl1.to(container_chef, 1, { scale: 0.9, duration: 1.5 });

container_chef.addEventListener("click", animate_chef);

function animate_chef() {
  tl1.reversed() ? tl1.play() : tl1.reverse();
}

let container_contacts = document.querySelector("h3");

tl2.to(container_contacts, 1, { rotation: 1800 });

container_contacts.addEventListener("mouseout", animate_contacts);

function animate_contacts() {
  tl2.reversed() ? tl2.play() : tl2.reverse();
}

