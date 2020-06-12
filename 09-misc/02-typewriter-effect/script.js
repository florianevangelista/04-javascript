/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    function printLetterByLetter(destination, message, speed){
        var i = 0;
        var interval = setInterval(function(){
            document.getElementById(destination).innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(interval);
            }
        }, speed);
    }
    
    printLetterByLetter("target", 'Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dansles films noirs. Sauf que... je ne sais pas qui est L\'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !', 100);
})();
