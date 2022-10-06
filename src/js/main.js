import { fetchWork } from "./functions";

const selectList = document.querySelector("[data-type]");

const types = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "busywork"
];

// * Event handler for window object
window.onload = () => {
  // create type list
  types.forEach(type => {
    const option = document.createElement("option");
    option.setAttribute("value", type);
    option.textContent = type;

    selectList.appendChild(option);
  });

  // call fetchWork
  fetchWork();
};

// * Event handler for select field
selectList.addEventListener("input", function () {
  fetchWork(this.value);
});
