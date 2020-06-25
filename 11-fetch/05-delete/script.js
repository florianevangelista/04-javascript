/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async ()=>{
        try {
            let response = await fetch("http://localhost:3000/heroes");
            let data = await response.json();
            let id = document.getElementById("hero-id").value;
    
            data.splice((id-1), 1);
            console.table(data);
        } catch (err) {
            console.error(err);
        }
       
    });
})();
