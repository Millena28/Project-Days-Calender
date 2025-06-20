// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting, specificDayOfMonth } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const monthDropdown = document.getElementById('month-select');
const displayDate = document.getElementById('display-date');
const showCalender = document.getElementById('show-calender');
const yearInput = document.getElementById('year-input');

const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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

    const selectedMonthName = monthDropdown.value;
    const selectedMonth = monthsOfTheYear.indexOf(selectedMonthName);
    const selectedYear = parseInt(yearInput.value) || date.getFullYear();

    if (selectedMonth === -1) return; // No valid month selected

    date.setFullYear(selectedYear, selectedMonth);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const numberOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const monthInWords = date.toLocaleString('en-us', { month: 'long' });
    const formattedDay = firstDay.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    let dayIndex = firstDay.getDay(); // 0 (Sun) ... 6 (Sat)
    dayIndex = (dayIndex + 6) % 7;    // Shift so Monday = 0, Sunday = 6
    const gapToLeave = dayIndex;
    displayDate.innerHTML = `${monthInWords}, ${selectedYear}`;

    showCalender.innerHTML = '';

    for (let i = 1; i <= gapToLeave + numberOfDays; i++) {
        const day = document.createElement('div');
        day.classList.add('day');

        if (i > gapToLeave) {
            let actualDay = i - gapToLeave;
            day.innerText = actualDay;

            const dayDate = new Date(selectedYear, selectedMonth, actualDay);
            const dayName = weekdays[dayDate.getDay()];

            const event = daysData.find(event => {
                const eventDate = specificDayOfMonth(selectedYear, event.monthName, event.dayName, event.occurrence);
                return eventDate && eventDate.getDate() === actualDay && eventDate.getMonth() === selectedMonth;
            });

            if (event) {
                console.log(`Match found: ${event.name}`);
                day.classList.add('commemorative-day');
                day.title = event.name;
                day.innerHTML += `<br><small><i>${event.name}</i></small>`;
            }
        }

        showCalender.appendChild(day);
    }
};

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let currentMonthIndex = monthsOfTheYear.indexOf(monthDropdown.value);
    let currentYear = parseInt(yearInput.value) || new Date().getFullYear();

    if (currentMonthIndex === -1) currentMonthIndex = new Date().getMonth(); // fallback

    if (currentMonthIndex === 0) {
        currentMonthIndex = 11;
        currentYear--;
    } else {
        currentMonthIndex--;
    }

    monthDropdown.value = monthsOfTheYear[currentMonthIndex];
    yearInput.value = currentYear;

    displayCalender();
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let currentMonthIndex = monthsOfTheYear.indexOf(monthDropdown.value);
    let currentYear = parseInt(yearInput.value) || new Date().getFullYear();

    if (currentMonthIndex === -1) currentMonthIndex = new Date().getMonth(); // fallback

    if (currentMonthIndex === 11) {
        currentMonthIndex = 0;
        currentYear++;
    } else {
        currentMonthIndex++;
    }

    monthDropdown.value = monthsOfTheYear[currentMonthIndex];
    yearInput.value = currentYear;

    displayCalender();
});


monthDropdown.addEventListener('change', displayCalender);

yearInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, '');
});
yearInput.addEventListener('change', displayCalender);
yearInput.addEventListener('blur', displayCalender);
yearInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        displayCalender();
    }
});


window.onload = function() {
    populateMonthDropdown();
    displayCalender();
}
