/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.getElementById("target");
    let tbl  = document.createElement('table');

    for(var i = 0; i < 10; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 1; j++){
            var td = tr.insertCell();
            td.appendChild(document.createTextNode('Cell'));
        }
    }
    target.appendChild(tbl);
})();
