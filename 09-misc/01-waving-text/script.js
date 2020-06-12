/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let letterContainer = document.getElementById("target");
    let letters = letterContainer.innerText;
    letters = letters.split("");
    letterContainer.innerText = "";
    let offset = 0;
    let size = 10;
  
    letters.map((letter, i)=>{
        if(offset<5) {
            offset += 1;
            size += 4;
            document.getElementById('target').innerHTML += `<span style= "font-size: ${size}px;">${letter}</span>`
        } else {
            offset -= 1;
            size -= 4;
            document.getElementById('target').innerHTML += `<span style= "font-size: ${size}px;">${letter}</span>`
        }
    });
        
})();
