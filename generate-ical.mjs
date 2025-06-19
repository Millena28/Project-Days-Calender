import fs from "fs";
import daysData from "./days.json" with { type: "json" };
import { specificDayOfMonth } from "./common.mjs";

/**
 * Format a Date object into a local iCal DATE value (YYYYMMDD).
 * Avoids toISOString UTC shift.
 */
function formatDateToDateValue(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}`;
}

// * Generate a single VEVENT block for the given year and event definition.

function generateEvent(year, event) {
  const eventDate = specificDayOfMonth(
    year,
    event.monthName,
    event.dayName,
    event.occurrence ?? 1
  );

  if (!eventDate) {
    console.warn(`Skipping invalid event "${event.name}" for ${year}`);
    return '';
  }

  const dateValue = formatDateToDateValue(eventDate);
  const dtstampValue = formatDateToDateValue(new Date());

  return [
    'BEGIN:VEVENT',
    `DTSTAMP:${dtstampValue}T000000Z`,
    `DTSTART;VALUE=DATE:${dateValue}`,
    `SUMMARY:${event.name}`,
    'END:VEVENT',
    ''
  ].join('\r\n');
}

 // Generate the full VCALENDAR block from 2020 to 2030.

function generateCalendar() {
  const header = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//My Calendar//EN',
    ''
  ];

  const events = [];
  for (let year = 2020; year <= 2030; year++) {
    for (const event of daysData) {
      const vevent = generateEvent(year, event);
      if (vevent) events.push(vevent);
    }
  }

  const footer = ['END:VCALENDAR', ''];

  return [...header, ...events, ...footer].join('\r\n');
}

// Write to file
const icsContent = generateCalendar();
fs.writeFileSync('days.ics', icsContent, 'utf-8');
console.log(`✅ days.ics generated with ${daysData.length * (2030 - 2020 + 1)} entries`);
