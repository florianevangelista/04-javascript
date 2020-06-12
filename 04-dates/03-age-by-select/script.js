/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", ()=>{

    let bdDay = document.getElementById("dob-day").value;
    let bdMonth = document.getElementById("dob-month").value;
    let bdYear = document.getElementById("dob-year").value;

    var DOB = bdMonth + " " + bdDay + ", " + bdYear;
    var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
    var millisecondsBetweenNowAnd1970 = Date.now();
    var ageInMilliseconds = millisecondsBetweenNowAnd1970-millisecondsBetweenDOBAnd1970;

    var milliseconds = ageInMilliseconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var year = day*365;

    var years = Math.round(milliseconds/year);

    alert("you are " + years + " years old")

    });

})();
