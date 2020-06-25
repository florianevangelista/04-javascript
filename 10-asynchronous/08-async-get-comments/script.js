/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const myFunc = async () =>  {
        let post = await window.lib.getPosts();
        for(let i = 0; i <post.length; i++){
            post[i].comments = await window.lib.getComments(post[i].id);
        }
        console.table(post);
    }


    document.getElementById("run").addEventListener("click", ()=>{
        myFunc();
    });
})();
