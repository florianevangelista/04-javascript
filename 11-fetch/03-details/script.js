/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async ()=> {
        try {
            let id = document.getElementById("hero-id").value;
            let response = await fetch("http://localhost:3000/heroes");
            let data = await response.json();
    
            document.getElementById("target").innerHTML = 
            `<li class="hero">
                <h4 class="title">
                    <strong class="name">${data[id].name}</strong>
                    <em class="alter-ego">${data[id].alterEgo}</em>
                </h4>
                <p class="powers">${data[id].abilities}</p>
            </li>` 
        } catch (err) {
            console.error(err);
        }
    })
})();
