/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", ()=>{
        let tab = [1,34,54,23,87,10,58,98,39,44];
        let sum = 0;

        tab.map((x)=>{
            let td = "n-"+(tab.indexOf(x)+1);
            document.getElementById(td).innerHTML = x;
            sum += x;
        });

        document.getElementById("min").innerHTML = Math.min.apply(null, tab);
        document.getElementById("max").innerHTML = Math.max.apply(null, tab);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum/(tab.length);
    });
})();
