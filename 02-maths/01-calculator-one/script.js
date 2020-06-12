/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
 
window.onload = () => {
    (function() {
        let one = 0;
        let two = 0;
    
        // to get the value of an input: document.getElementById("element-id").value
        document.addEventListener("click", () => {
            one = document.getElementById("op-one").value;
            two = document.getElementById("op-two").value;
        });
    
    
        document.getElementById("addition").addEventListener("click", function() {
            // perform an addition
            alert(parseFloat(one)+parseFloat(two));
        });
    
        document.getElementById("substraction").addEventListener("click", function() {
            // perform an substraction
            alert(parseFloat(one)-parseFloat(two));
        });
    
        document.getElementById("multiplication").addEventListener("click", function() {
            // perform an multiplication
            alert(parseFloat(one)*parseFloat(two));
        });
    
        document.getElementById("division").addEventListener("click", function() {
            // perform an division
            alert(parseFloat((one)/parseFloat(two)));
        });
    })();
};


