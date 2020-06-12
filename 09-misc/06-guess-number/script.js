/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    window.onload = ()=>{

        let res = Math.floor(Math.random() * 100) + 1;
        let answer = prompt("Choose a number between 1 and 100");
        let life = 0;

        while(res !== parseInt(answer)) {
            life++;
            if (parseInt(answer) > res) {
                answer = prompt("Lower");
            } else if (parseInt(answer) < res) {
                answer = prompt("Higher");
            }
        }

        if(parseInt(answer) == res) {
            alert("That's it! you needed " + life + " guesses");
        }

    }   
})();
