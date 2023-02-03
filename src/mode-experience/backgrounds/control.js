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
  setTimeout(() => {
    cbg3.classList.replace("bg_layer-3", "disabled");
    cbg2.classList.replace("bg_layer-2", "bg_layer-3");
    cbg1.classList.replace("bg_layer-1", "bg_layer-2");
    cbg0.classList.replace("bg_layer-0", "bg_layer-1");
    cbg3.classList.remove("transition_a3-off");
    cbg2.classList.remove("transition_a2-3");
    cbg1.classList.remove("transition_a1-2");
    cbg0.classList.remove("transition_a0-1");
  }, 4000);
});

bb.addEventListener("click", (_e) => {
  cbg2.classList.add("transition_a2-off");
  cbg1.classList.add("transition_a2-3");
  cbg0.classList.add("transition_a1-2");
  setTimeout(() => {
    cbg2.classList.replace("bg_layer-3", "disabled");
    cbg1.classList.replace("bg_layer-2", "bg_layer-3");
    cbg0.classList.replace("bg_layer-1", "bg_layer-2");
    cbg2.classList.remove("transition_a2-off");
    cbg1.classList.remove("transition_a2-3");
    cbg0.classList.remove("transition_a1-2");
  }, 4000);
});

bc.addEventListener("click", (_e) => {
  cbg1.classList.add("transition_a1-off");
  cbg0.classList.add("transition_a2-3");
  setTimeout(() => {
    cbg1.classList.replace("bg_layer-3", "disabled");
    cbg0.classList.replace("bg_layer-2", "bg_layer-3");
    cbg1.classList.remove("transition_a1-off");
    cbg0.classList.remove("transition_a2-3");
  }, 4000);
});
