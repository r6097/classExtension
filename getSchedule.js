// Get todays schedule on load
var d = new Date(),
    month = '-' + (d.getMonth() + 1),
    day = '-' + (d.getDate()),
    tomorrow = '-' + (d.getDate() + 1),
    year = d.getFullYear();
// Formatting for inputs
if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;
var todayDate = year + month + day + 'T10:00:00-00:00';
var nextDate = year + month + tomorrow + 'T10:00:00-00:00';

// Utilize the FormatGoogleCalendar Script
// Source = https://github.com/MilanLund/FormatGoogleCalendar
formatGoogleCalendar.init({
    calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/rbtau@ucdavis.edu/events?key=AIzaSyBUWzapZhq9rAxU4PK1OWd54gFiMvnUbKA',
    past: false,
    upcoming: true,
    sameDayTimes: true,
    dayNames: false,
    pastTopN: -1,
    upcomingTopN: 3,
    recurringEvents: true, 
    maxResults: 1,
    itemsTagName: 'li',
    upcomingSelector: '#events-upcoming',
    pastSelector: '#events-past',
    upcomingHeading: '',
    pastHeading: '',
    format: ['*summary*','in','*minutes*'],
    timeMin: todayDate,
    timeMax: nextDate
});
