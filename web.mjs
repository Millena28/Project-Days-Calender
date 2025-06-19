// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };


let currentDate = new Date();

document.addEventListener("DOMContentLoaded", () => {
  initControls();
  renderCalendar(currentDate);
});

function initControls() {
  // Previous/Next buttons
  document.getElementById("prev-btn")
    .addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });

    document.getElementById("next-btn")
    .addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });
     // Month/Year selector + Go button
  const monthEl = document.getElementById("month");
  ["January","February","March","April","May","June","July","August","September","October","November","December"]
    .forEach((name, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = name;
      monthEl.appendChild(opt);
    });


    document.getElementById("submit")
    .addEventListener("click", () => {
      const m = parseInt(monthEl.value, 10);
      const y = parseInt(document.getElementById("year").value, 10);
      if (!isNaN(m) && !isNaN(y)) {
        currentDate = new Date(y, m, 1);
        renderCalendar(currentDate);
      }
    });
}
