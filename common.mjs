// This is a placeholder file which shows how you can define functions which can be used from both a browser script and a node script. You can delete the contents of the file once you have understood how it works.

export function getGreeting() {
    return "Hello";
}

export const getMonthIndex = (monthName) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months.indexOf(monthName);
};

export const getDayIndex = (dayName) => {
    const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayIndex.indexOf(dayName);
}

export const getOccurrenceNumber = (occurrence) => {
    const map = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };
    return map[occurrence] ?? null;
}

export const getFirstWeekdayOfMonth = (year, monthIndex, dayIndex) => {
    for ( let day = 1; day <= 7; day++ ) {
        const date = new Date(year, monthIndex, day);

        if (date.getDay() === dayIndex ) return date;
    }
    return null;
}

export const getLastWeekdayOfMonth = (year, monthIndex, dayIndex) => {
    for (let day = 31; day >= 1; day--) {
        const date = new Date(year, monthIndex, day);
        if (date.getMonth() !== monthIndex) break;
        if (date.getDay() === dayIndex) return date;
    }

    return null;
}

export const specificDayOfMonth = (year, monthName, dayName, occurrence) => {
    const monthIndex = getMonthIndex(monthName);
    const dayIndex = getDayIndex(dayName);

    if (monthIndex === null || dayIndex === -1) return null;

    if (occurrence === 'last') {
        return getLastWeekdayOfMonth(year, monthIndex, dayIndex);
    }

    const occurrenceNum = getOccurrenceNumber(occurrence);
    if (!occurrenceNum) return null;

    const firstDate = getFirstWeekdayOfMonth(year, monthIndex, dayIndex);
    if (!firstDate) return null;

    const targetDate = new Date(firstDate);
    targetDate.setDate(firstDate.getDate() + (occurrenceNum - 1) * 7);

    // If the month overflows (for example, 5th Friday in Feb), return null;

    if(targetDate.getMonth() !== monthIndex) return null;
    
    return targetDate;
}
