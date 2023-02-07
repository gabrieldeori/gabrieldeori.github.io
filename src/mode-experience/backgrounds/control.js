const experienceFrame = document.getElementsByClassName("experience_frame")[0];

const  BG_WALK_TIME = 3000;

const ba = document.getElementById("ba");
const bb = document.getElementById("bb");
const bc = document.getElementById("bc");
const bd = document.getElementById("bd");

const cbg3 = document.getElementsByClassName("bg_layer-3")[0];
const cbg2 = document.getElementsByClassName("bg_layer-2")[0];
const cbg1 = document.getElementsByClassName("bg_layer-1")[0];
const cbg0 = document.getElementsByClassName("bg_layer-0")[0];

const backgroundFrame = document.getElementById("backgroundFrame");

const root = document.documentElement;
root.style.setProperty("--bg_walk_time", `${BG_WALK_TIME/1000}s`);

ba.addEventListener("click", (_e) => {
  cbg3.classList.add("transition_a3-off");
  cbg2.classList.add("transition_a2-3");
  cbg1.classList.add("transition_a1-2");
  cbg0.classList.add("transition_a0-1");
  setTimeout(() => {
    cbg3.className = "";
    cbg2.className = "";
    cbg1.className = "";
    cbg0.className = "";
    cbg3.classList.add("disabled");
    cbg2.classList.add("bg_layer-3");
    cbg1.classList.add("bg_layer-2");
    cbg0.classList.add("bg_layer-1");
  }, BG_WALK_TIME);
});

bb.addEventListener("click", (_e) => {
  cbg2.classList.add("transition_a2-off");
  cbg1.classList.add("transition_a2-3");
  cbg0.classList.add("transition_a1-2");
  setTimeout(() => {
    cbg2.className = "";
    cbg1.className = "";
    cbg0.className = "";
    cbg2.classList.add("disabled");
    cbg1.classList.add("bg_layer-3");
    cbg0.classList.add("bg_layer-2");
  }, BG_WALK_TIME);
});

bc.addEventListener("click", (_e) => {
  cbg1.classList.add("transition_a1-off");
  cbg0.classList.add("transition_a2-3");
  setTimeout(() => {
    cbg1.className = "";
    cbg0.className = "";
    cbg1.classList.add("disabled");
    cbg0.classList.add("bg_layer-3");
  }, BG_WALK_TIME);
});

bd.addEventListener("click", (_e)=> {
  cbg3.className = "";
  cbg2.className = "";
  cbg1.className = "";
  cbg0.className = "";
  cbg3.classList.add("bg_layer-3");
  cbg2.classList.add("bg_layer-2");
  cbg1.classList.add("bg_layer-1");
  cbg0.classList.add("bg_layer-0");
});

backgroundFrame.addEventListener("mousemove", (e) => {
  const abg3 = document.getElementsByClassName("bg_layer-3")[0];
  const abg2 = document.getElementsByClassName("bg_layer-2")[0];
  const abg1 = document.getElementsByClassName("bg_layer-1")[0];
  const abg0 = document.getElementsByClassName("bg_layer-0")[0];
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const translateX = e.clientX/winWidth;
  const translateY = e.clientY/winHeight;

  abg3.style.transform = `translate(${translateX * 4}%, ${translateY * 3}%)`
  abg2.style.transform = `translate(${translateX * 3}%, ${translateY * 2}%)`
  abg1.style.transform = `translate(${translateX * 2}%, ${translateY}%)`
  abg0.style.transform = `translate(${translateX}%, ${translateY / 4}%)`
});
