/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let today = new Date();
    let hours = today.getHours();
    let minutes = (today.getMinutes()<10?'0':'') + today.getMinutes();
    let year = today.getFullYear();
    let date = today.getDate();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = today.getDay();
    var dayName = days[d];
    let month = today.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let monthName = monthNames[month];
    
    document.getElementById("target").innerHTML = dayName + " " + date + " " + monthName + " " + year + " ," + " " + hours + "h" + minutes;

})();
