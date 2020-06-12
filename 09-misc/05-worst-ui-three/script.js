/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
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

    document.getElementById("target").innerHTML = '<span id="zero">0</span>';
    document.getElementById("target").innerHTML += `<span id="one">460</span>`;
    document.getElementById("target").innerHTML += `<span id="two">00</span>`;
    document.getElementById("target").innerHTML += `<span id="three">00</span>`;
    document.getElementById("target").innerHTML += `<span id="four">00</span>`;

    // Part one :

    let count1 = parseInt(min1);
    let count2 = parseInt(min2);
    let count3 = parseInt(min2);
    let count4 = parseInt(min2);

    setInterval(()=>{
        if(count1 >= max1) {
            count1 = parseInt(min1);
        } else {
            count1 += 1
        }
        document.getElementById("part-one").value = count1;
    }, 300);

    document.getElementById("fix-part-one").addEventListener("click", ()=>{
        let val = document.getElementById("part-one").value;
        document.getElementById("one").innerText = val;
    });

    // Part two :

    setInterval(()=>{
        if(count2 >= max2) {
            count2 = parseInt(min2);
        } else {
            count2 += 1
        }
        document.getElementById("part-two").value = count2;
    }, 300);

    document.getElementById("fix-part-two").addEventListener("click", ()=>{
        let val = document.getElementById("part-two").value;
        if(val <= 8) {
            document.getElementById("two").innerText = "0" + val;
        } else {
            document.getElementById("two").innerText = val;
        }
    });

    // Part three :

    setInterval(()=>{
        if(count3 >= max2) {
            count3 = parseInt(min2);
        } else {
            count3 += 1
        }
        document.getElementById("part-three").value = count3;
    }, 300);

    document.getElementById("fix-part-three").addEventListener("click", ()=>{
        let val = document.getElementById("part-three").value;
        if(val <= 8) {
            document.getElementById("three").innerText = "0" + val;
        } else {
            document.getElementById("three").innerText = val;
        }
    });

    // Part four :

    setInterval(()=>{
        if(count4 >= max2) {
            count4 = parseInt(min2);
        } else {
            count4 += 1
        }
        document.getElementById("part-four").value = count4;
    }, 300);

    document.getElementById("fix-part-four").addEventListener("click", ()=>{
        let val = document.getElementById("part-four").value;
        if(val <= 8) {
            document.getElementById("four").innerText = "0" + val;
        } else {
            document.getElementById("four").innerText = val;
        }
    });

})();
