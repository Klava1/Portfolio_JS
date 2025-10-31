const image = document.querySelector("img");
const question = document.querySelector(".question");

let btnOne = document.querySelector(".btnOne");
let btnTwo = document.querySelector(".btnTwo");

btnOne.addEventListener("click", energetic);
btnTwo.addEventListener("click", tired);

function energetic() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/1edef799-0eb6-4d4d-847f-ec0d803235af/energized.jpg?v=1705769806103"
  );
  question.innerHTML = "WANT TO STAY IN OR TO GO OUT?";
  btnOne.innerHTML = "STAY HOME";
  btnTwo.innerHTML = "GO OUT";

  btnOne.addEventListener("click", energeticIn);
  btnTwo.addEventListener("click", energeticOut);
}

function energeticIn() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/1edef799-0eb6-4d4d-847f-ec0d803235af/gym.jpg?v=1705769818837"
  );
  question.innerHTML = "DO SOME EXERCISES";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function energeticOut() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/1edef799-0eb6-4d4d-847f-ec0d803235af/dinner.jpg?v=1705769816835"
  );
  question.innerHTML = "HAVE A DINNER WITH FRIENDS";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function tired() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/1edef799-0eb6-4d4d-847f-ec0d803235af/tired.jpg?v=1705769810190"
  );
  question.innerHTML = "PREFER TO STAY IN OR TO GO OUT?";
  btnOne.innerHTML = "STAY IN";
  btnTwo.innerHTML = "MAYBE GO OUT";
  btnOne.addEventListener("click", tiredIn);
  btnTwo.addEventListener("click", tiredOut);
}

function tiredIn() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/1edef799-0eb6-4d4d-847f-ec0d803235af/movie.jpg?v=1705769825453"
  );
  question.innerHTML = "WATCH A MOVIE";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function tiredOut() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/1edef799-0eb6-4d4d-847f-ec0d803235af/walk.jpg?v=1705769821122"
  );
  question.innerHTML = "GO FOR A WALK";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

gsap.from(".header", { opacity: 0, y: 100, duration: 1 });
gsap.from(".imageContainer", {
  opacity: 0,
  y: 100,
  duration: 1,
  scaleX: 0,
  scaleY: 0,
});
gsap.from(".question", { opacity: 0, y: 100, duration: 1 });
gsap.from(".btnOne", { opacity: 0, y: 100, duration: 1, rotation: 720 });
gsap.from(".btnTwo", { opacity: 0, y: 100, duration: 1, rotation: 720 });

