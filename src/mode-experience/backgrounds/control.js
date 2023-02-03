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
    cbg3.classList.add("transition1a");
    cbg2.classList.add("transition1b");
    cbg1.classList.add("transition1c");
    cbg0.classList.add("transition1d");
});

bb.addEventListener("click", (_e) => {
  cbg3.classList.add("innactive_0");

  cbg3.classList.remove("transition1a");
  cbg2.classList.remove("transition1b");
  cbg1.classList.remove("transition1c");
  cbg0.classList.remove("transition1d");

  cbg3.classList.remove("city_background-3");
  cbg2.classList.remove("city_background-2");
  cbg1.classList.remove("city_background-1");
  cbg0.classList.remove("city_background-0");

  cbg2.classList.add("city_background-3");
  cbg1.classList.add("city_background-2");
  cbg0.classList.add("city_background-1");

  cbg2.classList.add("transition1a");
  cbg1.classList.add("transition1b");
  cbg0.classList.add("transition1c");
});

bc.addEventListener("click", (_e) => {
  cbg2.classList.add("innactive_0");

  cbg2.classList.remove("transition1a");
  cbg1.classList.remove("transition1b");
  cbg0.classList.remove("transition1c");

  cbg2.classList.remove("city_background-3");
  cbg1.classList.remove("city_background-2");
  cbg0.classList.remove("city_background-1");

  cbg1.classList.add("city_background-3");
  cbg0.classList.add("city_background-2");

  cbg1.classList.add("transition1a");
  cbg0.classList.add("transition1b");
});
