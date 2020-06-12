/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("pass-one").addEventListener("input", ()=>{
        let input = document.getElementById("pass-one").value;
        let reg = /^(?=.*\d{2}).{8}$/;
        if(input.match(reg)){
            document.getElementById("validity").innerHTML = "ok";
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        }
    });
})();
