/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    function numberOfFridaythe13thsIn(y) {
        var count = 0;
        for (var month=0; month<12; month++) {
            var d = new Date(y,month,13);
            if(d.getDay() == 5){
            count++;
            alert("there is a friday 13 in " + monthNames[month]);
        }
        }
        return count;                            
    }

    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById("year").value;

        numberOfFridaythe13thsIn(year);

    });

})();
