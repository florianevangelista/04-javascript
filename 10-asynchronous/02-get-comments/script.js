/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const callbackFunc = (err, tab) => {
        if (err != null) {
            console.log("error");
        } else {
            tab.forEach(tabI => {
                window.lib.getComments(tabI.id, (errCom,comArr) => {
                   if (errCom =! null) {
                       console.log("error comments")
                   } else {
                    tabI.comments = comArr;
                   }
                });
            });
        };
        console.table(tab);
    };

    document.getElementById('run').addEventListener("click",() => {
       window.lib.getPosts(callbackFunc);
    });
})();
