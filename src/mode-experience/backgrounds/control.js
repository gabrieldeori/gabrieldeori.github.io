const experienceFrame = document.getElementsByClassName("experience_frame")[0];

const cbg3 = document.getElementsByClassName("bg_layer-3")[0];
const cbg2 = document.getElementsByClassName("bg_layer-2")[0];
const cbg1 = document.getElementsByClassName("bg_layer-1")[0];
const cbg0 = document.getElementsByClassName("bg_layer-0")[0];

const ba = document.getElementById("ba");
const bb = document.getElementById("bb");
const bc = document.getElementById("bc");
const bd = document.getElementById("bd");

ba.addEventListener("click", (_e) => {
  cbg3.classList.add("transition_a3-off");
  cbg2.classList.add("transition_a2-3");
  cbg1.classList.add("transition_a1-2");
  cbg0.classList.add("transition_a0-1");
});

bb.addEventListener("click", (_e) => {
});

bc.addEventListener("click", (_e) => {
});
