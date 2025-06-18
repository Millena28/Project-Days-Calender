// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const monthDropdown = document.getElementById('month-select');
const displayDate = document.getElementById('display-date');
const showCalender = document.getElementById('show-calender');

const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const populateMonthDropdown = () => {
    const defaultMonth = document.createElement('option');
    defaultMonth.value = '';
    defaultMonth.textContent = "Select a month";

    monthDropdown.appendChild(defaultMonth);
    
    for ( const month of monthsOfTheYear ) {
        const monthOpt = document.createElement('option');
        monthOpt.value = month;
        monthOpt.textContent = month;

        monthDropdown.appendChild(monthOpt)

        monthOpt.addEventListener('change', () => {
            console.log(monthDropdown.value);
        });
    }

}

const displayCalender = () => {
    const date = new Date();
    const selectedMonth = selectedMonth.selected;
    const selectedYear = parseInt(selectedYear.value) || date.getFullYear();

    date.setFullYear(selectedYear, selectedMonth);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const numberOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const

}



window.onload = function() {
    populateMonthDropdown();
    // document.querySelector("body").innerText = `${getGreeting()} - there are ${daysData.length} known days`;
}
