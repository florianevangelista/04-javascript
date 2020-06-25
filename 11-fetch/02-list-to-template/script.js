/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async () =>{
        try {
            let response = await fetch("http://localhost:3000/heroes");
            let data = await response.json();

            data.map(x => {
                document.getElementById("target").innerHTML += 
                    `<li class="hero">
                        <h4 class="title">
                            <strong class="name">${x.name}</strong>
                            <em class="alter-ego">${x.alterEgo}</em>
                        </h4>
                        <p class="powers">${x.abilities}</p>
                    </li>`
            });
        } catch(err) {
            console.error(err);
        }
    });
})();
