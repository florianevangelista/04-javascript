/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let min1 = document.getElementById("part-one").getAttribute("data-min");
    let max1 = document.getElementById("part-one").getAttribute("data-max");
    let min2 = document.getElementById("part-two").getAttribute("data-min");
    let max2 = document.getElementById("part-two").getAttribute("data-max");
    let nbr1 = parseInt(min1);
    let nbr2 = parseInt(min2);
    let nbr3 = 0;
    let nbr4 = 0;

    document.getElementById("target").innerHTML = '<span id="zero">0</span>';
    document.getElementById("target").innerHTML += `<span id="one">460</span>`;
    document.getElementById("target").innerHTML += `<span id="two">00</span>`;
    document.getElementById("target").innerHTML += `<span id="three">00</span>`;
    document.getElementById("target").innerHTML += `<span id="four">00</span>`;

    document.getElementById("part-one").addEventListener("click", ()=>{
        if(nbr1 >= max1) {
            nbr1 = parseInt(min1)-1;
        }
        document.getElementById("one").innerText = nbr1 += 1;
    });

    document.getElementById("part-two").addEventListener("click", ()=>{
        if(nbr2 >= max2) {
            nbr2 = parseInt(min2)-1;
        }
        if(nbr2 <= 8) {
            document.getElementById("two").innerText = "0" + (nbr2 += 1);
        } else {
            document.getElementById("two").innerText = nbr2 += 1;
        }
    });

    document.getElementById("part-three").addEventListener("click", ()=>{
        if(nbr3 >= max2) {
            nbr3 = parseInt(min2)-1;
        }
        if(nbr3 <= 8) {
            document.getElementById("three").innerText = "0" + (nbr3 += 1);
        } else {
            document.getElementById("three").innerText = nbr3 += 1;
        }
    });

    document.getElementById("part-four").addEventListener("click", ()=>{
        if(nbr4 >= max2) {
            nbr4 = parseInt(min2)-1;
        }
        if(nbr4 <= 8) {
            document.getElementById("four").innerText = "0" + (nbr4 += 1);
        } else {
            document.getElementById("four").innerText = nbr4 += 1;
        }
    });
})();
