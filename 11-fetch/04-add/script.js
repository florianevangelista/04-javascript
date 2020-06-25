/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        try {
            let response = await fetch("http://localhost:3000/heroes");
            let data = await response.json();
            
            let hero = {
                id : data.length + 1,
                name : document.getElementById("hero-name").value,
                alterEgo : document.getElementById("hero-alter-ego").value,
                abilities :  document.getElementById("hero-powers").value.split(",")
            }

            data.push(hero);
            console.table(data);
        } catch (err) {
            console.error(err);
        }
    });
})();
