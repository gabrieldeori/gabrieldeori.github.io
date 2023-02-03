const experienceFrame = document.getElementsByClassName("experience_frame")[0];

const cbg3 = document.getElementsByClassName("city_background-3")[0];
const cbg2 = document.getElementsByClassName("city_background-2")[0];
const cbg1 = document.getElementsByClassName("city_background-1")[0];
const cbg0 = document.getElementsByClassName("city_background-0")[0];

const ba = document.getElementById("ba");
const bb = document.getElementById("bb");
const bc = document.getElementById("bc");
const bd = document.getElementById("bd");

ba.addEventListener("click", (_e) => {
    cbg3.classList.add("transition_1-0");
    cbg2.classList.add("transition_2-1");
    cbg1.classList.add("transition_3-2");
    cbg0.classList.add("transition_4-3");
});

bb.addEventListener("click", (_e) => {
  cbg3.classList.add("disable");

  cbg3.classList.remove("transition_1-0");
  cbg2.classList.remove("transition_2-1");
  cbg1.classList.remove("transition_3-2");
  cbg0.classList.remove("transition_4-3");

  cbg3.classList.remove("city_background-3");
  cbg2.classList.remove("city_background-2");
  cbg1.classList.remove("city_background-1");
  cbg0.classList.remove("city_background-0");

  cbg2.classList.add("city_background-3");
  cbg1.classList.add("city_background-2");
  cbg0.classList.add("city_background-1");

  cbg2.classList.add("transition_1-0");
  cbg1.classList.add("transition_2-1");
  cbg0.classList.add("transition_3-2");
});

bc.addEventListener("click", (_e) => {
  cbg2.classList.add("disable");

  cbg2.classList.remove("transition_1-0");
  cbg1.classList.remove("transition_2-1");
  cbg0.classList.remove("transition_3-2");

  cbg2.classList.remove("city_background-3");
  cbg1.classList.remove("city_background-2");
  cbg0.classList.remove("city_background-1");

  cbg1.classList.add("city_background-3");
  cbg0.classList.add("city_background-2");

  cbg1.classList.add("transition_1-0");
  cbg0.classList.add("transition_2-1");
});
