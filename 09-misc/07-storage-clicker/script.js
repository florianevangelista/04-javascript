/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let number = parseInt(localStorage.getItem("num"));
    document.getElementById("target").innerHTML = number;

    document.getElementById("increment").addEventListener("click", ()=>{
        number++;
        localStorage.setItem("num", number);
        document.getElementById("target").innerHTML = number;
    });


})();
